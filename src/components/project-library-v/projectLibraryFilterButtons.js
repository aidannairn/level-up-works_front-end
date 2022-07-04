import { useState } from 'react'
import '../../styles/project-library-v/projectLibraryFilterButtons.css'

export default function ProjectLibraryFilterButtons() {
    const [filterLevel, setFilterLevel] = useState("beginner");
    const changeLevel = (event) => {
        setFilterLevel(event.target.value);
    };
    const [filterAmount, setFilterAmount] = useState('25');
    const changeAmount = (event) => {
        setFilterAmount(event.target.value);
    };
    const styledButton = { backgroundColor: 'rgb(0, 106, 245)', color: 'white' }
    
    return (
        <>
            <div className='pl-btn-container'>
                <div className='pl-left-btn'>
                    {filterLevel === 'beginner' ? <button style={styledButton} className='pl-filter-btn first-pl'>BEGINNER</button> :
                        <button value='beginner' onClick={changeLevel} className='pl-filter-btn first-pl'>BEGINNER</button>}
                    {filterLevel === 'intermediate' ? <button style={styledButton} className='pl-filter-btn'>INTERMEDIATE</button> :
                        <button value='intermediate' onClick={changeLevel} className='pl-filter-btn'>INTERMEDIATE</button>}
                    {filterLevel === 'advanced' ? <button style={styledButton} className='pl-filter-btn last-pl'>ADVANCED</button> :
                        <button value='advanced' onClick={changeLevel} className='pl-filter-btn last-pl'>ADVANCED</button>}
                </div>
                <div className='pl-right-btn'>
                    <span className='pl-right-text'>SHOW &nbsp;</span>
                    {filterAmount === '25' ? <button style={styledButton} className='pl-filter-btn first-pl'>25</button> :
                        <button value='25' onClick={changeAmount} className='pl-filter-btn first-pl'>25</button>}
                    {filterAmount === '50' ? <button style={styledButton} className='pl-filter-btn'>50</button> :
                        <button value='50' onClick={changeAmount} className='pl-filter-btn'>50</button>}
                    {filterAmount === '100' ? <button style={styledButton} className='pl-filter-btn last-pl'>100</button> :
                        <button value='100' onClick={changeAmount} className='pl-filter-btn last-pl'>100</button>}
                </div>
            </div>
        </>
    )
};
