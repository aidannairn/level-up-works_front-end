import React, { useState } from 'react'
import './newSidebar.css'

export default function NewSidebar() {

        const [active, setActive] = useState(false);
        const activateNav = () => {
            setActive(!active);
    };
    
    return (
        <>
            <div className='new-sidebar-container'>
                <div className='new-sidebar-profile-pic'>
                    <img src='images/sideNavBar/jasmina-salvador.png' alt=' ' />
                </div>
                <div className={active ? 'sideBarIcon' : 'sideBar'}>
                    <div className='sidebarIcons'>
                        <img src={active ? 'images/sideNavBar/progress-icon-2x.png' : 'images/sideNavBar/progress-icon.png'} /><span className='sideBarText' style={{ display: active ? "none" : "block" }}>PROGRESS TRACKER</span>
                                
                            </div>
                            <div className='sidebarIcons'>
                        <img src={active ? 'images/sideNavBar/student-icon-2x.png' : 'images/sideNavBar/student-icon.png'} />
                                <div className='sideBarText' style={{ display: active ? "none" : "block" }}>STUDENT PROFILES</div>
                            </div>
                            <div className='sidebarIcons'>
                                <img src={active ? 'images/sideNavBar/help-icon-2x.png' : 'images/sideNavBar/help-icon.png'} />
                                <div className='sideBarText' style={{ display: active ? "none" : "block" }}>HELP REQUESTS</div>
                            </div>
                            <div className='sidebarIcons'>
                                <img src={active ? 'images/sideNavBar/submit-icon-2x.png' : 'images/sideNavBar/submit-icon.png'} />
                                <div className='sideBarText' style={{ display: active ? "none" : "block" }}>PROJECT SUBMISSIONS</div>
                            </div>
                            <div className='sidebarIcons'>
                                <img src={active ? 'images/sideNavBar/library-icon-2x.png' : 'images/sideNavBar/library-icon.png'} />
                                <div className='sideBarText' style={{ display: active ? "none" : "block" }}>PROJECT LIBRARY</div>
                            </div>
                </div>
                <div className='sidebarSwitch'>
                    
                            
                            <div className='sideNavBarMenu' onClick={activateNav}>
                                {!active ? <img className='openedSideBar' src='images/sideNavBar/open-left.png' alt=' ' /> : <img className='closedSideBar' src='images/sideNavBar/open-right.png' alt=' ' />}
                            </div>
                </div>
                <div className='sidebarBottom'>

                            <div className='sidebarBottomIcons'>
                                <img src={active ? 'images/sideNavBar/user-icon-2x.png' : 'images/sideNavBar/user-icon.png'} />
                                <div className='sideBottomText' style={{ display: active ? "none" : "block" }}>Profile</div>
                            </div>
                            <div className='sidebarBottomIcons'>
                                <img src={active ? 'images/sideNavBar/settings-icon-2x.png' : 'images/sideNavBar/settings-icon.png'} />
                                <div className='sideBottomText' style={{ display: active ? "none" : "block" }}>Settings</div>
                            </div>
                            <div className='sidebarBottomIcons'>
                                <img src={active ? 'images/sideNavBar/logout-icon-2x.png' : 'images/sideNavBar/logout-icon.png'} />
                                <div className='sideBottomText' style={{ display: active ? "none" : "block" }}>Log out</div>
                            </div>
                </div>
            </div>
        </>
    )
}
