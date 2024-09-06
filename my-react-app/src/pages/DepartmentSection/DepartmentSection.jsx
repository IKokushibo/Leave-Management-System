import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SideBard from '../../Components/Sidebar'

import axios from "../../services/AxiosConfiguration"

function DepartmentSection() {
  const [departments, setDepartments] = useState([]);

  const navigateAddType = () => {
    window.location.href = "/admin/add-department"
  }

  useEffect(() => {
    const getDepartments = async () => {

      try {
        const url = "/users/departments";
        const response = await axios.get(url);
        setDepartments(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getDepartments();
  }, [])

  return (
    <>
      <Helmet>
        <title>Department Section</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <SideBard />

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Department Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">Department Management</h2>
            <button onClick={navigateAddType} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-6">
              Add New Department
            </button>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-center">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="border px-4 py-2">
                      #
                    </th>
                    <th className="border px-4 py-2">
                      Department
                    </th>
                    <th className="border px-4 py-2">
                      Shortform
                    </th>
                    <th className="border px-4 py-2">
                      Code
                    </th>
                    <th className="border px-4 py-2">
                      Created Date
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {Array.isArray(departments) && departments.map((element, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{element.id}</td>
                      <td className="border px-4 py-2">{element.name}</td>
                      <td className="border px-4 py-2">{element['short-form']}</td>
                      <td className="border px-4 py-2">{element.code}</td>
                      <td className="border px-4 py-2">{element['created-date']}</td>
                    </tr>
                  ))}


                  {/* Additional department rows would go here */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default DepartmentSection;
