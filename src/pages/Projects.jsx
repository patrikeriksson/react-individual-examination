import { useEffect } from "react";
import "../styles/Projects.css";

const URL = "https://api.github.com/users/patrikeriksson/repos";

function Projects({ repos, setRepos }) {
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(URL);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
          console.log(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, [setRepos]);

  return (
    <main>
      <h1>Projects.</h1>
      <section>
        {repos.map((repo) => (
          <article className="glass-card" key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <a
              className="glass-card__link"
              target="_blank"
              href={repo.html_url}
            >
              Check it out
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;
