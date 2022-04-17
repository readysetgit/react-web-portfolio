import React, { Component } from "react";

class ProjectCell extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="image-and-title">
          {this.props.imageUrl && (
            <div className="img-container">
              <img
                className="project-image"
                src={this.props.imageUrl}
                alt="this is an a chitr"
              ></img>
            </div>
          )}

          <div className="project-details">
            <h1>{this.props.title}</h1>
            {this.props.technologies && (
              <h4 className="technology-txt">
                <span>Technologies: </span>
                <span className="grey">{this.props.technologies.join(", ")}</span>
              </h4>
            )}
          </div>
        </div>
        <div className="project-description">
          {this.props.description && <p>{this.props.description}</p>}
        </div>
      </div>
    );
  }
}

export default ProjectCell;
