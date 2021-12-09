import './Login.css'
import { Link } from 'react-router-dom'

export default function Login(){
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label>Email</label>
        <input type='text' placeholder="Enter yor email ..."></input>
        <label>Password</label>
        <input type='password' placeholder='Enter your password ...'></input>
        <button className='loginrButton'>Login</button>
      </form>
      <button className='loginRegisterButton'> <Link to='/register' className='link'>REGISTER</Link></button>
    </div>
  )
}