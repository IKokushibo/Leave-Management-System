import LandingPage from "../pages/EmployeeLP/EmployeeLP"
import ApplyLeave from "../pages/ApplyLeave/ApplyLeave"
import LeaveHistoryRT from "../pages/EmployeeLeaveHistory/EmployeeLeaveHistory"
import LeaveCreditsRT from "../pages/EmployeeLeaveCredits/EmployeeLeaveCredits"

const LandingPageRoute = {
  path: "/employee/landing-page",
  element:  <LandingPage/>
}

const ApplyLeaveRoute = {
  path: "/employee/apply-leave",
  element: <ApplyLeave/>
  }
  const EmployeeLeaveHistoryRoute = {
    path: "/employee/leave-history",
    element: <LeaveHistoryRT/>
    }
 
    const EmployeeLeaveCreditsRoute = {
      path: "/employee/leave-credits",
      element: <LeaveCreditsRT/>
      }
    

export {LandingPageRoute,ApplyLeaveRoute,EmployeeLeaveHistoryRoute,EmployeeLeaveCreditsRoute}
