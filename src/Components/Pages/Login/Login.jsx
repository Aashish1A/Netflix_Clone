import React, { useState } from 'react'
import logo from "../../../assets/logo.png";
import { login, singUp } from '../../../firebase';
import netflix_spinner from "../../../assets/netflix_spinner.gif"

const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(signState==="Sign In"){
      await login(email, password);
    }else{
      await singUp(name, email, password);
    }
    setLoading(false);
  }

  return (
    loading?<div className="w-full h-screen flex items-center justify-center">
      <img src={netflix_spinner} alt="" className='w-15' />
    </div>:
    <div className="h-screen backgroundImage py-5 px-[8%]">
        <img src={logo} alt="" className='w-36' />
        <div className="w-full max-w-md bg-[rgba(0,0,0,0.75)] rounded p-15 m-auto">
            <h1 className='text-8 font-medium mb-7'>{signState}</h1>
            <form>
                {signState==='Sign Up'?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your name' className='w-full h-10 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-4 px-5 text-base font-medium' />:<></>}
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' className='w-full h-10 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-4 px-5 text-base font-medium'  />
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='w-full h-10 bg-[#333] text-white my-3 mx-0 border-0 outline-0 rounded py-4 px-5 text-base font-medium' />
                <button className='w-full border-0 outline-0 p-4 bg-[#e50914] rounded text-base font-medium mt-5 cursor-pointer' onClick={userAuth} type='submit'>{signState}</button>
                <div className="flex items-center justify-between text-[#b3b3b3] text-[13px]">
                  <div className="flex items-center gap-1">
                    <input type="checkbox" className='w-4 h-4' />
                    <label htmlFor="">Remember Me</label>
                  </div>
                  <p>Need Help?</p>
                </div>
            </form>
            <div className='mt-10 text-[#737373]'>
            {signState==='Sign In' ?  <p>New to Netflix? <span className='ml-1.5 text-white font-medium cursor-pointer' onClick={()=>{setSignState("Sign Up")}} >Sign Up Now</span> </p>:<p>Already have account? <span className='ml-1.5 text-white font-medium cursor-pointer' onClick={()=>{setSignState("Sign In")}}>Sign In Now</span> </p>}
            </div>
        </div>
    </div>
  )
}

export default Login