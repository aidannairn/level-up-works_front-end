import React from 'react'
import '../../styles/project-submission/modal.css'

export default function Modal({closeModal, name, submitted}) {
    return (
        <>
            <div className='modal-background'>
                <div className='modal-container'>
                    <div className='modal-image'>
                        <img src={`/images/projectSubmission/${submitted}`} alt='' />
                    </div>
                    <div className='modal-footer'>
                        {name}'S PROJECT
                    </div>
                    <button className='modal-close' onClick={() => closeModal(false)}> close </button>
                </div>
            </div>
        </>
    )
}
