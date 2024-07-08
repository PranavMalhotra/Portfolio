import React from 'react';
import './Project.css';

const Project = () => {
  const projects = [
    { title: "Tourism Website", className: "row1item1", url: "https://github.com/PranavMalhotra/Toronto-Tourism" },
    { title: "Jeopardy Quiz Game", className: "row1item2", url: "https://github.com/PranavMalhotra/Jeopardy-Game" },
    { title: "Dragon Ball Game", className: "row2item1", url: "https://github.com/PranavMalhotra/Dragon-Ball-Game" },
    { title: "Dictionary", className: "row2item2", url: "https://github.com/PranavMalhotra/Dictionary" },
    { title: "To-Do List", className: "row3item1", url: "https://github.com/PranavMalhotra/To-Do-List-App" },
    { title: "Translator App", className: "row3item2", url: "https://github.com/PranavMalhotra/Translator-App" },
    { title: "Explorez - Travel App", className: "row4item1", url: "hhttps://github.com/matinadongol/TravelTracker" },
    { title: "Calculator", className: "row4item2", url: "https://github.com/PranavMalhotra/Calculator" },
    { title: "Youtube Clone", className: "row5item1", url: "https://github.com/PranavMalhotra/YoutubeClone" },
    { title: "Pet Adoption App", className: "row5item2", url: "https://github.com/PranavMalhotra/Pet-Adoption-App-UI-UX-" },
    { title: "Pokemon Card Generator", className: "row6item1", url: "https://github.com/PranavMalhotra/PokemonCardGenerator" },
  ];

  return (
    <div className="projpage-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a 
            href={project.url} 
            className={`project-item ${project.className}`} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h2>{project.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Project;
