import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import data from "@/data";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Payment Improvements | Karan Upamanyu",
  description: "Karan's experience improving Springboard's payment system",
};

const content = data.projects.payments;

export default function Chatbot() {
  return (
    <>
      <div className="max-w-prose mx-auto">
        <PageHeader title={content.title} type={content.type} subtitle={""} />

        <p>
          At Springboard, our payment system is built using <b>AngularJS</b>{" "}
          with a <b>GraphQL BFF</b> (Backend-for-Frontend) layer, and it makes
          extensive use of <b>RxJS and observables</b> to track the state of
          different components. One day, we started noticing a serious issue –
          though rare, it had a big impact. Some new customers reported that
          after making a payment, they weren’t sure if their purchase had gone
          through. Their money was deducted, but they weren’t navigated to the
          next step.
        </p>

        <br />

        <p>
          This was a <b>huge problem</b> because Springboard courses sometimes
          cost over <b>US$10,000</b>. Any friction in the checkout flow,
          especially one that caused doubt about a successful purchase, could
          immediately break trust. Some users even requested refunds because
          they weren’t sure whether their payment had been processed.
        </p>

        <br />
        <h2 className="text-2xl">Investigating the Issue</h2>
        <br />

        <p>
          We did a <b>top-down analysis</b> of the entire user flow during
          checkout. While we found areas that could be improved, the core
          problem was a <b>navigation failure</b>. Here’s what was happening:
        </p>

        <ol>
          <li>
            <p>
              The user enters their card details and clicks the{" "}
              <b>payment submit</b> button.
            </p>
          </li>
          <li>
            <p>
              The button is then <b>disabled</b>, and a{" "}
              <b>GraphQL charge API call</b> is triggered in the background.
            </p>
          </li>
          <li>
            <p>
              If successful, the API sends a response back to the front end, and
              the user is <b>supposed to be redirected</b> to their profile page
              to complete their setup.
            </p>
          </li>
          <li>
            <p>If unsuccessful, the error is displayed on the payment page.</p>
          </li>
        </ol>

        <p>
          For a small number of users, even when the API returned a{" "}
          <b>successful response, they were not navigated</b> to the profile
          page. Worse, there was <b>no indication</b> that their payment had
          gone through, leaving them in an uncertain state.
        </p>

        <br />
        <h2 className="text-2xl">Finding the Root Cause</h2>
        <br />

        <p>
          This was tricky because we <b>couldn’t replicate the issue</b> in our
          development environment. Without being able to reproduce it, we had no
          way of directly fixing it. After discussing it with other developers
          and testing multiple scenarios, we still couldn’t figure out why
          navigation was failing for these users.
        </p>

        <p>
          That’s when I decided to{" "}
          <b>shift the focus from fixing the failure itself</b> (which we
          couldn’t reproduce) to{" "}
          <b>improving transparency in the user experience</b> so that even if
          the navigation failed, users wouldn’t feel lost.
        </p>

        <br />
        <h2 className="text-2xl">The Solution: Improving UI Feedback</h2>
        <br />

        <p>
          To make the payment process more transparent and{" "}
          <b>reduce user anxiety</b>, I focused on{" "}
          <b>state management and feedback visibility</b>. Here’s how I improved
          it:
        </p>

        <ol>
          <li>
            <p>
              <b>Better Button States</b>
            </p>

            <ul>
              <li>
                <p>
                  When a user clicks <b>submit</b>, instead of just disabling
                  the button, a <b>spinner loader</b> appears inside it. This
                  visually indicates that the payment is being processed.
                </p>
              </li>
              <li>
                <p>
                  If the <b>GraphQL API call succeeds</b>, the spinner is{" "}
                  <b>replaced with a checkmark</b>.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <b>Clear Success Messaging & Backup Navigation</b>
            </p>

            <ul>
              <li>
                <p>Below the button, a message appears:</p>
                <p>
                  <i>
                    "Payment successful. You will be redirected to your profile
                    page in 3…2…1…"
                  </i>
                </p>
              </li>
              <li>
                <p>
                  If automatic navigation <b>doesn’t happen</b>, a{" "}
                  <b>backup link</b> appears:
                </p>
                <p>
                  <i>"If you are not redirected, click here to continue."</i>
                </p>
              </li>
            </ul>
          </li>
        </ol>

        <p>
          This ensures that{" "}
          <b>
            even if navigation fails, the user knows their payment was
            successful
          </b>{" "}
          and has a way to proceed.
        </p>

        <br />
        <Image
          alt="Button states"
          src={"/images/blogs/payments/button-states.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Button states
        </i>
        <br />

        <br />
        <h2 className="text-2xl">Tracking the Impact with GA4 Analytics</h2>
        <br />

        <p>
          Since we still didn’t know how many users were affected, I set up
          tracking using <b>GA4 (Google Analytics 4)</b>. I measured:
        </p>

        <ul>
          <li>
            <p>How many users saw the backup navigation link.</p>
          </li>
          <li>
            <p>
              How many users clicked it instead of being automatically
              redirected.
            </p>
          </li>
        </ul>

        <p>
          After three months, analytics showed that our fix had saved
          Springboard around <b>$50,000/mo</b> by preventing refunds due to
          payment uncertainty. The number of users who had to click the backup
          navigation link was small, but their concerns were serious enough that
          addressing them significantly improved user trust.
        </p>

        {/* GA4 screenshot showing tracking data, if possible */}

        <br />
        <h2 className="text-2xl">Ensuring Long-Term Stability</h2>
        <br />

        <p>To prevent future issues, I also:</p>

        <ul>
          <li>
            <p>
              <b>Wrote unit tests</b> using <b>Jasmine</b> to validate different
              button states and navigation scenarios.
            </p>
          </li>
          <li>
            <p>
              <b>Set up automation tests</b> using <b>SeleniumBase</b> to
              simulate real-world user flows and catch any regressions.
            </p>
          </li>
        </ul>

        <br />
        <h2 className="text-2xl">Conclusion</h2>
        <br />

        <p>
          This experience taught me that{" "}
          <b>even if a bug is rare, its impact matters</b>. If users feel lost,
          especially during critical moments like payments, trust is broken
          instantly. By <b>improving feedback</b> and giving users a clear way
          forward, we turned a hidden issue into a{" "}
          <b>transparent, reliable experience</b>.
        </p>
      </div>
    </>
  );
}
