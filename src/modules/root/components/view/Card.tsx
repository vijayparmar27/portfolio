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
    description:
      "Developed a real-time web application using React.js for the frontend and FastAPI for the backend, with Socket.IO enabling real-time communication. Integrated Material-UI (MUI) for a sleek and responsive user interface. Dockerized the React.js frontend to streamline deployment and created a CI/CD pipeline for automated testing and deployment using AWS services. Leveraged Docker and AWS for scalable and efficient deployment.",
    image: "/assets/images/game1.jpg",
    tags: ["React.js", "Node.js", "Python", "Socket.io"],
    link: "https://github.com/vijayparmar27/Tic-Tac-Toe_React.js",
    asserts: [
      {
        type: "image" as const,
        src: "/placeholder.svg?height=400&width=800",
        alt: "Placeholder Image 1",
      },
      {
        type: "video" as const,
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      },
      {
        type: "image" as const,
        src: "/placeholder.svg?height=400&width=800",
        alt: "Placeholder Image 2",
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
    width: window?.innerWidth ?? 0,
    height: window?.innerHeight ?? 0,
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
              border: "2px solid #dbdbdb",
              borderRadius: "10px",
            }}
            onClick={() => onProjectClick(index)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                // image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                image={project.image}
                alt="green iguana"
                className="h-52"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
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
