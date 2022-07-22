import MainHeader from "../header/MainHeader";
import Footer from "../MainFooter";
import "../../styles/teacher-profile-viewer/teacher-profile-viewer.css";
import ProfileCard from "./profile-card";
import ProfileDetails from "./profile-details";
import ProfilePageButtons from "./profile-page-buttons";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TeacherProfileViewer() {
    const [teacherData, setTeacherData] = useState([]);
    const [teacherName, setTeacherName] = useState([]);
    const [teacherPic, setTeacherPic] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/teacher-profile`).then((res) => {
            setTeacherData(res.data);
            setTeacherName(`${res.data[0].FirstName} ${res.data[0].LastName}`);
            setTeacherPic(res.data[0].ProfilePic);
        });
    }, []);

    const navLinks = [
        { name: "Home", route: "/" },
        { name: "Features", route: "#" },
        { name: "Teachers", route: "#" },
    ];

    const currentUser = {
        name: teacherName,
        image: teacherPic,
    };

    return (
        <>
            <MainHeader
                layout="1"
                navLinks={navLinks}
                currentUser={currentUser}
            />
            <div className="tpv-container">
                <div className="tpv-main">
                    {teacherData.map((item, index) => (
                        <ProfileCard key={index} ProfilePic={item.ProfilePic} />
                    ))}
                    {teacherData.map((item, index) => (
                        <ProfileDetails key={index} item={item} />
                    ))}
                </div>
                <ProfilePageButtons />
            </div>

            <Footer />
        </>
    );
}
