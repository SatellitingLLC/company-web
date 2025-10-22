import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faUsersGear,
  faGlobe,
  faChartLine,
  faHandshake,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const differentiators = [
  {
    icon: faRocket,
    title: "Launch-ready strategy",
    description:
      "We translate ambitious goals into phased rollout plans that keep stakeholders aligned and momentum high.",
    tags: ["Strategy", "Roadmapping", "Analytics"],
  },
  {
    icon: faUsersGear,
    title: "Human-centered build",
    description:
      "Research-led sprints turn user insight into intuitive flows and polished component systems.",
    tags: ["Design", "UX", "Accessibility"],
  },
  {
    icon: faChartLine,
    title: "Performance obsessed",
    description:
      "Every deployment is tuned for speed, accessibility, and long-term maintainability across the stack.",
    tags: ["Optimization", "Reliability", "Monitoring"],
  },
  {
    icon: faGlobe,
    title: "Remote collaboration",
    description:
      "Productive async rituals keep progress clear no matter the timezone, without sacrificing partnership.",
    tags: ["Async", "Operations", "Transparency"],
  },
];

const values = [
  {
    icon: faHandshake,
    title: "Partnership over projects",
    description:
      "We treat every engagement as a shared mission, embedding with your team to build trust and transparency.",
  },
  {
    icon: faShieldHeart,
    title: "Quality without compromise",
    description:
      "From documentation to design QA, we uphold standards that safeguard your brand and your roadmap.",
  },
];

function About() {
  return (
    <main className="flex-1 bg-base-200 text-base-content">
      <section className="bg-base-100 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:px-0">
          <div className="lg:w-1/2">
            <p className="mb-4 text-sm uppercase tracking-widest text-primary">
              About Satelliting
            </p>
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              A studio dedicated to building digital gravity for visionary
              brands
            </h1>
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg">
              Satelliting LLC is a remote-first product team specializing in
              modern web experiences. We partner with founders and marketing
              leaders to bring new ideas to orbit and keep mature products
              responsive to market shifts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-0">
          <div className="grid gap-8 lg:grid-cols-2">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-base-300/60 bg-base-100/80 p-8 shadow-[0_20px_60px_-30px_rgba(59,130,246,0.45)] backdrop-blur lg:p-10"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl text-primary-content lg:mx-0">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="text-2xl font-semibold lg:text-3xl">
                        {item.title}
                      </h2>
                      <span className="hidden text-sm font-semibold uppercase tracking-[0.4em] text-primary/60 lg:inline-flex">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-base-content/80">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-base-content/50">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className={`badge badge-outline ${tagIndex === 0 ? "border-primary/40 bg-primary/10 text-primary" : "border-base-content/20 bg-base-200/60"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base-100 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[2fr_3fr] lg:px-0">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our operating rhythm</h2>
            <p>
              Each engagement is anchored by discovery workshops and a shared
              roadmap. Weekly async updates, recorded demos, and transparent
              metrics keep decision-makers in the loop without crowding
              calendars.
            </p>
            <div className="rounded-box bg-base-200 p-6">
              <h3 className="text-xl font-semibold">Launch phases</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>
                    <strong>Orbit mapping.</strong> Align on goals, audiences,
                    and success measures.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>
                    <strong>Prototype sprint.</strong> Validate interaction
                    models with live stakeholders.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>
                    <strong>Launch build.</strong> Ship production-ready
                    experiences with observability baked in.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>
                    <strong>Continuous lift.</strong> Optimize through
                    experiments, content updates, and iterative releases.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((item) => (
              <div key={item.title} className="card bg-base-200">
                <div className="card-body">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-base-100">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="text-base-content/80">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="card border border-dashed border-primary">
              <div className="card-body">
                <h3 className="text-xl font-semibold">Leadership collective</h3>
                <p className="text-base-content/80">
                  Strategists, designers, and engineers with a decade of
                  shipping enterprise-grade platforms and consumer apps rally
                  around each launch.
                </p>
                <p className="text-base-content/60">
                  We assemble tailored squads so you gain the exact expertise
                  needed without long hiring cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-box bg-primary text-primary-content px-8 py-12 text-center">
          <h2 className="text-3xl font-bold">
            Let's co-create your next release
          </h2>
          <p className="text-lg text-primary-content/80">
            Share your roadmap and we will map the delivery window, success
            metrics, and team you need to make it real.
          </p>
          <Link to="/contact" className="btn btn-secondary btn-wide">
            Plan a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
