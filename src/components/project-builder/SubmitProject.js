<<<<<<< HEAD
import '../../styles/project-builder/submit-project.css'
=======
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { PickerOverlay } from 'filestack-react-18'

import { UserContext } from '../../contexts/UserContext'
import AlertMessage from '../AlertMessage'

import '../../styles/project-builder/submit-project.css'

const {
  REACT_APP_FILESTACK_API_KEY: filestackKey,
  REACT_APP_URL: url
} = process.env
>>>>>>> main

const StudentActionsContainer = ({ content }) => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false)
  const [imageURL, setImageURL] = useState('')
  const [msg, setMsg] = useState(null)

  const { studentID } = useContext(UserContext)

  const {
    id,
    heading,
    paragraph,
    image,
    btnIcon,
    btnText,
    projectID
  } = content

  useEffect(() => {
    if (imageURL.length) {
      console.log(imageURL)
      axios.put(`${url}/student/project/${projectID}/student/${studentID}`, { imageURL })
      .then(res => { 
        setMsg(res.data)
      })
    }
  }, [imageURL])

  const handleFileUploadSuccess = (result) => {
    setImageURL(result.filesUploaded[0].url)
    setIsPickerOverlayVisible(false)
  }

  const handleClick = () => {
    if (id === 'sendPhoto') {
      setIsPickerOverlayVisible(!isPickerOverlayVisible)
    } else {
      console.log('No action is assigned to this button.')
    }
  }

  return (
    <div className="pb-sp-user-view-container">
      {isPickerOverlayVisible && (
        <PickerOverlay
          apikey={filestackKey}
          onSuccess={(result) => {
            handleFileUploadSuccess(result)
          }}
        />
      )}
      {msg !== null && <AlertMessage res={msg} />}
      <div className="pb-sb-view-img-wrapper">
        <img className='pb-sp-view-img' src={`images/student-builder/${image}`} alt="" />
      </div>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <div className="pb-sp-view-btn-container" onClick={handleClick}>
        <div className='pb-sp-view-btn'>
          <img src={`images/student-builder/submit-project/${btnIcon}`} alt="" />
          <h4>{btnText}</h4>
        </div>
      </div>
    </div>
  )
}

const SubmitProject = ({ content }) => {
  return (
    <div id="pb-submit-project-container" className='scrollable'>
      <StudentActionsContainer key={content.sendPhoto.id} content={content.sendPhoto} />
      <StudentActionsContainer key={content.callTeacher.id} content={content.callTeacher} />
    </div>
  )
}

export default SubmitProject