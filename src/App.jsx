import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const themeMap = {
  light: "light",
  dark: "dark",
};

function App() {
  const [mode, setMode] = useState("dark");

  const currentTheme = useMemo(() => themeMap[mode], [mode]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex min-h-screen flex-col bg-base-200 text-base-content">
      <Navigation />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer mode={mode} onToggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
