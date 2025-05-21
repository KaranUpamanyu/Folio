

export const code1 = `function useResilientSubscription(itemId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const unsubscribeRef = useRef(null);
  const timeoutRef = useRef(null);
  // attemptRef: 0 = initial sub, 1 = first query, 2 = retry sub, 3 = final query
  const attemptRef = useRef(0);
  const isMountedRef = useRef(true);

  const TIMEOUT_DURATION_MS = 30000;

  const cleanup = useCallback(() => {
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const processUpdate = useCallback((newData, source) => {
    if (!isMountedRef.current || !newData) {
      if (!newData) console.warn(\`No data received from \${source}\`);
      return false;
    }
    setData(newData);
    if (newData.status === 'completed') {
      setStatus('completed');
      setIsLoading(false);
      setError(null);
      cleanup();
      return true;
    }
    return false;
  }, [cleanup]);

  const handleError = useCallback((err, statusOverride) => {
    if (!isMountedRef.current) return;
    setError(err);
    setStatus(statusOverride);
    setIsLoading(false);
    console.error(\`Error during \${statusOverride}: \${err}\`);
    cleanup();
  }, [cleanup]);

  const executeQuery = useCallback(async (isSecondAttempt) => {
    if (!isMountedRef.current || !itemId) return;
    cleanup();
    const queryStatus = isSecondAttempt ? 'querying_second' : 'querying_first';
    setStatus(queryStatus);
    setIsLoading(true);
    setError(null);

    try {
      const response = await someQueryFunction(itemId);
      if (!isMountedRef.current) return;

      if (response.error) {
        handleError(response.error, queryStatus === 'querying_first' ? 'error' : 'timed_out');
        return;
      }

      const newData = response.data;
      if (!newData) {
        handleError(new Error('No data returned'), queryStatus === 'querying_first' ? 'error' : 'timed_out');
        return;
      }

      const isComplete = processUpdate(newData, 'query');
      if (isComplete) return;

      if (isSecondAttempt) {
        handleError(new Error('Timeout: Still in progress'), 'timed_out');
      } else {
        const lastUpdate = new Date(newData.updatedAt).getTime();
        if (Date.now() - lastUpdate < TIMEOUT_DURATION_MS) {
          attemptRef.current = 2;
          executeSubscription(true);
        } else {
          handleError(new Error('Data too old'), 'timed_out');
        }
      }
    } catch (err) {
      if (!isMountedRef.current) return;
      handleError(err, queryStatus === 'querying_first' ? 'error' : 'timed_out');
    }
  }, [itemId, cleanup, processUpdate, handleError]);

  const executeSubscription = useCallback((isRetry) => {
    if (!isMountedRef.current || !itemId) return;
    cleanup();
    const subStatus = isRetry ? 'retrying_subscription' : 'subscribing';
    setStatus(subStatus);
    setIsLoading(true);
    setError(null);

    const resetTimeout = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (!isMountedRef.current) return;
        if (unsubscribeRef.current) unsubscribeRef.current();
        attemptRef.current = isRetry ? 3 : 1;
        executeQuery(isRetry);
      }, TIMEOUT_DURATION_MS);
    };

    const unsubscribe = someSubscriptionFunction(itemId, (newData, err) => {
      if (!isMountedRef.current) return;
      resetTimeout();
      if (err) {
        attemptRef.current = isRetry ? 3 : 1;
        executeQuery(isRetry);
        return;
      }
      if (newData) processUpdate(newData, 'subscription');
    });

    unsubscribeRef.current = unsubscribe;
    resetTimeout();
  }, [itemId, cleanup, processUpdate, executeQuery]);

  useEffect(() => {
    isMountedRef.current = true;
    if (itemId) {
      cleanup();
      setData(null);
      setError(null);
      setIsLoading(false);
      setStatus('idle');
      attemptRef.current = 0;
      const timer = setTimeout(() => {
        if (isMountedRef.current) executeSubscription(false);
      }, 0);
      return () => clearTimeout(timer);
    }
    return () => {
      isMountedRef.current = false;
      cleanup();
    };
  }, [itemId, cleanup, executeSubscription]);

  return { data, loading: isLoading, error, status };
}`;

export const code1usage = `const { data, loading, error, status } = useResilientGenerativeTask(generativeTaskId);`;

export const code2 = `function useImperativeResilientSubscription() {
  const subscribe = (itemId, handlers) => {
    let unsubscribe = null;
    let timeoutId = null;
    // attempt: 0 = initial sub, 1 = first query, 2 = retry sub, 3 = final query
    let attempt = 0;
    let isMounted = true;

    const TIMEOUT_DURATION_MS = 30000;

    const cleanup = () => {
      if (unsubscribe) unsubscribe();
      unsubscribe = null;
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = null;
    };

    const updateStatus = (status) => {
      if (isMounted) handlers.onStatusChange?.(status);
    };

    const handleError = (err, status) => {
      if (!isMounted) return;
      handlers.onError?.(err, status);
      updateStatus(status);
      console.error(\`Error during \${status}: \${err}\`);
      cleanup();
    };

    const processUpdate = (newData, source) => {
      if (!isMounted || !newData) return false;
      handlers.onData?.(newData);
      if (newData.status === 'completed') {
        updateStatus('completed');
        handlers.onComplete?.(newData);
        cleanup();
        return true;
      }
      return false;
    };

    const executeQuery = async (isSecondAttempt) => {
      const status = isSecondAttempt ? 'querying_second' : 'querying_first';
      updateStatus(status);

      try {
        const response = await someQueryFunction(itemId);
        if (!isMounted) return;

        if (response.error) {
          handleError(response.error, isSecondAttempt ? 'timed_out' : 'error');
          return;
        }

        const newData = response.data;
        if (!newData) {
          handleError(new Error('No data'), isSecondAttempt ? 'timed_out' : 'error');
          return;
        }

        if (processUpdate(newData, 'query')) return;

        if (isSecondAttempt) {
          handleError(new Error('Timeout after final query'), 'timed_out');
        } else {
          const lastUpdate = new Date(newData.updatedAt).getTime();
          if (Date.now() - lastUpdate < TIMEOUT_DURATION_MS) {
            attempt = 2;
            executeSubscription(true);
          } else {
            handleError(new Error('Stale data'), 'timed_out');
          }
        }
      } catch (err) {
        handleError(err, isSecondAttempt ? 'timed_out' : 'error');
      }
    };

    const executeSubscription = (isRetry) => {
      const status = isRetry ? 'retrying_subscription' : 'subscribing';
      updateStatus(status);

      const resetTimeout = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (!isMounted) return;
          if (unsubscribe) unsubscribe();
          attempt = isRetry ? 3 : 1;
          executeQuery(isRetry);
        }, TIMEOUT_DURATION_MS);
      };

      unsubscribe = someSubscriptionFunction(itemId, (newData, err) => {
        if (!isMounted) return;
        resetTimeout();
        if (err) {
          attempt = isRetry ? 3 : 1;
          executeQuery(isRetry);
          return;
        }
        if (newData) processUpdate(newData, 'subscription');
      });

      resetTimeout();
    };

    executeSubscription(false);

    return () => {
      isMounted = false;
      cleanup();
    };
  };

  return { subscribe };
}`;

export const code2usage = `const { subscribe } = useImperativeResilientGenerativeTask();

const unsubscribe = subscribe(generativeTaskId, {
  onData: (task) => console.log('Task updated:', task),
  onError: (error, status) => console.error('Error:', error, status),
  onStatusChange: (status) => console.log('Status:', status),
  onComplete: (task) => console.log('Task completed:', task),
});

// Later, when you’re done:
unsubscribe();`;
