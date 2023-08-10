import React, { useState } from 'react'
import {logo} from "../assets/index"
import { Link } from 'react-router-dom'


const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [errEmail, setErrEmail] = useState("")
  const [errPassword , setErrPassword] = useState('')

//email handle
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrEmail('')
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrPassword('')
  }

  const emailValidation = (email) => {
    return String(email).toLowerCase().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    if (!email) {
      setErrEmail('Enter your email')
    } else {
       
      if (!emailValidation(email)) {
        setErrEmail('enter a valid email');
      }
    }
    if (!password) {
      setErrPassword('Enter your password')
    }
    if (email && password) {
      
      setEmail('')
      setPassword('')
    }
  }
  return (
    <div className=' w-full'>
      <div className=' w-full bg-gray-100'>
        <form className=' w-[350px] mx-auto flex flex-col items-center pb-10'>
          <img className=' w-32  ' src={logo} alt="" />
          <div className=' w-full border border-zinc-200 p-6'>
            <h2 className=' font-titleFont text-3xl font-medium mb-4'>Sign In</h2>

            <div className='flex flex-col gap-3'>
            
            <div className='flex flex-col gap-2'>
            <p className=' text-sm font-medium'>Email or mobile number</p>
            <input onChange={handleEmail}  value={email} type="email" className='w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'/>
              </div>
              {
                errEmail && (
                    <p className=' text-red-700 text-xs flex items-center gap-2 -mt-1.5'>{ errEmail}</p>
                )
            }
          
          <div className='flex flex-col gap-2'>
          <p className=' text-sm font-medium'>password</p>
                <input onChange={handlePassword} value={password} type="password" className='w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' />
                {
                  errPassword && (
                      <p className=' text-red-700 text-xs flex items-center gap-2 -mt-1.5'>{ errPassword}</p>
                  )
              }
              </div>
              <button onClick={handleLogin} className=" w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yellow-300 hover:to-yellow-to-border-yellow-500 hover:border-yellow-700  active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
                Continue
              </button>
              
            </div>

          </div>
         
          <p className=' wfull text-xs text-gray-600 mt-4  items-center'>
            
            <span className=' w-1/3'>New to Amazon</span>
            
          </p>
          <Link className=' w-full' to={'/registration'}>
          <button className=" w-full font-titleFont font-medium text-base bg-gradient-to-tr from-slate-300 to-slate-100 hover:from-slate-100 hover:to-zinc-to-border-zinc-500 hover:border-zinc-700  active:bg-gradient-to-bl active:from-zinc-400 active:to-slate-500 duration-200 py-1.5 rounded-md mt-3">
          Create Your Amazon account</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignIn
