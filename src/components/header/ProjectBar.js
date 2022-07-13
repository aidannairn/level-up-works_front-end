const ProjectBar = ({ projectBar }) => {
  const { name, projects, currentProject, setProjectIndex } = projectBar

  const projectCircles = []

  const handleProjectClick = projectIndex => setProjectIndex(projectIndex)

  for (let project = 0; project < projects; project++) {
    projectCircles.push(<div key={project} className='pb-step-circle' onClick={() => handleProjectClick(project)}></div>)
  }

  return (
    <div id="header-pb-container">
      <div id='header-project-bar' >
        <div id="pb-desc">
          <h3>PROJECT</h3>
          <p>Introduction</p>
        </div>
        <div id="pb-num-steps-container">
          <div id='pb-step-circles'>
            {projectCircles.map((project, index) => {
              return currentProject === index 
                ? <div key={index} id="pb-number">{index + 1}</div>
                : project
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectBar