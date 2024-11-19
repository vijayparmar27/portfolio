"use client";

import React from "react";
// import PdfPreview from "./view/PdfPreview";
import dynamic from "next/dynamic";

const PdfPreview = dynamic(() => import("./view/PdfPreview"), { ssr: false });

const PdfPage: React.FC = () => {
  //   const pdfUrl = "/assets/"; // Replace with the path to your PDF file
  // const pdfUrl = "/documents/resume_vijay_parmar.pdf"; // Replace with the path to your PDF file

  // const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const result = e.target?.result;
  //       if (result) {
  //         setSelectedFile(result as string);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>

      {/* <div className="mb-4">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      {selectedFile && <PdfPreview file={selectedFile} />} */}
      <PdfPreview />
    </div>
  );

  // return (
  //   <div>
  //     <h1>PDF Preview</h1>
  //     <PdfPreview />
  //     {/* <a href={pdfUrl} download>
  //       Download PDF
  //     </a> */}
  //   </div>
  // );
};

export default PdfPage;
