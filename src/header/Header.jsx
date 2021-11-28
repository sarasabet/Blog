import './Header.css'
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img className='headerImg' src='img-01.jpg' alt='01img' />
    </div>
  )
}