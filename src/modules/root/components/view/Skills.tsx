import React from "react";

const data: {
  title: string;
  skills: {
    name: string;
    color?: string;
  }[];
}[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        color: "red",
      },
      {
        name: "Next.js",
        color: "red",
      },
      {
        name: "HTML",
        color: "red",
      },
      {
        name: "CSS",
        color: "red",
      },
      {
        name: "Tailwind",
        color: "red",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        color: "blue",
      },
      {
        name: "Express.js",
        color: "blue",
      },
      {
        name: "FastApi",
        color: "blue",
      },
      {
        name: "Socket.io",
        color: "blue",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        color: "green",
      },
      {
        name: "Redis",
        color: "green",
      },
      {
        name: "DynamoDB",
        color: "green",
      },
      {
        name: "mysql",
        color: "green",
      },
    ],
  },
  {
    title: "Devops",
    skills: [
      {
        name: "CI/CD",
        color: "gray",
      },
      {
        name: "Docker",
        color: "gray",
      },
      {
        name: "AWS",
        color: "gray",
      },
      {
        name: "Kubernetes (CKAD)",
        color: "gray",
      },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="text-red-600 p-2">What I Know</h2>
      <div className="flex flex-wrap justify-center text-white">
        {data.map((skillGroup) => (
          <div
            key={skillGroup.title}
            className="flex shrink items-center justify-evenly p-4 m-4"
          >
            <div className="bg-slate-500 shrink grow flex flex-col content-start items-center rounded justify-center p-8">
              <div className="font-bold pb-8">
                <h2>{skillGroup.title}</h2>
              </div>
              <div className="flex flex-wrap justify-center align-middle">
                {skillGroup.skills.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className={`flex flex-wrap rounded-md p-1 m-1`}
                    style={{
                      backgroundColor: skill.color,
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
