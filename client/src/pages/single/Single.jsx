import './Single.css'
import Sidbar from '../../components/sidbar/Sidbar'
import SinglePost from '../../components/singlePost/SinglePost'

export default function Single() {
  return(
    <div className='single'>
      <SinglePost/>
      <Sidbar/>

    </div>
  )
}

