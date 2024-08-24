import React from 'react';
import { Helmet } from 'react-helmet';
import SideBard from  '../../Components/Sidebar'

function LeaveTypeSection() {
  const navigateAddType = () => {
    window.location.href = "/admin/add-leave-type"

}
  const leaveTypes = [
    {
      id: 1,
      type: 'Vacation Leave',
      description: 'Sec. 51, Rule XVI, Omnibus Rules Implementing E.O No. 292',
      requirements: 'None',
      leaveCreditAvailable: 10,
    },
    {
      id: 2,
      type: 'Mandatory/Forced Leave',
      description: 'Sec. 25, Rule XVI, Omnibus Rules Implementing E.O No. 292',
      requirements: 'Approval from HR',
      leaveCreditAvailable: 5,
    },
    {
      id: 3,
      type: 'Sick Leave',
      description: 'Sec. 43, Rule XVI, Omnibus Rules Implementing E.O No. 292',
      requirements: 'Medical Certificate',
      leaveCreditAvailable: 8,
    },
    {
      id: 4,
      type: 'Maternity Leave',
      description: 'R.A. No. 11210 / IRR issued by CSC, DOLE and SSS',
      requirements: 'Birth Certificate or Medical Certificate',
      leaveCreditAvailable: 60,
    },
    {
      id: 5,
      type: 'Paternity Leave',
      description: 'R.A. No. 8187 / CSC MC No. 71, s. 1998, as amended',
      requirements: 'Birth Certificate',
      leaveCreditAvailable: 5,
    },
    {
      id: 6,
      type: 'Special Privilege Leave',
      description: 'Sec. 21, Rule XVI, Omnibus Rules Implementing E.O No. 292',
      requirements: 'None',
      leaveCreditAvailable: 5,
    },
    {
      id: 7,
      type: 'Solo Parent Leave',
      description: 'RA No. 8972/CSC MC No. 8, s. 2004',
      requirements: 'Solo Parent ID',
      leaveCreditAvailable: 5,
    },
    {
      id: 8,
      type: 'Study Leave',
      description: 'Sec. 68, Rule XVI, Omnibus Rules Implementing E.O No. 292',
      requirements: 'Enrollment Certificate',
      leaveCreditAvailable: 5,
    },
    {
      id: 9,
      type: '10-Day VAWC Leave',
      description: 'RA No. 9262/CSC MC No.25, s. 2010',
      requirements: 'Legal Document',
      leaveCreditAvailable: 5,
    },
    {
      id: 10,
      type: 'Rehabilitation Privilege',
      description: 'Sec. 55, Rule XVI, Omnibus Rules Implementing E.O No. 292',
      requirements: 'Medical Certificate',
      leaveCreditAvailable: 5,
    },
    {
      id: 11,
      type: 'Special Leave Benefits for Women',
      description: 'RA No. 9710/CSC MC No. 25, s. 2010',
      requirements: 'Medical Certificate',
      leaveCreditAvailable: 5,
    },
    {
      id: 12,
      type: 'Special Emergency (Calamity) Leave',
      description: 'CSC MC No. 2, s. 2012, as amended',
      requirements: 'Calamity Certification',
      leaveCreditAvailable: 5,
    },
    {
      id: 13,
      type: 'Adoption Leave',
      description: 'R.A. No. 8552',
      requirements: 'Adoption Papers',
      leaveCreditAvailable: 5,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Leave Types Section</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <SideBard/>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Leave Types Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">Leave Types</h2>
            
            <button onClick={navigateAddType} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-6">
              Add New Leave Type
            </button>

            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-4">#</th>
                  <th className="p-4">Leave Type</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Requirements</th>
                  <th className="p-4">Leave Credit Available</th>
                </tr>
              </thead>
              <tbody>
                {leaveTypes.map((leave, index) => (
                  <tr key={leave.id} className="border-b">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{leave.type}</td>
                    <td className="p-4">{leave.description}</td>
                    <td className="p-4">{leave.requirements}</td>
                    <td className="p-4">{leave.leaveCreditAvailable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default LeaveTypeSection;
