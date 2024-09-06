import React, { useState } from 'react';
import Sidebar from '../../Components/EmployeeSideBar/EmployeeSidebar';
import { Helmet } from 'react-helmet';

import Loading from '../../Components/LoadingAnimation/Loading';
import axios from "../../services/AxiosConfiguration";


const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleConfirm = (e) => {
    e.preventDefault();
    setModalMessage('Are you sure you want to change your password?');
    setShowModal(true);
  };

  const handleCancel = () => {
    setModalMessage('Are you sure you want to cancel? Any unsaved changes will be lost.');
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  const handleChangePassword = async () => {
    setShowModal(false);
    setIsLoading(true);
    try {
      const url = "/users/update-password";
      const response = await axios.put(url, {
        "old-password": oldPassword,
        "new-password": newPassword,
        "confirm-password": confirmPassword
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

    if (status === 403) {
      alert(error.response.data.message)
    } else if (status === 400) {
      alert(error.response.data.message)
    } else if (status === 401) {
      alert("Session expired");
    } else if (error.code === "ERR_NETWORK") {
      alert("Network Error");
    }

    setIsError(false);
  }

  return (
    <>
      <Helmet>
        <title>Change Password</title>
      </Helmet>

      <div className="flex h-screen bg-pageBg1">
        <Sidebar />


        <div className="w-4/5 p-10">
          <h1 className="text-3xl font-bold mb-6">Change Password</h1>
          <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
            <form onSubmit={handleConfirm}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="oldPassword">Old Password</label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    id="oldPassword"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showOldPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="newPassword">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showNewPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <p className="mb-4 text-center">{modalMessage}</p>
              <div className="flex justify-center">
                <button
                  type='button'
                  onClick={handleModalClose}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
                >
                  No
                </button>
                <button type='button'
                  onClick={handleChangePassword}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChangePassword;
