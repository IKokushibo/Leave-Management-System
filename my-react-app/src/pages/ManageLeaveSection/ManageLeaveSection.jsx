import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';

import axios from "../../services/AxiosConfiguration";
import { useNavigate } from 'react-router-dom';

import { backToLoginAdmin } from '../../services/UserUtils';

import Loading from '../../Components/LoadingAnimation/Loading';

function ManageLeave() {
  const [activeTab, setActiveTab] = useState('Pending');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const [leaves, setLeaves] = useState([]);

  const navigate = useNavigate();
  
  const handlerLeaveDetails = async(leaveId) => {
    navigate(`/admin/leave-details/${leaveId}`);
  }

  useEffect(() =>{
    const fetchData = async() =>{
      setIsLoading(true);
      try {
        const url = "/users/all-leaves/PENDING";
        const response = await axios.get(url);
        setLeaves(response.data);
      } catch (error) {
        setError(error);
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if(isLoading){
    return(
      <>
        <Loading />
      </>
    )
  }
  
  if(isError){
    
    const status = error.status;
    if(status === 401){
      backToLoginAdmin();
      return;
    }
  }



  return (
    <>
      <Helmet>
        <title>Manage Leave</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8"> {activeTab === "Pending" || activeTab === "Approved" || activeTab === "Declined" ? activeTab + " Leaves" : "Leave History"} </h1>

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
                {Array.isArray(leaves) && leaves.map((leave, index) => (
                  <tr className="text-center h-14" key={index}>
                    <td className="border px-4 py-2">{leave.id}</td>
                    <td className="border px-4 py-2">{leave.user['user-id']}</td>
                    <td className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">{leave.user['first-name'] + " " + leave.user['last-name']}</td>
                    <td className="border px-4 py-2">{leave['type-of-leave']}</td>
                    <td className="border px-4 py-2">{leave['date-of-filing']}</td>
                    <td className={`border px-4 py-2 ${leave['leave-status'] === 'Pending' ? 'text-yellow-500' : leave['leave-status'] === 'Approved' ? 'text-green-500' : 'text-red-500'}`}>
                      {leave['leave-status']}
                    </td>
                    <td className="border px-4 py-2">
                      <button onClick={() => handlerLeaveDetails(leave.id)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
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