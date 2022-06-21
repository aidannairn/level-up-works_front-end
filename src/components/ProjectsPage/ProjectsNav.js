import '../../Styles/StudentProjectsPage/ProjectsNav.css';


const ProjectsNav = () => {
  return (
      <div id='ProjectsNav'>
        <div id='levelButton'>
          <label class="radio-button">
            <input type="radio" name="level"></input>
            <span>BEGINNER</span>
          </label>
          <label class="radio-button">
            <input type="radio" name="level"></input>
            <span>INTERMEDIATE</span>
          </label>
          <label class="radio-button">
            <input type="radio" name="level"></input>
            <span>ADVANCED</span>
          </label>
        </div>
        <div id='viewButton'>
          <label class="radio-button2">SHOW
            <input type="radio" name="show"></input>
            <span>25</span>
          </label>
          <label class="radio-button2">
            <input type="radio" name="show"></input>
            <span>50</span>
          </label>
          <label class="radio-button2">
            <input type="radio" name="show"></input>
            <span>100</span>
          </label>
        </div>
      </div>
  )
}

export default ProjectsNav
