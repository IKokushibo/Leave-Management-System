import React, { useEffect, useState } from 'react';
import Sidebar from '../../Components/EmployeeSideBar/EmployeeSidebar';
import { Helmet } from 'react-helmet'

import axios from "../../services/AxiosConfiguration";

import Loading from '../../Components/LoadingAnimation/Loading';

const LeaveCreditsRemaining = () => {

  const [remainingLeaves, setRemainingLeaves] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = "/users/me";
        const response = await axios.get(url);
        setRemainingLeaves(response.data.userLeaveList);
        console.log(response.data.userLeaveList);
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
        <title>Leave Credits Remaining</title>
      </Helmet>



      <div className="flex h-screen bg-pageBg1">
        <Sidebar />

        {/* Main Content */}
        <div className="w-4/5 p-10">
          <h1 className="text-3xl font-bold mb-6">Leave Credits Remaining</h1>

          <div className="w-full h-auto flex-col gap-10 mt-28  " >

            <div className='w-full flex flex-wrap gap-10 h-52 justify-evenly'>
              {Array.isArray(remainingLeaves) && remainingLeaves.map((element, index) => (
                <div key={index} className="bg-blue-500 flex-wrap min-w-56 max-w-56 h-auto text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                  <h2 className="text-5xl font-bold">{element.remainingLeave}</h2>
                  <p className="mt-2 text-2xl font-semibold">{element.typeOfLeave.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveCreditsRemaining;
