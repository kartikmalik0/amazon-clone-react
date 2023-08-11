import  { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { logo } from '../assets/index'


const Registration = () => {
    const auth = getAuth()


    const navigate = useNavigate()
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const [clientName, setclientName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cPassword, setcPassword] = useState('')

    //error message start
    const [firebaseErr, setFirebaseErr] = useState('')
    const [errClientName, seterrClientName] = useState('')
    const [errEmail, seterrEmail] = useState('')
    const [errPassword, seterrPassword] = useState('')
    const [errCPassword, seterrCPassword] = useState('')
    //Loading start
    const [loading, setLoading] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')

    //handleName function start

    const handleName = (e) => {
        setclientName(e.target.value)
        seterrClientName('')
    }
    //handle email start here
    const handleEmail = (e) => {
        setemail(e.target.value)
        seterrEmail('')
    }
    //handle password start

    const handlePassword = (e) => {
        setpassword(e.target.value)
        seterrPassword('')
    }
    // handle c password
    const handleCPassword = (e) => {
        setcPassword(e.target.value)
        seterrCPassword('')
    }
    // email validation
    const emailValidation = (email) => {
        return String(email).toLowerCase().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    }

    useEffect(() => {

        // Clear the input fields
        setclientName('');
        setemail('');
        setcPassword('');
        setpassword('');

    }, [registrationSuccess]);

    const handleRegistration = (e) => {
        e.preventDefault();
        if (!clientName) {
            seterrClientName('Enter Your Name');
        }
        if (!email) {
            seterrEmail('enter your email');
        } else {
            if (!emailValidation(email)) {
                seterrEmail('enter a valid email');
            }
        }
        if (!password) {
            seterrPassword('enter your password');
        } else {
            if (password.length < 6) {
                seterrPassword('password must be 6 characters');
            }
        }
        if (!cPassword) {
            seterrCPassword('enter your password again');
        } else {
            if (cPassword !== password) {
                seterrCPassword('passwords do not match');
            }
        }

        // Check all the conditions
        if (
            clientName &&
            email &&
            emailValidation(email) &&
            password.length >= 6 &&
            cPassword &&
            cPassword === password
        ) {

            setLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: clientName,

                    })
                    // Signed in 
                    const user = userCredential.user;
                    
                    // ...
                    setLoading(false)
                    setSuccessMsg('Account Created Successfully!')
                    setTimeout(() => {
                        navigate('/signin')
                    }, 3000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorMessage.includes('auth/email-already-in-use')) {
                        setFirebaseErr('Try another email (already exists)');
                    }
                    // ... handle other error cases if needed
                });






            // Clear the input fields
            setRegistrationSuccess(true);
        }
    };

    return (
        <div className=' w-full '>
            <div className=' w-full bg-gray-100 pb-10'>
                <form className=' w-[350px] mx-auto flex flex-col items-center pb-10'>
                    <img className=' w-32  ' src={logo} alt="" />
                    <div className=' w-full border border-zinc-200 p-6'>
                        <h2 className=' font-titleFont text-3xl font-medium mb-4'>Create Account</h2>

                        <div className='flex flex-col gap-3'>

                            <div className='flex flex-col gap-2'>
                                <p className=' text-sm font-medium'>Your name</p>
                                <input value={clientName} onChange={handleName} type="text" className='w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' />
                            </div>
                            {
                                errClientName && (
                                    <p className=' text-red-700 text-xs flex items-center gap-2 -mt-1.5'>{errClientName}</p>
                                )
                            }

                            <div className='flex flex-col gap-2'>
                                <p className=' text-sm font-medium'>Email or mobile number</p>
                                <input value={email} onChange={handleEmail} type="email" className='w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' />
                            </div>
                            {
                                errEmail && (
                                    <p className=' text-red-700 text-xs flex items-center gap-2 -mt-1.5'>{errEmail}</p>
                                )
                            }

                            {
                                firebaseErr && (
                                    <p className=' text-red-700 text-xs flex items-center gap-2 -mt-1.5'>{firebaseErr}</p>
                                )
                            }


                            <div className='flex flex-col gap-2'>
                                <p className=' text-sm font-medium'>Password</p>
                                <input value={password} onChange={handlePassword} type="password" className='w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' />
                            </div>
                            {
                                errPassword && (
                                    <p className=' text-red-700 text-xs flex items-center gap-2 -mt-1.5'>{errPassword}</p>
                                )
                            }

                            <div className='flex flex-col gap-2'>
                                <p className=' text-sm font-medium'>Re-enter Password</p>
                                <input value={cPassword} onChange={handleCPassword} type="password" className='w-full lowercase py-1 border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' />
                            </div>
                            {
                                errCPassword && (
                                    <p className=' text-red-700 text-xs flex items-center gap-2 -mt-1.5'>{errCPassword}</p>
                                )
                            }

                            <p className="text-xs text-gray-600">password must be 6 character</p>

                            <button onClick={handleRegistration} className=" w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yellow-300 hover:to-yellow-to-border-yellow-500 hover:border-yellow-700  active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
                                Continue
                            </button>
                            
                            
                        </div>

                    </div>

                    <p className=' wfull text-xs text-gray-600 mt-4  items-center'>

                        <span className=' w-1/3'>Already have Account ?
                            <Link to={'/signin'}><span className=' text-blue-800'>  sign in</span></Link>
                        </span>


                    </p>

                </form>
            </div>
        </div>
    )
}

export default Registration
