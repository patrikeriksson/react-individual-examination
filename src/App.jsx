import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import ThemeProvider from "./features/ThemeProvider";

function App() {
  // För G:
  // README-fil

  // TODO (later...)
  // Hamburger menu for mobile
  // Imporve the styling
  // Turn the button into a component, if I need more buttons

  const [repos, setRepos] = useState([]);

  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/projects"
            element={<Projects repos={repos} setRepos={setRepos} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
