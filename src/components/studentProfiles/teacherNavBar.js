import '../../styles/teacherNavBar.css'

const TeacherNavBar = () => {
  return (
    <div id="header">
      <div id="header-logo-wrapper">
        <img id="header-logo" src="images/star-logo.png" alt="Logo" />
      </div>
      <nav>
        <a href="./" className="nav-option">Home</a>
        <a href="./" className="nav-option">Projets</a>
        <a href="./" className="nav-option">Teachers</a>
      </nav>
      <div id='auth-lang-container'>
        <div id="lang-container">
          <label htmlFor="language">Lang</label>
          <img className='header-flag
          ' src="images/nz-flag.png" alt="New Zealand flag." />
          <img className='header-flag
          ' src="images/maori-flag.png" alt="The Maori flag" />
        </div>
        <div id="auth-container">
          <img className="profile-photo" src='images/Unknown-4.png'/>
          <h2>RAWIRI FLETCHER</h2>
        </div>

      </div>
    </div>
  )
}

export default TeacherNavBar;