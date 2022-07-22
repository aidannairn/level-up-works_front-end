import NavLinks from "./NavLinks";
import ProjectBar from "./ProjectBar";

import "../../styles/main-header.css";

const NavFlags = ({ lang }) => {
    return (
        <div id="lang-container">
            {lang && <label htmlFor="language">Lang</label>}
            <img
                className="header-flag
      "
                src="images/nz-flag.png"
                alt="New Zealand flag."
            />
            <img
                className="header-flag
      "
                src="images/maori-flag.png"
                alt="The Maori flag"
            />
        </div>
    );
};

const Header = (props) => {
    const { layout, navLinks, currentUser, projectBar, navBtns } = props;

    return (
        <div id="header" className={`header-layout-${layout}`}>
            <div id="header-logo-wrapper">
                <img
                    id="header-logo"
                    src={`images/${
                        layout === "1" ? "star-logo" : "star-logo-blue"
                    }.png`}
                    alt="Logo"
                />
            </div>
            {layout === "1" && <NavLinks navLinks={navLinks} />}
            {layout === "2" && (
                <div id="layout-2-container">
                    {projectBar && <ProjectBar projectBar={projectBar} />}
                    <div id="header-btn-container">
                        {navBtns.map((btn, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`nav-btn nav-btn-${index}`}
                                    onClick={() => btn.action()}
                                >
                                    {btn.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {layout === "1" && (
                <div id="auth-lang-container">
                    <NavFlags lang />
                    <div id="auth-container">
                        {currentUser ? (
                            <>
                                <img
                                    id="navbar-current-user-img"
                                    src={`https://cdn.filestackcontent.com/${currentUser.image}`}
                                />
                                <h2>{currentUser.name}</h2>
                            </>
                        ) : (
                            <>
                                <i
                                    className="auth-icon fa fa-user-circle"
                                    aria-hidden="true"
                                ></i>
                                <h2>REGISTER | LOGIN</h2>
                            </>
                        )}
                    </div>
                </div>
            )}
            {layout === "2" && <NavFlags />}
        </div>
    );
};

export default Header;
