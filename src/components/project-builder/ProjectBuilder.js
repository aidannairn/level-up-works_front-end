import { useState } from "react"

import ProjectBuilderContent from "./ProjectBuilderContent"
import Sidebar from "./Sidebar"

const ProjectBuilder = ({ currentUser, projectItems }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(projectItems[0].id)

  return (
    <div id='project-builder-container'>
      <Sidebar userImg={currentUser.image} 
        projectItems={projectItems} 
        currentMenuItem={currentMenuItem} setCurrentMenuItem={setCurrentMenuItem} 
      />
      <ProjectBuilderContent />
    </div>
  )
}

export default ProjectBuilder