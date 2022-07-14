import axios from 'axios'
import React, { useState } from 'react'

const {
  REACT_APP_BACKEND_HOST: host,
  REACT_APP_BACKEND_PORT: port
} = process.env

const AuthForm = ({ formContent }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { image, heading, type } = formContent

  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleFormSubmit = e => {
    e.preventDefault()
    axios.post(`${host}${port}/login`, {
      type: type,
      email: email,
      password: password
    })
    .then(res => { 
      console.log('Logged In', res.data)
    })
  }

  return (
    <div className="am-form-container">
      <img src={`https://cdn.filestackcontent.com/${image}`} alt="" />
      <h2>{heading}</h2>
      <div className="am-auth-options">
        <h3>LOG IN</h3>
        <h3>SIGN UP</h3>
        <form onSubmit={handleFormSubmit}>
          <input type="email" value={email} onChange={handleEmailChange} />
          <input type="password" value={password} onChange={handlePasswordChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

const AuthModal = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  const studentsForm = {
    image: 'JZi75fITdCxEzqsPMuCV',
    heading: 'Students',
    type: 'Student'
  }

  const teachersForm = {
    image: 'XQDlhdD7TsCEhb8uMm7Z',
    heading: 'Teachers',
    type: 'Teacher'
  }

  return (
    <div id="auth-modal-bg">
      <div id="am-forms-container">
        <AuthForm formContent={studentsForm} />
        <AuthForm formContent={teachersForm} />
      </div>
    </div>
  )
}

export default AuthModal