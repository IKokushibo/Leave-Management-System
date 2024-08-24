import React from 'react';
import { Helmet } from 'react-helmet';
import SideBard from  '../../Components/Sidebar'

function DepartmentSection() {
  const navigateAddType = () => {
    window.location.href = "/admin/add-department"

}
  return (
    <>
      <Helmet>
        <title>Department Section</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
      <SideBard />

        {/* Main Content */}
        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">Department Section</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6">Department Management</h2>
            <button onClick={navigateAddType} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mb-6">
              Add New Department
            </button>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-center">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="border px-4 py-2">
                      #
                      <button className="ml-2">
                        ⬆️
                      </button>
                    </th>
                    <th className="border px-4 py-2">
                      Department
                      <button className="ml-2">
                        ⬆
                      </button>
                    </th>
                    <th className="border px-4 py-2">
                      Shortform
                      <button className="ml-2">
                        ⬆
                      </button>
                    </th>
                    <th className="border px-4 py-2">
                      Code
                      <button className="ml-2">
                        ⬆
                      </button>
                    </th>
                    <th className="border px-4 py-2">
                      Created Date
                      <button className="ml-2">
                        ⬆
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">ADMIN AND GENERAL SERVICES</td>
                    <td className="border px-4 py-2">HR</td>
                    <td className="border px-4 py-2">HR160</td>
                    <td className="border px-4 py-2">11/01/2020</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">FINANCE AND COMMERCIAL</td>
                    <td className="border px-4 py-2">IT</td>
                    <td className="border px-4 py-2">IT807</td>
                    <td className="border px-4 py-2">11/01/2020</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">ENGINEERING AND OPERATIONS</td>
                    <td className="border px-4 py-2">OP</td>
                    <td className="border px-4 py-2">OP640</td>
                    <td className="border px-4 py-2">12/03/2020</td>
                  </tr>
                  {/* Additional department rows would go here */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default DepartmentSection;
