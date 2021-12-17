import './Posts.css'
import Post from '../post/Post'
export default function Posts(props){
  const posts = props.posts
  return (
    <div className='posts'>
      {posts.map((p, index)=>
        <Post key={index} posts={p}/>
      )}

    </div>
  )
}