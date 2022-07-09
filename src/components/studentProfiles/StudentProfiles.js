import '../../Styles/student-profile-viewer/student-cards.css';

const StudentProfile = props => {
  const {
    firstName,
    lastName,
    imgName
  } = props.student

  return (
    <div className='studentFig'>
      <figure>
        <img src={`/images/students/${imgName}`} alt='student' />
        <figcaption>{firstName} {lastName}</figcaption>
      </figure>
    </div>
  )
}

const StudentProfiles = () => {
  const studentsArray = [
    {
      firstName: 'Aiden',
      lastName: 'Andrews',
      imgName: 'aiden-andrews.png',
      id: 1
    },
    {
      firstName: 'Courtney',
      lastName: 'Bristol',
      imgName: 'courtney-bristol.png'
    },
    {
      firstName: 'Nagani',
      lastName: 'Cortes',
      imgName: 'nagani-cortes.png'
    },
    {
      firstName: 'Rawiri',
      lastName: 'Fletcher',
      imgName: 'rawiri-fletcher.png'
    },
    {
      firstName: 'Javier',
      lastName: 'Fuego',
      imgName: 'javier-fuego.png'
    },
    {
      firstName: 'Tokio',
      lastName: 'Han',
      imgName: 'tokio-han.png'
    },
    {
      firstName: 'Lisa',
      lastName: 'Horan',
      imgName: 'lisa-horan.png'
    },
    {
      firstName: 'Alice',
      lastName: 'Kindellan',
      imgName: 'alice-kindellan.png'
    },
    {
      firstName: 'Simon',
      lastName: 'Lane',
      imgName: 'simon-lane.png'
    },
    {
      firstName: 'Neveah',
      lastName: 'Machenry',
      imgName: 'neveah-machenry.png'
    },
    {
      firstName: 'Harry',
      lastName: 'McGrath',
      imgName: 'harry-mcgrath.png'
    },
    {
      firstName: 'Lucia',
      lastName: 'Mendez',
      imgName: 'lucia-mendez.png'
    },
    {
      firstName: 'Hanu',
      lastName: 'Nepe',
      imgName: 'hanu-nepe.png'
    },
    {
      firstName: 'Shane',
      lastName: "O'Monahan",
      imgName: 'shane-omonahan.png'
    },
    {
      firstName: 'Mark',
      lastName: "O'Leary",
      imgName: 'mark-oleary.png'
    },
  ]


return (
  <div className='studentCards'>
    {studentsArray.map((student, index) => {
      return <StudentProfile key={index} student={student} />
    })}
  </div>
  )
}

export default StudentProfiles
