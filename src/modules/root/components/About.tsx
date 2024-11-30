import React from "react";

import Experience from "./view/Experience";
import Education from "./view/Education";
import CompanyProjects from "./view/CompanyProjects";

const About = () => {
  return (
    <div className="bg-white  rounded my-4 grid grid-cols-1 xl:grid-cols-2 min-[2142px]:grid-cols-3 gap-6">
      <div className="p-3 lg:m-6 xl:justify-self-start">
        <Experience />
      </div>
      <div className="p-3 lg:m-6 xl:justify-self-start">
        <Education />
      </div>
      <div className="p-3 lg:m-6 xl:justify-self-start">
        <CompanyProjects />
      </div>
    </div>
  );
};

export default About;
