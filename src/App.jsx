import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  // För G:
  // React Redux?!?
  // README-fil
  // Props?
  // Kanske göra ett object (const) med data, skicka datan till "/" (med props)

  // För VG:
  // "useContext" för theme
  // ev. använda react forms eller vad det hette för kontaktformuläret

  // Kanske göra en knapp komponent

  const [repos, setRepos] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/projects"
          element={<Projects repos={repos} setRepos={setRepos} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
