"use client";

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ProjectView from "./ProjectView";
import { Project } from "../../_@types/root.interface";

const Projects: Project[] = [
  {
    title: "Tic-Tac-Toe Game: React.Js",
    shortDescription:
      "A simple Tic-Tac-Toe game built using React.js. The Tic-Tac-Toe Game project involves creating a simple and interactive two-player game where participants take turns marking spaces on a 3x3 grid",
    description: [
      "Developed a real-time web application supporting multiple games.",
      "I implemented using React.js for the frontend and FastAPI for the backend, with Socket.IO enabling real-time communication for seamless gameplay.",
      "The application features a sleek and responsive user interface, designed with Material-UI (MUI).",
      " Dockerized the React.js frontend to streamline deployment and scalability.",
      " Integrated a CI/CD pipeline for automated testing and deployment, leveraging AWS services",
    ],
    image: "./assets/images/game1.jpg",
    tags: [
      {
        name: "React.js",
        color: "#61dafb",
        backgroundColor: "#20232a",
        borderColor: "#61dafb",
        boxShadow: "0 4px 12px rgba(97, 218, 251, 0.6)",
      },
      {
        name: "Node.js",
        color: "#ffffff",
        backgroundColor: "#3c873a",
        borderColor: "#6cc24a",
        boxShadow: "0 4px 12px rgba(108, 194, 74, 0.6)",
      },
      {
        name: "Python",
        color: "#ffde57",
        backgroundColor: "#306998",
        borderColor: "#ffe873",
        boxShadow: "0 4px 12px rgba(255, 222, 87, 0.6)",
      },
      {
        name: "Socket.io",
        color: "#ffffff",
        backgroundColor: "#1e1e1e",
        borderColor: "#888888",
        boxShadow: "0 4px 12px rgba(136, 136, 136, 0.6)",
      },
      {
        name: "MUI",
        color: "#ffffff",
        backgroundColor: "#007FFF",
        borderColor: "#0059b2",
        boxShadow: "0 4px 12px rgba(0, 127, 255, 0.6)",
      },
      {
        name: "Redux-Toolkit",
        color: "#ffffff",
        backgroundColor: "#764ABC",
        borderColor: "#9c6bed",
        boxShadow: "0 4px 12px rgba(156, 107, 237, 0.6)",
      },
    ],
    link: "https://github.com/vijayparmar27/Tic-Tac-Toe_React.js",
    asserts: [
      {
        type: "video" as const,
        src: "./assets/ticTacToe/video.mp4",
      },
      {
        type: "image" as const,
        src: "./assets/ticTacToe/1.png",
        alt: "Game Image",
      },
      {
        type: "image" as const,
        src: "./assets/ticTacToe/2.png",
        alt: "Game Image",
      },
      {
        type: "image" as const,
        src: "./assets/ticTacToe/3.png",
        alt: "Game Image",
      },
      {
        type: "image" as const,
        src: "./assets/ticTacToe/4.png",
        alt: "Game Image",
      },
      {
        type: "image" as const,
        src: "./assets/ticTacToe/5.png",
        alt: "Game Image",
      },
    ],
  },
];

export default function CardComponent() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [isScrollable, setIsScrollable] = React.useState<boolean | null>(false);

  const [isOpen, setIsOpen] = React.useState(false);

  const [project, setProject] = React.useState<Project>();

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const container = containerRef.current;

    setIsScrollable(container && container.scrollWidth > container.clientWidth);

    const handleResize = () => {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = containerRef.current;
    if (container) {
      setIsDown(true);
      container.classList.add("active");
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseLeave = (): void => {
    if (isDown) {
      setIsDown(false);
      containerRef.current?.classList.remove("active");
    }
  };

  const handleMouseUp = (): void => {
    if (isDown) {
      setIsDown(false);
      containerRef.current?.classList.remove("active");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDown) return;

    e.preventDefault();
    const container = containerRef.current;
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed, lower value for smoother scroll
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const onProjectClick = (index: number) => {
    setProject(Projects[index]);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="text-2xl font-bold">
        <h2 className=" rounded p-4">Projects</h2>
      </div>
      <section
        ref={containerRef}
        className={`flex overflow-x-auto scroll-smooth items-center mt-4 mb-4 ${
          isScrollable ? "justify-start" : "justify-center"
        }`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          cursor: isDown ? "grabbing" : "grab",
          scrollbarWidth: "none",
        }}
      >
        {Projects.map((project, index) => (
          <Card
            key={`list-${index}`}
            sx={{
              minWidth: "20rem",
              maxWidth: "20rem",
              mx: 2,
            }}
            className="shadow-smooth shadow-smooth-hover border-2 border-neutral-300 rounded-lg"
            onClick={() => onProjectClick(index)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt="green iguana"
                className="h-52"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className="text-black text-xl font-medium mb-4 "
                  component="div"
                >
                  {project.title}
                </Typography>
                <Typography className="pb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`tag-${tag.name}`}
                      className="m-1 p-1 inline-flex rounded text-xs font-bold"
                      style={{
                        color: `${tag.color}`,
                        background: `${tag.backgroundColor}`,
                        border: `2px solid ${tag.borderColor}`,
                        boxShadow: tag.boxShadow,
                      }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {project.shortDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </section>
      {project && (
        <ProjectView isOpen={isOpen} onClose={handleClose} project={project} />
      )}
    </>
  );
}
