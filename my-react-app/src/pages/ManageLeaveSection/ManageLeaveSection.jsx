import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Dashboard from './db.svg'
import Employee from './Users_Group.svg'
import Department from './ds.svg'
import Leave from './leave.svg'
import Manage from './manage.svg'
import Sidebar from '../../Components/Sidebar';

function ManageLeave() {
  const [activeTab, setActiveTab] = useState('Pending');
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };
  const navigateDashboard = () => {
    window.location.href  = '/admin/landing-page';
  }
  const navigateEmployee = () => {
    window.location.href  = '/admin/employee-section';
  }
  const navigateDepartment = () => {
    window.location.href  = '/admin/department-section';
  }
  const navigateLeaveType = () => {
    window.location.href  = '/admin/leave-type';
  }
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


  const filteredLeaves = leaves.filter((leave) => {
    if (activeTab === 'Pending') return leave.status === 'Pending';
    if (activeTab === 'Approved') return leave.status === 'Approved';
    if (activeTab === 'Declined') return leave.status === 'Declined';
    return true;
  });


  return (
    <>
      <Helmet>
        <title>Manage Leave</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}

        <aside className="w-full min-w-minwid lg:w-1/4 bg-blue-500 text-white p-8">
          <h1 className="text-4xl font-bold mb-20 text-center">Employee Leave Management</h1>
          <nav>
            <ul>
              <li className="mb-5">
                <button onClick={navigateDashboard} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
                  <img src={Dashboard} alt="" />
                  <span className='text-xl'>Dashboard</span>
                </button>
              </li>
              <li className="mb-5">
                <button onClick={navigateEmployee} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
                <img src={Employee} alt="" />
                  <span className='text-xl'>Employee Section</span>
                </button>
              </li>
              <li className="mb-5">
                <button onClick={navigateDepartment} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
                  <img src={Department} alt="" />
                  <span className='text-xl'>Department Section</span>
                </button>
              </li>
              <li className="mb-5">
                <button onClick={navigateLeaveType} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
                 <img src={Leave} alt="" />
                  <span className='text-xl'>Leave Types</span>
                </button>
              </li>
              <li className="mb-5">
                <div className="w-full">
                  <button className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full justify-between" onClick={toggleSubmenu}>
                    <div className="flex items-center space-x-2">
                    <img src={Manage} alt="" />
                      <span className='text-xl'>Manage Leave</span>
                    </div>
                    <span className={`transform ${submenuOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>▼</span>
                  </button>
                  {submenuOpen && (
                    <ul className="pl-6 mt-2 space-y-2">
                      <li>
                        <button className={`flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full ${activeTab === 'Pending' ? 'bg-blue-500' : ''}`} onClick={() => handleTabClick('Pending')}>
                          <span className='text-xl'>Pending</span>
                        </button>
                      </li>
                      <li>
                        <button className={`flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full ${activeTab === 'Approved' ? 'bg-blue-500' : ''}`} onClick={() => handleTabClick('Approved')}>
                          <span className='text-xl'>Approved</span>
                        </button>
                      </li>
                      <li>
                        <button className={`flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full ${activeTab === 'Declined' ? 'bg-blue-500' : ''}`} onClick={() => handleTabClick('Declined')}>
                          <span className='text-xl'>Declined</span>
                        </button>
                      </li>
                      <li>
                        <button className={`flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full ${activeTab === 'Leave History' ? 'bg-blue-500' : ''}`} onClick={() => handleTabClick('Leave History')}>
                          <span className='text-xl'>Leave History</span>
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8"> {activeTab === "Pending" || activeTab === "Approved" || activeTab === "Declined" ? activeTab + " Leaves" : "Leave History" } </h1>

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
                {filteredLeaves.map((leave, index) => (
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

export default ManageLeave;
