import React,{useEffect,useState}from 'react'
// import {getAdmin} from '../api/auth'
import {getAdmin} from '../api/admin'
import { authHeader } from '../api/axios'
import { getRole } from '../utils/getRole'
import Navbar from '../components/Navbar'




const Admin = () => {
      const role=getRole()
  
    useEffect(() => {
getAdmin(authHeader())
try{
    console.log(role);
    
}
catch(err){
    console.log(err);
    
}
}, [])

  return (
<>
    <div className="flex min-h-screen bg-gray-100">

      {/* ================= Sidebar ================= */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col">

        <div className="p-6 border-b border-blue-600">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>

        <nav className="flex-1 p-4">

          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg bg-white text-blue-700 font-semibold mb-2"
          >
            {/* <LayoutDashboard size={20} /> */}
            Dashboard
          </a>

          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 duration-300 mb-2"
          >
            {/* <Users size={20} /> */}
            Users
          </a>

          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 duration-300 mb-2"
          >
            {/* <ShoppingCart size={20} /> */}
            Orders
          </a>

          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 duration-300 mb-2"
          >
            {/* <Package size={20} /> */}
            Products
          </a>

<a href="/setting">
          <button className="w-full text-left hover:bg-indigo-500 p-3 rounded-lg">
              Setting
          </button>
          </a>
        </nav>

        <div className="p-4 border-t border-blue-600">

            <Navbar size={20} />
        </div>

      </aside>

      {/* ================= Main ================= */}
      <main className="flex-1">

        {/* Navbar */}

        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-4">

            <button className="lg:hidden">
              {/* <Menu /> */}
            </button>

            <div className="relative">

              {/* <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              /> */}

              {/* <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
              /> */}

            </div>

          </div>

          <div className="flex items-center gap-5">

            {/* <Bell className="cursor-pointer" /> */}

            <div className="flex items-center gap-2">

              {/* <UserCircle size={35} /> */}

              <div>

                <h3 className="font-semibold">Admin</h3>

                <p className="text-gray-500 text-sm">
                  Administrator
                </p>

              </div>

            </div>

          </div>

        </header>

        {/* Dashboard */}

        <section className="p-8">

          {/* Welcome */}

          <div className="bg-blue-700 text-white rounded-xl p-8 mb-8">

            <h2 className="text-3xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="mt-2 text-blue-100">
              Manage users, products and website from here.
            </p>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Card */}

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="text-gray-500">
                Total Users
              </h3>

              <h1 className="text-4xl font-bold mt-3">
                1,250
              </h1>

              <p className="text-green-500 mt-2">
                +12% this month
              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="text-gray-500">
                Orders
              </h3>

              <h1 className="text-4xl font-bold mt-3">
                430
              </h1>

              <p className="text-green-500 mt-2">
                +8% this month
              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="text-gray-500">
                Products
              </h3>

              <h1 className="text-4xl font-bold mt-3">
                320
              </h1>

              <p className="text-green-500 mt-2">
                +15 New
              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <h3 className="text-gray-500">
                Revenue
              </h3>

              <h1 className="text-4xl font-bold mt-3">
                $12,500
              </h1>

              <p className="text-green-500 mt-2">
                +20%
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
 
</>
    
  )
}

export default Admin