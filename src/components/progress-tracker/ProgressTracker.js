import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProgressHeader from "./ProgressHeader"
import ProgressCards from "./Progress-cards"
import '../../styles/student-profile-viewer/progress-tracker.css'


const ProgressTracker = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents([])
    axios.get('http://localhost:4000/student-profiles/profile-picture-list')
    .then(res => {
      setStudents(res.data)
       console.log(res.data)
    })
  }, [])

  const progressBars = []; 
  
  students.map((student, index) => {
      progressBars.push(<ProgressCards studentData={student} key={index}/>);
  })

  return (
    <div className="scrollable">
      <ProgressHeader />
      {progressBars}
    </div>
  )
}


export default ProgressTracker
