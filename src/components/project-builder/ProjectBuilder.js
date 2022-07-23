import { useState, useContext } from "react"

import { UserContext } from "../../contexts/UserContext"
import ProjectBuilderContent from "./ProjectBuilderContent"
import Sidebar from "./Sidebar"
import LearningObjectives from './LearningObjectives'
import Instruction from './Instruction'
import VideoTutorial from './VideoTutorial'

import '../../styles/project-builder/project-builder.css'

const ProjectBuilder = ({ currentUser, projectIndex, projectItems }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(projectItems[0]) 
  
  const user = useContext(UserContext)

  const learningObjectives = {
    id: 'learningObjectives',
    component: LearningObjectives,
    menuItem: 'Learning Objectives',
    icon: 'objectives.png',
    content: {}
  }

  const instructions = {
    id: 'instructions',
    component: Instruction,
    isArrowNavEnabled: true,
    menuItem: 'Instructions',
    icon: 'steps.png',
    contents: []
  } 

  const video = { 
    id: 'videoTutorial',
    component: VideoTutorial,
    menuItem: 'Video Tutorial',
    icon: 'video.png',
    content: {}
  }

  const projectBuilderItems = {
    learningObjectives,
    instructions,
    video
  }

  // If projectItem only includes one property - The key is to reference one of the project builder items declared above. The value of the key will then be used to replace the project builder item's content.
  projectItems.map((projectItem, index) => {
    if (Object.keys(projectItem).length === 1) {
      for (const key in projectItem) {
        projectItems[index] = projectBuilderItems[key]
        const contentType = "content" in projectItems[index] ? 'content' : 'contents'
        projectItems[index][contentType] = projectItem[key]
      }
    }
  })
  
  return (
    <div id='project-builder-container'>
      <Sidebar userImg={user.profilePic} 
        projectItems={projectItems} 
        currentMenuItem={currentMenuItem.id} setCurrentMenuItem={setCurrentMenuItem} 
      />
      <ProjectBuilderContent key={projectIndex} projectindex={projectIndex} projectItem={currentMenuItem} />
    </div>
  )
}

export default ProjectBuilder