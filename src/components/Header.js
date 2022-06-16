import '../Styles/header.css'

const Header = () => {
  return (
    <div id="header">
      <div id="header-logo-wrapper">
        <img id="header-logo" src="images/star-logo.png" alt="Logo" />
      </div>
      <nav>
        <a href="./" className="nav-option">Home</a>
        <a href="./" className="nav-option">Features</a>
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
          <i className="auth-icon fa fa-user-circle" aria-hidden="true"></i>
          <h2>REGISTER | LOGIN</h2>
        </div>

      </div>
    </div>
  )
}

export default Header