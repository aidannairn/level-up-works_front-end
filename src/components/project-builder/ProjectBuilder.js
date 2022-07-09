import { useState } from "react"

import ProjectBuilderContent from "./ProjectBuilderContent"
import Sidebar from "./Sidebar"
import LearningObjectives from './LearningObjectives'
import Instruction from './Instruction'
import VideoTutorial from './VideoTutorial'

import '../../styles/project-builder/project-builder.css'

const ProjectBuilder = ({ currentUser, projectIndex, projectItems }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(projectItems[1])  

  const learningObjectives = {
    id: 'learningObjectives',
    component: LearningObjectives,
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
        }
      ]
    }
  }

  const instructions = {
    id: 'instructions',
    component: Instruction,
    isArrowNavEnabled: true,
    menuItem: 'Instructions',
    icon: 'steps.png',
    contents: []
  } 

  const videoTutorial = { 
    id: 'videoTutorial',
    component: VideoTutorial,
    isArrowNavEnabled: true,
    menuItem: 'Video Tutorial',
    icon: 'video.png',
    contents: []
  }

  const projectBuilderItems = {
    learningObjectives,
    instructions,
    videoTutorial
  }

  // If projectItem is an object - The value should be an array with 'insert' as the first item, and the contents data as the second item. Update projectBuilderItems accordingly.
  projectItems.map((projectItem, index) => {
    for (const key in projectItem) {
      if (projectItem[key][0] === 'insert') {
        projectItems[index] = projectBuilderItems[key]
        if (projectItem[key][1]) {
          projectItems[index].contents = projectItem[key][1]
        }
      }
    }
  })
  
  return (
    <div id='project-builder-container'>
      <Sidebar userImg={currentUser.image} 
        projectItems={projectItems} 
        currentMenuItem={currentMenuItem.id} setCurrentMenuItem={setCurrentMenuItem} 
      />
      <ProjectBuilderContent key={projectIndex} projectindex={projectIndex} projectItem={currentMenuItem} />
    </div>
  )
}

export default ProjectBuilder