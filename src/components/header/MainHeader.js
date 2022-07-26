import { useState, useContext, Fragment } from "react";
import { Link } from 'react-router-dom'

import { UserContext } from '../../contexts/UserContext'
import NavLinks from './NavLinks'
import ProjectBar from './ProjectBar'

import "../../styles/main-header.css";

const NavFlags = ({ lang }) => {
  return (
    <div id="lang-container">
      {lang && <label htmlFor="language">Lang</label>}
      <div className="nav-lang-img-wrap">
        <img className='header-flag' src="images/nz-flag.png" alt="New Zealand flag." />
      </div>
      <div className="nav-lang-img-wrap">
        <img className='header-flag' src="images/maori-flag.png" alt="The Maori flag" />
      </div>
    </div>
  )
}

const UserOptions = ({ logout }) => {
  return (
    <div id="user-options-container">
      <div id="user-options-arrow"></div>
      <div id="user-options">
        {/* The following line routes to the teacher profile. Realistically it should route to either the student OR teacher profile. But nobody was assigned that page. */}
        <h4 className="user-option"><Link to='/teacher-profile'>My Profile</Link></h4>
        <h4 className="user-option">Settings</h4>
        <h4 className="user-option" onClick={logout} >Log out</h4>
      </div>
    </div>
  )
}

const Header = props => {
  const {
    userType,
    profilePic,
    fName,
    lName,
    handleUserLogout
  } = useContext(UserContext)

  const [areUserOptionsVisible, setAreUserOptionsVisible] = useState(false)

  const {
    layout,
    navLinks,
    projectBar,
    navBtns,
    setIsModalVisible
  } = props

  const handleUserClick = () => setAreUserOptionsVisible(!areUserOptionsVisible)

  const handleAuthClick = () => setIsModalVisible(true)

  return (
    <div id="header" className={`header-layout-${layout}`}>
      <div id="header-logo-wrapper">
        <img id="header-logo" src={`images/${layout === '1' ? 'star-logo' : 'star-logo-blue'}.png`} alt="Logo" />
      </div>
      {layout === '1' && <NavLinks navLinks={navLinks} />}
      {layout === '2' && <div id='layout-2-container'>
        {projectBar && <ProjectBar projectBar={projectBar} />}
        <div id="header-btn-container">
          {navBtns.map((btn, index) => {
            return <div key={index} className={`nav-btn nav-btn-${index}`} onClick={() => btn.action()}>{btn.name}</div>
          })}
        </div>
      </div>}
      {layout === '1' && 
        <div id='auth-lang-container'>
          <NavFlags lang/>
          <div id="auth-container">
            {userType ? <Fragment >
              <img id='navbar-current-user-img' src={`https://cdn.filestackcontent.com/${profilePic}`} />
              <h2 onClick={handleUserClick}>{fName} {lName}</h2>
              {areUserOptionsVisible && <UserOptions logout={handleUserLogout} />}
            </Fragment> : <>
              <i className="auth-icon fa fa-user-circle" aria-hidden="true"></i>
              <h2 onClick={handleAuthClick} >REGISTER | LOGIN</h2>
            </>}
          </div>
        </div>
      }
      {layout === '2' && <NavFlags />}
    </div>
  )
}

export default Header;
