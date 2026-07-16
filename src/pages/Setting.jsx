import React from 'react'
import ChangePaswword from './ChangePaswword'

const Setting = () => {
  return (
    <>
<div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex items-center justify-center p-4">
      
      {/* Main Container */}
      <div className="w-full max-w-2xl space-y-6">
        
        {/* Title Section */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">Account Settings</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your account authentication preferences.</p>
        </div>

        {/* Action Panel Box */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            {/* Context Left */}
            <div>
              <h2 className="text-base font-bold text-slate-900">Account Password</h2>
              <p className="text-sm text-slate-500 mt-0.5">
                It's a good practice to update your password regularly to keep your credentials safe.
              </p>
            </div>

            {/* Action Trigger Right */}
            <div className="shrink-0">
              <button 
                type="button"
                className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <a href="changePassword">
                Update Password
                    </a>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>




    </>
  )
}

export default Setting