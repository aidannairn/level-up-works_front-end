const Sidebar = () => {
  return (
    <div id="pb-sidebar">
      <div id="sb-profile-img-wrapper">
        <img src="/images/students/rawiri-fletcher.png" alt="" />
      </div>
      <div id="sb-views">
        <div className="sb-view">
          <img src="/images/student-builder/objectives.png" className="sb-view-img" />
          <h4 className="sb-view-title">Learning Objectives</h4>
        </div>
      </div>
      <div id="sb-arrow-container">
        <div id="sb-arrow-outer">
          <div id="sb-arrow"></div>
        </div>
      </div>
      <div id="sb-user-options">
        <div className="sb-user-option">
          <i className="auth-icon fa fa-user-circle"></i>
          <h5>Profile</h5>
        </div>
        <div className="sb-user-option">
          <i className="fa fa-cog" aria-hidden="true"></i>
          <h5>Settings</h5>
        </div>
        <div className="sb-user-option">
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <h5>Log out</h5>
        </div>
      </div>
    </div>
  )
}

export default Sidebar