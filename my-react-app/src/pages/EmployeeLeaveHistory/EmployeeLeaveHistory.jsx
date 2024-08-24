import React from 'react';
import Sidebar from '../../Components/EmployeeSideBar/EmployeeSidebar';
import { Helmet } from 'react-helmet'

const LeaveHistory = () => {
  return (
    <>
   <Helmet>   
    <title>Leave History</title>
  </Helmet>

    <div className="flex h-screen bg-pageBg1">
      <Sidebar/>

      {/* Main Content */}
      <div className="w-4/5 p-10">
        <h1 className="text-3xl font-bold mb-6">Leave History</h1>
        <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Leave History Table</h2>
          <p className="mb-4">List of Applied Leave</p>
          <div className="flex justify-between mb-4">
            <label>
              Show 
              <select className="mx-2 border border-gray-300 rounded p-1">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              entries
            </label>
            <input type="text" className="border border-gray-300 rounded p-1" placeholder="Search" />
          </div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left py-2 px-4">#</th>
                <th className="text-left py-2 px-4">Type of Leave</th>
                <th className="text-left py-2 px-4">Details of Leave</th>
                <th className="text-left py-2 px-4">From</th>
                <th className="text-left py-2 px-4">To</th>
                <th className="text-left py-2 px-4">Applied Date</th>
                <th className="text-left py-2 px-4">Admin's Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-t">1</td>
                <td className="py-2 px-4 border-t">Sick Leave</td>
                <td className="py-2 px-4 border-t">Test Leave details</td>
                <td className="py-2 px-4 border-t">2024-08-22</td>
                <td className="py-2 px-4 border-t">2024-08-27</td>
                <td className="py-2 px-4 border-t">2024-08-20</td>
                <td className="py-2 px-4 border-t">Admin's Remark</td>
              </tr>
              {/* More rows as needed */}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <p>Showing 1 to 1 of 1 entries</p>
            <div>
              <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded">Previous</button>
              <button className="ml-2 px-3 py-1 bg-gray-200 text-gray-600 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LeaveHistory;
