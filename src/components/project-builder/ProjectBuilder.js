import { useState } from "react"

import videoTutorialsJSON from '../../videoTutorials.json'
import ProjectBuilderContent from "./ProjectBuilderContent"
import Sidebar from "./Sidebar"
import LearningObjectives from './LearningObjectives'
import VideoTutorial from './VideoTutorial'

import '../../Styles/project-builder/project-builder.css'

const ProjectBuilder = ({ currentUser, projectIndex, projectItems }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(projectItems[0])  

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

  const videoTutorial = { 
    id: 'videoTutorial',
    component: VideoTutorial,
    isArrowNavEnabled: true,
    menuItem: 'Video Tutorial',
    icon: 'video.png',
    contents: videoTutorialsJSON[projectIndex]
  }

  const projectBuilderItems = {
    learningObjectives,
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
      <ProjectBuilderContent key={projectIndex} projectindex={projectIndex} projectItem={currentMenuItem} />
    </div>
  )
}

export default ProjectBuilder