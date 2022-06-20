import React from 'react'

import MainHeader from '../components/header/MainHeader'
import ProjectBuilder from '../components/project-builder/ProjectBuilder'

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
      icon: 'objectives.png',
      content: {
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
    },
    {
      id: 'instructions',
      menuItem: 'Instructions',
      icon: 'steps.png'
    },
    { 
      id: 'videoTutorial',
      menuItem: 'Video Tutorial',
      icon: 'video.png',
      content: {
        type: 'videos',
        youtubeSources: [
          { id: 1, youtubeID: '-SjuiawRMU4'},
          { id: 2, youtubeID: 'y5-cApGYXss'},
          { id: 3, youtubeID: '-MIKW9Wcml0'},
        ]
      }
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