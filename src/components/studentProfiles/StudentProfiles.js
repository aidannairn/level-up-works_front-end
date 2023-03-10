import React, { useEffect, useState } from 'react'
import axios from 'axios'

import StudentCards from './Student-cards';
import '../../styles/student-profile-viewer/student-cards.css';


const StudentProfiles = () => {

  const [students, setStudents] = useState([]);


  useEffect(() => {
    setStudents([])
    axios.get('http://localhost:4000/student-profiles/profile-picture-list')
    .then(res => {
      setStudents(res.data)
    })
  }, [])

  const studentCards = [];

  //mapping through data from back end to pass to Student-cards component.
  students.map((student, index) => (
    studentCards.push(<StudentCards studentData={student} key={index} />)
  ))

  return (
    <div className='scrollable'>
      <div className='studentCardContainter'>
        {studentCards}
      </div>
    </div>
  )
}

export default StudentProfiles