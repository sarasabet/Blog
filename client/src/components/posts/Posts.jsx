import './Posts.css'
import Post from '../post/Post'
export default function Posts(props){
  const posts = props.posts
  return (
    <div className='posts'>
      {posts.map((p)=>
        <Post posts={p}/>
      )}

    </div>
  )
}