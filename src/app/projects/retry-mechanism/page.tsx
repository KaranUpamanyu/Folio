import React from "react";
import { Metadata } from "next";
import data from "@/data";
import PageHeader from "@/components/PageHeader";
import { code1, code1usage, code2, code2usage } from "./codeSample";
import CodeFence from "@/components/CodeFence";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Building a Robust Subscription Retry Mechanism | Karan Upamanyu",
  description:
    "Karan's approach to handling unreliable GraphQL subscriptions in a full-stack application",
};

const content = data.projects.retryMechanism;

export default function SubscriptionRetryMechanism() {
  return (
    <>
      <div className="max-w-prose mx-auto">
        <PageHeader title={content.title} type={content.type} subtitle={""} />
        {/* Main content */}
        <p>
          While building a fullstack course builder app powered by AI, I came
          across an interesting challenge that many real-time apps might face -
          unreliable subscriptions. In this post, I’ll share how I built a
          robust retry mechanism for GraphQL subscriptions using URQL in a
          Next.js frontend.
        </p>
        <br />
        <p>
          The solution is generic, reusable, and might save you hours if you’re
          trying to stream data reliably to your users.
        </p>
        <br />
        <h2 className="text-2xl">
          The Context: A Generative AI Course Builder
        </h2>
        <br />
        <p>
          An app I’m working on at Lyearn helps users create courses using AI.
          Users input some setup information, and the system uses AI to generate
          everything - title, description, outcomes, a structure of the course,
          lessons, and even assessments. There's a human in the loop during the
          content generation process to ensure quality and relevance.
        </p>
        <br />
        <Image
          alt="Course builder UI"
          src={
            "/images/blogs/retry-mechanism/course-builder-course-structure.png"
          }
          width={1000}
          height={600}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Course builder UI (course structure tab)
        </i>
        <br />
        <br />
        <p>
          When generating multiple lessons, we stream lesson content to the user
          using GraphQL subscriptions. This makes the experience fast and
          smooth. Users start seeing content as it's generated rather than
          waiting for everything to finish.
        </p>
        <br />
        <p>But... there was a catch.</p>
        <br />

        <h2 className="text-2xl">
          The Problem: Subscriptions That Silently Die
        </h2>
        <br />
        <p>
          Sometimes, the GraphQL subscription would just stop receiving data
        </p>
        <ul>
          <li>
            <p>Maybe the WebSocket connection failed</p>
          </li>
          <li>
            <p>Maybe the backend silently stopped sending updates</p>
          </li>
          <li>
            <p>
              Or maybe the frontend never got informed about a backend task that
              had already finished
            </p>
          </li>
        </ul>
        <br />
        <p>
          This is a big problem - especially when you’re building user-facing
          features that depend on real-time updates.
        </p>
        <br />
        <p>
          I started wondering: How reliable is a single subscription? And if
          it’s not, how do I make my app tough enough to handle these hiccups
          without leaving users hanging? That’s when I decided to build a retry
          mechanism—something reusable across all the AI-driven subscriptions in
          my frontend.
        </p>
        <br />
        <Image
          alt="Loading subscription"
          src={"/images/blogs/retry-mechanism/loading-subscription.png"}
          width={1000}
          height={600}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Loading subscription
        </i>
        <br />
        <br />
        <h2 className="text-2xl">My Approach: A Four-Phase Safety Net</h2>
        <br />
        <p>
          I came up with a step-by-step plan to catch failures and recover
          gracefully. Here’s how it works in simple terms:
        </p>
        <br />
        <ul className="list-decimal list-inside">
          <li>
            <p>
              <b>Phase 1: Start the Subscription</b>
            </p>
            <p>
              I kick off a normal subscription and set a 30-second timer. Every
              time new data streams in, I reset the timer. If 30 seconds pass
              with no data, something’s up, and I move to the next step.
            </p>
          </li>
          <br />
          <li>
            <p>
              <b>Phase 2: Check with a Query</b>
            </p>
            <p>
              I ask the backend, “Hey, what’s the status of this task?” In my
              setup, I can check the task’s progress with a query too, not just
              subscriptions, which is super convenient. If the task is done, I
              update the screen (or execute the provided callback) and call it a
              day. If it’s still going, I look at the last update time. If it’s
              older than 30 seconds, I assume the backend’s stuck, throw an
              error, and stop. But if it’s recent, the problem is likely on my
              end - maybe a dropped connection - so I try again.
            </p>
          </li>
          <br />
          <li>
            <p>
              <b>Phase 3: Retry the Subscription</b>
            </p>
            <p>
              I restart the subscription, set the 30-second timer again, and
              hope for the best. It’s like giving it a second chance to work
              properly.
            </p>
          </li>
          <br />
          <li>
            <p>
              <b>Phase 4: Final Check</b>
            </p>
            <p>
              If the retry fails too (no data in 30 seconds), I make one last
              query. If the task still isn’t done, I call it a timeout and let
              the user know something’s wrong.
            </p>
          </li>
        </ul>
        <br />
        <h2 className="text-2xl">Why This Matters</h2>
        <br />
        <p>
          Building this retry logic adds <i>robustness</i> to my app. In simple
          words, this means it can handle errors without crashing or confusing
          the user. Plus, once I got this working, I could use it anywhere in my
          app where subscriptions might flake out. It’s a one-time effort with
          big payoffs.
        </p>
        <br />
        <h2 className="text-2xl">The Code: Two Versions of the Solution</h2>
        <br />
        <p>
          I wrote two versions of this retry mechanism as React hooks, each
          helpful in different use cases.{" "}
          <b>
            I’ve tried to keep the code generic so it can fit anyone’s needs and
            is easy to understand.
          </b>{" "}
          Let’s break them down.
        </p>
        <br />
        <h3 className="text-lg">Version 1: The Generic Hook</h3>
        <br />
        <p>
          This one runs the retry logic automatically when you use it. It
          manages subscriptions with retry logic, timeouts, and state updates.
          It’s perfect for most cases where you just want the data to flow in
          without any extra trouble.
        </p>
        <br />
        <p>Here’s the code:</p>
        <br />
        <CodeFence code={code1} />
        {/* <pre className="text-sm max-height-[400px]">{code1}</pre> */}
        <br />
        <p>This is how you use it:</p>
        <br />
        <CodeFence code={code1usage} />
        <br />
        <p>
          The hook tracks the task’s data, whether it’s loading, any errors, and
          the current status (like “subscribing” or “timed_out”). Inside,{" "}
          <code>useEffect</code> starts the subscription when there’s a task ID,
          and the <code>executeSubscription</code> and <code>executeQuery</code>{" "}
          functions handle the retry logic I described. The 30-second timer is
          managed with <code>setTimeout</code>, and I use
          <code>useRef</code> to keep track of things like the active
          subscription so I can clean up properly.
        </p>
        <br />
        <h2 className="text-2xl">Version 2: The Imperative Hook</h2>
        <br />
        <p>
          Sometimes, React’s rules get in the way.{" "}
          <b>You can’t call hooks conditionally</b>, which can be a pain. So, I
          made an imperative version that gives you a function to call whenever
          you want.
        </p>
        <br />
        <p>Here’s that code:</p>
        <br />
        <CodeFence code={code2} />
        <br />
        <p>Using it looks like this:</p>
        <br />
        <CodeFence code={code2usage} />
        <br />
        <p>
          This version lets you control when the subscription starts by calling{" "}
          <code>subscribe</code> yourself. You pass in handlers to react to
          data, errors, status changes, or completion. It’s flexible and gets
          around React’s Rules of Hooks.
        </p>
        <br />
        <h2 className="text-2xl">Wrapping Up</h2>
        <br />
        <p>
          This retry mechanism has been a game-changer for my course builder.
          Lessons load reliably, and users don’t get stuck staring at a blank
          screen. What started as a quick fix ended up being a reusable pattern
          that I can now plug into any real-time feature powered by
          subscriptions.
        </p>
        <br />
        <Image
          alt="Fully loaded course editor"
          src={"/images/blogs/retry-mechanism/course-editor.png"}
          width={1000}
          height={600}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Fully loaded course editor
        </i>
        <br />
        <br />
        <p>
          If your app deals with generative content, streaming updates, or
          unreliable WebSocket connections, this approach might be exactly what
          you need.
        </p>
      </div>
    </>
  );
}
