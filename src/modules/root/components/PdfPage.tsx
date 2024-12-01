"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Tooltip } from "@mui/material";
import { FileDown } from "lucide-react";

const PdfPreview = dynamic(() => import("./view/PdfPreview"), { ssr: false });

const PdfPage: React.FC = () => {
  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const link = document.createElement("a");
      link.href = "./pdfs/resume_vijay_parmar.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="bg-white h-full overflow-hidden rounded-lg shadow-smooth">
      <div className="w-full top-0 bg-white z-10 shadow-smooth">
        <div className="text-2xl font-bold flex items-center justify-between px-4">
          <h2 className="rounded p-4">Resume</h2>
          <div className="pr-4">
            <span onClick={handleDownload}>
              <Tooltip title="Download">
                <FileDown />
              </Tooltip>
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-auto h-full">
        <PdfPreview />
      </div>
    </div>
  );
};

export default PdfPage;
