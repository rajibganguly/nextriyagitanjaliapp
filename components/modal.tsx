import { Modal, Button } from "react-bootstrap";

const PdfViewerModal = ({ pdfName, pdfUrl, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title style={{fontWeight: '100'}}>{pdfName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src={pdfUrl}
          width="100%"
          height="500px"
          style={{ border: "none" }}
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PdfViewerModal;