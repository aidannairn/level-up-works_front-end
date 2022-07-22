import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProgressHeader from "../progress-tracker/ProgressHeader"
import ProgressCards from "../progress-tracker/Progress-cards"
import '../../Styles/student-profile-viewer/progress-tracker.css'



const ProgressTracker = () => {

  const [student, setStudent] = useState([]);
  const [complete, setComplete] = useState([])


  useEffect(() => {
    setStudent([])
    axios.get('http://localhost:4000/student-profiles/profile-list')
    .then(res => {
      setStudent(res.data)
      console.log('the first name is', res.data.name)
      console.log('the state is', student)
    })
  }, [])

  
  useEffect(() => {
    setComplete([])
    axios.get('http://localhost:4000/student-profiles/student-progress')
    .then(res => {
      setComplete(res.data)
      console.log('the state is', complete)
    })
  }, [])
  
  
  const progressBars = [];  
  for(let i = 0;i < 15;i++) {
    progressBars.push(<ProgressCards studentData={student} studentProgress={complete}/>);
  }

  return (
    <div className="scrollable">
      <ProgressHeader />
      {progressBars}


    </div>
  )
}



export default ProgressTracker
