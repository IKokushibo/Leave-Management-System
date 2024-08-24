import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';

function AddNewDepartment() {
  return (
    <>
      <Helmet>
        <title>Add New Department</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar/>
    
        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Department Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">Add New Department</h2>
            <p className="mb-6">Please fill out the form below to add a new department.</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Department Name</label>
                <input type="text" className="border w-full p-2 rounded" placeholder="Enter department name" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Shortform</label>
                <input type="text" className="border w-full p-2 rounded" placeholder="Enter shortform (e.g., HR, IT)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Code</label>
                <input type="text" className="border w-full p-2 rounded" placeholder="Enter department code (e.g., HR160)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Created Date</label>
                <input type="datetime-local" className="border w-full p-2 rounded" />
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

export default AddNewDepartment;
