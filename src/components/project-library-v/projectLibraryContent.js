import "../../styles/project-library-v/projectLibraryContent.css";

export default function ProjectLibraryContent({
    click,
    item: { projectid, name, course, activitytype, projectpic },
}) {
    return (
        <>
            <div className="pl-content-container">
                <div className="pl-content-main">
                    <img
                        id={projectid}
                        src={projectpic}
                        alt=""
                        onClick={click}
                    />
                </div>
                <div className="pl-content-body">
                    <h2 className="pl-content-h2">{name}</h2>
                </div>
                <div className="pl-content-details">
                    <h3 className="pl-content-h3">
                        {course} | {activitytype}
                    </h3>
                </div>
            </div>
        </>
    );
}
