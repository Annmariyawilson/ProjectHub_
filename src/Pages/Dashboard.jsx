import React from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import Add from '../Components/Add'
import Edit from '../Components/Edit'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <>
    <Header/>
    <div className='container-fluid'>
      <h2>User Project</h2>
      <Row>
        <Col sm={12} md={8}>
        <div className='w-100 border shadow border-dark p-3 my-3'>
          <Add/>
          <div className='m-2 px-1 py-5 bg-light border'>

        <div className='border shadow border-2 d-flex justify-content-between p-3'>
          <h4>Project 1</h4>
          <div>
            <a href="" className='btn'><i className="fa-brands fa-github fa-xl" /></a>
            <Edit/>
            <button className='btn'>
            <i className="fa-solid fa-trash fa-xl" style={{color: "#c00215",}} />
            </button>
          </div>
        </div>

          </div>
          </div>
          </Col>
          <Col sm={12} md={4}>
          <Profile/>
          </Col>
      </Row>
    </div>
    </>
  )
}

export default Dashboard