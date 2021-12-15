import './SinglePost.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'


export default function SinglePost() {
  const [post, setPost] = useState({})
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  useEffect(() => {
    axios.get(`/posts/${path}`)
      .then((res) =>
        setPost(res.data)
      )
  }, [path])
  return (

    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo &&
          <img src={post.photo}
            alt='singlePostImg'
            className="singlePostImg" />
        }

        <div className='singlePOstTitle'>
          <h1>{post.title}
            <div className='singlePostEdit'>
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon fas fa-trash-alt"></i>
            </div>
          </h1>
          <div className='singlePostInfo'>
            <Link to={`/?user=${post.username}`} className='link'>
              <span className='singlePostAuthor'>Author: : <b>{post.username}</b></span>
            </Link>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>

          </div>
          <p className='singlePOstDesc'>
            {post.desc}
          </p>
        </div>

      </div>
    </div>

  )
}
