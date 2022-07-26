import { useState, useEffect } from 'react'

import '../styles/alert-message.css'

const AlertMessage = ({ res }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(true)

  useEffect(() => {
    // When the AlertMessage is rendered. Display the AlertMessage for X amount of time. Then hide the alert.
    setTimeout(() => {
      setIsAlertVisible(false)
    }, 6000)
  }, [])
  
  return (
    <>
      { isAlertVisible && 
        <div className={`alert-msg-container ${res.type}`}>
          <p><span>{res.type}!</span> {res.msg}</p>
        </div>
      }
    </>
  )
}

export default AlertMessage