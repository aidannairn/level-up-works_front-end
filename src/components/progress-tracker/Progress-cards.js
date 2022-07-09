import React from 'react'
import StudentProfiles from '../studentProfiles/StudentProfiles'

function ProgressCards({ firstname, lastname }) {
    return (
    <div className='barContainer' style={{ }}>
        <h4>
            
        </h4>

        <ul className='progress'>
        {Array.from({ length: 15 }, (_, i) => (
          <li key={`progress-${i + 1}`}>
            <input
              type='checkbox'
              id={`num${i + 1}`}
              name='progress'
              value={i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    </div>
      )
  
}

export default ProgressCards

