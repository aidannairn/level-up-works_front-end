import React from 'react'
import '../../styles/project-library-v/projectLibrarySidebar.css'

const sidebar =[
{
    id: 1,
    title: 'SUBSCRIPTION',
    content: {
        option1: 'Free',
        option2: 'Premium'
        }
},
{
    id: 2,
    title: 'ACTIVITY TYPE',
    content: {
        option1: 'Animation',
        option2: 'Game',
        option3: 'Chatbot',
        option4: 'Augmented Reality'
    }
},
{
    id: 3,
    title: 'YEAR LEVEL',
    content: {
        option1: '1 - 4',
        option2: '5 - 6',
        option3: '7 - 8',
        option4: '9 - 13'
    }
},
{
    id: 4,
    title: 'SUBJECT MATTER',
    content: {
        option1: 'Computer Science',
        option2: 'Maths',
        option3: 'Science',
        option4: 'Language',
        option5: 'Art',
        option6: 'Music'
    }
}];


export default function ProjectLibrarySidebar({item, index}) {
    return (
        <>
            <div>
                {sidebar.map((item, index) => (
                    <h5>{item.title}</h5>
                            ))}
            </div>
        </>
    )
}
