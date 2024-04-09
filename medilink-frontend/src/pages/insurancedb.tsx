import React from 'react';
import Header2 from "../components/Navbari";

const InsuranceProviderDashboard = () => {
  // Static user details
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header2 />
      <div className="bg-gray-100 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-6">Welcome, Insurance Provider</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>
            <div>
              <p className="text-lg"><span className="font-semibold">Name:</span> {user.name}</p>
              <p className="text-lg"><span className="font-semibold">Email:</span> {user.email}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Insurance Plans</h2>
            <div>
              <p className="text-lg">Plan 1: Medical Insurance</p>
              <p className="text-lg">Plan 2: Life Insurance</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Advertisements</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg">Special offer: Get 20% off on all insurance plans!</p>
            <p className="text-lg">Secure your future with our comprehensive insurance coverage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceProviderDashboard;
