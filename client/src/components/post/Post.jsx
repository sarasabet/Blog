import './Post.css'
import { Link } from 'react-router-dom';
export default function Post(props) {
  const post = props.posts
  return (
    <div className='post'>
      {post.photp && (
        <img className='posrImg' src={post.photo} alt=''
        />
      )}

      <div className='postInfo'>
        <div classNAme='postCats'>
          {post.categories.map((c) => {
            <span className='postCat'>{c.name}</span>
          })}

        </div>
        <Link to={`/post/${post._id}`} className='link'>
        <span className='postTitle'>
          {post.title}
        </span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className='postDesc'>
          {post.desc}
        </p>

      </div>
    </div>
  )
}