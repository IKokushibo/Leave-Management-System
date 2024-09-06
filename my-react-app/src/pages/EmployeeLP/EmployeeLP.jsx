import { Helmet } from 'react-helmet'
import BellICO from './Bell.svg'
import UserICO from './User_01.svg'
import UserWhite from './UserWhite.svg'
import FileBlank from './File_Blank.svg'
import UserID from './User_Card_ID.svg'
import { useEffect, useState } from 'react'

import axios from "../../services/AxiosConfiguration";

import Loading from "../../Components/LoadingAnimation/Loading";

function Employee() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const [user, setUser] = useState({});

  const navigateApplyLeave = () => {
    window.location.href = '/employee/apply-leave';
  }
  const navigateHistory = () => {
    window.location.href = '/employee/leave-history';
  }
  const navigateCredits = () => {
    window.location.href = '/employee/leave-credits';
  }
  const navigateLandingPage = () => {
    window.location.href = '/employee/landing-page';
  }

  useEffect(() => {
    const fetchDate = async () => {
      setIsLoading(true);
      try {
        const url = "/users/me";
        const response = await axios.get(url);
        setUser(response.data);
      } catch (error) {
        setIsError(true);
        setError(error);
      }
      setIsLoading(false);
    }

    fetchDate();
  }, []);

  if(isLoading){
    return(
      <>
        <Loading/>
      </>
    )
  }

  if(isError){
    const status = error.status;
    if(status === 401){
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
        <title>Employee Landing Page</title>
      </Helmet>
      <div className="w-full h-screen flex flex-col">
        <nav className='pl-20% pr-20% flex justify-between items-center w-full h-navheight bg-pageBg1 bg-opacity-50 '>
          <div className='w-full'>
            <h1 className='text-32px font-extrabold'>Employee Leave  Management </h1>
          </div>
          <div className='flex gap-5'>
            <img src={BellICO} alt="" />
            <img src={UserICO} alt="" />
          </div>
        </nav>
        <div className='pl-20% pr-20% h-bodyheight w-full flex flex-col'>
          <div className=' border-b border-black mt-10'>
            <h1 className='text-32px font-bold' >Welcome, {user['first-name']}</h1>
            <h3>Select your Transaction </h3>
          </div>
          <div className='pl-20% pr-20% h-bodyheight w-full flex flex-wrap gap-20 p-buttons%' >
            <div className='relative flex flex-col items-center '>
              <img className='absolute top-9 ' src={UserWhite} alt="" />
              <button onClick={navigateApplyLeave} className='bg-blue-500 pt-8 hover:bg-blue-700  rounded-xl w-buttonW h-buttonH font-bold text-36px text-white' >Apply Leave</button>
            </div>
            <div className='relative flex flex-col items-center'>
              <img className='absolute top-9 ' src={FileBlank} alt="" />
              <button onClick={navigateHistory} className='bg-blue-500 pt-8 hover:bg-blue-700  text-white rounded-xl w-buttonW h-buttonH font-bold text-36px' > Leave History</button>
            </div  >
            <div className='relative flex flex-col items-center' >
              <img className='absolute top-8 ' src={UserID} alt="" />
              <button onClick={navigateCredits} className=' bg-blue-500 hover:bg-blue-700  text-white pt-10 rounded-xl w-buttonW h-buttonH font-bold text-36px' > Leave Credits Remaining</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Employee
