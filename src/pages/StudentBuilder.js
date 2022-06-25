import React from 'react'

import LearningObjectives from '../components/project-builder/LearningObjectives'
import SubmitProject from '../components/project-builder/SubmitProject'
import Instruction from '../components/project-builder/Instruction'
import VideoTutorial from '../components/project-builder/VideoTutorial'
import MakeProject from '../components/project-builder/MakeProject'
import MainHeader from '../components/header/MainHeader'
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
  const learningObjectives = {
    id: 'learningObjectives',
    component: LearningObjectives,
    menuItem: 'Learning Objectives',
    icon: 'objectives.png',
    contents: {
      heading: 'Explore Scratch Blocks',
      desc: 'Learn the basic function of some scratch blocks such as "say", "wait", "go to" and "hide".',
      blocks: [
        {
          type: 'look',
          mainBlock: 'look-main-block.png',
          blockComponents: [
            'look-component-1.png',
            'look-component-2.png',
          ]
        },
        {
          type: 'control',
          mainBlock: 'control-main-block.png',
          blockComponents: [
            'control-component-1.png'
          ]
        },
        {
          type: 'motion',
          mainBlock: 'motion-main-block.png',
          blockComponents: [
            'motion-component-1.png'
          ]
        },
      ]
    }
  }

  const instructions = {
    id: 'instructions',
    component: Instruction,
    isArrowNavEnabled: true,
    menuItem: 'Instructions',
    icon: 'steps.png',
    contents: [
      { 
        id: 1,
        elements: [
          {
            type: 'heading',
            content: 'Join Scratch'
          },
          {
            type: 'paragraph',
            content: "If you haven't used Scratch before, you will need to join Scratch first."
          },
          {
            type: 'paragraphWithLink',
            content: {
              textBefore: "Go to https://scratch.mit.edu. Click on",
              textAfter: '',
              href: 'https://scratch.mit.edu',
              text: 'Join Scratch.',
              linkColor: '#F91D85'
            }
          },
          {
            type: 'image',
            content: 'instructions-join-scratch.png'
          },
          {
            type: 'paragraph',
            content: "Follow the instructions to join. You will need a username and a password that you will remember. If possible, you should also verify your email address so that you can Share projects later. Ask your teacher to help with this step if you don't have an email address, or if you are not sure what to do."
          }
        ]
      },
      {
        id: 2,
        elements: [
          {
            type: 'heading',
            content: 'Page Two'
          }
        ]
      }
    ]
  } 

  const videoTutorial = { 
    id: 'videoTutorial',
    component: VideoTutorial,
    isArrowNavEnabled: true,
    menuItem: 'Video Tutorial',
    icon: 'video.png',
    contents: [
      { id: 1, youtubeID: '-SjuiawRMU4'},
      { id: 2, youtubeID: 'y5-cApGYXss'},
      { id: 3, youtubeID: '-MIKW9Wcml0'},
    ]
  }

  const makeProject = { 
    id: 'makeProject',
    component: MakeProject,
    isArrowNavEnabled: true,
    menuItem: 'Make Project',
    icon: 'new-project.png',
    contents: [
      { id: 1, src: 'project.png'},
      { id: 2, src: 'project.png'},
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
    learningObjectives,
    instructions,
    videoTutorial,
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