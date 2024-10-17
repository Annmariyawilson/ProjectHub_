import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div className='container-fluid bg-primary p-3'>
    <Row>
        <Col>
        <h4 style={{color:'white'}}> Project Hub 2024</h4>
        <p style={{textAlign:'justify',color:'white'}}>Project Hub is a Project Management System (PMS), a comprehensive platform meticulously crafted to simplify and enhance your project and task management endeavours.</p>
        </Col>
        <Col>
        <h4 style={{color:'white'}}>Links</h4>
        <div className='d-flex flex-column'>
            <Link to={'/'} className='text-info'>Landing</Link>
            <Link to={'/auth'} className='text-info'>Login</Link>
            <Link to={'/projects'} className='text-info'>All Projects</Link>
        </div>
        </Col>
        <Col>
        <h4 style={{color:'white'}}>FeedBacks</h4>
        <textarea name="" id="" className='form-control mt-3'></textarea>
        <button className='btn btn-success mt-3'>Submit</button>
        </Col>
    </Row>
   </div>
   </>
  )
}

export default Footer