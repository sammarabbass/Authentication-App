import React, { useState } from 'react'
import { signupUser } from '../api/auth';

const Signup = () => {
    const [form, setForm] = useState({
        email: "",
        password : "",
        role:""
    });

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await signupUser(form)
            alert("SignUp successfully")
        }catch(err){
            alert(err.response?.data?.message)

        }
    }
  return (
<>



    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111827] rounded-3xl shadow-2xl border border-gray-800 p-8">

        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e)=>setForm({...form, email:e.target.value})}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter password"
            //    onChange={(e)=>setForm({...form, email:e.target.value})
            onChange={(e)=>setForm({...form,password:e.target.value})}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

<div>
            <label className="text-gray-300 text-sm">Role</label>
            <input
              type="text"
              placeholder="Describe your role"
            //    onChange={(e)=>setForm({...form, email:e.target.value})
            onChange={(e)=>setForm({...form,role:e.target.value})}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>



          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 py-3 rounded-xl text-white font-semibold"
          >
            Sign In
          </button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          <button
            type="button"
            className="w-full border border-gray-700 bg-[#1f2937] hover:bg-[#374151] transition py-3 rounded-xl text-white"
          >
            Continue with Google
          </button>

        </form>



      </div>
    </div>

</>
  )
}

export default Signup
