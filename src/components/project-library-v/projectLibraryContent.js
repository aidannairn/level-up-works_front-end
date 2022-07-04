import '../../styles/project-library-v/projectLibraryContent.css'

export default function ProjectLibraryContent({ item: {title, level, activityType, image }}) {
    return (
        <>
            <div className="pl-content-container">
                <div className="pl-content-main">
                    <img src={`./images/project-library-icons/${image}`} alt='' />
                </div>
                <div className="pl-content-body">
                    <h2 className='pl-content-h2'>{title}</h2>
                </div>
                <div className="pl-content-details">
                    <h3 className='pl-content-h3'>{level} | {activityType}</h3>
                </div>
            </div>
        </>
    )
}
