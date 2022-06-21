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
    },
    {
      id: 'instructions',
      menuItem: 'Instructions',
      icon: 'steps.png',
      contents: [
        {
          type: 'instructionsPage',
          pages: [
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
            ]},
            {
              id: 2,
              elements: [
              {
                type: 'heading',
                content: 'Page Two'
              }
            ]}
          ]
        } 
      ]
    },
    { 
      id: 'videoTutorial',
      menuItem: 'Video Tutorial',
      icon: 'video.png',
      contents: [{
        type: 'videos',
        youtubeSources: [
          { id: 1, youtubeID: '-SjuiawRMU4'},
          { id: 2, youtubeID: 'y5-cApGYXss'},
          { id: 3, youtubeID: '-MIKW9Wcml0'},
        ]
      }]
    },
    { 
      id: 'makeProject',
      menuItem: 'Make Project',
      icon: 'new-project.png',
      contents: [{
        type: 'images',
        imageSources: [
          { id: 1, src: 'project.png'}
        ]
      }]
    },
    { 
      id: 'submitProject',
      menuItem: 'Submit Project',
      icon: 'submit-project.png',
      contents: {
        sendPhoto: {
          heading: 'Submit project photo',
          paragraph: 'After completing your project, take a screenshot of your project and upload it here.',
          image: 'project.png',
          btnIcon: 'gallery-icon.png',
          btnText: 'Send Photo'
        },
        callTeacher: {
          heading: 'Show your teacher',
          paragraph: 'If your teacher is in the same room as you, click the button below to let them know you are done.',
          image: 'teacher-computer.png',
          btnIcon: 'teacher-chalkboard.png',
          btnText: 'Call Teacher'
        },
      }
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