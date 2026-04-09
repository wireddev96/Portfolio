import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// @ts-ignore
import pdf_en from "../../Assets/../Assets/Résumé_en_Jakob_Rössner.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <h1 className="negative-letter-spacing page-section-title">
            English <strong className="purple">Resume</strong>
          </h1>
          <Document file={pdf_en} className="d-flex justify-content-center">
            <Page
              className="resume-document"
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
        </Row>

        <Row className="resume-download-row">
          <Button
            variant="primary"
            href={pdf_en}
            target="_blank"
            className="resume-download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download PDF
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
