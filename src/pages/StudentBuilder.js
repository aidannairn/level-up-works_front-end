import React from 'react'

import MainHeader from '../components/header/MainHeader'
import ProjectBuilder from '../components/project-builder/ProjectBuilder'
import '../styles/project-builder.css'

const StudentBuilder = () => {
  const testScreenshotBtn = () => {
    console.log('Test screenshot button')
  }

  const navBtns = [
    { name: 'Take Screenshot', 
      action: testScreenshotBtn
    },
    { name: 'Ask Teacher for help', action: '' },
    { name: 'More Projects', action: '' },
  ]

  const projectBar = {
    name: 'Introduction',
    steps: 14
  }

  return (
    <>
      <MainHeader layout='2' 
      projectBar={projectBar} 
      navBtns={navBtns} />
      <ProjectBuilder />
    </>
  )
}

export default StudentBuilder