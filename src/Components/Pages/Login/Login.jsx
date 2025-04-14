import React from 'react'
import logo from "../../../assets/logo.png";

const Login = () => {
  return (
    <div className=''>
        <img src={logo} alt="" className='' />
        <div className="">
            <h1>Sign In</h1>
            <form>
                <input type="text" placeholder='Your name' />
            </form>
        </div>
    </div>
  )
}

export default Login