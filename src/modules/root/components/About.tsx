import React from "react";

import Experience from "./view/Experience";
import Education from "./view/Education";
import CompanyProjects from "./view/CompanyProjects";

const About = () => {
  return (
    <div>
      <div className="bg-white rounded shadow-2xl p-6 mb-3">
        <Experience />
      </div>
      <div className="bg-white rounded shadow-2xl p-6  mb-3">
        <Education />
      </div>
      <div className="bg-white rounded shadow-2xl p-6  mb-3">
        <CompanyProjects />
      </div>
    </div>
  );
};

export default About;
