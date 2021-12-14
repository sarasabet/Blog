import './Post.css'
export default function Post(props) {
  const post = props.posts
  console.log(post)
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
        <span className='postTitle'>
          {post.title}
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className='postDesc'>
          {post.desc}
        </p>

      </div>
    </div>
  )
}