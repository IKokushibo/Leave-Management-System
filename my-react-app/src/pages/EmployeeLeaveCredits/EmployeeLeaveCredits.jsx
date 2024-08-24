import React from 'react';
import Sidebar from '../../Components/EmployeeSideBar/EmployeeSidebar';
import { Helmet } from 'react-helmet'

const LeaveCreditsRemaining = () => {
  return (
    <>
    <Helmet>   
    <title>Leave Credits Remaining</title>
  </Helmet>
  


    <div className="flex h-screen bg-pageBg1">
      <Sidebar/>

      {/* Main Content */}
      <div className="w-4/5 p-10">
        <h1 className="text-3xl font-bold mb-6">Leave Credits Remaining</h1>
        
        <div className="flex  flex-col gap-10 mt-28  " >

          <div className='w-cards  flex gap-10 h-52 '>
            <div className="bg-blue-500 w-cards h-48 text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-3xl font-semibold">Vacation Leave</p>
            </div>
            <div className="bg-blue-500 w-cards h-48 text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-3xl font-semibold">Sick Leave</p>
            </div>
          </div>

          <div className='w-cards  flex gap-10'> 
            <div className="bg-blue-500 w-cards h-48 text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-3xl font-semibold">Mandatory/Forced Leave</p>
            </div>
            <div className="bg-blue-500 w-cards h-48 text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <h2 className="text-5xl font-bold">5</h2>
              <p className="mt-2 text-3xl font-semibold">Special Leave</p>
            </div>

          </div>       
        </div>
      </div>
    </div>
    </>
  );
};

export default LeaveCreditsRemaining;
