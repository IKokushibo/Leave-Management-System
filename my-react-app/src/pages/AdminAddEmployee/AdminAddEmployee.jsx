import React,{useState} from 'react';
import { Helmet } from 'react-helmet';
import SideBard from  '../../Components/Sidebar'


function AddNewEmployee() {

  return (
    <>
    <Helmet>
    <title>Add Employee Page</title>
    </Helmet>
    
    <div className="flex flex-col lg:flex-row min-h-screen">
    <SideBard/>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Employee Section</h1>

        <div className="bg-white p-8 shadow-lg rounded-md">
          <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
          <p className="mb-6">Please fill up the form in order to add new employee records.</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                  <label className="block text-sm font-bold mb-2">Employee ID</label>
                  <input type="text" className="border w-full p-2 rounded" />
                </div>
              <div>
                <label className="block text-sm font-bold mb-2">First Name</label>
                <input type="text" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Middle Name</label>
                <input type="text" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Last Name</label>
                <input type="text" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input type="email" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Password</label>
                <input type="password" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Position</label>
                <select className="border w-full p-2 rounded">
                  <option value="">Choose..</option>
                  <option value="">ADMINISTRATIVE & HUMAN RESOURCES</option>
                  <option value="">GENERAL SERVICES</option>
                  <option value="">ACCOUNTING, BUDGET & CASH MANAGEMENT</option>
                  <option value="">CUSTOMER ACCOUNTS & SERVICES</option>
                  <option value="">PLANNING AND WATER RESOURCES</option>
                  <option value="">CONSTRUCTION AND MAINTENANCE</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Assigned Department</label>
                <select className="border w-full p-2 rounded">
                  <option>Choose..</option>
                  <option>ADMIN AND GENERAL SERVICES DEPARTMENT</option>
                  <option>FINANCE AND COMMERCIAL DEPARTMENT</option>
                  <option>ENGINEERING AND OPERATIONS DEPARTMENT</option>                 
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Role</label>
                <select className="border w-full p-2 rounded">
                  <option>Choose..</option>
                  <option>EMPLOYEE</option>
                  <option>ADMIN</option>
                  <option>HUMAN RESOURCE</option>
                  <option>DEPARTMENT HEAD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Gender</label>
                <select className="border w-full p-2 rounded">
                  <option>Choose..</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full mt-6">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>


    </>

  
  );
}

export default AddNewEmployee;
