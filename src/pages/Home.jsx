import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import heroBackground from "../assets/images/header-background.jpg";
import projects from "../data/projects.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="flex-1">
      <section
        className="hero min-h-[70vh] bg-cover bg-center text-neutral-content"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="hero-overlay bg-neutral/60" />
        <div className="hero-content max-w-3xl flex-col items-start gap-6 px-6 py-16 text-left lg:px-0">
          <h1 className="text-5xl font-bold leading-tight">
            Launch stellar web experiences with Satelliting LLC
          </h1>
          <p className="text-lg">
            Crafting modern interfaces that orbit your brand goals. From concept to deployment, we partner with you to create digital products that delight and perform.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
            Launch a project with us
          </Link>
        </div>
      </section>

      <section className="bg-base-200 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold">Project Portfolio</h2>
            <p className="mt-3 text-base-content/80">
              A snapshot of recent launches that showcase our versatility and craft.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-2xl">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-primary"
                    >
                      View project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero bg-base-100 py-16">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold">Ready to build something extraordinary?</h2>
            <p className="py-6 text-lg">
              Tell us about your vision and we will craft a launch plan tailored to your goals.
            </p>
            <Link to="/contact" className="btn btn-secondary btn-wide">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Connect with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
