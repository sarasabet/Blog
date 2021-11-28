import './Post.css'
export default function Post(){
  return (
    <div className='post'>
      <img className='posrImg' src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt=''/>
      <div className='postInfo'>
        <div classNAme='postCats'>
          <span className='postCat'>One</span>
          <span className='postCat'>two</span>
        </div>
        <span className='postTitle'>
          Laboris sunt aute cupidatat velit
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className='postDesc'>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>

      </div>
    </div>
  )
}