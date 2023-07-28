"use client";
import { PencilIcon } from "lib";
import { Card } from "components";
//import { Document, Page } from "react-pdf";
//import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import React, { useEffect, useRef, useState } from "react";
//import { pdfjs } from 'react-pdf';
//import thepdf from "../../../../../public/dummy.pdf"

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();



const Resume = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // const docs = [
  //   { uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
  // fileType: "docx",
  // filename: "demo.docx"
  // },
  // ];
  return (
    <Card className="my-4 rounded-sm w-full relative">
      <div className="w-full -mt-2">
        <p className="text-xl font-semibold">Resume</p>
        <PencilIcon className="text-gray-700 h-5 w-5 absolute top-2 right-2 hover:text-indigo-700 hover:cursor-pointer" />
        <hr className=" h-px -mx-4 my-3 bg-gray-800 border-0 dark:bg-gray-300" />
      </div>

      {/* <Document file="www.react-pdf.org/test.jpg" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      {/* <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} /> */}
    
    </Card>
  );
};
export default Resume;
