import React from 'react';
import { Helmet } from 'react-helmet';
import SideBard from  '../../Components/Sidebar'

function EmployeeSection() {
  return (
    <>
      <Helmet>
        <title>Employee Section</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <SideBard/>
        
        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Employee Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">List of Employees</h2>
            <div className="mb-6">
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700">
                Add New Employee
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="w-1/12 py-2 px-4 border-r text-center">#</th>
                    <th className="w-3/12 py-2 px-4 border-r text-left">Name</th>
                    <th className="w-2/12 py-2 px-4 border-r text-left">Employee ID</th>
                    <th className="w-2/12 py-2 px-4 border-r text-left">Department</th>
                    <th className="w-2/12 py-2 px-4 border-r text-left">Position</th>
                    <th className="w-2/12 py-2 px-4 border-r text-left">Start Date</th>
                    <th className="w-2/12 py-2 px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="py-2 px-4 border-r">1</td>
                    <td className="py-2 px-4 border-r text-left">Christian James Torres</td>
                    <td className="py-2 px-4 border-r text-left">1234567890</td>
                    <td className="py-2 px-4 border-r text-left">Planning and Water Resources Division</td>
                    <td className="py-2 px-4 border-r text-left">Engineer</td>
                    <td className="py-2 px-4 border-r text-left">08/27/2024</td>
                    <td className="py-2 px-4 text-left">Active</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-4">
              <span>Showing 1 to 1 of 1 entries</span>
              <div>
                <button className="px-3 py-1 mx-1 border rounded">Previous</button>
                <button className="px-3 py-1 mx-1 border rounded">1</button>
                <button className="px-3 py-1 mx-1 border rounded">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default EmployeeSection;
