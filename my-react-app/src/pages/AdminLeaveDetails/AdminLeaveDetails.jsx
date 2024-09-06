import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate, useParams } from 'react-router-dom';

import axios from "../../services/AxiosConfiguration"

function LeaveDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [description, setDescription] = useState('');
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

  const [leave, setLeave] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);

  const [typeOfLeaves, setTypeOfLeaves] = useState([]);
  const [userLeaves, setUserLeaves] = useState([]);
  const [fourTypeOfLeaves, setFourTypeOfLeaves] = useState([]);

  const [hrDecision, setHrDecision] = useState("PENDING");
  const [departmentHeadDecision, setDepartmentHeadDecision] = useState("PENDING");
  const [supervisorDecision, setSupervisorDecision] = useState("PENDING");

  const [lessThisApplication, setLessThisApplication] = useState(0);

  // signatures
  const [generalManagerRecommendation, setGeneralManagerRecommendation] = useState("");

  const [htSignature, setHrSignature] = useState(null);
  const [departmentHeadSignature, setDepartmentHeadSignature] = useState(null);
  const [supervisorSignature, setSupervisorSignature] = useState(null);
  const [generalManagerSignature, setGeneralManagerSignature] = useState(null);

  const navigate = useNavigate();

  // this signature is for submitting signature
  const [signature, setSignature] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAction('');
    setDescription('');
  };

  const handleAction = () => {
    submitGeneralManagerDecision(selectedAction);
    closeModal();
  };

  const clearSignature = (sigCanvas) => {
    sigCanvas.current.clear()
    setSignature(null);
  };

  const saveSignature = (sigCanvas) => {
    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    setSignature(signatureData);
  };

  const getCanvasWidth = () => {
    return Math.min(window.innerWidth * 0.8, 800);
  };


  useEffect(() => {
    const getLeaveApplication = async () => {
      setIsLoading(true);
      try {
        const url1 = `/users/leaves/${id}`;
        const response1 = await axios.get(url1);
        setLeave(response1.data);

        const userId = response1.data.user['user-id'];

        const url2 = `/users/remaining-leaves/${userId}`;
        const response2 = await axios.get(url2);
        setUserLeaves(response2.data);
      } catch (error) {
        setError(error);
        setIsError(true);
      }
      setIsLoading(false);
    }
    getLeaveApplication();
  }, []);

  const commonLeaveToShow = userLeaves.filter(
    leave => leave['type-of-leave']['type-of-restoration'] === "ACCRUED_LEAVE_WITH_ANNUAL_RESET" ||
      leave['type-of-leave']['type-of-restoration'] === "USE_IT_OR_LOSE_IT"
  );

  const submitHrDecision = async (decision) => {
    try {
      setIsLoading(true);
      const url = "/users/admin/apply-leave/sign";
      const response = await axios.post(url, {
        "reason-of-rejection": disapprovalReasonB,
        "less-this-application": lessThisApplication,
        "signature-base64": signature,
        "leave-request-id": id,
        "decision": decision
      });

      console.log(response);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setError(error);
    }
    setIsLoading(false);
  }

  const submitDepartmentHeadDecision = async (decision) => {
    try {
      const noValue = 0;
      setIsLoading(true);
      const url = "/users/admin/apply-leave/sign";
      const response = await axios.post(url, {
        "reason-of-rejection": "",
        "less-this-application": noValue,
        "signature-base64": signature,
        "leave-request-id": id,
        "decision": decision
      });

      console.log(response);
    } catch (error) {
      setIsError(true);
      setError(error);
    }
    setIsLoading(false);
  }

  const submitSupervisorDecision = async (decision) => {
    try {
      const noValue = 0;
      setIsLoading(true);
      const url = "/users/admin/apply-leave/sign";
      const response = await axios.post(url, {
        "reason-of-rejection": "",
        "less-this-application": noValue,
        "signature-base64": signature,
        "leave-request-id": id,
        "decision": decision
      });

      console.log(response);
    } catch (error) {
      setIsError(true);
      setError(error);
      
    }
    setIsLoading(false);
  }

  const submitGeneralManagerDecision = async (decision) => {
    try {
      const noValue = 0;
      setIsLoading(true);
      const url = "/users/admin/apply-leave/sign";
      const response = await axios.post(url, {
        "reason-of-rejection": disapprovalReasonD,
        "less-this-application": noValue,
        "signature-base64": signature,
        "leave-request-id": id,
        "decision": decision
      });
      console.log(response)
    } catch (error) {
      isError(true);
      setError(error);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <>
        <div>Loading ...</div>
      </>
    );
  }

  if (isError) {
    const status = error.status;
    
    if(status === 403){
      alert(error.response.data.message)
      navigate("/employee/landing-page");
    }else if(status === 400){
      alert(error.response.data.message)
    }else if (status === 401) {
      alert("Session expired");
      navigate("/login-admin");
    }else if (error.code === "ERR_NETWORK") {
      alert("Network Error");
    }if(status === 404){
      navigate("/admin/pending-leave-type");
      return;
    }
    setIsError(false);
  }


  return (
    <>
      <Helmet>
        <title>Leave Details {signature ? signature : ""}</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Leave Details</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Employee ID: <span className="font-normal">{leave ? leave.user['employee-id'] : ""}</span></h2>
              <h2 className="text-xl font-semibold mb-2">Employee Name: <span className="font-normal text-blue-500 cursor-pointer">{leave ? leave.user['first-name'] + " " + leave.user['last-name'] : ""}</span></h2>
              <h2 className="text-xl font-semibold mb-2">Gender: <span className="font-normal">{leave ? leave.user.gender : ""}</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h2 className="text-lg font-semibold">Employee Email:</h2>
                <p>{leave ? leave.user.username : ""}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Employee Contact:</h2>
                <p>{leave ? leave.user['contact-number'] : ""}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Leave Type:</h2>
                <p>{leave ? leave['type-of-leave'] : ""}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Leave From:</h2>
                <p>{leave ? leave['start-at'] : ""}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Leave Upto:</h2>
                <p>{leave ? leave['end-at'] : ""}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Leave Applied:</h2>
                <p>{leave ? leave['date-of-filing'] : ""}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Status:</h2>
                {leave ? <p className={leave['leave-status'] === 'PENDING' ? 'text-yellow-500' : leave['leave-status'] === 'APPROVED' ? 'text-green-500' : 'text-red-500'}>{leave['leave-status']}</p> : <p></p>}
              </div>
            </div>



            <div className="mb-6">
              <h2 className="text-lg font-semibold">Admin Remark:</h2>
              <p className={`${selectedAction === 'APPROVED' ? 'text-green-600' : selectedAction === 'DISAPPROVED' ? 'text-red-600' : ''}`}>{selectedAction ? selectedAction : "Undecided"}</p>
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
                  <thead className='w-full'>
                    <tr className="bg-gray-200 w-full">
                      <th className="border border-gray-300 px-4 py-2 text-center"> </th>
                      {Array.isArray(commonLeaveToShow) && commonLeaveToShow.map((element, index) => (
                        <th key={index} className="border border-gray-300 px-4 py-2 text-center">
                          {element['type-of-leave']['leave-type']}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Total Earned</td>
                      {Array.isArray(commonLeaveToShow) && commonLeaveToShow.map((element, index) => (
                        <td key={index} className="border border-gray-300 px-4 text-center py-2">
                          {element['remaining-leave']}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Less this application</td>
                      <td colSpan="4" className="border border-gray-300 px-4 py-2">
                        <input
                          type="number"
                          value={lessThisApplication}
                          onChange={(e) => setLessThisApplication(e.target.value)}
                          className="border text-center p-1 rounded w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Balance</td>
                      {Array.isArray(commonLeaveToShow) && commonLeaveToShow.map((element, index) => (
                        <td key={index} className="border border-gray-300 px-4 text-center py-2">
                          {leave['type-of-leave-id'] === element['type-of-leave'].id ? (element['remaining-leave'] - lessThisApplication < 0 ? 0 : element['remaining-leave'] - lessThisApplication) : element['remaining-leave']}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>


              {/* HR Officer Signature */}
              <div className="mb-8 p-6 border rounded-lg">
                <div className="flex items-center justify-between">
                  {/* Flexbox for Signature Label and Dropdown */}
                  <div className="flex items-center space-x-4">
                    {/* Label for signature */}
                    <label className="text-lg font-semibold">
                      Signature (HR Offier):
                    </label>

                    {/* Dropdown for Supervisor Decision */}
                    <div className="flex items-center ">
                      <label className="mr-2 font-bold">Status:</label>
                      <select
                        value={hrDecision}
                        onChange={(e) => submitHrDecision(e.target.value)}
                        className="border rounded p-2 mb-1"
                      >
                        <option value="PENDING">Pending</option>
                        <option value="APPROVED">Approved</option>
                        <option value="DECLINED">Declined</option>
                      </select>
                    </div>
                  </div>

                  {/* Label for status with color */}
                  <div>
                    {hrDecision === "PENDING" && (
                      <span className="text-yellow-500 font-semibold">
                        Pending
                      </span>
                    )}
                    {hrDecision === "APPROVED" && (
                      <span className="text-green-500 font-semibold">
                        Approved
                      </span>
                    )}
                    {hrDecision === "DECLINED" && (
                      <span className="text-red-500 font-semibold">
                        Declined
                      </span>
                    )}
                  </div>
                </div>

                <SignatureCanvas
                  ref={sigCanvasHR}
                  penColor="black"
                  canvasProps={{
                    width: getCanvasWidth(),
                    height: 200,
                    className: "border w-full p-2 rounded",
                  }}
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
                  onClick={() =>
                    console.log("Note Saved: ", disapprovalReasonB)
                  }
                  className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-md"
                >
                  Save Note
                </button>
              </div>

              {/* Supervisor Signature */}
              <div className="mb-8 p-6 border rounded-lg">
                <div className="flex items-center justify-between">
                  {/* Flexbox for Signature Label and Dropdown */}
                  <div className="flex items-center space-x-4">
                    {/* Label for signature */}
                    <label className="text-lg font-semibold">
                      Signature (Immediate Supervisor):
                    </label>

                    {/* Dropdown for Supervisor Decision */}
                    <div className="flex items-center ">
                      <label className="mr-2 font-bold">Status:</label>
                      <select
                        value={supervisorDecision}
                        onChange={(e) => submitSupervisorDecision(e.target.value)}
                        className="border rounded p-2 mb-1"
                      >
                        <option value="PENDING">Pending</option>
                        <option value="APPROVED">Approved</option>
                        <option value="DECLINED">Declined</option>
                      </select>
                    </div>
                  </div>

                  {/* Label for status with color */}
                  <div>
                    {supervisorDecision === "PENDING" && (
                      <span className="text-yellow-500 font-semibold">
                        Pending
                      </span>
                    )}
                    {supervisorDecision === "APPROVED" && (
                      <span className="text-green-500 font-semibold">
                        Approved
                      </span>
                    )}
                    {supervisorDecision === "DECLINED" && (
                      <span className="text-red-500 font-semibold">
                        Declined
                      </span>
                    )}
                  </div>
                </div>

                <SignatureCanvas
                  ref={sigCanvasSupervisor}
                  penColor="black"
                  canvasProps={{
                    width: getCanvasWidth(),
                    height: 200,
                    className: "border w-full p-2 rounded",
                  }}
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

              {/* Div. / Dept. Manager */}
              <div className="mb-8 p-6 border rounded-lg">
                <div className="flex items-center justify-between">
                  {/* Flexbox for Signature Label and Dropdown */}
                  <div className="flex items-center space-x-4">
                    {/* Label for signature */}
                    <label className="text-lg font-semibold">
                      Signature (Div. / Dept. Manager):
                    </label>

                    {/* Dropdown for Supervisor Decision */}
                    <div className="flex items-center ">
                      <label className="mr-2 font-bold">Status:</label>
                      <select
                        value={departmentHeadDecision}
                        onChange={(e) => submitDepartmentHeadDecision(e.target.value)}
                        className="border rounded p-2 mb-1"
                      >
                        <option value="PENDING">Pending</option>
                        <option value="APPROVED">Approved</option>
                        <option value="DECLINED">Declined</option>
                      </select>
                    </div>
                  </div>

                  {/* Label for status with color */}
                  <div>
                    {departmentHeadDecision === "PENDING" && (
                      <span className="text-yellow-500 font-semibold">
                        Pending
                      </span>
                    )}
                    {departmentHeadDecision === "APPROVED" && (
                      <span className="text-green-500 font-semibold">
                        Approved
                      </span>
                    )}
                    {departmentHeadDecision === "DECLINED" && (
                      <span className="text-red-500 font-semibold">
                        Declined
                      </span>
                    )}
                  </div>
                </div>

                <SignatureCanvas
                  ref={sigCanvasManager}
                  penColor="black"
                  canvasProps={{
                    width: getCanvasWidth(),
                    height: 200,
                    className: "border w-full p-2 rounded",
                  }}
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
                  <label htmlFor="daysWithPay" className="mr-4 w-40">
                    Days with pay:
                  </label>
                  <input
                    type="number"
                    id="daysWithPay"
                    value={daysWithPay}
                    onChange={(e) => setDaysWithPay(e.target.value)}
                    className="border p-1 rounded w-24"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <label htmlFor="daysWithoutPay" className="mr-4 w-40">
                    Days without pay:
                  </label>
                  <input
                    type="number"
                    id="daysWithoutPay"
                    value={daysWithoutPay}
                    onChange={(e) => setDaysWithoutPay(e.target.value)}
                    className="border p-1 rounded w-24"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <label htmlFor="others" className="mr-4 w-40">
                    Others (Specify):
                  </label>
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
              <h3 className="text-lg font-semibold mb-4">
                D. DISAPPROVED DUE TO:
              </h3>
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

            {/* General Manager*/}
            <div className="mb-8 p-6 border rounded-lg">
              <div className="flex items-center justify-between">
                {/* Flexbox for Signature Label and Dropdown */}
                <div className="flex items-center space-x-4">
                  {/* Label for signature */}
                  <label className="text-lg font-semibold">
                    Signature (General Manager):
                  </label>
                </div>
              </div>

              <SignatureCanvas
                ref={sigCanvasGM}
                penColor="black"
                canvasProps={{
                  width: getCanvasWidth(),
                  height: 200,
                  className: "border w-full p-2 rounded",
                }}
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
      {
        isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg max-w-sm mx-auto">
              <h2 className="text-xl font-semibold mb-4">Set Action</h2>
              <select
                className="w-full p-2 border rounded mb-4"
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
              >
                <option value="">Select Action</option>
                <option value="APPROVED">Approve</option>
                <option value="DISAPPROVED">Disapprove</option>
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
        )
      }
    </>
  );
}

export default LeaveDetails;
