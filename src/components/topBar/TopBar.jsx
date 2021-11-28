import './TopBAr.css'

export default function TopBAr(){
  return (
    <div className="top">
      <div className='top-left'>
        
 
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-github-square"></i>
        <i className="topIcon fab fa-facebook-square"></i>
      </div>
      <div className='top-center'>
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>Logout</li>
        </ul>
        </div>
      <div className='top-right'>
        <img className='topImg' src='profilePix.jpeg'alt='mtProfilePix'/>
        <i className="topSearch fas fa-search"></i>
      </div>


    </div>
  )
}