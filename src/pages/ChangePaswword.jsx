import React, { useState } from 'react'
import { changePassword } from '../api/changepassword'

const ChangePaswword = () => {
    const [form,setForm]=useState({
        oldPassword:'',
        newPassword:''
    })
    const submit=async(e)=>{
        e.preventDefault()
        try{
            const res=await changePassword(form);
            console.log(res);
            alert(res.data.message)
            
        }
    catch(err){
        alert(err.response?.data?.message)

    }
    }
  return (

    <>
    
    <div>
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800">Change Password</h2>
          <p className="text-sm text-slate-500">Choose a strong password to protect your account</p>
        </div>

        {/* Form Layout */}
        <form className="space-y-4" onSubmit={submit}>
          
          {/* Current Password */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
              Current Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
              onChange={(e)=>setForm({...form,oldPassword:e.target.value})}
           />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
              New Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                onChange={(e)=>setForm({...form,newPassword:e.target.value})}
/>
          </div>

          

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button 
              type="button" 
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              Update Password
            </button>
          </div>

        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default ChangePaswword