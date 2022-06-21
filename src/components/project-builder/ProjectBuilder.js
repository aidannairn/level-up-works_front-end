import { useState } from "react"

import ProjectBuilderContent from "./ProjectBuilderContent"
import Sidebar from "./Sidebar"

import '../../styles/project-builder/project-builder.css'

const ProjectBuilder = ({ currentUser, projectItems }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(projectItems[4])

  return (
    <div id='project-builder-container'>
      <Sidebar userImg={currentUser.image} 
        projectItems={projectItems} 
        currentMenuItem={currentMenuItem.id} setCurrentMenuItem={setCurrentMenuItem} 
      />
      <ProjectBuilderContent id={currentMenuItem.id} contents={currentMenuItem.contents} />
    </div>
  )
}

export default ProjectBuilder