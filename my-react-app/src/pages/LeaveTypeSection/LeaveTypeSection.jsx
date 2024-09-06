import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SideBard from '../../Components/Sidebar'

import axios from "../../services/AxiosConfiguration"

function LeaveTypeSection() {
  const [typeOfLeaves, setTypeOfLeaves] = useState([]);

  const navigateAddType = () => {
    window.location.href = "/admin/add-leave-type"
  }

  useEffect(() =>{
    const getTypeOfLeave = async() =>{
      try {
        const url = "/users/admin/type-of-leaves";
        const response = await axios.get(url);
        setTypeOfLeaves(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getTypeOfLeave();
    
  }, []);

  return (
    <>
      <Helmet>
        <title>Leave Types Section</title>
      </Helmet>

      <div className="flex min-h-screen">
        <SideBard />

        {/* Main Content */}
        <main className="w-75% min-w-1011.75px p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Leave Types Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">Leave Types</h2>

            <button onClick={navigateAddType} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-6">
              Add New Leave Type
            </button>

            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">Leave Type</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Requirements</th>
                  <th className="p-4">Leave Credit Available</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(typeOfLeaves) && typeOfLeaves.map((leave, index) => (
                  <tr key={leave.id} className="border-b">
                    <td className="p-4">{leave.id}</td>
                    <td className="p-4">{leave['leave-type']}</td>
                    <td className="p-4">{leave.description}</td>
                    <td className="p-4">{leave.requirements}</td>
                    <td className="p-4">{leave['default-duration']}</td>
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

export default LeaveTypeSection;
