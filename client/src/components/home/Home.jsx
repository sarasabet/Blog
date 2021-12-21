import Header from '../header/Header'
import Sidbar from '../sidbar/Sidbar'
import Posts from '../posts/Posts'
import './Home.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    axios.get('/posts' + search)
      .then(res => {
        setPosts(res.data)
      }).catch((err) => { console.log(err) })

  }, [search])

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidbar />
      </div>
    </>
  )
}