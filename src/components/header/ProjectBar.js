const ProjectBar = ({ projectBar }) => {
  const { name, steps } = projectBar

  const stepCircles = []

  for (let step = 0; step < steps; step++) {
    stepCircles.push(<div key={step} className='pb-step-circle'></div>)
  }

  return (
    <div id="header-pb-container">
      <div id='header-project-bar' >
        <div id="pb-desc">
          <h3>PROJECT</h3>
          <p>Introduction</p>
        </div>
        <div id="pb-number">1</div>
        <div id='pb-step-circles'>
          {stepCircles}
        </div>
      </div>
    </div>
  )
}

export default ProjectBar