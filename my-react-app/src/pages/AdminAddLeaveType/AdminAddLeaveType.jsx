import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';

function AddNewLeaveType() {
  
  return (
    <>
      <Helmet>
        <title>Add New Leave Type</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
       <Sidebar/>



        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Leave Types Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">Add New Leave Type</h2>
            <p className="mb-6">Please fill out the form below to add a new leave type.</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Leave Type</label>
                <input type="text" className="border w-full p-2 rounded" placeholder="Enter leave type (e.g., Vacation Leave)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Description</label>
                <input type="text" className="border w-full p-2 rounded" placeholder="Enter description (e.g., Rule XVI, Omnibus Rules...)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Requirements</label>
                <input type="text" className="border w-full p-2 rounded" placeholder="Enter requirements (e.g., Medical Certificate)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Leave Credit Available</label>
                <input type="text" className="border w-full p-2 rounded" placeholder="Available Leave Credits (e.g, 5 Sick Leave)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Restoration Period</label>
                <select className="border w-full p-2 rounded">
                  <option>Choose..</option>
                  <option value="ADMIN AND GENERAL SERVICES DEPARTMENT">Every Month</option>
                  <option value="FINANCE AND COMMERCIAL DEPARTMENT">Every 2 Months</option>
                  <option value="ENGINEERING AND OPERATIONS DEPARTMENT">Every 3 Months</option>
                  <option value="GENERAL MANAGER">Every 4 Months</option>
                  <option>Every 5 Months</option>
                  <option value="ADMIN AND GENERAL SERVICES DEPARTMENT">Every 6 Months</option>
                  <option value="FINANCE AND COMMERCIAL DEPARTMENT">Every 7 Months</option>
                  <option value="ENGINEERING AND OPERATIONS DEPARTMENT">Every 8 Months</option>
                  <option value="GENERAL MANAGER">Every 9 Months</option>
                  <option value="FINANCE AND COMMERCIAL DEPARTMENT">Every 10 Months</option>
                  <option value="ENGINEERING AND OPERATIONS DEPARTMENT">Every 11 Months</option>
                  <option value="GENERAL MANAGER">Every 12 Months</option>
                </select>


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

export default AddNewLeaveType;
