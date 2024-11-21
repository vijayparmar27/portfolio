"use client";

import React from "react";
// import PdfPreview from "./view/PdfPreview";
import dynamic from "next/dynamic";

const PdfPreview = dynamic(() => import("./view/PdfPreview"), { ssr: false });

const PdfPage: React.FC = () => {
  return (
    <div className="h-screen px-6">
      <div className="bg-slate-500">
        <h1 className="text-2xl font-bold mb-4 p-4">Resume</h1>
        <PdfPreview />
      </div>
    </div>
  );
};

export default PdfPage;
