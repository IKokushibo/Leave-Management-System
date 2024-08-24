import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';

function LeaveDetails() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [description, setDescription] = useState('');

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAction('');
    setDescription('');
  };

  const handleAction = () => {
    // Handle the selected action and description here
    console.log(`Action: ${selectedAction}, Description: ${description}`);
    closeModal();
  };

  const leave = {
    employeeId: 'ASTR012447',
    employeeName: 'Christian James Torres',
    gender: 'Male',
    employeeEmail: 'x.tiaaantorres@gmail.com',
    employeeContact: '09959651913',
    leaveType: 'Sick Leave',
    leaveFrom: '2022-02-18',
    leaveUpto: '2022-02-11',
    leaveApplied: '2022-02-10 21:50:30',
    status: 'Pending',
    leaveConditions: 'This is just a demo condition for testing purpose!!',
    adminRemark: 'Waiting for Action',
    adminActionOn: 'NA',
  };

  return (
    <>
      <Helmet>
        <title>Leave Details</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar/>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Leave Details</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Employee ID: <span className="font-normal">{leave.employeeId}</span></h2>
              <h2 className="text-xl font-semibold mb-2">Employee Name: <span className="font-normal text-blue-500 cursor-pointer">{leave.employeeName}</span></h2>
              <h2 className="text-xl font-semibold mb-2">Gender: <span className="font-normal">{leave.gender}</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h2 className="text-lg font-semibold">Employee Email:</h2>
                <p>{leave.employeeEmail}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Employee Contact:</h2>
                <p>{leave.employeeContact}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Leave Type:</h2>
                <p>{leave.leaveType}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Leave From:</h2>
                <p>{leave.leaveFrom}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Leave Upto:</h2>
                <p>{leave.leaveUpto}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Leave Applied:</h2>
                <p>{leave.leaveApplied}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Status:</h2>
                <p className={leave.status === 'Pending' ? 'text-yellow-500' : leave.status === 'Approved' ? 'text-green-500' : 'text-red-500'}>{leave.status}</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold">Leave Conditions:</h2>
              <p>{leave.leaveConditions}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold">Admin Remark:</h2>
              <p>{leave.adminRemark}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold">Admin Action On:</h2>
              <p>{leave.adminActionOn}</p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Set Action
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Set Action</h2>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2">Action:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
              >
                <option value="" disabled>Select Action</option>
                <option value="Approve">Approve</option>
                <option value="Decline">Decline</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2">Description:</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAction}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LeaveDetails;
