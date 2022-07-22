import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProgressCards from "./Progress-cards"
import '../../styles/student-profile-viewer/progress-tracker.css'


const ProgressButtons = () => {

  const [complete, setComplete] = useState([]);

  useEffect(() => {
    setComplete([])
    axios.get('http://localhost:4000/student-profiles/student-progess')
    .then(res => {
      setComplete(res.data)
    })
  }, [])

  const progressBtns = [];

  complete.map((complete, index) => {
    progressBtns.push(<ProgressCards progressData={complete} key={index}/>)
  })

console.log()

  return (
    <div>
      {progressBtns}
    </div>
  )
}

export default ProgressButtons