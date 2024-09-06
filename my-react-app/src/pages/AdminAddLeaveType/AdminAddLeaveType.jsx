import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';

import axios from "../../services/AxiosConfiguration"
import { useNavigate } from 'react-router-dom';

function AddNewLeaveType() {
  const [leaveType, setLeaveType] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [leaveCreditAvailable, setLeaveCreditAvailable] = useState(0);
  const [restorationPeriod, setRestorationPeriod] = useState("");
  const [purpose, setPurpose] = useState("");

  const navigate = useNavigate();

  const leaveTypeHandler = (event) => {
      setLeaveType(event.target.value);
  }
  const descriptionHandler = (event) => {
      setDescription(event.target.value);
  }
  const requirementsHandler = (event) => {
      setRequirements(event.target.value);
  }
  const leaveCreditAvailableHandler = (event) => {
      setLeaveCreditAvailable(event.target.value);
  }
  const restorationHandler = (event) => {
    setRestorationPeriod(event.target.value);
  }
  const purposeHandler = (event) => {
    setPurpose(event.target.value);
  }

  const submitHandler = async() =>{
    try{
      const url = "/users/admin/type-of-leaves/add-type-of-leave";
      const response = await axios.post(url,{
        "leave-type" : leaveType,
        description,
        requirements,
        "type-of-restoration" : purpose,
        "default-duration" : leaveCreditAvailable,
        "restoration-period" : restorationPeriod
      });

      if(response.status === 201){
        navigate("/admin/leave-type");
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <Helmet>
        <title>Add New Leave Type</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />



        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Leave Types Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">Add New Leave Type</h2>
            <p className="mb-6">Please fill out the form below to add a new leave type.</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Leave Type</label>
                <input onChange={(event) => leaveTypeHandler(event)} type="text" className="border w-full p-2 rounded" placeholder="Enter leave type (e.g., Vacation Leave)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Description</label>
                <input onChange={(event) => descriptionHandler(event)} type="text" className="border w-full p-2 rounded" placeholder="Enter description (e.g., Rule XVI, Omnibus Rules...)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Requirements</label>
                <input onChange={(event) => requirementsHandler(event)} type="text" className="border w-full p-2 rounded" placeholder="Enter requirements (e.g., Medical Certificate)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Leave Credit Available</label>
                <input onChange={(event) => leaveCreditAvailableHandler(event)} type="text" className="border w-full p-2 rounded" placeholder="Available Leave Credits (e.g, 5 Sick Leave)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Restoration Period</label>
                <select className="border w-full p-2 rounded" onChange={(event) => restorationHandler(event)}>
                  <option>Choose..</option>
                  <option value="1">Every Month</option>
                  <option value="2">Every 2 Months</option>
                  <option value="3">Every 3 Months</option>
                  <option value="4">Every 4 Months</option>
                  <option value="5">Every 5 Months</option>
                  <option value="6">Every 6 Months</option>
                  <option value="7">Every 7 Months</option>
                  <option value="8">Every 8 Months</option>
                  <option value="9">Every 9 Months</option>
                  <option value="10">Every 10 Months</option>
                  <option value="11">Every 11 Months</option>
                  <option value="12">Every 12 Months</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Purpose:</label>
                <select className="border w-full p-2 rounded" onChange={(event) => purposeHandler(event)}>
                  <option>Choose..</option>
                  <option value="ACCRUED_LEAVE_WITH_ANNUAL_RESET">Adding and Yearly restoration</option>
                  <option value="USE_IT_OR_LOSE_IT">No Adding and Yearly restoration</option>
                  <option value="CARRYOVER_LEAVE_WITH_LAST_RESTORATION">For Restoration</option>
                </select>
              </div>

              <button type='button' onClick={submitHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full mt-6">
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
