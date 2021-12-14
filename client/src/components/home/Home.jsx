import Header from '../header/Header'
import Sidbar from '../sidbar/Sidbar'
import Posts from '../posts/Posts'
import './Home.css'
import axios from 'axios';
import {useEffect, useState} from 'react';
export default function Home(){
  const [posts, setPosts] = useState([])
  useEffect (()=>{
    axios.get('/posts')
    .then(res => {
      setPosts(res.data)
    })
  }, [])

  return (
    <>
      <Header/>
      <div className='home'>
      <Posts posts = {posts}/>
      <Sidbar/>
    </div>
    </>
  )
}