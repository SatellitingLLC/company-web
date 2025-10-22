import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Footer({ mode, onToggleTheme }) {
  return (
    <footer className="bg-base-300">
      <div className="footer footer-center mx-auto max-w-6xl gap-4 px-4 py-6 text-base-content">
        <aside>
          <p className="font-medium">
            <FontAwesomeIcon icon={faCopyright} className="mr-2" />
            {new Date().getFullYear()} Satelliting LLC. All rights reserved.
          </p>
        </aside>
        <nav className="flex items-center gap-6">
          <a href="/sitemap.xml" className="link link-hover">
            Sitemap
          </a>
          <button
            type="button"
            className="btn btn-circle"
            onClick={onToggleTheme}
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <FontAwesomeIcon icon={mode === "dark" ? faSun : faMoon} className="text-xl" />
          </button>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
