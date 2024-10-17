import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

function Edit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-solid fa-pen-to-square fa-xl" />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <label>
                                <input type="file" style={{ display: "none" }} />
                                <img src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png" alt="" className='img-fluid' />
                            </label>
                        </Col>
                        <Col>
                            <div>
                                <input type="text" placeholder='Enter Project Title' className='form-control mb-3' />
                                <input type="text" placeholder='Enter Project Discription' className='form-control mb-3' />
                                <input type="text" placeholder='Enter Languages' className='form-control mb-3' />
                                <input type="text" placeholder='Enter GitHub Url' className='form-control mb-3' />
                                <input type="text" placeholder='Enter Demo Url' className='form-control mb-3' />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Edit