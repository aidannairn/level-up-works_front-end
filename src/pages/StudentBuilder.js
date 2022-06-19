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

  const currentUser = {
    name: 'Rawiri Fletcher',
    image: 'rawiri-fletcher.png'
  }

  const projectItems = [
    {
      id: 'learningObjectives',
      menuItem: 'Learning Objectives',
      icon: 'objectives.png'
    },
    {
      id: 'instructions',
      menuItem: 'Instructions',
      icon: 'steps.png'
    },
    { 
      id: 'videoTutorial',
      menuItem: 'Video Tutorial',
      icon: 'video.png'
    },
    { 
      id: 'makeProject',
      menuItem: 'Make Project',
      icon: 'new-project.png'
    },
    { 
      id: 'submitProject',
      menuItem: 'Submit Project',
      icon: 'submit-project.png'
    },
    { 
      id: 'bonusChallenge',
      menuItem: 'Bonus Challenge',
      icon: 'prize.png'
    },
    { 
      id: 'takeTheQuiz',
      menuItem: 'Take The Quiz',
      icon: 'list.png'
    },
  ]

  return (
    <>
      <MainHeader layout='2' 
      projectBar={projectBar} 
      navBtns={navBtns} />
      <ProjectBuilder projectItems={projectItems} currentUser={currentUser} />
    </>
  )
}

export default StudentBuilder