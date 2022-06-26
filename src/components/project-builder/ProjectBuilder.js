import { useState } from "react"

import ProjectBuilderContent from "./ProjectBuilderContent"
import Sidebar from "./Sidebar"
import LearningObjectives from './LearningObjectives'
import Instruction from './Instruction'
import VideoTutorial from './VideoTutorial'

import '../../styles/project-builder/project-builder.css'

const ProjectBuilder = ({ currentUser, projectItems }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(projectItems[0])

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

  const projectBuilderItems = {
    learningObjectives,
    instructions,
    videoTutorial
  }

  projectItems.map((projectItem, index) => {
    for (const key in projectItem) {
      if (projectItem[key] === 'insert') {
        projectItems[index] = projectBuilderItems[key]
      }
    }
  })
  
  return (
    <div id='project-builder-container'>
      <Sidebar userImg={currentUser.image} 
        projectItems={projectItems} 
        currentMenuItem={currentMenuItem.id} setCurrentMenuItem={setCurrentMenuItem} 
      />
      <ProjectBuilderContent projectItem={currentMenuItem} />
    </div>
  )
}

export default ProjectBuilder