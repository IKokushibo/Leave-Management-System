import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';

import axios from "../../services/AxiosConfiguration"
import { useNavigate } from 'react-router-dom';

import Loading from '../../Components/LoadingAnimation/Loading';

function LeaveHistory() {
  const [leaveHistories, setLeaveHistories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getLeaves = async () => {
      setIsLoading(true);
      try {
        const url = "/users/all-leaves";
        const response = await axios.get(url);
        setLeaveHistories(response.data);
        console.log(response);
      } catch (error) {
        setIsError(true);
        setError(error);
      }
      setIsLoading(false);
    }

    getLeaves();
  }, []);

  const viewDetailsHandler = (leaveId) => {
    navigate(`/admin/leave-details/${leaveId}`);
  }

  if(isLoading){
    return(
      <>  
        <Loading/>
      </>
    )
  }

  if(isError){
    console.log(error);
    return;
  }

  return (
    <>
      <Helmet>
        <title>Leave History</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />

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
                {Array.isArray(leaveHistories) && leaveHistories.map((leave, index) => (
                  <tr className="text-center h-14" key={index}>
                    <td className="border px-4 py-2">{leave.id}</td>
                    <td className="border px-4 py-2">{leave.user['employee-id']}</td>
                    <td className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">{leave.user['first-name'] + " " + leave.user['last-name']}</td>
                    <td className="border px-4 py-2">{leave['type-of-leave']}</td>
                    <td className="border px-4 py-2">{leave['date-of-filing']}</td>
                    <td className={`border px-4 py-2 ${leave['leave-status'] === 'Pending' ? 'text-yellow-500' : leave['leave-status'] === 'Approved' ? 'text-green-500' : 'text-red-500'}`}>
                      {leave['leave-status']}
                    </td>
                    <td className="border px-4 py-2">
                      <button type='button' onClick={() => viewDetailsHandler(leave.id)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
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
