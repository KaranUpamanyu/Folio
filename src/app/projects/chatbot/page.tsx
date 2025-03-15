import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import data from "@/data";
import PageHeader from "@/components/PageHeader";

const content = data.projects.chatbot;

export const metadata: Metadata = {
  title: "Chatbot | Karan Upamanyu",
  description: "Karan's experience building Lyearn's chatbot",
};

export default function Chatbot() {
  return (
    <>
      <div className="max-w-prose mx-auto">
        <PageHeader title={content.title} type={content.type} subtitle={""} />
        <p>
          As part of our AI adoption efforts, we decided to build a chatbot that
          could understand the data stored in any tenant's workspace. In simple
          terms, a tenant is a client of Lyearn, and each tenant can have
          multiple users and admins. A workspace is just a way to separate one
          tenant’s data from another. The chatbot needed to work with all types
          of Lyearn content, like courses, articles, and more. This chatbot
          would first be showcased at a major conference at Sprinklr, our
          largest client.
        </p>
        <br />
        <h2 className="text-2xl">A Last-Minute Crisis</h2>
        <br />
        <p>
          I wasn't originally part of the development team for this project. We
          had decided to reuse Lyearn’s existing “Community” infrastructure—kind
          of like Slack—to handle message storage and sharing. Everything seemed
          to be on track until, just two weeks before our deadline, I got a call
          about major bugs breaking the platform.
        </p>
        <br />
        <p>
          AI responses were randomly disappearing and reappearing. The chat
          window’s scroll position was unstable, making the experience
          frustrating. We started by fixing bugs as they came up, but the more
          we patched, the more new bugs appeared. Two problems stood out:
        </p>
        <ol>
          <li>
            <p>The chat window’s scroll position kept jumping unpredictably.</p>
          </li>
          <li>
            <p>
              There was a gap between when an AI-generated message was created
              and when it was registered in the system, during which the message
              would disappear from the screen.
            </p>
          </li>
        </ol>
        <br />
        <Image
          alt="a whole lot of nothing"
          src={"/images/blogs/chatbot/how-it-started.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          The initial look and feel of the chatbot
        </i>
        <br />
        <br />
        <h2 className="text-2xl">Understanding the Root Problem</h2>
        <br />
        <p>
          At first, I tried patching things up for two days, but we weren’t
          making real progress. So, I spent the weekend understanding the
          existing system design in depth. What I found was shocking—the chat
          was built on a messy architecture that wasn’t designed to handle AI
          responses well.
        </p>
        <br />
        <p>Here’s how things worked:</p>
        <ul>
          <li>
            <p>
              The chat window was treated as a messaging channel (like a Slack
              channel).
            </p>
          </li>
          <li>
            <p>
              When a user sent their first message, the system first created a
              new channel (<code>createChannel</code> API), then sent the
              message (<code>createPost</code> API).
            </p>
          </li>
          <li>
            <p>
              The message appeared on the screen only after the system processed
              these API calls, which caused a noticeable delay.
            </p>
          </li>
          <li>
            <p>
              The AI response was generated through a GraphQL subscription,
              which streamed the response in real-time.
            </p>
          </li>
          <li>
            <p>
              Once the streaming finished, we made another{" "}
              <code>createPost</code> API call, marking the sender as "AI."
            </p>
          </li>
          <li>
            <p>
              At this point, the AI response <b>disappeared</b> from the screen
              and then reappeared once the system refreshed the chat history 🤦‍♂️.
            </p>
          </li>
        </ul>
        <br />
        <p>
          This setup was built to reuse existing infrastructure, but it wasn’t
          designed for a smooth chatbot experience.
        </p>
        <br />
        <h2 className="text-2xl">Proposing a New Architecture</h2>
        <br />
        <p>
          I realized that if we restructured the frontend properly, most of
          these bugs would disappear on their own. I brought up the idea in a
          team meeting, and people were (suprisingly) open to it, despite being
          an additional, unplanned effort. It seemed like they had hesitated to
          bring it up since so much effort had already gone into the current
          setup. Once I suggested a new approach, others voiced their support,
          and I took the lead on re-architecting the frontend.
        </p>
        <br />
        <h2 className="text-2xl">The New Solution</h2>
        <br />
        <p>
          Before making it an AI chatbot, we needed to first build a solid chat
          application. Here’s what we changed:
        </p>
        <ol>
          <li>
            <p>
              <b>
                A new <code>ChatView</code> component:
              </b>{" "}
              This component would treat the application as a{" "}
              <b>messaging app</b> first and foremost, and all functional logic
              and integrations were extracted out of it. It received a{" "}
              <code>messageList</code> array to display, and each message was
              simplified to the minimum required data.
            </p>
          </li>
          <li>
            <p>
              <b>Message List as the Source of Truth:</b> Instead of relying on
              API calls to determine what appears on the screen, we created a{" "}
              <code>messageList</code> array in the frontend as the single
              source of truth. This ensured messages didn’t randomly disappear.
            </p>
          </li>
          <li>
            <p>
              <b>Immediate Message Display:</b>
            </p>
            <ul>
              <li>
                <p>
                  When a user sent a message, it was instantly added to{" "}
                  <code>messageList</code> and displayed.
                </p>
              </li>
              <li>
                <p>
                  The backend API call still happened, but the message wouldn’t
                  be removed while waiting for confirmation.
                </p>
              </li>
              <li>
                <p>
                  We generated a unique ID in the frontend (using a{" "}
                  <code>bson</code> package) and sent it to the backend, so when
                  the backend registered the message, we could match it with our
                  existing list instead of replacing everything.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <b>Fixing AI Response Handling:</b>
            </p>
            <ul>
              <li>
                <p>AI responses were still streamed in real-time.</p>
              </li>
              <li>
                <p>
                  Once the full response was generated, we pushed it directly
                  into <code>messageList</code>.
                </p>
              </li>
              <li>
                <p>Then, we made the createPost API call.</p>
              </li>
              <li>
                <p>
                  When the backend later returned the same AI message, we used
                  the ID to match and avoid replacing it unnecessarily.
                </p>
              </li>
            </ul>
          </li>
        </ol>
        <br />
        <Image
          alt="a whole lot of nothing"
          src={"/images/blogs/chatbot/fixed-ux.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Chatbot with fixed UX. We also made it larger.
        </i>
        <br />
        <br />
        <p>
          This approach made the frontend much{" "}
          <b>more stable, faster, and predictable</b>.
        </p>
        <br />
        <h2 className="text-2xl">The Results</h2>
        <br />
        <p>
          With this fix, most of our major bugs vanished instantly. We could now
          confidently <b>scale the chatbot</b>, and adding new features became
          much easier. Later, we introduced:
        </p>
        <ul>
          <li>
            <p>
              <b>Regenerating responses</b> (asking AI to try again).
            </p>
          </li>
          <li>
            <p>
              <b>A full-screen chat experience.</b>
            </p>
          </li>
          <li>
            <p>
              <b>Note-taking within the chat window.</b>
            </p>
          </li>
          <li>
            <p>
              <b>A "Save to Notes" button</b> for useful messages.
            </p>
          </li>
          <li>
            <p>
              <b>Displaying information sources</b> for AI responses.
            </p>
          </li>
          <li>
            <p>
              <b>Pinning important messages.</b>
            </p>
          </li>
        </ul>
        <br />
        <p>
          Within two months, this chatbot became part of a much larger corporate
          knowledge management system. Our first client, <b>Sprinklr</b>, gave
          exceptional feedback, and soon, we began pitching and rolling it out
          to other Lyearn clients. This chatbot became a{" "}
          <b>major focus area for the entire team</b> and one of Lyearn’s most
          successful AI-driven features.
        </p>
        <br />
        <Image
          alt="a whole lot of nothing"
          src={"/images/blogs/chatbot/initial-screen.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          The current chatbot application in all its glory
        </i>
        <br />
        <br />
        <p>Watch the demo at Sprinklr here (chatbot first shown at 3:00):</p>
        <br />
        <iframe
          src="https://drive.google.com/file/d/1v_EVx4h5jPQWoPS2cIXkxVy2cpJ_rlRV/preview"
          className="w-full md:h-96 h-64"
        />
        <br />
      </div>
    </>
  );
}
