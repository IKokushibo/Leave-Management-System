import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar  from '../../Components/Sidebar';

function LeaveHistory() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  // Example leave data
  const leaves = [
    {
      id: 1,
      employeeId: 'ASTR000084',
      fullName: 'Jennifer Foltz',
      leaveType: 'Casual Leave',
      appliedOn: '2022-02-09 21:16:15',
      status: 'Pending',
    },
    {
      id: 2,
      employeeId: 'ASTR001245',
      fullName: 'Johnny Scott',
      leaveType: 'Compensatory Leave',
      appliedOn: '2021-03-03 18:09:15',
      status: 'Pending',
    },
    {
      id: 3,
      employeeId: 'ASTR002996',
      fullName: 'Carol Reed',
      leaveType: 'Medical Leave',
      appliedOn: '2021-03-03 17:54:44',
      status: 'Approved',
    },
    {
      id: 4,
      employeeId: 'ASTR004699',
      fullName: 'Shawn Den',
      leaveType: 'Paternity Leave',
      appliedOn: '2021-03-03 16:43:18',
      status: 'Pending',
    },
    {
      id: 5,
      employeeId: 'ASTR001245',
      fullName: 'Johnny Scott',
      leaveType: 'Casual Leave',
      appliedOn: '2021-03-02 15:17:42',
      status: 'Declined',
    },
    {
      id: 6,
      employeeId: 'ASTR001369',
      fullName: 'Milton Doe',
      leaveType: 'Medical Leave',
      appliedOn: '2021-03-02 15:16:01',
      status: 'Declined',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Leave History</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
       <Sidebar/>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Leave History</h1>

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
                {leaves.map((leave, index) => (
                  <tr className="text-center h-14" key={leave.id}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{leave.employeeId}</td>
                    <td className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">{leave.fullName}</td>
                    <td className="border px-4 py-2">{leave.leaveType}</td>
                    <td className="border px-4 py-2">{leave.appliedOn}</td>
                    <td className={`border px-4 py-2 ${leave.status === 'Pending' ? 'text-yellow-500' : leave.status === 'Approved' ? 'text-green-500' : 'text-red-500'}`}>
                      {leave.status}
                    </td>
                    <td className="border px-4 py-2">
                      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default LeaveHistory;
