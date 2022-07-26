
//wrap this component around other components to add white background
function Card({ children }) {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default Card
