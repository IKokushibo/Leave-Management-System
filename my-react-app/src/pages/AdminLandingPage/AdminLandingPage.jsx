import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SideBard from '../../Components/Sidebar'
import { useNavigate } from 'react-router-dom';

import axios from "../../services/AxiosConfiguration"

// utils
import { isAdminValidForAccessing } from '../../services/UserUtils';

// icons
import LogoutIcon from "./LogoutIcon.svg";

// components
import Loading from '../../Components/LoadingAnimation/Loading';

function Dashboard() {
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [registeredEmployees, setRegisteredEmployees] = useState([]);
  const [availableDepartments, setAvailableDepartments] = useState([]);
  const [leaveApplications, setLeaveApplications] = useState([]);

  // user
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const getAdmin = async () => {
      setIsLoading(true);

      try {
        const url = "/users/me";
        const response = await axios.get(url);
        console.log(response);
        if (response.status === 200) {
          if (!isAdminValidForAccessing(response.data.role)) {
            navigate("/login-user");
            return;
          }
        }
      } catch (error) {
        console.log(error)
        setIsError(true);
        setError(error);
      }
      setIsLoading(false);
    }

    getAdmin();

    return () => {
      controller.abort();
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const getLeaves = async () => {
      const url = "/users/admin/type-of-leaves";
      const response = await axios.get(url);
      setLeaveTypes(response.data);
      return () => {
        controller.abort();
      }
    }

    getLeaves();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const getEmployees = async () => {
      const url = "/users/admin/all-employees";
      const response = await axios.get(url);
      setRegisteredEmployees(response.data);
      return () => {
        controller.abort();
      }
    }

    getEmployees();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const getDepartments = async () => {
      const url = "/users/departments";
      const response = await axios.get(url);
      setAvailableDepartments(response.data);
    }
    getDepartments();

    return () => {
      controller.abort();
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const getLeaveApplications = async () => {
      const url = "/users/all-leaves";
      const response = await axios.get(url);
      setLeaveApplications(response.data);
    }
    getLeaveApplications();
    return () => {
      controller.abort();
    }
  }, []);

  const logoutHandler = async () => {
    try {
      setIsLoading(true);
      const url = "/users/log-out";
      const response = await axios.post(url);
      if (response.status === 201) {
        navigate("/login-admin");
      }
    } catch (error) {
      setError(error);
      setIsError(true);
    }
    setIsLoading(true);
  }

  const pendingLeaveLength = leaveApplications ? leaveApplications.filter((leave) => leave['leave-status'] === "PENDING").length : 0;
  const approvedLeaveLength = leaveApplications ? leaveApplications.filter((leave) => leave['leave-status'] === "APPROVED").length : 0;
  const disapprovedLeaveLength = leaveApplications ? leaveApplications.filter((leave) => leave['leave-status'] === "DISAPPROVED").length : 0;

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (isError) {

    const status = error.status;

    if (status === 401 || status === 403) {
      // remove token and redirect to the login page
      alert("Session expired");
      return;
    }

    if (error.code === "ERR_NETWORK") {
      alert("Network Error");
      return;
    }
  }

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <div className="flex min-h-screen">
        <SideBard />

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <div className='flex justify-between'>
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <img src={LogoutIcon} onClick={logoutHandler} className='size-5 mt-2' alt="" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl font-bold">{leaveTypes.length}</h2>
                <p className="mt-2 text-lg">Leave Types</p>
              </div>
            </div>
            <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl font-bold">{registeredEmployees.length}</h2>
                <p className="mt-2 text-lg">Registered Employees</p>
              </div>
            </div>
            <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl font-bold">{availableDepartments.length}</h2>
                <p className="mt-2 text-lg">Available Departments</p>
              </div>
            </div>
            <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl font-bold">{pendingLeaveLength}</h2>
                <p className="mt-2 text-lg">Pending Applications</p>
              </div>
            </div>
            <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl font-bold">{disapprovedLeaveLength}</h2>
                <p className="mt-2 text-lg">Declined Applications</p>
              </div>
            </div>
            <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl font-bold">{approvedLeaveLength}</h2>
                <p className="mt-2 text-lg">Approved Applications</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );

}

export default Dashboard;
