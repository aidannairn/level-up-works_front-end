import React, { useState } from 'react'
import './projectSubmissionWhiteBox.css'

export default function ProjectSubmissionWhiteBox(props) {


    const [checkbox, setCheckbox] = useState(false)
    const tickCheckbox = () => {
        setCheckbox(!checkbox)
    }





        return (
            <>
                <div className='white-box-container'>
                    <label class="tick-box-container">
                        <input onClick={tickCheckbox} type="checkbox" checked={checkbox ? 'checked' : ''}></input>
                        <span class="checkmark"></span>
                    </label>
                    <div className='white-box-inner-container'>
                        <div className='project-submission-profile-pic'>
                            <img src={props.picture} alt=' ' width={50} />
                        </div>
                        <div className='project-submission-submit-details'>
                            <div className='project-submitted-text'>
                                {props.user} submitted thier project
                            </div>
                            <div  className='project-submitted-screen-shot'>
                                <img src={props.work} alt='' width={200} /> <br></br>
                                <img src="images/projectSubmission/zoom-icon.svg" alt=' ' />ENLARGE PHOTO
                            </div>
                        </div>
                        <span className='project-submission-white-box-white-space'></span>
                        <div className='project-submission-time-stamp'>
                            <p>{props.date}</p>
                            <p>{props.time}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

