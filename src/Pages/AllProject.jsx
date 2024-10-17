import React from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'

function AllProject() {
  return (
    <>
        <Header/>
    <div className='container-fluid p-3'>
      <h3>All Projects</h3>
      <div>
        <ProjectCard/>
      </div>
    </div>

    </>
  )
}

export default AllProject