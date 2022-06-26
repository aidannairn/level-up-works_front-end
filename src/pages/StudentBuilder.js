import React from 'react'

import MainHeader from '../components/header/MainHeader'
import MakeProject from '../components/project-builder/MakeProject'
import SubmitProject from '../components/project-builder/SubmitProject'
import ProjectBuilder from '../components/project-builder/ProjectBuilder'

const StudentBuilder = () => {
  const testScreenshotBtn = () => {
    console.log('Test screenshot button')
  }
  // START Header Props
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
  // END Header Props

  const currentUser = {
    name: 'Rawiri Fletcher',
    image: 'rawiri-fletcher.png'
  }

  // START Student Project Builder Views
  const makeProject = { 
    id: 'makeProject',
    component: MakeProject,
    isArrowNavEnabled: true,
    menuItem: 'Make Project',
    icon: 'new-project.png',
    contents: [
      { id: 1, src: 'project.png'}
    ]
  }

  const submitProject = { 
    id: 'submitProject',
    component: SubmitProject,
    menuItem: 'Submit Project',
    icon: 'submit-project.png',
    contents: {
      sendPhoto: {
        id: 'sendPhoto',
        heading: 'Submit project photo',
        paragraph: 'After completing your project, take a screenshot of your project and upload it here.',
        image: 'project.png',
        btnIcon: 'gallery-icon.png',
        btnText: 'Send Photo'
      },
      callTeacher: {
        id: 'callTeacher',
        heading: 'Show your teacher',
        paragraph: 'If your teacher is in the same room as you, click the button below to let them know you are done.',
        image: 'teacher-computer.png',
        btnIcon: 'teacher-chalkboard.png',
        btnText: 'Call Teacher'
      },
    }
  }

  const bonusChallenge = { 
    id: 'bonusChallenge',
    menuItem: 'Bonus Challenge',
    icon: 'prize.png'
  }

  const takeTheQuiz = { 
    id: 'takeTheQuiz',
    menuItem: 'Take The Quiz',
    icon: 'list.png'
  }
// END Student Project Builder Views

  const projectItems = [
    { learningObjectives: 'insert' },
    { instructions: 'insert' },
    { videoTutorial: 'insert' },
    makeProject,
    submitProject,
    bonusChallenge,
    takeTheQuiz
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