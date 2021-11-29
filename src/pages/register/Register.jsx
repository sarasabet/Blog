import './Register.css'

export default function Register(){
  return (
    <div className= 'rgeister'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm'>
      <label>User Name</label>
        <input type='text' placeholder="Enter User NAme ..."></input>
        <label>Email</label>
        <input type='text' placeholder="Enter yor email ..."></input>
        <label>Password</label>
        <input type='password' placeholder='Enter your password ...'></input>
        <button className='registerButton'>Register</button>
      </form>
      <button className='registerLoginrButton'>Login</button>
    </div>
  )
}