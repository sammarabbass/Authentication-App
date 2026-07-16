import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { getProfile } from '../api/user'
import { getRole } from '../utils/getRole'
import { authHeader } from '../api/axios'
import { loginUser } from '../api/auth'
import Setting from './Setting'


const Dashboard = () => {
    const [user, setUser] = useState(null)
    const role=getRole()

    
  useEffect(()=>{
    console.log("Dashboard loaded");

    // getProfile(authHeader())
    const fetchUser= async()=>{


    try{
const res=await getProfile(authHeader())
setUser(res.data.user)
console.log(res.data);

      console.log(role);
      
    }
    catch(err){
      console.log(err);
      
    }

        }
        fetchUser()
  },[])
  return (
    <>
    <div>

      <h2> User Dashboar</h2>
      <p>{user?.email}</p>
      {role==='admin'&&<a href='/admin'>go to admin</a>}
    </div>



    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-indigo-600 text-white flex flex-col">

        <div className="p-6 border-b border-indigo-500">
          <h1 className="text-2xl font-bold">User Panel</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">

          <button className="w-full text-left bg-white text-indigo-600 p-3 rounded-lg font-semibold">
            Dashboard
          </button>

          <button className="w-full text-left hover:bg-indigo-500 p-3 rounded-lg">
            My Profile
          </button>

          <button className="w-full text-left hover:bg-indigo-500 p-3 rounded-lg">
            My Orders
          </button>

    <a href="/setting">
          <button className="w-full text-left hover:bg-indigo-500 p-3 rounded-lg">
              Setting
          </button>
          </a>

        </nav>

        <div className="p-4 border-t border-indigo-500">
            <Navbar  />
  
        </div>

      </aside>

      {/* Main */}
      <main className="flex-1">

        {/* Navbar */}
        <header className="bg-white shadow px-8 py-4 flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            User Dashboard
          </h2>

          <div className="flex items-center gap-3">

            <img

              alt="User"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h3 className="font-semibold">Sammar abbass {user?.email}</h3>
              <p className="text-sm text-gray-500">User</p>
            </div>

          </div>

        </header>

        {/* Content */}
        <section className="p-8">

          {/* Welcome */}
          <div className="bg-indigo-600 text-white rounded-xl p-8 mb-8">

            <h1 className="text-3xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="mt-2 text-indigo-100">
              Manage your profile and track your activity.
            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-gray-500">My Orders</h4>
              <h1 className="text-4xl font-bold mt-3">12</h1>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-gray-500">Completed</h4>
              <h1 className="text-4xl font-bold mt-3">9</h1>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-gray-500">Pending</h4>
              <h1 className="text-4xl font-bold mt-3">2</h1>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-gray-500">Wishlist</h4>
              <h1 className="text-4xl font-bold mt-3">18</h1>
            </div>

          </div>

          {/* Profile */}
          <div className="bg-white rounded-xl shadow mt-8 p-6">

            <h2 className="text-xl font-bold mb-5">
              My Profile
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="text-gray-500">Full Name</label>
                <input
                  type="text"
                  value="Sammar Abbass"
                  readOnly
                  className="w-full mt-2 border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="text-gray-500">Email</label>
                <input
                  type="email"
                  value="sammar@gmail.com"
                  readOnly
                  className="w-full mt-2 border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="text-gray-500">Role</label>
                <input
                  type="text"
                  value="User"
                  readOnly
                  className="w-full mt-2 border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="text-gray-500">Status</label>
                <input
                  type="text"
                  value="Active"
                  readOnly
                  className="w-full mt-2 border rounded-lg p-3"
                />
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>




    </>
  )
}

export default Dashboard
