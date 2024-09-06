import LandingPage from "../pages/EmployeeLP/EmployeeLP"
import ApplyLeave from "../pages/ApplyLeave/ApplyLeave"
import LeaveHistoryRT from "../pages/EmployeeLeaveHistory/EmployeeLeaveHistory"
import LeaveCreditsRT from "../pages/EmployeeLeaveCredits/EmployeeLeaveCredits"
import ChangePassword from "../pages/ChangePassword/ChangePassword"

const LandingPageRoute = {
  path: "/employee/landing-page",
  element: <LandingPage />
}

const ApplyLeaveRoute = {
  path: "/employee/apply-leave",
  element: <ApplyLeave />
}
const EmployeeLeaveHistoryRoute = {
  path: "/employee/leave-history",
  element: <LeaveHistoryRT />
}
const EmployeeLeaveCreditsRoute = {
  path: "/employee/leave-credits",
  element: <LeaveCreditsRT />
}

const ChangePasswordRoute = {
  path: "/account/change-password",
  element: <ChangePassword />
}


export { LandingPageRoute, ApplyLeaveRoute, EmployeeLeaveHistoryRoute, EmployeeLeaveCreditsRoute, ChangePasswordRoute }
