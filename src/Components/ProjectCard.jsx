import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img  onClick={handleShow} style={{cursor:'pointer'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hZt4QxRFIJjzdCbIyzH8mbpacC9Sh1B7NA&s" />
                <Card.Body>
                    <Card.Title>Projects</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVNT5O9GdyT2S5MfTKySS-0N2b2Z0IXSgb2aEtB0eSDDhKFrMap6uw3jeFuNCYc1_IfY&usqp=CAU" alt="" />
                        </Col>
                        <Col>
                        <h5><span className='text-info'>Discription :</span>
                        Comprehensive platform meticulously crafted to simplify your project...</h5>
                        <p><span className='text-info'>Languages :</span>js,html,css</p>
                        <div className='mt-3 d-flex justify-content-between'>
                            <a href="">
                            <i className="fa-brands fa-github fa-lg" />
                            </a>
                            <a href="">
                            <i className="fa-solid fa-link fa-lg" />
                            </a>
                        </div>
                        </Col>

                    </Row>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default ProjectCard