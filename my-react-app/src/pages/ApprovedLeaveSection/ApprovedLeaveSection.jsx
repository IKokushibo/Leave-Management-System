import React from 'react';
import { Helmet } from 'react-helmet';

function ApprovedLeaves() {
  return (
    <>
      <Helmet>
        <title>Manage Leave - Approved</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-gray-800 text-white p-8">
          <h1 className="text-3xl font-bold mb-10">Employee Leave Management</h1>
          <nav>
            <ul>
              <li className="mb-5">
                <button className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md w-full">
                  <span role="img" aria-label="dashboard">📊</span>
                  <span>Dashboard</span>
                </button>
              </li>
              <li className="mb-5">
                <button className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md w-full">
                  <span role="img" aria-label="employee section">👥</span>
                  <span>Employee Section</span>
                </button>
              </li>
              <li className="mb-5">
                <button className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md w-full">
                  <span role="img" aria-label="department section">🏢</span>
                  <span>Department Section</span>
                </button>
              </li>
              <li className="mb-5">
                <button className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md w-full">
                  <span role="img" aria-label="leave types">📝</span>
                  <span>Leave Types</span>
                </button>
              </li>
              <li className="mb-5">
                <div className="w-full">
                  <button className="flex items-center justify-between w-full hover:bg-gray-700 p-2 rounded-md">
                    <div className="flex items-center space-x-2">
                      <span role="img" aria-label="manage leaves">📅</span>
                      <span>Manage Leave</span>
                    </div>
                  </button>
                  <ul className="pl-6 mt-2 space-y-2">
                    <li>
                      <button className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md w-full">
                        <span>Pending</span>
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md w-full">
                        <span>Approved</span>
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md w-full">
                        <span>Declined</span>
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md w-full">
                        <span>Leave History</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Approved Leaves</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Employee ID</th>
                  <th className="px-4 py-2">Full Name</th>
                  <th className="px-4 py-2">Leave Type</th>
                  <th className="px-4 py-2">Applied On</th>
                  <th className="px-4 py-2">Current Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Data */}
                <tr className="text-center h-14">
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">ASTR000567</td>
                  <td className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">Alice Johnson</td>
                  <td className="border px-4 py-2">Sick Leave</td>
                  <td className="border px-4 py-2">2022-02-10 09:12:45</td>
                  <td className="border px-4 py-2 text-green-500">Approved</td>
                  <td className="border px-4 py-2">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr className="text-center h-14">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">ASTR003456</td>
                  <td className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">Michael Smith</td>
                  <td className="border px-4 py-2">Casual Leave</td>
                  <td className="border px-4 py-2">2022-03-11 14:34:21</td>
                  <td className="border px-4 py-2 text-green-500">Approved</td>
                  <td className="border px-4 py-2">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr className="text-center h-14">
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">ASTR007891</td>
                  <td className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">Emma Brown</td>
                  <td className="border px-4 py-2">Paternity Leave</td>
                  <td className="border px-4 py-2">2022-04-12 18:23:16</td>
                  <td className="border px-4 py-2 text-green-500">Approved</td>
                  <td className="border px-4 py-2">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default ApprovedLeaves;
