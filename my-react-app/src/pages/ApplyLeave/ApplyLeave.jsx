import { Helmet } from 'react-helmet';
import SignatureCanvas from 'react-signature-canvas';
import { useRef, useState, useEffect } from 'react';
import Sidebar from '../../Components/EmployeeSideBar/EmployeeSidebar'

function ApplyLeave() {
  const sigCanvas = useRef(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [workingDays, setWorkingDays] = useState(0);

// State to control the visibility of details sections
const [showVacationDetails, setShowVacationDetails] = useState(false);
const [showSickLeaveDetails, setShowSickLeaveDetails] = useState(false);
const [showSpecialBenefitsDetails, setShowSpecialBenefitsDetails] = useState(false);
const [showStudyLeaveDetails, setShowStudyLeaveDetails] = useState(false);
const [showOtherPurposesDetails, setShowOtherPurposesDetails] = useState(false);

// State to control the visibility of the entire "Details of Leave" container
const showDetailsOfLeave = showVacationDetails || showSickLeaveDetails || showSpecialBenefitsDetails || showStudyLeaveDetails || showOtherPurposesDetails;

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const saveSignature = () => {
    const signature = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    console.log(signature); // Handle the signature, e.g., save it to the server or display it
  };

  const calculateWorkingDays = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    let count = 0;

    while (startDate <= endDate) {
      const day = startDate.getDay();
      if (day !== 0 && day !== 6) { // 0 = Sunday, 6 = Saturday
        count++;
      }
      startDate.setDate(startDate.getDate() + 1);
    }

    return count;
  };

  useEffect(() => {
    if (startDate && endDate) {
      const days = calculateWorkingDays(startDate, endDate);
      setWorkingDays(days);
    } else {
      setWorkingDays(0);
    }
  }, [startDate, endDate]);

  return (
    <>
      <Helmet>
        <title>Employee Apply Page</title>
      </Helmet>
      <div className="flex bg-pageBg1">
        <Sidebar/>
       
   
        {/* Form Section */}
        <main className="w-3/4 p-10">
          <h1 className="text-3xl font-bold mb-8">Apply for Leave</h1>
          
          {/* Form */}
          <form className="space-y-8 bg-white p-8 shadow-lg rounded-md">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">Office/Department</label>
                <select className="border w-full p-2 rounded">
                  <option>Choose..</option>
                  <option value="ADMIN AND GENERAL SERVICES DEPARTMENT">ADMIN AND GENERAL SERVICES DEPARTMENT</option>
                  <option value="FINANCE AND COMMERCIAL DEPARTMENT">FINANCE AND COMMERCIAL DEPARTMENT</option>
                  <option value="ENGINEERING AND OPERATIONS DEPARTMENT">ENGINEERING AND OPERATIONS DEPARTMENT</option>
                  <option value="GENERAL MANAGER">GENERAL MANAGER</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Name (Last, First, Middle)</label>
                <input type="text" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Date of Filing</label>
                <input type="date" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Position</label>
                <input type="text" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Salary</label>
                <input type="text" className="border w-full p-2 rounded" />
              </div>
            </div>

              {/* Type of Leave */}
            <fieldset className="border p-4 rounded">
            <legend className="font-bold">Type of Leave to be Availed</legend>
            <div className="flex flex-col space-y-2 mt-4">
              <label className="flex items-center">

              <input 
                  type="checkbox" 
                  className="mr-2" 
                  onChange={(e) => setShowVacationDetails(e.target.checked)} 
                />
              <strong>Vacation Leave</strong> (Sec. 51, Rule XVI, Omnibus Rules Implementing E.O No. 292)
              </label>

              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <strong>Mandatory/Forced Leave</strong> (Sec. 25, Rule XVI, Omnibus Rules Implementing E.O No. 292)
              </label>
              <label className="flex items-center">
                <input 
                    type="checkbox" 
                    className="mr-2" 
                    onChange={(e) => setShowSickLeaveDetails(e.target.checked)} 
                  />
                <strong>Sick Leave</strong> (Sec. 43, Rule XVI, Omnibus Rules Implementing E.O No. 292)
              </label>
              <label className="flex items-center">

              <input 
                    type="checkbox" 
                    className="mr-2"                 />

                <strong>Maternity Leave</strong> (R.A. No. 11210 / IRR issued by CSC, DOLE and SSS)
              </label>

              <label className="flex items-center">
                <input 
                    type="checkbox" 
                    className="mr-2"                 
                  />                
                  <strong>Paternity Leave</strong> (R.A. No. 8187 / CSC MC No. 71, s. 1998, as amended)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <strong>Special Privilege Leave</strong> (Sec. 21, Rule XVI, Omnibus Rules Implementing E.O No. 292)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <strong>Solo Parent Leave</strong> (RA No. 8972/CSC MC No. 8, s. 2004)
              </label>
              <label className="flex items-center">
              <input 
                  type="checkbox" 
                  className="mr-2" 
                  onChange={(e) => setShowStudyLeaveDetails(e.target.checked)} 
                />
                <strong>Study Leave</strong> (Sec. 68, Rule XVI, Omnibus Rules Implementing E.O No. 292)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <strong>10-Day VAWC Leave</strong> (RA No. 9262/CSC MC No.25, s. 2010)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <strong>Rehabilitation Privilege</strong> (Sec. 55, Rule XVI, Omnibus Rules Implementing E.O No. 292)
              </label>
              <label className="flex items-center">
              <input 
                    type="checkbox" 
                    className="mr-2" 
                    onChange={(e) => setShowSpecialBenefitsDetails(e.target.checked)} 
              />
                <strong>Special Leave Benefits for Women</strong> (RA No. 9710/CSC MC No. 25, s. 2010)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <strong>Special Emergency (Calamity) Leave</strong> (CSC MC No. 2, s. 2012, as amended)
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <strong>Adoption Leave</strong> (R.A. No. 8552)
              </label>
              <label className="flex items-center"> 
                <input 
                  type="checkbox" 
                  className="mr-2" 
                  onChange={(e) => setShowOtherPurposesDetails(e.target.checked)} // New handler for Other Purposes 
                />
                <strong>Other Purposes</strong>
              </label>
            </div>
          </fieldset>


          {/* Details of Leave */}

          {showDetailsOfLeave && (
            <fieldset className="border p-4 rounded">
            <legend className="font-bold">Details of Leave</legend>
            <div className="flex flex-col space-y-4 mt-4">

            {showVacationDetails && (
              <div>
                <h4 className="font-semibold">In case of Vacation/Special Privilege Leave:</h4>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 
                    Within the Philippines
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 
                    Abroad (Specify)
                  </label>
                  <input type="text" className="border w-full p-2 rounded mt-2" placeholder="Specify location" />
                </div>
              </div>
                 )}
            {showSickLeaveDetails && (
              <div>
                <h4 className="font-semibold">In case of Sick Leave:</h4>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 
                    In Hospital (Specify Illness)
                  </label>
                  <input type="text" className="border w-full p-2 rounded mt-2" placeholder="Specify illness" />
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 
                    Out Patient (Specify Illness)
                  </label>
                  <input type="text" className="border w-full p-2 rounded mt-2" placeholder="Specify illness" />
                </div>
              </div>
                 )}

             {showSpecialBenefitsDetails && (
      
              <div>
                <h4 className="font-semibold">In case of Special Benefits for Women:</h4>
                <input type="text" className="border w-full p-2 rounded mt-2" placeholder="Specify illness" />
              </div>
               )}
              
              {showStudyLeaveDetails && (  
              <div>
                <h4 className="font-semibold">In case of Study Leave:</h4>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 
                    Completion of Master's Degree
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> 
                    BAR/Board Examination Review
                  </label>
                </div>
              </div>
                )}

                {showOtherPurposesDetails && (
                            <div>
                              <h4 className="font-semibold">Other Purposes:</h4>
                              <div className="flex flex-col space-y-2 mt-2">
                                <label className="flex items-center">
                                  <input type="checkbox" className="mr-2" /> 
                                  Monetization of Leave Credits
                                </label>
                                <label className="flex items-center">
                                  <input type="checkbox" className="mr-2" /> 
                                  Terminal Leave
                                </label>
                              </div>
                            </div>
                          )}

            </div>
          </fieldset>
          )}

            {/* Number of Days */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">Start Date</label>
                <input 
                  type="date" 
                  className="border w-full p-2 rounded" 
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)} 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">End Date</label>
                <input 
                  type="date" 
                  className="border w-full p-2 rounded" 
                  value={endDate} 
                  onChange={(e) => setEndDate(e.target.value)} 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold mb-2">Number of Working Days:</label>
                <input 
                  type="text" 
                  className="border w-full p-2 rounded bg-gray-100" 
                  value={workingDays} 
                  readOnly 
                />
              </div>
            </div>

            {/* Signature */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">Signature:</label>
                <SignatureCanvas 
                  ref={sigCanvas}
                  penColor="black"
                  canvasProps={{width: 500, height: 200, className: 'border w-full p-2 rounded' }}
                />
                <div className="mt-2 flex space-x-4">
                  <button type="button" onClick={clearSignature} className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md">
                    Clear
                  </button>
                  <button type="button" onClick={saveSignature} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">
                    Save
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Name of Applicant:</label>
                <input type="text" className="border w-full p-2 rounded" />
              </div>
            </div>

            {/* Commutation */}
            <fieldset className="border p-4 rounded">
              <legend className="font-bold">Commutation</legend>
              <div className="mt-4">
                <label><input type="radio" name="commutation" className="mr-2" /> Not Requested</label>
                <label className="ml-4"><input type="radio" name="commutation" className="mr-2" /> Requested</label>
              </div>
            </fieldset>

            {/* Submit Button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full mt-8">
              Submit Application
            </button>
          </form>
        </main>
        </div>
   
    </>
  );
}

export default ApplyLeave;
