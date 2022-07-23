import { useState, useEffect } from 'react'
import { PickerOverlay } from 'filestack-react-18'

import '../../styles/project-builder/submit-project.css'

const filestackKey = process.env.REACT_APP_FILESTACK_API_KEY

const StudentActionsContainer = ({ content }) => {
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false)
  const [imageURL, setImageURL] = useState()

  const {
    id,
    heading,
    paragraph,
    image,
    btnIcon,
    btnText
  } = content

  useEffect(() => {
    console.log(imageURL)
  }, [imageURL])
  


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
            setImageURL(result.filesUploaded[0].url)
            setIsPickerOverlayVisible(false)
          }}
        />
      )}
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