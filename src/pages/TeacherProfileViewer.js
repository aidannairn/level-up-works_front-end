import MainHeader from "../components/header/MainHeader";
import Footer from "../components/MainFooter";
import "../styles/teacher-profile-viewer/teacher-profile-viewer.css"
import ProfileCard from "../components/teacher-profile-viewer/profile-card";
import ProfileDetails from "../components/teacher-profile-viewer/profile-details";
import ProfilePageButtons from "../components/teacher-profile-viewer/profile-page-buttons";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

export default function TeacherProfileViewer() {
    const [teacherData, setTeacherData] = useState([]);
    const [teacherName, setTeacherName] = useState([]);
    const [teacherPic, setTeacherPic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:4000/teacher-profile`).then((res) => {
            setTeacherData(res.data);
            setTeacherName(`${res.data[0].FirstName} ${res.data[0].LastName}`);
            setTeacherPic(res.data[0].ProfilePic);
            setIsLoading(false)
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

    

    return isLoading ? (<LoadingScreen /> ):   (
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
        
