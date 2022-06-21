import React from 'react'
import MainHeader from '../components/header/MainHeader'
import SideBar from '../components/projectSubmission/SideBar';
import '../styles/projectSubmission.css'
import StudentCards from '../components/projectSubmission/studentCards';
import PSFooter from '../components/projectSubmission/psFooter';

export default function ProjectSubmission() {
    return (
        <>
        <div className="psMainCompartment">
                <MainHeader />
                <SideBar />
                <div className='psRightSide'>
                    <div className='psInnerRightSide'>
                        <StudentCards />
                    </div>
                </div>
            </div>
            <PSFooter />
        </>
    );
}
