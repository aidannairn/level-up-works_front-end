import axios from 'axios'
import React, { useState } from 'react'

import AlertMessage from '../AlertMessage'
import '../../styles/auth-modal.css'

const {
  REACT_APP_URL: url
} = process.env

const AuthForm = ({ formContent, setIsModalVisible, isSignUp, setIsSignUp }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [msg, setMsg] = useState(null)

  const { image, heading, type } = formContent

  const handleFirstNameChange = e => setFirstName(e.target.value)
  const handleLastNameChange = e => setLastName(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)
  const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value)

  const handleFormSubmit = e => {
    e.preventDefault()
    let route = isSignUp ? 'signup' : 'login'
    const loginParams = { type, email, password }
    const signupParams = { type, firstName, lastName, email, password }

    const body = isSignUp ? signupParams : loginParams
    
    if (isSignUp && (password !== confirmPassword)) return setMsg({ type: 'error', msg: 'Your passwords do not match. Please try again.'})

    axios.post(`${url}/${route}`, body)
    .then(res => { 
      setIsModalVisible(false)
      window.location.reload()
    })
  }

  return (
    <div id="am-form-wrapper">
      {msg !== null && <AlertMessage res={msg} />}
      <div className="am-form-container">
        <img src={`https://cdn.filestackcontent.com/${image}`} alt="" />
        <h2>{heading}</h2>
        <div className="am-auth-options">
          <h3 id="auth-form-login-btn" onClick={() => setIsSignUp(!isSignUp)} className={!isSignUp ? 'active' : 'inactive'}>LOG IN</h3>
          <h3 id="auth-form-signup-btn" onClick={() => setIsSignUp(!isSignUp)} className={isSignUp ? 'active' : 'inactive'}>SIGN UP</h3>
        </div>
        <form className="am-auth-form" onSubmit={handleFormSubmit}>
          {isSignUp && <>
            <input type="text" value={firstName} placeholder="First Name" onChange={handleFirstNameChange} />
            <input type="text" value={lastName} placeholder="Last Name" onChange={handleLastNameChange} />
          </>}
          <input type="email" value={email} placeholder="Email Address" onChange={handleEmailChange} />
          <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
          {isSignUp && <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={handleConfirmPasswordChange} />}
          <input type="submit" value={isSignUp ? 'Sign Up' : 'Login'} />
        </form>
      </div>
    </div>
  )
}

const AuthModal = ({ setIsModalVisible }) => {
  const [isSignUp, setIsSignUp] = useState(false)

  const studentsForm = {
    image: 'JZi75fITdCxEzqsPMuCV',
    heading: 'Students',
    type: 'Student'
  }

  const teachersForm = {
    image: 'PkNmErS5CB8oj3yBA8zw',
    heading: 'Teachers',
    type: 'Teacher'
  }

  const handleModalClose = () => setIsModalVisible(false)

  return (
    <div id="auth-modal-bg">
      <div id="am-forms-container">
        <i id="am-modal-esc" className="fa fa-times" aria-hidden="true" onClick={handleModalClose} ></i>
        <AuthForm isSignUp={isSignUp} setIsSignUp={setIsSignUp} formContent={studentsForm} setIsModalVisible={setIsModalVisible}/>
        <AuthForm isSignUp={isSignUp} setIsSignUp={setIsSignUp} formContent={teachersForm} setIsModalVisible={setIsModalVisible}/>
      </div>
    </div>
  )
}

export default AuthModal