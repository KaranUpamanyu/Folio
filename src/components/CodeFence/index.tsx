"use client";

import React, { useEffect, useState } from "react";
import { createHighlighter } from "shiki";

function CodeFence({
  code,
  lang = "typescript",
  theme = "one-dark-pro",
}: {
  code: string;
  lang?: string;
  theme?: string;
}) {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    let mounted = true;

    async function highlight() {
      const highlighter = await createHighlighter({
        themes: [theme],
        langs: [lang],
      });

      const html = highlighter.codeToHtml(code, { lang, theme });

      if (mounted) {
        setHighlightedCode(html);
      }
    }

    highlight();

    return () => {
      mounted = false;
    };
  }, [code, lang, theme]);

  return (
    <div
      className="shiki-code-block"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}

export default React.memo(CodeFence);
