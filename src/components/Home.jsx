import "../App.css";
import "./Home.css";

import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="home-container">
          <div className="side-panel">
            <div className="profile-pic">
              <img src={props.profilePic} alt="This is what I look like"></img>
            </div>
            <div className="profile-details mtm">
              <h4 className="name">{props.name}</h4>
              <p className="position">{props.position}</p>
              <p className="company">{props.company}</p>
            </div>
            <div className="socials mtl mbxl">
              <ul>
                {props.socials.map((s) => {
                  return (
                    <li className="flex-row mbm">
                      <span style={{ maxWidth: "30", maxHeight: "30" }}>
                        <img
                          style={{ borderRadius: 50, maxWidth: 30 }}
                          src={s.icon}
                          alt={s.name + "icon"}
                        ></img>
                      </span>
                      <span>
                        <a href={s.url}>{s.name}</a>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="about mtxl">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div style={{ textAlign: "center", marginTop: 100 }}>
              <Link to="/Projects">
                <button className="btn see-projects">PROJECTS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
