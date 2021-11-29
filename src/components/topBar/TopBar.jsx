import './TopBAr.css'
import { Link } from 'react-router-dom'

export default function TopBAr() {
  const user = false;
  return (
    <div className="top">
      <div className='top-left'>
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-github-square"></i>
        <i className="topIcon fab fa-facebook-square"></i>
      </div>
      <div className='top-center'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' className='link'>  Home </Link>
          </li>
          <li className='topListItem'><Link to="/about" className='link'>ABOUT</Link></li>
          <li className='topListItem'><Link to='/contactus' className='link'>CONTACT</Link></li>
          <li className='topListItem'><Link to='/write' className='link'>WRITE</Link></li>

        </ul>
      </div>
      <div className='top-right'>

        {user ? (
          <img
            className="topImg"
            src="profilePix.jpeg"
            alt=""
          />
        ) :
          (<ul className='topList'>
            <li className='topListItem'>
              <Link to='/login' className='link'>LOGIN</Link>
            </li>
            <span>|</span>
            <li className='topListItem'>
              <Link to='/register' className='link'>REGISTER</Link>
            </li>
          </ul>
          )}
            <i className="topSearchIcon fas fa-search"></i>
      </div>


    </div>
  )
}