import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faVideo,
  faCircleDot,
  faCalendarDays,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <main className="flex-1 bg-base-200 text-base-content">
      <section className="bg-base-100 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 text-center lg:px-0">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <FontAwesomeIcon icon={faCircleDot} />
            Remote-first partnership
          </span>
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's launch your next digital initiative
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-base-content/80">
            Satelliting LLC operates fully online so we can plug into teams
            anywhere. Share what you're building and we'll align on the roadmap,
            the squad, and the timelines to accelerate it.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl bg-base-100 p-10 shadow-2xl">
              <div className="flex flex-col gap-8 text-left">
                <div className="flex items-center gap-4 text-primary">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-2xl" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">
                      Studio inbox
                    </p>
                    <h2 className="text-3xl font-semibold">
                      Reach Satelliting directly
                    </h2>
                    <p className="text-base-content/70">
                      Share your initiative and we’ll respond within two business days with next steps.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-base-200/60 p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/70">
                        Primary email
                      </p>
                      <p className="text-lg font-semibold">jordan@satelliting.space</p>
                    </div>
                    <a
                      href="mailto:jordan@satelliting.space"
                      className="btn btn-primary btn-lg w-full md:w-auto"
                    >
                      Compose email
                    </a>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-base-100 p-5 shadow-sm">
                      <div className="mb-2 flex items-center gap-2 text-primary">
                        <FontAwesomeIcon icon={faClipboardList} />
                        <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                          Include
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-base-content/70">
                        <li>Goals for the launch or campaign</li>
                        <li>Core audiences or user personas</li>
                        <li>Timeline expectations or constraints</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-base-100 p-5 shadow-sm">
                      <div className="mb-2 flex items-center gap-2 text-primary">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                          Expect
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-base-content/70">
                        <li>Reply within 48 business hours</li>
                        <li>A curated list of clarifying questions</li>
                        <li>Link to choose a discovery session</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-primary/50 p-6">
                  <h3 className="text-lg font-semibold text-primary">Project dossiers welcome</h3>
                  <p className="mt-2 text-base-content/70">
                    Attach briefs, prototypes, or analytics snapshots so we can review context ahead of our session and tailor recommendations faster.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-base-100 p-6 shadow-xl">
                <div className="flex items-center gap-4 text-primary">
                  <FontAwesomeIcon icon={faCircleDot} className="text-2xl" />
                  <h3 className="text-xl font-semibold">Engagement lanes</h3>
                </div>
                <ul className="mt-4 space-y-3 text-base-content/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>Product launches, redesigns, and roadmaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>Marketing sites, growth experiments, and funnels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>Design systems, component audits, and implementation</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-base-100 p-6 shadow-xl">
                <div className="flex items-center gap-4 text-primary">
                  <FontAwesomeIcon icon={faVideo} className="text-2xl" />
                  <h3 className="text-xl font-semibold">Virtual sessions</h3>
                </div>
                <p className="mt-3 text-base-content/70">
                  Prefer a live conversation? We host 30-minute video calls to align on scope, metrics, and squad resourcing once we understand your goals.
                </p>
                <div className="mt-4 rounded-2xl bg-base-200/60 p-4 text-sm text-base-content/80">
                  <p className="font-semibold text-primary">Availability</p>
                  <p>Weekdays across EST and PST, with async updates for distributed teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
