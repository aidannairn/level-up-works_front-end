import { useNavigate } from "react-router-dom";

export default function ProjectLibraryPageButtons() {
    const navigate = useNavigate();

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleClick = () => navigate("/project-submission");

    return (
        <>
            <div className="pl-page-btns">
                <button className="pl-btt-btn" onClick={backToTop}>
                    BACK TO TOP
                </button>
                <button className="pl-btd-btn" onClick={handleClick}>
                    BACK TO DASHBOARD
                </button>
            </div>
        </>
    );
}
