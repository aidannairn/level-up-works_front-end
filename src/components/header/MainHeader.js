import { useState, useEffect, Fragment } from "react";
import jwtDecode from "jwt-decode"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import NavLinks from './NavLinks'
import ProjectBar from './ProjectBar'

import '../../styles/main-header.css'

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

const UserOptions = () => {
  const navigate = useNavigate()
  
  const { REACT_APP_URL: url } = process.env

  const handleUserLogout = async () => {
    try {
      await axios.delete(`${url}/logout`)
      navigate('/', { replace: true })
      window.location.reload()
    } catch (error) {
      if (error) console.log(error.response.data)
    }
  }

  return (
    <div id="user-options-container">
      <div id="user-options-arrow"></div>
      <div id="user-options">
        <h4 className="user-option">My Profile</h4>
        <h4 className="user-option">Settings</h4>
        <h4 className="user-option" onClick={handleUserLogout} >Log out</h4>
      </div>
    </div>
  )
}

const Header = props => {
  const [id, setID] = useState(null)
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [expire, setExpire] = useState('')
  const [areUserOptionsVisible, setAreUserOptionsVisible] = useState(false)

  const {
    layout,
    navLinks,
    projectBar,
    navBtns,
    setIsModalVisible
  } = props

  const navigate = useNavigate()

  const { REACT_APP_URL: url } = process.env  

  useEffect(() => {
    refreshToken()
  }, [])
  
  const refreshToken = async () => {
    try {
      const response = await axios.get(`${url}/token`)
      const decoded = jwtDecode(response.data.accessToken)
      setID(decoded.studentID)
      setFName(decoded.fName)
      setLName(decoded.lName)
      setProfilePic(decoded.profilePic)
      setExpire(decoded.exp)
      if (id) return document.location.reload()
    } catch (error) {
      if (error.response) {
        navigate('/', { replace: true })
      }
    }
  }

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date()
    
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get(`${url}/token`)
      config.headers.Authorization = `Bearer ${response.data.accessToken}`
      const decoded = jwtDecode(response.data.accessToken)
      setID(decoded.studentID)
      setFName(decoded.fName)
      setLName(decoded.lName)
      setProfilePic(decoded.profilePic)
      setExpire(decoded.exp)
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

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
            {id ? <Fragment key={id}>
              <img id='navbar-current-user-img' src={`https://cdn.filestackcontent.com/${profilePic}`} />
              <h2 onClick={handleUserClick}>{fName} {lName}</h2>
              {areUserOptionsVisible && <UserOptions />}
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

export default Header