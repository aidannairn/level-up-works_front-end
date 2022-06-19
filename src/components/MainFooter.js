import '../Styles/main-footer.css'

const Footer = () => {
  const topics = [
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Partners', href: '#' }
      ]
    },
    {
      heading: 'Courses',
      links: [
        { label: 'Register', href: '#' },
        { label: 'Login', href: '#' },
        { label: 'Projects', href: '#' },
        { label: 'Teachers', href: '#' },
        { label: 'Parents', href: '#' },
        { label: 'Resources', href: '#' },
      ]
    },
    {
      heading: 'Support',
      links: [
        { label: 'FAQs', href: '#' },
        { label: 'Helpdesk', href: '#' },
        { label: 'Contact Us', href: '#' }
      ]
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Privacy Policy', href: '#' }
      ]
    },
  ]

  return (
    <footer>
      {topics.map((topic, index) => {
        return <div key={index} className="ftr-topic-container">
          <h2 className="ftr-topic-heading">{topic.heading}</h2>
          {topic.links.map((link, index) => {
            return <a key={index} href={link.href}>{link.label}</a>
          })}
        </div>
      })}
      <div id="ftr-company-desc">
        <h2 className="ftr-topic-heading">LevelUp Works</h2>
        <p>LevelUp Works LevelUp Works is an Auckland-based enterprise dedicated to developing game-based learning software to help teachers in response to the New Zealand Digital Technologies {`&`} Hangarau Matihiko. alan@levelupworks.com (021) 668 185</p>
      </div>
    </footer>
  )
}

export default Footer