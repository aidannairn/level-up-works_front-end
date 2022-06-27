import React from 'react'
import MainHeader from '../components/header/MainHeader'
import '../styles/projectSubmission.css'
import ProjectSubmissionSidebar from '../components/projectSubmission/projectSubmissionSidebar';
import ProjectSubmissionMainContent from '../components/projectSubmission/projectSubmissionMainContent';
import SmallFooter from '../components/SmallFooter';
import NewSidebar from '../components/projectSubmission/newSidebar';


const navBtns = [
    {
        name: 'Take Screenshot',
        action: ''
    },
    { name: 'Help Center', action: '' },
    { name: 'More Projects', action: '' },
];



export default function ProjectSubmission() {

    return (
        <>
            <div className="project-submission-container">
                <MainHeader layout='2' navBtns={navBtns} />
                <div className='project-submission-content'>
                    <div className='project-submission-left'>
                        <NewSidebar />
                    </div>
                    <div className='project-submission-right'>
                        <ProjectSubmissionMainContent />
                    </div>
                </div>
                <SmallFooter />
            </div>
        </>
    );
}
