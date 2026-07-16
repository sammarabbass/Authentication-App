import React, { useState } from 'react'
import { loginUser } from '../api/auth'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import { Navigate } from 'react-router-dom'
// import API from '../api/axios'
// import { jwtDecode } from 'jwt-decode'

const Login = () => {
    const [form, setForm] = useState({
        email:"", password:""
    })
    const handleSubmit = async(e)=>{
        e.preventDefault()

        try{
            const res = await loginUser(form);
            localStorage.setItem("token", res.data.token)
            alert("Login Successfully")
            console.log(res.data.role);
            
            // API.post('/auth/login', credentials)
                        // const decodedToken = jwtDecode(toke);

                    const navigate = useNavigate();
// login success hone ke baad:
navigate('/dashboard');

  //               window.location.href =
  // res.data.user.role === "admin" ? "/admin" : "/dashboard";

        }catch(err){
            alert(err?.response?.data?.message || "Error")
            console.log(err);
            
        }
    }
  return (
    <>


<div className="min-h-screen bg-black flex">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-linear-to-br from-indigo-900 via-purple-900 to-black items-center justify-center">

        <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[140px] opacity-40"></div>
        <div className="absolute top-20 left-16 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-40"></div>

        <div className="relative z-10 max-w-md text-white px-10">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Build amazing applications with a modern authentication
            experience.
          </p>

          <div className="mt-10 flex gap-3">
            <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
            <div className="h-3 w-3 rounded-full bg-pink-500"></div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center px-6 bg-[#09090B]">

        <div className="w-full max-w-md">

          <h2 className="text-4xl font-bold text-white">
            Sign In
          </h2>

          <p className="text-gray-400 mt-2">
            Enter your credentials to continue.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">

            <input
              type="email"
              placeholder="Email Address"
            
              onChange={(e)=>setForm({...form,email:e.target.value})}
                        //   onChange={(e)=>setForm({...form, email:e.target.value})
              className="w-full rounded-xl bg-[#18181B] border border-gray-800 px-5 py-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e)=>setForm({...form,password:e.target.value})}
              className="w-full rounded-xl bg-[#18181B] border border-gray-800 px-5 py-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-indigo-600" />
                Remember me
              </label>

              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Forgot password?
              </a>
            </div>

            <button className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 py-4 text-white font-semibold transition">
              Login
            </button>

            <button
              type="button"
              className="w-full rounded-xl border border-gray-700 bg-[#18181B] py-4 text-white hover:bg-[#27272A] transition"
            >
              Continue with Google
            </button>

          </form>

          <p className="text-center text-gray-500 mt-8">
            Don't have an account?
            <span className="text-indigo-400 cursor-pointer ml-2">
<Link to="/signup">Create Account</Link>
            </span>
          </p>

        </div>

      </div>
    </div>


    
    </>
  )
}

export default Login
