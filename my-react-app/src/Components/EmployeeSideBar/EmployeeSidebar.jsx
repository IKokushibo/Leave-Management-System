import React,{useState} from 'react';
import Apply from './UserWhite.svg'
import Credit from './User_Card_ID.svg'
import History from './File_Blank.svg'

function Sidebar1 () {
  const [isClicked,  setIsClicked] = useState(false);

  const isClickedHandler  = () => {
    setIsClicked(!isClicked);
  }

  const navigateApplyLeave = () => {
    window.location.href  = '/employee/apply-leave';
  }
  const navigateHistory = () => {
    window.location.href  = '/employee/leave-history';
  }
  const navigateCredits = () => {
    window.location.href  = '/employee/leave-credits';
  }
  const navigateLandingPage = () => {
    window.location.href  = '/employee/landing-page';
  }

  return  (
    <>
     {/* Sidebar */}
     <aside className="w-full h-auto min-w-minwid lg:w-1/4 bg-blue-500 text-white p-8">
        <h1 onClick={navigateLandingPage} className="text-4xl font-bold mb-20 text-center">Employee Leave Management</h1>
       
        <nav className='pl-12'> 
          <ul >
            <li className="mb-5">
              <button onClick={navigateApplyLeave}  className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
                <img src={Apply} alt="" />
                <span className='text-xl'>Apply Leave</span>
              </button>
            </li>
            <li className="mb-5">
              <button  onClick={navigateHistory}  className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
              <img src={History} alt="" />
                <span className='text-xl'>Leave History</span>
              </button>
            </li>
            <li className="mb-5">
              <button onClick={navigateCredits} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
              <img src={Credit} alt="" />
                <span className='text-xl'>Leave Credits Remaining</span>
              </button>
            </li>

          </ul>

        </nav>
      
        
      </aside>
    </>
  )

} 

export  default Sidebar1 ;
