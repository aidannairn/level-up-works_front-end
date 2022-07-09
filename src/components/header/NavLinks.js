import { Link } from 'react-router-dom'

const NavLinks = ({ navLinks }) => {
  return (
    <nav>
      {navLinks.map((link, index) => {
        return <Link key={index} to={link.route} className='nav-option'>{link.name}</Link>
      })}
    </nav>
  )
}

export default NavLinks