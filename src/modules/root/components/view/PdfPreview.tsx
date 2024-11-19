"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const PdfPreview = ({
  url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
}) => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    const loadPDF = async () => {
      try {
        // Set the worker source
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

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
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPDF();
  }, [url]);

  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const file = useMemo(() => ({ data }), [data]); // Memoize the file prop

  return (
    <div style={{ height: "750px", border: "1px solid #e4e4e4" }}>
      {data && (
        <div>
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
