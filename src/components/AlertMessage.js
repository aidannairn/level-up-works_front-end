import { useState, useEffect } from 'react'

import '../styles/alert-message.css'

const AlertMessage = ({ res }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(true)

  useEffect(() => {
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