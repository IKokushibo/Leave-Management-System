import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SideBard from '../../Components/Sidebar'
import { useNavigate } from 'react-router-dom';

import axios from "../../services/AxiosConfiguration"

// components
import MessageBox from '../../Components/MessageBox/MessageBox';
import Loading from '../../Components/LoadingAnimation/Loading';

function EmployeeSection() {
  const [employees, setEmployees] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const employeeSectionHandler = () => {
    navigate("/admin/add-employee");
  }

  const unauthorizedhandler = () => {
    navigate("/login-admin");
  }

  useEffect(() => {

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const url = "/users/admin/all-employees";
        const response = await axios.get(url);
        setEmployees(response.data);
      } catch (error) {
        setError(error);
      }

    }
    
    fetchData();

    return () => {
      controller.abort(); // Stops the fetch if the component unmounts
    }
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
      return (
        <>
          <MessageBox message={error.response.data.message} action={unauthorizedhandler} />
        </>
      )
    }
  }

  return (
    <>
      <Helmet>
        <title>Employee Section</title>
      </Helmet>

      <div className="w-full flex min-h-screen">
        <SideBard />

        {/* Main Content */}
        <main className="w-75% p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Employee Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">List of Employees</h2>
            <div className="mb-6">
              <button onClick={employeeSectionHandler} className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700">
                Add New Employee
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="w-1/12 py-2 px-4 border-r text-center">#</th>
                    <th className="w-3/12 py-2 px-4 border-r text-left">Name</th>
                    <th className="w-2/12 py-2 px-4 border-r text-left">Employee ID</th>
                    <th className="w-2/12 py-2 px-4 border-r text-left">Department</th>
                    <th className="w-2/12 py-2 px-4 border-r text-left">Position</th>
                    <th className="w-2/12 py-2 px-4 border-r text-left">Start Date</th>
                    <th className="w-2/12 py-2 px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(employees) && employees.map((element, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-2 px-4 border-r">{element['user-id']}</td>
                      <td className="py-2 px-4 border-r text-left">{element['first-name'] + " " + element['last-name']}</td>
                      <td className="py-2 px-4 border-r text-left">{element['employee-id']}</td>
                      <td className="py-2 px-4 border-r text-left">{element.department}</td>
                      <td className="py-2 px-4 border-r text-left">{element.position}</td>
                      <td className="py-2 px-4 border-r text-left">{element['started-date']}</td>
                      <td className="py-2 px-4 text-left">{element.status ? element.status : "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default EmployeeSection;
