import Home from "./components/Home";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import { HomePageData } from "./Data";
import "./components/helper.css";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="projects" element={<Projects />} />
          <Route
            path="/"
            element={
              <Home
                title={HomePageData.title}
                description={HomePageData.bodyText}
                name={HomePageData.name}
                profilePic={HomePageData.profilePic}
                company={HomePageData.company}
                position={HomePageData.position}
                socials={HomePageData.socials}
              />
            }
          />
          <Route
            path="*"
            element={
              <Home
                title={HomePageData.title}
                description={HomePageData.bodyText}
                name={HomePageData.name}
                profilePic={HomePageData.profilePic}
                company={HomePageData.company}
                position={HomePageData.position}
                socials={HomePageData.socials}
              />
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
