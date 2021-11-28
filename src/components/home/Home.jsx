import Header from '../../components/header/Header'
import Sidbar from '../../components/sidbar/Sidbar'
import Posts from '../../components/posts/Posts'
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