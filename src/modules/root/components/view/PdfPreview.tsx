"use client";

import { useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import axios from "axios";

const PdfPreview = () => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    const loadPDF = async () => {
      try {
        // Set the worker source
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

        // const pdfData = await readPdf();
        // const pdfBlob = new Blob([pdfData], { type: "application/pdf" });

        const res = await axios.get("/api", {
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
        setData(pdfData);

        // setData(pdfBlob);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    (async () => {
      await loadPDF();
    })();
  }, []);

  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const file = useMemo(() => ({ data }), [data]); // Memoize the file prop

  // const file = useMemo(() => data, [data]); // Memoize the file prop

  return (
    <div className="flex justify-center p-4 shadow-smooth">
      {data && (
        <div className="w-fit scroll-auto overflow-auto border-2 border-black p-1">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
};

export default PdfPreview;
