import Header from '../header/Header'
import Sidbar from '../sidbar/Sidbar'
import Posts from '../posts/Posts'
import './Home.css'
export default function Home(){
  return (
    <>
      <Header/>
      <div className='home'>
      <Posts/>
      <Sidbar/>
    </div>
    </>
  )
}