import React, { useEffect, useState } from "react";
import "../assets/styles/Projects.css";

const GITHUB_USERNAME = "Taragoul";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="projects-loading">Loading...</div>;

  return (
    <div className="projects-grid">
      {repos.map((repo) => (
        <div className="project-card" key={repo.id}>
          <h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h3>
          <p>{repo.description || "No description"}</p>
          <div className="project-meta">
            <span>⭐ {repo.stargazers_count}</span>
            <span>🍴 {repo.forks_count}</span>
            <span>{repo.language}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;