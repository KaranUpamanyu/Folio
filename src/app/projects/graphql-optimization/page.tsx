import React from "react";
import Image from "next/image";
import data from "@/data";
// import FooterNavbar from "@/components/FooterNav";
import PageHeader from "@/components/PageHeader";

const content = data.projects.homeGraphQL;

export default function GraphQLOptimization() {
  return (
    <>
      <div className="max-w-prose mx-auto">
        <PageHeader title={content.title} type={content.type} subtitle={""} />
        {/* Main content */}
        <p>
          Lyearn's website has <b>configurable user homepage</b> that links to a
          lot of content—courses, articles, live learning sessions, and various
          event cards such as meetings, habit tracking, todos, and more. Each of
          these cards was powered by its own <b>MongoDB</b> document. In other
          words, this was a full-blown dashboard.
        </p>
        <br />
        <p>
          Initially, all of the data was fetched using a single{" "}
          <code>homepage</code> <b>GraphQL query</b>. This query collated data
          from a multitude of MongoDB documents, which meant that users had to
          wait for several seconds for the complete API response before anything
          appeared on the screen. A loader was shown until the data arrived, but
          on longer dashboards, the waiting time could leave a poor first
          impression.
        </p>
        <br />
        <Image
          alt="a whole lot of nothing"
          src={"/images/blogs/graphql/loading.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          a loader <span className="line-through">annoyed</span> informed the
          users that their content was loading
        </i>
        <br />
        <br />
        To address this challenge, I rethought the frontend data fetching
        strategy:
        <br />
        <br />
        <ul>
          <li>
            <p>
              <b>Lightweight Initial Query:</b>
            </p>
            <p>
              I created a new <code>homepageLight</code> query that only fetched
              the dashboard’s layout along with widget IDs and names. This
              significantly reduced the response time, delivering the basic
              structure in under half a second.
            </p>
          </li>
          <br />
          <li>
            <p>
              <b>Progressive Widget Loading:</b>
            </p>
            <p>
              Instead of waiting for every piece of data, I loaded the widgets
              separately. As users scrolled, widgets were fetched and displayed
              dynamically. In the meantime, I applied a subtle shimmering effect
              to indicate that content was loading.
            </p>
          </li>
          <br />
          <li>
            <p>
              <b>Batch Processing with a Custom React Hook:</b>
            </p>
            <p>
              I further refined the solution by loading widgets in batches of
              three. Here’s the approach:
            </p>
            <ol>
              <li>
                <p>
                  <b>Initial Load:</b> Fetch the lightweight dashboard layout
                  using <code>homepageLight</code>.
                </p>
              </li>
              <li>
                <p>
                  <b>Batch Loading: </b> Using a custom React hook, load the
                  first batch of three widgets immediately. As soon as these
                  loaded, trigger the next batch, and so on until all widgets
                  were displayed.
                </p>
              </li>
            </ol>
            <br />
            <p>
              This method drastically improved the perceived performance,
              reducing the overall wait time and ensuring that users quickly saw
              the dashboard’s structure even if the detailed content loaded
              gradually.
            </p>
          </li>
        </ul>
        <br />
        <Image
          alt="sneak peek of the code"
          src={"/images/blogs/graphql/code.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Sneak peek of the logic 👀
        </i>
        <br />
        <p>
          In our development instance, these changes brought the homepage
          loading time down from{" "}
          <b>over three seconds to under half a second</b> with barely any
          backend modifications. This experience taught me the value of
          rethinking data fetching strategies. Sometimes, the key to a better
          user experience is simply breaking down a big problem into smaller,
          more manageable parts - visible progress helps, and this isn’t just
          about coding {`:)`}
        </p>
        <br />
        <Image
          alt="before & after"
          src={"/images/blogs/graphql/before-after.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Before (top) and after (bottom) the optimization
        </i>
        <br />
      </div>
      {/* <FooterNavbar /> */}
    </>
  );
}
