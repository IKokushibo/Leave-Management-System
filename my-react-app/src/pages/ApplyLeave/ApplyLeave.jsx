import { Helmet } from 'react-helmet';
import { useRef, useState, useEffect } from 'react';
import Sidebar from '../../Components/EmployeeSideBar/EmployeeSidebar'

import axios from "../../services/AxiosConfiguration";

import SignatureCanvas from 'react-signature-canvas';

//component
import Loading from "../../Components/LoadingAnimation/Loading"

function ApplyLeave() {
  const sigCanvas = useRef();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [workingDays, setWorkingDays] = useState(0);

  const [signature, setSignature] = useState("");

  // State to control the visibility of details sections
  const [showVacationDetails, setShowVacationDetails] = useState(false);
  const [showSickLeaveDetails, setShowSickLeaveDetails] = useState(false);
  const [showSpecialBenefitsDetails, setShowSpecialBenefitsDetails] = useState(false);
  const [showStudyLeaveDetails, setShowStudyLeaveDetails] = useState(false);
  const [showOtherPurposesDetails, setShowOtherPurposesDetails] = useState(false);

  // State to control the visibility of the entire "Details of Leave" container
  const showDetailsOfLeave = showVacationDetails || showSickLeaveDetails || showSpecialBenefitsDetails || showStudyLeaveDetails || showOtherPurposesDetails;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const dateOfFilling = new Date().toISOString().split('T')[0]; // "2024-09-06"
  const [user, setUser] = useState({});
  const [salary, setSalary] = useState();

  const [typeOfLeaves, setTypeOfLeaves] = useState({});

  const [leaveTypeId, setLeaveTypeId] = useState();

  const [detailsOfLeave, setDeatailsOfLeave] = useState();
  const [specifiedDetailsOfLeave, setSpecifiedDeatailsOfLeave] = useState();
  const [commutation, setCommutation] = useState();


  const clearSignature = (sigCanvas) => {
    sigCanvas.current.clear()
    setSignature(null);
  };

  // const saveSignature = (sigCanvas) => {
  //   const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
  //   setSignature(signatureData);
  // };

  const handleSelection = (event) => {
    const selectedId = parseInt(event.target.value, 10); // Get the value (ID) of the selected leave
    setLeaveTypeId(selectedId); // Update state with the selected ID
  };

  const getCanvasWidth = () => {
    return Math.min(window.innerWidth * 0.8, 800);
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

  const detailsOfLeaveCheckedHandler = (event) => {
    if (detailsOfLeave === event.target.value) {
      setDeatailsOfLeave("");
      return;
    }
    setDeatailsOfLeave(event.target.value);
  }

  const specifiedDetailsOfLeaveHandler = (event) => {
    setSpecifiedDeatailsOfLeave(event.target.value);
  }

  useEffect(() => {
    if (startDate && endDate) {
      const days = calculateWorkingDays(startDate, endDate);
      setWorkingDays(days);
    } else {
      setWorkingDays(0);
    }
  }, [startDate, endDate]);

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

  useEffect(() => {
    const fetchDate = async () => {
      setIsLoading(true);
      try {
        const url = "/users/type-of-leaves";
        const response = await axios.get(url);
        setTypeOfLeaves(response.data);
      } catch (error) {
        setIsError(true);
        setError(error);
      }
      setIsLoading(false);
    }

    fetchDate();
  }, []);

  const handleSubmit = async (sigCanvas) => {
    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');

    try {
      setIsLoading(true);
      const url = "/users/apply-leave";
      const response = await axios.post(url, {
        salary,
        "type-of-leave-id": leaveTypeId,
        "details-of-leave": detailsOfLeave,
        "specified-details-of-leave": specifiedDetailsOfLeave,
        "start-date": startDate,
        "end-date": endDate,
        "signature": signatureData,
        "commutation-type": commutation
      });

      alert(response.data);
    } catch (error) {
      setIsError(true);
      setError(error);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (isError) {
    const status = error.status;

    if(status === 403){
      alert(error.response.data.message)
    }else if(status === 400){
      alert(error.response.data.message)
    }else if (status === 401) {
      alert("Session expired");
    }else if (error.code === "ERR_NETWORK") {
      alert("Network Error");
    }

    setIsError(false);
  }

  return (
    <>
      <Helmet>
        <title>Employee Apply Page</title>
      </Helmet>
      <div className="flex bg-pageBg1">
        <Sidebar />


        {/* Form Section */}
        <main className="w-3/4 p-10">
          <h1 className="text-3xl font-bold mb-8">Apply for Leave</h1>

          {/* Form */}
          <form className="space-y-8 bg-white p-8 shadow-lg rounded-md">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">Office/Department</label>
                <input disabled value={user['department']} className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Name (Last, First, Middle)</label>
                <input disabled value={user['first-name'] + " " + user['middle-name'] + " " + user['last-name']} type="text" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Date of Filing</label>
                <input defaultValue={dateOfFilling} type="date" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Position</label>
                <input defaultValue={user.position} type="text" className="border w-full p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Salary</label>
                <input onChange={(event) => setSalary(event.target.value)} type="text" className="border w-full p-2 rounded" />
              </div>
            </div>

            {/* Type of Leave */}
            <fieldset className="border p-4 rounded">
              <legend className="font-bold">Type of Leave to be Availed</legend>
              <div className="flex flex-col space-y-2 mt-4">
                {Array.isArray(typeOfLeaves) && typeOfLeaves.map((element, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      value={element.id}
                      checked={leaveTypeId === element.id}
                      onChange={handleSelection}
                      className="mr-2"
                    />
                    <strong>{element['leave-type']}</strong> ({element.description})
                  </label>
                ))}
              </div>
            </fieldset>


            {/* Details of Leave */}


            <fieldset className="border p-4 rounded">
              <legend className="font-bold">Details of Leave</legend>
              <div className="flex flex-col space-y-4 mt-4">


                <div>
                  <h4 className="font-semibold">In case of Vacation/Special Privilege Leave:</h4>
                  <div className="flex flex-col space-y-2 mt-2">
                    <label className="flex items-center">
                      <input checked={detailsOfLeave === "Within the Philippines"} onChange={(event) => detailsOfLeaveCheckedHandler(event)} value="Within the Philippines" type="checkbox" className="mr-2" />
                      Within the Philippines
                    </label>
                    <label className="flex items-center">
                      <input checked={detailsOfLeave === "Abroad"} onChange={(event) => detailsOfLeaveCheckedHandler(event)} value="Abroad" type="checkbox" className="mr-2" />
                      Abroad (Specify)
                    </label>
                    <input onChange={(event) => specifiedDetailsOfLeaveHandler(event)} value={(detailsOfLeave !== "Within the Philippines" && detailsOfLeave !== "Abroad") ? "" : specifiedDetailsOfLeave} disabled={detailsOfLeave !== "Within the Philippines" && detailsOfLeave !== "Abroad"} type="text" className="border w-full p-2 rounded mt-2" placeholder="Specify location" />
                  </div>
                </div>


                <div>
                  <h4 className="font-semibold">In case of Sick Leave:</h4>
                  <div className="flex flex-col space-y-2 mt-2">
                    <label className="flex items-center">
                      <input  checked={detailsOfLeave === "In Hospital"} onChange={(event) => detailsOfLeaveCheckedHandler(event)} value="In Hospital" type="checkbox" className="mr-2" />
                      In Hospital (Specify Illness)
                    </label>
                    <input onChange={(event) => specifiedDetailsOfLeaveHandler(event)} value={detailsOfLeave !== "In Hospital" ? "" : specifiedDetailsOfLeave} disabled={detailsOfLeave !== "In Hospital"} type="text" className="border w-full p-2 rounded mt-2" placeholder="Specify illness" />
                    <label className="flex items-center">
                      <input checked={detailsOfLeave === "Out Patient"} onChange={(event) => detailsOfLeaveCheckedHandler(event)} value="Out Patient" type="checkbox" className="mr-2" />
                      Out Patient (Specify Illness)
                    </label>
                    <input onChange={(event) => specifiedDetailsOfLeaveHandler(event)} value={detailsOfLeave !== "Out Patient" ? "" : specifiedDetailsOfLeave} disabled={detailsOfLeave !== "Out Patient"} type="text" className="border w-full p-2 rounded mt-2" placeholder="Specify illness" />
                  </div>
                </div>




                <div>
                  <h4 className="font-semibold">In case of Special Benefits for Women:</h4>
                  <input onChange={(event) => specifiedDetailsOfLeaveHandler(event)} type="text" className="border w-full p-2 rounded mt-2" placeholder="Specify illness" />
                </div>



                <div>
                  <h4 className="font-semibold">In case of Study Leave:</h4>
                  <div className="flex flex-col space-y-2 mt-2">
                    <label className="flex items-center">
                      <input checked={detailsOfLeave === "Completion of Master's Degree"} onChange={(event) => detailsOfLeaveCheckedHandler(event)} value="Completion of Master's Degree" type="checkbox" className="mr-2" />
                      Completion of Master's Degree
                    </label>
                    <label className="flex items-center">
                      <input checked={detailsOfLeave === "BAR/Board Examination Review"} onChange={(event) => detailsOfLeaveCheckedHandler(event)} value="BAR/Board Examination Review" type="checkbox" className="mr-2" />
                      BAR/Board Examination Review
                    </label>
                  </div>
                </div>


                <div>
                  <h4 className="font-semibold">Other Purposes:</h4>
                  <div className="flex flex-col space-y-2 mt-2">
                    <label className="flex items-center">
                      <input checked={detailsOfLeave === "Monetization of Leave Credits"} onChange={(event) => detailsOfLeaveCheckedHandler(event)} value="Monetization of Leave Credits" type="checkbox" className="mr-2" />
                      Monetization of Leave Credits
                    </label>
                    <label className="flex items-center">
                      <input checked={detailsOfLeave === "Terminal Leave"} onChange={(event) => detailsOfLeaveCheckedHandler(event)} value="Terminal Leave" type="checkbox" className="mr-2" />
                      Terminal Leave
                    </label>
                  </div>
                </div>


              </div>
            </fieldset>


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
            <div className='flex gap-4'>
              <div>
                <p>Signature</p>
                <SignatureCanvas
                  ref={sigCanvas}
                  penColor="black"
                  canvasProps={{
                    width: 420,
                    height: 250,
                    className: "border",
                  }}
                />
                <button
                  type="button"
                  onClick={() => clearSignature(sigCanvas)}
                  className="bg-gray-500 text-white font-bold m-2 py-2 px-4 rounded"
                >
                  Clear
                </button>
              </div>
              <div className='w-full'>
                <p>Name of the applicant</p>
                <input value={user['first-name'] + " " + user['middle-name'] + " " + user['last-name']} disabled type="text" className='w-full h-8 pl-2 border-1px' />
              </div>
            </div>


            {/* Commutation */}
            <fieldset className="border p-4 rounded">
              <legend className="font-bold">Commutation</legend>
              <div className="mt-4">
                <label>
                  <input type="radio" onChange={(event) => setCommutation(event.target.value)} checked={commutation === "NOT_REQUESTED"} value="NOT_REQUESTED" className="mr-2" /> Not Requested
                </label>
                <label className="ml-4">
                  <input type="radio" onChange={(event) => setCommutation(event.target.value)} checked={commutation === "REQUESTED"} value="REQUESTED" className="mr-2" /> Requested
                </label>
              </div>
            </fieldset>

            {/* Submit Button */}
            <button type='button' onClick={() => handleSubmit(sigCanvas)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full mt-8">
              Submit Application
            </button>
          </form>
        </main>
      </div>

    </>
  );
}

export default ApplyLeave;
