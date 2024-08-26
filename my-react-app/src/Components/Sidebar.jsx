import React,{useState} from 'react';
import Submenu from './Submenu';
import Dashboard from './db.svg'
import Employee from './Users_Group.svg'
import Department from './ds.svg'
import Leave from './leave.svg'
import Manage from './manage.svg'

function Sidebar () {
  const [isClicked,  setIsClicked] = useState(false);

  const isClickedHandler  = () => {
    setIsClicked(!isClicked);
  }
  const navigateDashboard = () => {
    window.location.href  = '/admin/landing-page';
  }
  const navigateEmployee = () => {
    window.location.href  = '/admin/employee-section';
  }
  const navigateDepartment = () => {
    window.location.href  = '/admin/department-section';
  }
  const navigateLeaveType = () => {
    window.location.href  = '/admin/leave-type';
  }


  return  (
    <>
     {/* Sidebar */}
     <aside className="w-full min-w-minwid lg:w-1/4 bg-blue-500 text-white p-8">
        <h1 className="text-4xl font-bold mb-20 text-center">Employee Leave Management</h1>
       
        <nav className='pl-12'>
          <ul >
            <li className="mb-5">
              <button onClick={navigateDashboard} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
                <img src={Dashboard} alt="" />
                <span className='text-xl'>Dashboard</span>
              </button>
            </li>
            <li className="mb-5">
              <button onClick={navigateEmployee} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
              <img src={Employee} alt="" />
                <span className='text-xl'>Employee Section</span>
              </button>
            </li>
            <li className="mb-5">
              <button onClick={navigateDepartment} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
              <img src={Department} alt="" />
                <span className='text-xl'>Department Section</span>
              </button>
            </li>
            <li className="mb-5">
              <button onClick={navigateLeaveType} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full">
                <img src={Leave} alt="" />
                <span className='text-xl'>Leave Types</span>
              </button>
            </li>
            <li className="mb-5 relative">
              <button onClick={isClickedHandler} className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded-md w-full justify-between">
                <div className='flex gap-2'>
                <img src={Manage} alt="" />
                <span className='text-xl' >Manage Leaves</span>
                </div>               
                <span className={`transform ${isClicked ? 'rotate-180' : 'rotate-0'} transition-transform `}>▼</span>
              </button>
              {isClicked ? <Submenu/> : "" }
            </li>
          </ul>

        </nav>
      
        
      </aside>
    </>
  )

}

export  default Sidebar;
