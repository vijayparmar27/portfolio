"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ProjectView from "./ProjectView";

export default function CardComponent() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [isScrollable, setIsScrollable] = React.useState<boolean | null>(false);

  const [isOpen, setIsOpen] = React.useState(false);

  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    // Only runs in the browser
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize(); // Set initial size
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  React.useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setIsScrollable(container.scrollWidth > container.clientWidth);
    }
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
      const walk = (x - startX) * 1.5; // Adjusted scroll speed for smoother scrolling
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const onProjectClick = (data: unknown) => {
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <section
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
        {Array.from({ length: 2 }).map((_, index) => (
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
                image="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                alt="green iguana"
                className="h-52"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla quibusdam distinctio eius obcaecati quas ut dolore hic
                  quia error praesentium aliquam nisi corporis nam alias, cumque
                  accusantium, incidunt eaque doloribus.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </section>
      <ProjectView isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
