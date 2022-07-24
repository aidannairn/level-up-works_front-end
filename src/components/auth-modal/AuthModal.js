import axios from 'axios'
import React, { useState } from 'react'

import '../../styles/auth-modal.css'

const {
  REACT_APP_URL: url
} = process.env

const AuthForm = ({ formContent, setIsModalVisible }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { image, heading, type } = formContent

  const handleEmailChange = e => setEmail(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const handleFormSubmit = e => {
    e.preventDefault()
    axios.post(`${url}/login`, {
      type: type,
      email: email,
      password: password
    })
    .then(res => { 
      setIsModalVisible(false)
      window.location.reload()
    })
  }

  return (
    <div className="am-form-container">
      <img src={`https://cdn.filestackcontent.com/${image}`} alt="" />
      <h2>{heading}</h2>
      <div className="am-auth-options">
        <h3 className='active'>LOG IN</h3>
        <h3>SIGN UP</h3>
      </div>
      <form className="am-auth-form" onSubmit={handleFormSubmit}>
        <input type="email" value={email} placeholder="Email Address" onChange={handleEmailChange} />
        <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />
        <input type="submit" value="Submit" />
      </form>
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
        <AuthForm formContent={studentsForm} setIsModalVisible={setIsModalVisible}/>
        <AuthForm formContent={teachersForm} setIsModalVisible={setIsModalVisible}/>
      </div>
    </div>
  )
}

export default AuthModal