import './Sidbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Sidbar() {
  const [cat, setCat] = useState([])
  useEffect(() => {
    axios.get('/categories')
      .then((res) =>
        setCat(res.data)
      )
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p className='sidebarDesc'>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) =>
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          )}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
          <i className="sidebarIcon fab fa-facebook-square"></i>
        </div>
      </div>

    </div>
  )
}