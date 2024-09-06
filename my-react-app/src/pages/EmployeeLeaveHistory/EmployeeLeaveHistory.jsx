import React, { useEffect, useState } from 'react';
import Sidebar from '../../Components/EmployeeSideBar/EmployeeSidebar';
import { Helmet } from 'react-helmet'

import axios from "../../services/AxiosConfiguration";

import Loading from '../../Components/LoadingAnimation/Loading';

const LeaveHistory = () => {
  const [leaves, setLeaves] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = "/users/leaves";
        const response = await axios.get(url);
        setLeaves(response.data);
        console.log(response.data);
      } catch (error) {
        setIsError(true);
        setError(error);
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (isError) {
    const status = error.status;

    if (status === 403) {
      alert(error.response.data.message)
    } else if (status === 400) {
      alert(error.response.data.message)
    } else if (status === 401) {
      alert("Session expired");
    } else if (error.code === "ERR_NETWORK") {
      alert("Network Error");
    }

    setIsError(false);
  }
  return (
    <>
      <Helmet>
        <title>Leave History</title>
      </Helmet>

      <div className="flex h-screen bg-pageBg1">
        <Sidebar />

        {/* Main Content */}
        <div className="w-4/5 p-10">
          <h1 className="text-3xl font-bold mb-6">Leave History</h1>
          <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Leave History Table</h2>
            <p className="mb-4">List of Applied Leave</p>
            <div className="flex justify-end mb-4">
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
                {Array.isArray(leaves) && leaves.map((element, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-t">{element.id}</td>
                    <td className="py-2 px-4 border-t">{element['type-of-leave']}</td>
                    <td className="py-2 px-4 border-t">{element['details-of-leave']}</td>
                    <td className="py-2 px-4 border-t">{element['start-at']}</td>
                    <td className="py-2 px-4 border-t">{element['end-at']}</td>
                    <td className="py-2 px-4 border-t">{element['date-of-filing']}</td>
                    <td className="py-2 px-4 border-t">{element['leave-status']}</td>
                  </tr>
                ))}
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
