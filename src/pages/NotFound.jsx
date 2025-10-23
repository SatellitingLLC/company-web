import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-base-200 px-6 text-center text-base-content">
      <div className="flex max-w-2xl flex-col items-center gap-6 rounded-3xl bg-base-100 p-10 shadow-2xl">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <FontAwesomeIcon icon={faSatelliteDish} className="text-3xl" />
        </span>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Signal lost</h1>
          <p className="text-lg text-base-content/70">
            The page you attempted to reach is outside our current orbital map. Use the links below to
            re-establish contact with the Satelliting crew.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">
            Return home
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Satelliting
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
