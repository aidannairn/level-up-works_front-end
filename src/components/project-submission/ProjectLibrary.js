import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectLibrary() {
    const shouldRedirect = true;

    const navigate = useNavigate();

    useEffect(() => {
        if (shouldRedirect) {
            navigate("/project-library");
        }
    });

    return <></>;
}
