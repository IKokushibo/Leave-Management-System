import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';

import axios from "../../services/AxiosConfiguration"
import { useNavigate } from 'react-router-dom';

function AddNewDepartment() {
  const [departmentName, setDepartmentName] = useState("");
  const [shortForm, setShortForm] = useState("");
  const [code, setCode] = useState("");

  const departmentNameHandler = (event) => {
    setDepartmentName(event.target.value);
  }
  const shortFormHandler = (event) => {
    setShortForm(event.target.value);
  }
  const codeHandler = (event) => {
    setCode(event.target.value);
  }

  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      const url = "/users/admin/add-department";
      const response = await axios.post(url, {
        'name': departmentName,
        'short-form': shortForm,
        code
      });
      if(response.status === 201){
        navigate("/admin/department-section");
      }
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Helmet>
        <title>Add New Department</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Department Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">Add New Department</h2>
            <p className="mb-6">Please fill out the form below to add a new department.</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Department Name</label>
                <input onChange={(event) => departmentNameHandler(event)} type="text" className="border w-full p-2 rounded" placeholder="Enter department name" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Shortform</label>
                <input onChange={(event) => shortFormHandler(event)} type="text" className="border w-full p-2 rounded" placeholder="Enter shortform (e.g., HR, IT)" />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Code</label>
                <input onChange={(event) => codeHandler(event)} type="text" className="border w-full p-2 rounded" placeholder="Enter department code (e.g., HR160)" />
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

export default AddNewDepartment;
