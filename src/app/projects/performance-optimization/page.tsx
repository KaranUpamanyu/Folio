import React from "react";
import Image from "next/image";
import data from "@/data";
import PageHeader from "@/components/PageHeader";

const content = data.projects.performanceOptimization;

export default function PerformanceOptimization() {
  return (
    <>
      <div className="max-w-prose mx-auto">
        <PageHeader title={content.title} type={content.type} subtitle={""} />
        {/* Main content */}

        <p>
          As a part of the <b>growth team</b> at Springboard, I worked on
          maintaining and creating new features for the marketing website,{" "}
          <a
            className="styled-link cursor-alias"
            href="https://www.springboard.com"
            target="_blank"
          >
            www.springboard.com
          </a>
          . This website was built using <b>Gatsby</b> (a static site
          generator), <b>React</b>, and <b>Storyblok</b> as a headless CMS.
        </p>

        <br />

        <p>
          We also supported some university partnership websites, such as{" "}
          <a
            className="styled-link cursor-alias"
            href="https://usfbootcamps.com"
            target="_blank"
          >
            usfbootcamps.com
          </a>
          , through the same repository.
        </p>

        <br />
        <h2 className="text-2xl">Initial Performance Analysis</h2>
        <br />

        <p>
          By conducting page performance tests, we realized that our website’s
          performance, especially on mobile devices, was not great. On mobile,
          our overall performance score was around <b>30</b>, while on desktop,
          it was better at around <b>50</b>.
        </p>

        <p>
          We decided to work on improving the website’s performance, and this
          task was led by me. The goal was to:
        </p>

        <ol>
          <li>
            <p>Identify various factors affecting website performance.</p>
          </li>
          <li>
            <p>Prioritize and suggest optimizations.</p>
          </li>
          <li>
            <p>Create a project plan with milestones and deadlines.</p>
          </li>
          <li>
            <p>Execute these optimiztions and measure their impact.</p>
          </li>
        </ol>

        <br />

        <p>
          However, there was a challenge—about two years ago, we had already
          done a performance optimization project. Many{" "}
          <b>well-known optimizations</b> (such as encoding, caching, and code
          splitting) were already implemented. I needed to be more thorough in
          identifying and executing improvements.
        </p>

        <br />
        <h2 className="text-2xl">
          Learning About Website Performance Optimization
        </h2>
        <br />

        <p>
          Since this was my first time working on a deep performance
          optimization project, I decided to educate myself first.
        </p>

        <br />

        <p>My go-to resources were:</p>

        <ul>
          <li>
            <p>
              <a
                className="styled-link cursor-alias"
                href="https://web.dev/performance"
                target="_blank"
              >
                Web.dev's performance documentation
              </a>
            </p>
          </li>
          <li>
            <p>
              <a
                className="styled-link cursor-alias"
                href="https://developer.chrome.com/docs/"
                target="_blank"
              >
                Chrome Developer Documentation
              </a>
            </p>
          </li>
        </ul>

        <br />

        <p>
          One key insight from my research was that{" "}
          <b>
            while there is a definitive gold standard for website performance,
            there are innumerable ways to stray from it
          </b>
          . My task wasn’t simply to apply a checklist of fixes—it was to
          uncover the unique factors that had compromised our website’s
          performance and then correct them.
        </p>

        <br />
        <h2 className="text-2xl">Understanding Core Web Vitals</h2>
        <br />

        <p>
          To measure the performance of our website, we focused on{" "}
          <b>Core Web Vitals</b>, especially:
        </p>

        <ul>
          <li>
            <p>
              <b>First Contentful Paint (FCP):</b> The time it takes for the
              first visible content to appear.
            </p>
          </li>
          <li>
            <p>
              <b>Largest Contentful Paint (LCP):</b> The time it takes for the
              largest visible content to load.
            </p>
          </li>
          <li>
            <p>
              <b>Speed Index:</b> How quickly content is visually displayed.
            </p>
          </li>
          <li>
            <p>
              <b>Total Blocking Time (TBT):</b> Measures how long users are
              blocked from interacting with the page due to JavaScript
              execution.
            </p>
          </li>
        </ul>

        <p>
          We primarily used <b>PageSpeed Insights</b> for performance
          measurements, supplemented by other tools when needed.
        </p>

        <br />
        <h2 className="text-2xl">Fixing the Critical Rendering Path</h2>
        <br />

        <p>
          The <b>critical rendering path</b> is the sequence of steps the
          browser takes to render a page. The goal is to{" "}
          <b>minimize the time it takes for the page to be usable</b>.
        </p>

        <br />

        <p>
          I started by analyzing <b>network calls</b> in Chrome DevTools,
          looking for bottlenecks in the <b>network waterfall</b>. Additionally,
          I manually reviewed the initially rendered HTML to spot optimizations.
        </p>

        <br />
        <Image
          alt="Network waterfall in Chrome DevTools"
          src={"/images/blogs/performance-optimization/waterfall.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Network waterfall in Chrome DevTools
        </i>
        <br />

        <br />
        <h2 className="text-2xl">Key Optimizations</h2>
        <br />

        <h3 className="text-lg">1. Fixing CSS Duplication</h3>
        <br />
        <p>
          I noticed that our CSS was being <b>fetched twice</b>—once inline in
          the HTML and again as an external CSS file. Fixing this was a quick
          win.
        </p>

        <p>
          Additionally, I installed the <b>Gatsby PurgeCSS</b> plugin to remove
          unused styles. This improved the PageSpeed Insights score by{" "}
          <b>1-2 points</b>.
        </p>

        <br />
        <h3 className="text-lg">2. Optimizing Font Loading</h3>
        <br />
        <p>To improve FCP and LCP:</p>

        <ul>
          <li>
            <p>
              We switched to <b>self-hosted fonts</b> and cached them on our
              CDN.
            </p>
          </li>
          <li>
            <p>
              Replaced <b>OTF</b> fonts with the more efficient <b>WOFF2</b>{" "}
              format.
            </p>
          </li>
          <li>
            <p>
              Added <code>font-display: swap;</code> to prevent fonts from
              blocking rendering.
            </p>
          </li>
        </ul>

        <p>
          These changes improved our mobile PageSpeed score by <b>5 points</b>{" "}
          and desktop by <b>3 points</b>. Such a large change was actually
          unexpected!
        </p>

        <br />
        <h3 className="text-lg">3. Implementing an Intercom Facade</h3>
        <br />
        <p>
          We had an <b>Intercom widget</b> for customer support, but it was
          slowing down the page. To fix this, we installed a <b>facade</b>—a
          static placeholder image that loads the widget only when hovered over
          or when network activity is idle.
        </p>

        <p>
          This optimization improved the PageSpeed score by <b>3 points</b>.
        </p>

        <br />
        <Image
          alt="Intercom Facade"
          src={"/images/blogs/performance-optimization/facade.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Intercom Facade in action
        </i>
        <br />

        <br />
        <h3 className="text-lg">4. Removing Unused Third-Party Scripts</h3>
        <br />
        <p>
          Our marketing pages used many third-party scripts—analytics tools,
          tracking pixels, and others. I:
        </p>

        <ol>
          <li>
            <p>Went through every network request in Chrome DevTools.</p>
          </li>
          <li>
            <p>Created a spreadsheet documenting all third-party scripts.</p>
          </li>
          <li>
            <p>
              Collaborated with other teams to identify and remove unused
              scripts.
            </p>
          </li>
        </ol>

        <p>This cleanup resulted in noticeable performance improvements.</p>

        <br />
        <Image
          alt="Treemap"
          src={"/images/blogs/performance-optimization/treemap.png"}
          width={1000}
          height={1000}
          className="rounded-xl"
        />
        <i className="block w-full text-center text-sm text-neutral-400">
          Treemap of all scripts on the website. The 2 largest scripts are
          actually third-party scripts!
        </i>
        <br />

        <br />
        <h3 className="text-lg">
          5. Offloading Third-Party Scripts with Partytown
        </h3>
        <br />
        <p>
          We implemented{" "}
          <a
            className="styled-link cursor-alias"
            href="https://partytown.qwik.dev/"
            target="_blank"
          >
            Partytown
          </a>{" "}
          to move non-critical third-party scripts to a <b>web worker</b>. This
          added <b>6 points</b> to our PageSpeed score.
        </p>

        <br />
        <h3 className="text-lg">6. Fixing a B2U Module Import Issue</h3>
        <br />
        <p>
          Some <b>B2U-only modules</b> were loading on B2C pages due to an
          incorrect named import. Fixing this improved our score by a couple
          more points.
        </p>

        <br />
        <h3 className="text-lg">7. Implementing Gatsby's Partial Hydration</h3>
        <br />
        <p>
          We experimented with{" "}
          <a
            className="styled-link cursor-alias"
            href="https://www.gatsbyjs.com/docs/conceptual/partial-hydration/"
            target="_blank"
          >
            <b>Gatsby's Partial Hydration</b>
          </a>{" "}
          (which works similarly to Astro’s Island Architecture). It allows
          marking only interactive components for hydration, reducing JavaScript
          payload and execution.
        </p>

        <p>
          I left Springboard before measuring its impact, but my colleagues
          later reported an additional <b>4-point improvement</b>.
        </p>

        <br />
        <h2 className="text-2xl">Final Results</h2>
        <br />

        <p>
          Through these optimizations, we improved our{" "}
          <b>mobile PageSpeed Insights score from 30 to 50</b>.
          Other metrics like FCP and LCP also improved significantly, making for
          a <b>much better user experience</b>.
        </p>
      </div>
    </>
  );
}
