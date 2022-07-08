import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLibraryTeacher from "../project-library-v/projectLibraryTeacher";
import { useState } from "react";

export default function ProjectLibrary() {
    const shouldRedirect = true;

    const navigate = useNavigate();

    React.useEffect(() => {
        if (shouldRedirect) {
            navigate("/project-library");
        }
    });

    return <></>;
}
