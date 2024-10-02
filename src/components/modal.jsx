import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LoginForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Login Details Here: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username "
          
          
        />
        </Modal.Body>
        <Modal.Body>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Password( It should contain 8 characters )"
          
          
        /> </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginForm;