import React, { useState } from 'react'
import './projectSubmissionSidebar.css'

export default function ProjectSubmissionSidebar() {

    const [active, setActive] = useState(false)
    const activateNav = () => {
        setActive(!active)
    }

    return (
        <>
            <div className='sideBarContainer'>
                            <div className='sidebarProfile'>
                                <img src='images/sideNavBar/jasmina-salvador.png' alt=' ' />
                            </div>
                <div className={active ? 'sideBarIcon' : 'sideBar'}>
                    <nav className='iconHolder'>
                        <ul className={active ? 'ul-item icon' : 'ul-item list'}>
                            
                            <div className='sidebarIcons'>
                                <img src='images/sideNavBar/progress-icon.png' alt=' ' /><span className='sideBarText' style={{ display: active ? "none" : "block" }}>PROGRESS TRACKER</span>
                                
                            </div>
                            <div className='sidebarIcons'>
                                <img src='images/sideNavBar/student-icon.png' alt=' ' />
                                <div className='sideBarText' style={{ display: active ? "none" : "block" }}>STUDENT PROFILES</div>
                            </div>
                            <div className='sidebarIcons'>
                                <img src='images/sideNavBar/help-icon.png' alt=' ' />
                                <div className='sideBarText' style={{ display: active ? "none" : "block" }}>HELP REQUESTS</div>
                            </div>
                            <div className='sidebarIcons'>
                                <img src='images/sideNavBar/submit proj dark.png' alt=' ' />
                                <div className='sideBarText' style={{ display: active ? "none" : "block" }}>PROJECT SUBMISSIONS</div>
                            </div>
                            <div className='sidebarIcons'>
                                <img src='images/sideNavBar/library-icon.png' alt=' ' />
                                <div className='sideBarText' style={{ display: active ? "none" : "block" }}>PROJECT LIBRARY</div>
                            </div>
                            
                            
                            <div className='sideNavBarMenu' onClick={activateNav}>
                                {!active ? <img className='openedSideBar' src='images/sideNavBar/open-left.png' alt=' ' /> : <img className='closedSideBar' src='images/sideNavBar/open-right.png' alt=' ' />}
                            </div>
                            <div className='sidebarBottomIcons'>
                                <img src='images/sideNavBar/user-icon.png' alt=' ' />
                                <div className='sideBottomText' style={{ display: active ? "none" : "block" }}>Profile</div>
                            </div>
                            <div className='sidebarBottomIcons'>
                                <img src='images/sideNavBar/settings-icon.png' alt=' ' />
                                <div className='sideBottomText' style={{ display: active ? "none" : "block" }}>Settings</div>
                            </div>
                            <div className='sidebarBottomIcons'>
                                <img src='images/sideNavBar/logout-icon.png' alt=' ' />
                                <div className='sideBottomText' style={{ display: active ? "none" : "block" }}>Log out</div>
                            </div>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
