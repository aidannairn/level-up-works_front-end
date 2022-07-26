import { createContext, useState, useEffect } from 'react'
import jwtDecode from "jwt-decode"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState('')
  const [contactNum, setContactNum] = useState('')
  const [course, setCourse] = useState('')
  const [dob, setDob] = useState('')
  const [exp, setExp] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [school, setSchool] = useState('')
  const [studentID, setStudentID] = useState('')
  const [teacherID, setTeacherID] = useState('')

  const navigate = useNavigate()

  const { REACT_APP_URL: url } = process.env  

  useEffect(() => {
    refreshToken()
  }, [])
  
  const refreshToken = async () => {
    try {
      // Get a user token and decode the token so that the data can be used within the application.
      const response = await axios.get(`${url}/token`)
      const decoded = jwtDecode(response.data.accessToken)
      setUserType(decoded.type)
      setContactNum(decoded.contactNum)
      setCourse(decoded.course)
      setDob(decoded.dateOfBirth)
      setFName(decoded.firstName)
      setLName(decoded.lastName)
      setProfilePic(decoded.profilePic)
      setSchool(decoded.school)
      setStudentID(decoded.studentID)
      setTeacherID(decoded.teacherID)
      setExp(decoded.exp)
      if (userType.length) return document.location.reload()
      console.log(fName)
    } catch (error) {
      if (error.response) {
        navigate('/', { replace: true })
      }
    }
  }

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date()
    
    if (exp * 1000 < currentDate.getTime()) {
      const response = await axios.get(`${url}/token`)
      config.headers.Authorization = `Bearer ${response.data.accessToken}`
      const decoded = jwtDecode(response.data.accessToken)
      setUserType(decoded.type)
      setContactNum(decoded.contactNum)
      setCourse(decoded.course)
      setDob(decoded.dob)
      setFName(decoded.firstName)
      setLName(decoded.lastName)
      setProfilePic(decoded.profilePic)
      setSchool(decoded.school)
      setStudentID(decoded.studentID)
      setTeacherID(decoded.teacherID)
      setExp(decoded.exp)
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

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
    /* Create a UserContext Provider that will be wrapped around the Application. The values provided tothe UserContext Provider can then be used within the application without "prop drilling" */
    <UserContext.Provider value={{ userType, contactNum, course, dob, exp, fName, lName, profilePic, school, studentID, teacherID, handleUserLogout }} >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }