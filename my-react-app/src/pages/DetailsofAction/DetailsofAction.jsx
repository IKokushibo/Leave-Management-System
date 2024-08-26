import React, { useRef, useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Helmet } from 'react-helmet';
import Sidebar from '../../Components/Sidebar';

function DetailsOfActionPage() {
  const sigCanvasHR = useRef({});
  const sigCanvasSupervisor = useRef({});
  const sigCanvasManager = useRef({});
  const sigCanvasGM = useRef({});

  const [disapprovalReasonB, setDisapprovalReasonB] = useState('');
  const [disapprovalReasonD, setDisapprovalReasonD] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const clearSignature = (sigCanvas) => sigCanvas.current.clear();

  const saveSignature = (sigCanvas) => {
    const signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    console.log("Saved Signature Data:", signatureData);
  };

  const getCanvasWidth = () => {
    return Math.min(window.innerWidth * 0.8, 800); // 80% of screen width, max 800px
  };

  return (
    <>
      <Helmet>
        <title>Details of Action on Application</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />

        <main className="w-full lg:w-3/4 p-10 bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">DETAILS OF ACTION ON APPLICATION</h1>

          <div className="bg-white p-8 shadow-lg rounded-md">
            {/* Certification of Leave Credits */}
            <div className="mb-8 p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">A. CERTIFICATION OF LEAVE CREDITS</h3>
              <div className="mb-4">
                <p className="mb-2 font-bold" >
                  As of {currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}
                </p>
                <table className="w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">Vacation Leave</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Sick Leave</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Mandatory/Forced Leave</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Special Leave</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Total Earned</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Less this application</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Balance</td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* HR Officer Signature */}
              <div className="mb-8">
                <label className="block text-sm font-bold mb-2">Signature (HR Officer):</label>
                <SignatureCanvas
                  ref={sigCanvasHR}
                  penColor="black"
                  canvasProps={{ width: getCanvasWidth(), height: 200, className: 'border w-full p-2 rounded' }}
                />
                <div className="mt-2 flex space-x-4">
                  <button
                    type="button"
                    onClick={() => clearSignature(sigCanvasHR)}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => saveSignature(sigCanvasHR)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="mb-8 p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">B. RECOMMENDATION</h3>
              <div className="mb-4">
                <p>For approval</p>
                <p>For disapproval due to:</p>
                <textarea
                  value={disapprovalReasonB}
                  onChange={(e) => setDisapprovalReasonB(e.target.value)}
                  className="border rounded w-full p-2 mt-2"
                  placeholder="Add reason for disapproval here..."
                  rows={3}
                />
                <button
                  type="button"
                  onClick={() => console.log("Note Saved: ", disapprovalReasonB)}
                  className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-md"
                >
                  Save Note
                </button>
              </div>

              {/* Immediate Supervisor Signature */}
              <div className="mb-8">
                <label className="block text-sm font-bold mb-2">Signature (Immediate Supervisor):</label>
                <SignatureCanvas
                  ref={sigCanvasSupervisor}
                  penColor="black"
                  canvasProps={{ width: getCanvasWidth(), height: 200, className: 'border w-full p-2 rounded' }}
                />
                <div className="mt-2 flex space-x-4">
                  <button
                    type="button"
                    onClick={() => clearSignature(sigCanvasSupervisor)}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => saveSignature(sigCanvasSupervisor)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </div>

              {/* Div. / Dept. Manager Signature */}
              <div className="mb-8">
                <label className="block text-sm font-bold mb-2">Signature (Div. / Dept. Manager):</label>
                <SignatureCanvas
                  ref={sigCanvasManager}
                  penColor="black"
                  canvasProps={{ width: getCanvasWidth(), height: 200, className: 'border w-full p-2 rounded' }}
                />
                <div className="mt-2 flex space-x-4">
                  <button
                    type="button"
                    onClick={() => clearSignature(sigCanvasManager)}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => saveSignature(sigCanvasManager)}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Approved For */}
            <div className="mb-8 p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">C. APPROVED FOR:</h3>
              <div className="pl-4">
                <p>___ days with pay</p>
                <p>___ days without pay</p>
                <p>___ others (Specify)</p>
              </div>
            </div>

            {/* Disapproved Due To */}
            <div className="mb-8 p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">D. DISAPPROVED DUE TO:</h3>
              <textarea
                value={disapprovalReasonD}
                onChange={(e) => setDisapprovalReasonD(e.target.value)}
                className="border rounded w-full p-2"
                placeholder="Add reason for disapproval here..."
                rows={3}
              />
              <button
                type="button"
                onClick={() => console.log("Note Saved: ", disapprovalReasonD)}
                className="bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded-md"
              >
                Save Note
              </button>
            </div>

            {/* GM Signature */}
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2">Signature (GM / President / Head of Office):</label>
              <SignatureCanvas
                ref={sigCanvasGM}
                penColor="black"
                canvasProps={{ width: getCanvasWidth(), height: 200, className: 'border w-full p-2 rounded' }}
              />
              <div className="mt-2 flex space-x-4">
                <button
                  type="button"
                  onClick={() => clearSignature(sigCanvasGM)}
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => saveSignature(sigCanvasGM)}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default DetailsOfActionPage;
