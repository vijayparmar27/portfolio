"use client";

import React from "react";
import dynamic from "next/dynamic";
import { SvgColor } from "@/components/svg-color";
import { Tooltip } from "@mui/material";

const PdfPreview = dynamic(() => import("./view/PdfPreview"), { ssr: false });

const PdfPage: React.FC = () => {
  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const link = document.createElement("a");
      link.href = "/pdfs/resume_vijay_parmar.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="bg-white h-full overflow-auto scroll-auto rounded shadow-lg">
      <div className="sticky top-0 bg-white z-10">
        <div className="text-2xl font-bold border-b-2 border-neutral-300 flex items-center justify-between px-4">
          <h2 className=" rounded p-4">Resume</h2>
          <div className="pr-4">
            <span onClick={handleDownload}>
              <Tooltip title="Download">
                <SvgColor
                  src={`/assets/icons/root/download.svg`}
                  sx={{ width: 34, height: 34 }}
                />
              </Tooltip>
            </span>
          </div>
        </div>
      </div>
      <div>
        <PdfPreview />
      </div>
    </div>
  );
};

export default PdfPage;
