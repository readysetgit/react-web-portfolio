import React, { Component } from "react";
import "../App.css";
import ProjectCell from "./ProjectCell";
import "./Projects.css";
import { ProjectsPageData } from "../Data";

class Projects extends Component {
  render() {
    return (
      <div className="container projects-padding">
        {ProjectsPageData.map((p) => {
          return (
            <ProjectCell
              title={p.title}
              description={p.description}
              imageUrl={p.imageUrl}
              technologies={p.technologies}
            ></ProjectCell>
          );
        })}
      </div>
    );
  }
}

export default Projects;
