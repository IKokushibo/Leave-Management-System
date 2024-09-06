import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Sidebar from '../../Components/Sidebar';

import axios from "../../services/AxiosConfiguration"
import Loading from "../../Components/LoadingAnimation/Loading"
import { useNavigate } from 'react-router-dom';

function ApprovedLeaves() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const [leaves, setLeaves] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = "/users/all-leaves/APPROVED";
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

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (isError) {
    const status = error.status;

    if (status === 401) {
      navigate("/login-admin");
      return;
    }

    if (error.code === "ERR_NETWORK") {
      alert("No Internet Connection");
    }
  }

  return (
    <>
      <Helmet>
        <title>Manage Leave - Approved</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <Sidebar />

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
                {Array.isArray(leaves) && leaves.map((element, index) => (
                  <tr key={index} className="text-center h-14">
                    <td className="border px-4 py-2">{element.id}</td>
                    <td className="border px-4 py-2">{element.user['employee-id']}</td>
                    <td className="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">{element.user['first-name'] + " " + element.user['middle-name'] + " " + element.user['last-name']}</td>
                    <td className="border px-4 py-2">{element['type-of-leave']}</td>
                    <td className="border px-4 py-2">{element['date-of-filing']}</td>
                    <td className="border px-4 py-2 text-green-500">{element['leave-status']}</td>
                    <td className="border px-4 py-2">
                      <button onClick={() => navigate(`/admin/leave-details/${element.id}`)} type='button' className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">
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

export default ApprovedLeaves;
