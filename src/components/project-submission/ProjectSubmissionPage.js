import React from 'react'
import ProjectSubmissionBox from './projectSubmissionBox'
import '../../styles/project-submission/projectSubmissionPage.css'
import { data } from '../../data/data'

export default function ProjectSubmissionPage() {




    return (
        <>
            <div className='project-submission-content-parent'>
            <div className='project-submission-content-container'>
                <div className='project-submission-content-titles'>
                        <div className='project-submission-header'>PROJECT SUBMISSIONS</div>
                        <span className='project-submission-white-space'></span>
                        <div className='project-download-btn'><img src='images/projectSubmission/download-icon.svg' alt='download' width={15} /> &nbsp; DOWNLOAD FILES</div>
                        <div className='project-complete-btn'><img src='images/projectSubmission/tick-icon.svg' alt='download' width={25} /> &nbsp; MARK AS COMPLETE</div>
                </div>
                    <div className='project-submission-content-display'>
                        {data.map((item, index) => (
                            <ProjectSubmissionBox key={index} item={item} />
                        ))}
                </div>
            </div>
            </div>
        </>
    )
}

