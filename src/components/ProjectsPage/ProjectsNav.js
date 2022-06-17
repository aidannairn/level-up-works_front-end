import '../../Styles/StudentProjectsPage/ProjectsNav.css';


const ProjectsNav = () => {
  return (
      <div id='ProjectsNav'>
        <div id='levelButton'>
          <button>BEGINNER</button>
          <button>INTERMEDIATE</button>
          <button>ADVANCED</button>
        </div>
        <div id='viewButton'>
        <p>SHOW</p>
        <button>25</button>
          <button>50</button>
          <button>100</button>
        </div>
      </div>
  )
}

export default ProjectsNav
