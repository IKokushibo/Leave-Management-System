import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginRoute, LoginAdminRoute } from "./routes/LoginRoute";
import { LandingPageRoute, ApplyLeaveRoute, EmployeeLeaveHistoryRoute, EmployeeLeaveCreditsRoute, ChangePasswordRoute } from './routes/LandingPage';

import { AddEmployeeRoute, AdminLandingPageRoute, EmployeeSectionRoute, DepartmentSectionRoute, AddDepartmentRoute, LeaveTypeRoute, AddLeaveTypeRoute, ManageLeaveTypeRoute, DeclinedLeaveTypeRoute, ApprovedLeaveTypeRoute, LeaveHistoryRoute, LeaveDetailsRoute } from './routes/AdminPage';


const routers = createBrowserRouter([

  LoginRoute,
  LoginAdminRoute,
  LandingPageRoute,
  ApplyLeaveRoute,
  AddEmployeeRoute,
  AdminLandingPageRoute,
  EmployeeSectionRoute,
  DepartmentSectionRoute,
  AddDepartmentRoute,
  LeaveTypeRoute,
  AddLeaveTypeRoute,
  ManageLeaveTypeRoute,
  ApprovedLeaveTypeRoute,
  DeclinedLeaveTypeRoute,
  LeaveHistoryRoute,
  LeaveDetailsRoute,
  EmployeeLeaveHistoryRoute,
  EmployeeLeaveCreditsRoute,
  ChangePasswordRoute
]);

export default function App() {
  return (
    <RouterProvider router={routers} />
  )
}
