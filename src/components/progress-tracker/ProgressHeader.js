import '../../Styles/student-profile-viewer/progress-tracker.css'

const ProgressHeader = ({ text }) => {

  return (
    <div className='Heading-container'>
     <h2>{text}</h2>
     <p>EXPORT AS SPREADSHEET</p>
    </div>
  )
}

ProgressHeader.defaultProps = {
    text: 'BEGINNER COURSE'
}

export default ProgressHeader
