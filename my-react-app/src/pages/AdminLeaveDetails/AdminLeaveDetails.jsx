import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';
import SignatureCanvas from 'react-signature-canvas';

function LeaveDetails() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [description, setDescription] = useState('');
  const [vacationLeaveLess, setVacationLeaveLess] = useState('');
  const [sickLeaveLess, setSickLeaveLess] = useState('');
  const [mandatoryLeaveLess, setMandatoryLeaveLess] = useState('');
  const [specialLeaveLess, setSpecialLeaveLess] = useState('');
  const [disapprovalReasonB, setDisapprovalReasonB] = useState('');
  const [disapprovalReasonD, setDisapprovalReasonD] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [daysWithPay, setDaysWithPay] = useState('');
  const [daysWithoutPay, setDaysWithoutPay] = useState('');
  const [others, setOthers] = useState('');
  const sigCanvasHR = useRef({});
  const sigCanvasSupervisor = useRef({});
  const sigCanvasManager = useRef({});
  const sigCanvasGM = useRef({});

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

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
    console.log(`Action: ${selectedAction}, Description: ${description}`);
    closeModal();
  };

  const clearSignature = (sigCanvas) => sigCanvas.current.clear();

  const saveSignature = (sigCanvas) => {
    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    console.log("Saved Signature Data:", signatureData);
  };

  const getCanvasWidth = () => {
    return Math.min(window.innerWidth * 0.8, 800);
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
        <Sidebar />

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

          {/* Details of Action UI */}
          <div className="mt-12 bg-white p-8 shadow-lg rounded-md">
          <h1 className="text-3xl font-bold mb-8">Details of Action</h1>
          {/* Certification of Leave Credits */}
          <div className="mb-8 p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-4">A. CERTIFICATION OF LEAVE CREDITS</h3>
            <div className="mb-4">
              <p className="mb-2 font-bold">
                As of {currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}
              </p>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left"> </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Vacation Leave</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Sick Leave</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Mandatory/Forced Leave</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Special Leave</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Total Earned</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Less this application</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input 
                        type="number" 
                        value={vacationLeaveLess} 
                        onChange={(e) => setVacationLeaveLess(e.target.value)} 
                        className="border p-1 rounded w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input 
                        type="number" 
                        value={sickLeaveLess} 
                        onChange={(e) => setSickLeaveLess(e.target.value)} 
                        className="border p-1 rounded w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input 
                        type="number" 
                        value={mandatoryLeaveLess} 
                        onChange={(e) => setMandatoryLeaveLess(e.target.value)} 
                        className="border p-1 rounded w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input 
                        type="number" 
                        value={specialLeaveLess} 
                        onChange={(e) => setSpecialLeaveLess(e.target.value)} 
                        className="border p-1 rounded w-full"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Balance</td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>


              {/* HR Officer Signature */}
              <div className="mb-8">
                <label className="block text-sm font-bold mb-2">Signature (HR Officer):</label>
                <SignatureCanvas
                  ref={sigCanvasHR}
                  penColor="black"
                  canvasProps={{ width: getCanvasWidth(), height: 200, className: 'border w-full p-2 rounded' }}
                />
                <div className="mt-2 flex space-x-4">
                  <button
                    type="button"
                    onClick={() => clearSignature(sigCanvasHR)}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => saveSignature(sigCanvasHR)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="mb-8 p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">B. RECOMMENDATION</h3>
              <div className="mb-4">
                <p>For approval</p>
                <p>For disapproval due to:</p>
                <textarea
                  value={disapprovalReasonB}
                  onChange={(e) => setDisapprovalReasonB(e.target.value)}
                  className="border rounded w-full p-2 mt-2"
                  placeholder="Add reason for disapproval here..."
                  rows={3}
                />
                <button
                  type="button"
                  onClick={() => console.log("Note Saved: ", disapprovalReasonB)}
                  className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-md"
                >
                  Save Note
                </button>
              </div>

              {/* Supervisor Signature */}
              <div className="mb-8">
                <label className="block text-sm font-bold mb-2">Signature (Immediate Supervisor):</label>
                <SignatureCanvas
                  ref={sigCanvasSupervisor}
                  penColor="black"
                  canvasProps={{ width: getCanvasWidth(), height: 200, className: 'border w-full p-2 rounded' }}
                />
                <div className="mt-2 flex space-x-4">
                  <button
                    type="button"
                    onClick={() => clearSignature(sigCanvasSupervisor)}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => saveSignature(sigCanvasSupervisor)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold mb-2">Signature (Div. / Dept. Manager):</label>
                <SignatureCanvas
                  ref={sigCanvasManager}
                  penColor="black"
                  canvasProps={{ width: getCanvasWidth(), height: 200, className: 'border w-full p-2 rounded' }}
                />
                <div className="mt-2 flex space-x-4">
                  <button
                    type="button"
                    onClick={() => clearSignature(sigCanvasManager)}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => saveSignature(sigCanvasManager)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Approval/Disapproval */}
            <div className="mb-8 p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">C. APPROVED FOR:</h3>
              <div className="pl-4">
                <div className="flex items-center mb-2">
                  <label htmlFor="daysWithPay" className="mr-4 w-40">Days with pay:</label>
                  <input 
                    type="number" 
                    id="daysWithPay" 
                    value={daysWithPay} 
                    onChange={(e) => setDaysWithPay(e.target.value)} 
                    className="border p-1 rounded w-24"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <label htmlFor="daysWithoutPay" className="mr-4 w-40">Days without pay:</label>
                  <input 
                    type="number" 
                    id="daysWithoutPay" 
                    value={daysWithoutPay} 
                    onChange={(e) => setDaysWithoutPay(e.target.value)} 
                    className="border p-1 rounded w-24"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <label htmlFor="others" className="mr-4 w-40">Others (Specify):</label>
                  <input 
                    type="number" 
                    id="others" 
                    value={others} 
                    onChange={(e) => setOthers(e.target.value)} 
                    className="border p-1 rounded w-24"
                  />
                </div>
              </div>

            </div>

            {/* Final Approval/Disapproval */}
            
            <div className="mb-8 p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">D. DISAPPROVED DUE TO:</h3>
              <textarea
                value={disapprovalReasonD}
                onChange={(e) => setDisapprovalReasonD(e.target.value)}
                className="border rounded w-full p-2"
                placeholder="Add reason for disapproval here..."
                rows={3}
              />
              <button
                type="button"
                onClick={() => console.log("Note Saved: ", disapprovalReasonD)}
                className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-md"
              >
                Save Note
              </button>
              </div>


              {/* GM Signature */}
              <div className="mb-8">
                <label className="block text-sm font-bold mb-2">Signature (General Manager):</label>
                <SignatureCanvas
                  ref={sigCanvasGM}
                  penColor="black"
                  canvasProps={{ width: getCanvasWidth(), height: 200, className: 'border w-full p-2 rounded' }}
                />
                <div className="mt-2 flex space-x-4">
                  <button
                    type="button"
                    onClick={() => clearSignature(sigCanvasGM)}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => saveSignature(sigCanvasGM)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
           
          </div>
        </main>
      </div>

      {/* Modal for setting action */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm mx-auto">
            <h2 className="text-xl font-semibold mb-4">Set Action</h2>
            <select
              className="w-full p-2 border rounded mb-4"
              value={selectedAction}
              onChange={(e) => setSelectedAction(e.target.value)}
            >
              <option value="">Select Action</option>
              <option value="approved">Approve</option>
              <option value="disapproved">Disapprove</option>
            </select>
            <textarea
              className="w-full p-2 border rounded mb-4"
              rows="3"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded">
                Cancel
              </button>
              <button onClick={handleAction} className="bg-blue-500 text-white py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LeaveDetails;
