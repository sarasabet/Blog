import './Sidbar.css'
export default function Sidbar(){
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
          <li className="sidebarListItem">
            one
          </li>
          <li className="sidebarListItem">
          two
          </li>
          <li className="sidebarListItem">
          the=reee
          </li>
          <li className="sidebarListItem">
            fore
          </li>
          <li className="sidebarListItem">
            five
          </li>
          <li className="sidebarListItem">
           six
          </li>
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