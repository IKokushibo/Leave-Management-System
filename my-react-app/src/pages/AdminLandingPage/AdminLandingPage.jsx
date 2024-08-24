import React from 'react';
import { Helmet } from 'react-helmet';
import SideBard from  '../../Components/Sidebar'

function Dashboard() {
  return (
    <>
    <Helmet>
    <title>Dashboard</title>
    </Helmet>
    
    <div className="flex min-h-screen">
     <SideBard/>
     
      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-lg">Leave Types</p>
            </div>
          </div>
          <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-lg">Registered Employees</p>
            </div>
          </div>
          <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-lg">Available Departments</p>
            </div>
          </div>
          <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-lg">Pending Applications</p>
            </div>
          </div>
          <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-lg">Declined Applications</p>
            </div>
          </div>
          <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-lg">Approved Applications</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
  
}

export default Dashboard;
