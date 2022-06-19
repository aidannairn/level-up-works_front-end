const SidebarView = props => {
  const {
    projectItem,
    currentMenuItem,
    setCurrentMenuItem
  } = props
  const { menuItem, icon, id } = projectItem
  return (
    <div 
      className={`sb-view ${id === currentMenuItem && 'sb-active-view'}`}
      onClick={() => setCurrentMenuItem(projectItem)}
    >
      <img src={`/images/sidebar/${icon}`} className="sb-view-img" />
      <h4 className="sb-view-title">{menuItem}</h4>
    </div>
  )
}

const Sidebar = props => {
  const { userImg, projectItems, currentMenuItem, setCurrentMenuItem } = props

  return (
    <div id="pb-sidebar">
      <div id="sb-profile-img-wrapper">
        <img src={`/images/students/${userImg}`} alt="Profile image." />
      </div>
      <div id="sb-views">
        {projectItems.map((projectItem, index) => {
          return <SidebarView key={index}
            projectItem={projectItem}
            currentMenuItem={currentMenuItem}
            setCurrentMenuItem={setCurrentMenuItem} 
          />
        })}
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