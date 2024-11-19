"use client";

import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import axios from "axios";
// import "pdfjs-dist/build/pdf.worker.entry";

const PdfPreview = ({
  // file = "https://morth.nic.in/sites/default/files/dd12-13_0.pdf",
  url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  // file = "/api/hello",
  // file = "/documents/resume_vijay_parmar.pdf",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let renderTask: pdfjsLib.RenderTask | null = null; // Store the current render task

    const loadPDF = async () => {
      if (!canvasRef.current) return;

      try {
        // Set the worker source
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

        const res = await axios.get("http://localhost:3000/api", {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
        });

        const sanitizedBase64 = res.data.data.replace(/\s+/g, "");
        const paddedBase64 = sanitizedBase64.padEnd(
          Math.ceil(sanitizedBase64.length / 4) * 4,
          "="
        );

        const pdfData = atob(paddedBase64); // Decode base64 data to binary

        const loadingTask = pdfjsLib.getDocument({
          data: pdfData,
          isChrome: true,
        });

        const pdf = await loadingTask.promise;

        // Fetch the first page
        const pageNumber = 1;
        const page = await pdf.getPage(pageNumber);

        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        // Get the canvas and its 2D rendering context
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) throw new Error("Canvas context is null");

        // Set canvas dimensions

        console.log(`----- viewport : `, viewport);

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Cancel any ongoing render task
        if (renderTask) {
          renderTask.cancel();
        }

        // Render the page into the canvas
        const renderContext = {
          canvasContext: context,
          viewport,
        };
        renderTask = page.render(renderContext);
        await renderTask.promise;
        console.log("Page rendered");
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPDF();

    // Cleanup function to cancel rendering if component unmounts
    return () => {
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [url]);

  return <canvas ref={canvasRef}></canvas>;
};

export default PdfPreview;
