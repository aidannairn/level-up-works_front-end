import { useState } from "react"

import ProjectBuilderContent from "./ProjectBuilderContent"
import Sidebar from "./Sidebar"

import '../../styles/project-builder/project-builder.css'

const ProjectBuilder = ({ currentUser, projectItems }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(projectItems[2])

  return (
    <div id='project-builder-container'>
      <Sidebar userImg={currentUser.image} 
        projectItems={projectItems} 
        currentMenuItem={currentMenuItem.id} setCurrentMenuItem={setCurrentMenuItem} 
      />
      <ProjectBuilderContent id={currentMenuItem.id} content={currentMenuItem.content} />
    </div>
  )
}

export default ProjectBuilder