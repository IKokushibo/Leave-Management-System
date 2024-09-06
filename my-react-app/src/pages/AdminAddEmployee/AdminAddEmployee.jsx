import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SideBard from '../../Components/Sidebar';

import axios from "../../services/AxiosConfiguration"

// components
import Loading from '../../Components/LoadingAnimation/Loading';
import { useNavigate } from 'react-router-dom';
import MessageBox from '../../Components/MessageBox/MessageBox';

function AddNewEmployee() {
  const [contactNumberError, setContactNumberError] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");

  const [departments, setDepartments] = useState([]);
  const [departmentId, setDepartmentId] = useState("");

  const [isDepartmentLoading, setIsDepartmentLoading] = useState(false);
  const [departmentError, setDepartmentError] = useState(null);
  const [isDepartmentError, setIsDepartmentError] = useState(false);

  const [isAddLoading, setIsAddLoading] = useState(false);
  const [isAddError, setIsAddError] = useState(false);
  const [addError, setAddError] = useState(null);

  const navigate = useNavigate();

  const employeeIdHandler = (value) => {
    setEmployeeId(value);
  }

  const firstNameHandler = (value) => {
    setFirstName(value);
  }

  const middleNameHandler = (value) => {
    setMiddleName(value);
  }

  const lastNameHandler = (value) => {
    setLastName(value);
  }

  const usernameHandler = (value) => {
    setUsername(value);
  }

  const passwordHandler = (value) => {
    setPassword(value);
  }

  const handleContactNumberChange = (e) => {
    const value = e.target.value;
    const phonePattern = /^(09|\+639)\d{9}$/;  // Pattern for 09xxxxxxxxx or +639xxxxxxxxx

    // Update state
    setContactNumber(value);

    // Validate the number
    if (!phonePattern.test(value)) {
      setContactNumberError('Invalid contact number. It should start with 09 or +639 and be followed by 9 digits.');
    } else {
      setContactNumberError('');
    }
  };

  const roleHandler = (value) => {
    setRole(value);
  }

  const genderHandler = (value) => {
    setGender(value);
  }

  const positionHandler = (value) => {
    setPosition(value);
  }

  const departmentsHandler = (value) => {
    setDepartments(value);
  }

  useEffect(() => {
    const controller = new AbortController();

    const getDepartments = async () => {
      try {
        setIsDepartmentLoading(true);
        const url = "/users/departments";
        const response = await axios.get(url);
        setDepartments(response.data);
      } catch (error) {
        isDepartmentError(true);
        setDepartmentError(error);
      } finally {
        setIsDepartmentLoading(false);
      }
    }

    getDepartments();

    return () => {
      controller.abort();
    }
  }, [])

  const submitButtonHandler = async () => {
    setIsAddLoading(true);
    try {
      const url = "/users/admin/add-user";
      const response = await axios.post(url, {
        "employee-id": employeeId,
        "first-name": firstName,
        "middle-name": middleName,
        "last-name": lastName,
        position,
        role,
        "phone-number": contactNumber,
        username,
        password,
        gender,
        "department-id": departmentId
      });
      if (response && response.status === 201) {
        navigate("/admin/employee-section");
      }
    } catch (error) {
      setIsAddError(true);
      setAddError(error);
    } finally {
      setIsAddLoading(false);
    }
  }


  if (isDepartmentLoading || isAddLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Add Employee Page {employeeId ? employeeId : ""}</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <SideBard />
        {isAddError ? <MessageBox message={addError.response.data.message} action={() => setIsAddError(value => !value)}/> : ""}
        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Employee Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
            <p className="mb-6">Please fill up the form in order to add new employee records.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Employee ID</label>
                  <input type="text" onChange={(value) => employeeIdHandler(value.target.value)} className="border w-full p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">First Name</label>
                  <input type="text" onChange={(value) => firstNameHandler(value.target.value)} className="border w-full p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Middle Name</label>
                  <input type="text" onChange={(value) => middleNameHandler(value.target.value)} className="border w-full p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Last Name</label>
                  <input type="text" onChange={(value) => lastNameHandler(value.target.value)} className="border w-full p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input type="email" onChange={(value) => usernameHandler(value.target.value)} className="border w-full p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Contact Number</label>
                  <input
                    type="text"
                    className="border w-full p-2 rounded"
                    value={contactNumber}
                    onChange={handleContactNumberChange}
                    placeholder="09xxxxxxxxx or +639xxxxxxxxx"
                  />
                  {contactNumberError && <p className="text-red-500 text-sm mt-1">{contactNumberError}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Password</label>
                  <input type="password" onChange={(value) => passwordHandler(value.target.value)} className="border w-full p-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Position</label>
                  <select className="border w-full p-2 rounded" onChange={(value) => positionHandler(value.target.value)}>
                    <option value="">Choose..</option>
                    <option value="ADMINISTRATIVE & HUMAN RESOURCES">ADMINISTRATIVE & HUMAN RESOURCES</option>
                    <option value="GENERAL SERVICES">GENERAL SERVICES</option>
                    <option value="ACCOUNTING, BUDGET & CASH MANAGEMENT">ACCOUNTING, BUDGET & CASH MANAGEMENT</option>
                    <option value="CUSTOMER ACCOUNTS & SERVICES">CUSTOMER ACCOUNTS & SERVICES</option>
                    <option value="PLANNING AND WATER RESOURCES">PLANNING AND WATER RESOURCES</option>
                    <option value="CONSTRUCTION AND MAINTENANCE">CONSTRUCTION AND MAINTENANCE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Assigned Department</label>
                  <select className="border w-full p-2 rounded" onChange={(event) => setDepartmentId(event.target.value)}>
                    <option>Choose..</option>
                    {Array.isArray(departments) && departments.map((element, index) => (
                      <option key={index} value={element.id}>{element.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Role</label>
                  <select className="border w-full p-2 rounded" onChange={(value) => roleHandler(value.target.value)}>
                    <option>Choose..</option>
                    <option value="EMPLOYEE">EMPLOYEE</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="HR">HUMAN RESOURCE</option>
                    <option value="DEPARTMENT_HEAD">DEPARTMENT HEAD</option>
                    <option value="SUPERVISOR">SUPERVISOR</option>
                    <option value="GENERAL_MANAGER">GENERAL MANAGER</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Gender</label>
                  <select className="border w-full p-2 rounded" onChange={(value) => genderHandler(value.target.value)}>
                    <option>Choose..</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>
              <button type='button' onClick={submitButtonHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full mt-6">
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default AddNewEmployee;
