import ProjectBuilderContent from "./ProjectBuilderContent"
import Sidebar from "./Sidebar"

const ProjectBuilder = () => {
  return (
    <div id='project-builder-container'>
      <Sidebar />
      <ProjectBuilderContent />
    </div>
  )
}

export default ProjectBuilder