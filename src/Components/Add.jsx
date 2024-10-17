import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addProjectApi } from '../services/allApi';


function Add() {
    const [show, setShow] = useState(false);
    const [project, setProject] = useState({
        title: "", des: "", languages: "", demo: "", github: "", image: ""
    })
    const [preview, setPreview] = useState("")
    useEffect(() => {
        if (project.image) {
            setPreview(URL.createObjectURL(project.image))
        } else {
            setPreview("")
        }
    }, [project.image])

    const handleAddProject = async () => {
        console.log(project);
        const { title, des, languages, demo, github, image } = project
        if (!title || !des || !languages || !demo || !github || !image) {
            toast.warning("Enter Valid input")
        } else {
            const fd = new FormData()
            fd.append("title", title)
            fd.append("des", des)
            fd.append("languages", languages)
            fd.append("demo", demo)
            fd.append("github", github)
            fd.append("image", image)

            const header = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Token ${sessionStorage.getItem("token")}`
            }
            const res = await addProjectApi(fd,header)
            console.log(res)
            if (res.status == 200) {
                toast.success("Project Added!!")
                handleClose()
            }
            else {
                toast.error("Project Adding Failed!!")
            }
        }
    }
    const handleClose = () => {
        setProject({
            title: "", des: "", languages: "", demo: "", github: "", image: ""
        })
        setPreview()
        setShow(false);}
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn btn-warning' onClick={handleShow}>Add Project</button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <label>
                                <input type="file" onChange={(e) => setProject({ ...project, image: e.target.files[0] })} style={{ display: "none" }} />
                                <img src={preview ? preview : "https://cdn-icons-png.flaticon.com/512/4211/4211763.png"} alt="" className='img-fluid' />
                            </label>
                        </Col>
                        <Col>
                            <div>
                                <input type="text" onChange={(e) => setProject({ ...project, title: e.target.value })} placeholder='Enter Project Title' className='form-control mb-3' />
                                <input type="text" onChange={(e) => setProject({ ...project, des: e.target.value })} placeholder='Enter Project Discription' className='form-control mb-3' />
                                <input type="text" onChange={(e) => setProject({ ...project, languages: e.target.value })} placeholder='Enter Languages' className='form-control mb-3' />
                                <input type="text" onChange={(e) => setProject({ ...project, github: e.target.value })} placeholder='Enter GitHub Url' className='form-control mb-3' />
                                <input type="text" onChange={(e) => setProject({ ...project, demo: e.target.value })} placeholder='Enter Demo Url' className='form-control mb-3' />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddProject} >Upload</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Add