import './Header.css'
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <b className="headerTitleLg">MY FIRST BLOG</b>
      </div>
      <img className='headerImg' src='img-01.jpg' alt='01img' />
    </div>
  )
}