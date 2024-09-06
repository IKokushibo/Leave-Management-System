import AddEmployee from '../pages/AdminAddEmployee/AdminAddEmployee'
import AdminLandingPageRT from '../pages/AdminLandingPage/AdminLandingPage'
import EmployeeSectionRT from '../pages/EmployeeSection/EmployeeSection'
import DepartmentSectionRT from '../pages/DepartmentSection/DepartmentSection'
import AddDepartment from '../pages/AdminAddDepartment/AdminAddDepartment'
import LeaveTypeRT from '../pages/LeaveTypeSection/LeaveTypeSection'
import AddLeaveTypeRT from '../pages/AdminAddLeaveType/AdminAddLeaveType'
import ManageLeaveTypeRT from '../pages/ManageLeaveSection/ManageLeaveSection'
import ApprovedLeaveTypeRT from '../pages/ApprovedLeaveSection/ApprovedLeaveSection'
import DeclinedLeaveTypeRT from '../pages/DeclinedLeaveSection/DeclinedLeaveSection'
import LeaveHistoryRT from '../pages/LeaveHistoryPage/LeaveHistoryPage'
import LeaveDetailsRT from '../pages/AdminLeaveDetails/AdminLeaveDetails'

const AddEmployeeRoute  =  {
   path: "/admin/add-employee",
   element:  <AddEmployee/>
  }
 const AdminLandingPageRoute  =  {
   path: "/admin/landing-page",
   element:  <AdminLandingPageRT/>
  }
  const EmployeeSectionRoute  =  {
   path: "/admin/employee-section",
   element:  <EmployeeSectionRT/>
  }
  const DepartmentSectionRoute  =  {
   path: "/admin/department-section",
   element:  <DepartmentSectionRT/>
  }
  const AddDepartmentRoute  =  {
   path: "/admin/add-department",
   element:  <AddDepartment/>
  }
  const LeaveTypeRoute  =  {
   path: "/admin/leave-type",
   element:  <LeaveTypeRT/>
  }
  const AddLeaveTypeRoute  =  {
   path: "/admin/add-leave-type",
   element:  <AddLeaveTypeRT/>
  }

  const ManageLeaveTypeRoute  =  {
   path: "/admin/pending-leave-type",
   element:  <ManageLeaveTypeRT/>
  }

  const ApprovedLeaveTypeRoute  =  {
    path: "/admin/approved-leave-type",
    element:  <ApprovedLeaveTypeRT/>
   }

   const DeclinedLeaveTypeRoute  =  {
    path: "/admin/declined-leave-type",
    element:  <DeclinedLeaveTypeRT/>
   }

   const LeaveHistoryRoute  =  {
    path: "/admin/leave-history",
    element:  <LeaveHistoryRT/>
   }

   const LeaveDetailsRoute  =  {
    path: "/admin/leave-details/:id",
    element:  <LeaveDetailsRT/>
   }

export {AddEmployeeRoute, AdminLandingPageRoute, EmployeeSectionRoute, DepartmentSectionRoute, AddDepartmentRoute,LeaveTypeRoute,AddLeaveTypeRoute, ManageLeaveTypeRoute,ApprovedLeaveTypeRoute,DeclinedLeaveTypeRoute,LeaveHistoryRoute,LeaveDetailsRoute};

  