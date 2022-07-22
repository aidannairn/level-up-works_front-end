import { useState } from "react"
import "../../styles/project-library-v/projectLibraryHeader.css"
import { useNavigate } from "react-router-dom"

export default function ProjectLibraryHeader({teacherName, teacherPic}) {
    const [showSettings, setShowSettings] = useState(true)

    const profileSettings = () => {
        setShowSettings(!showSettings)
    }

    const navigate = useNavigate()

    const goProfile = () => navigate("/teacher-profile")

    const goHome = () => navigate('/')


  return (
    <>
        <div className="pl-header-container">
            <div className="pl-header-left">
                <img onClick={goHome} src="images/star-logo.png" height={50} />
            </div>
            <div className="pl-header-middle-container">
                <div className="pl-header-middle-1"></div>
                <div className="pl-header-middle-2">
                    <h1 className="pl-header-btn" onClick={goHome}>HOME</h1>
                    <h1 className="pl-header-btn">PROJECTS</h1>
                    <h1 className="pl-header-btn">TEACHERS</h1>
                </div>
            </div>
            <div className="pl-header-right-container">
                <div className="pl-header-left-top">
                    LANG <img className="pl-nz-flag" src="../images/nz-flag.png" width={20} height={10}/><img className="pl-maori-flag" src="../images/maori-flag.png" width={20} height={10}/>
                </div>
                <div className="pl-header-left-bottom">
                    <img className="pl-header-profile-pic" src={`https://cdn.filestackcontent.com/${teacherPic}`} width={30} height={30}/>
                <div className="pl-header-profile-name" onClick={profileSettings}>
                    {teacherName}
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
            {showSettings ? (null) : (
            <>
                <div className="pl-settings-container">
                    <div className="pl-settings-content">
                    <div className="pl-settings-btn-1" onClick={goProfile}>My Profile</div>
                    <div className="pl-settings-btn-2">Settings</div>
                    <div className="pl-settings-btn-3">Log out</div>
                    </div>
                </div>
            </>
            )}
    </>
  )
}
