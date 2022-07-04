import MainHeader from '../header/MainHeader'
import ProjectLibrarySidebar from './projectLibrarySidebar';
import ProjectLibraryMain from './projectLibraryMain';
import ProjectLibraryFilterButtons from './projectLibraryFilterButtons';
import ProjectLibraryContent from './projectLibraryContent';
import ProjectLibraryPageButtons from './projectLibraryPageButtons';
import Footer from '../MainFooter'
import '../../styles/project-library-v/projectLibrary.css'
import { libraryData } from '../../data/project-library-data';

export default function ProjectLibraryTeacher() {

    const navLinks = [
        { name: 'Home', route: '#' },
        { name: 'Features', route: '#' },
        { name: 'Teachers', route: '#' },
    ];

    const currentUser = {
        name: "Jasmina Salvador",
        image: "jasmina-salvador.png",
    };



    return (
        <>
            <MainHeader layout={1} />
            <div className='pl-container'>
                <ProjectLibrarySidebar />
                <div className='pl-body'>
                    <ProjectLibraryMain />
                    <ProjectLibraryFilterButtons />
                    <div className='pl-body-direction'>
                        {libraryData.map((item, index) => (
                            <ProjectLibraryContent key={index} item={item} />
                        ))}
                    </div>
                    <ProjectLibraryPageButtons />
                </div>
            </div>
            <Footer />
        </>
    )
}


