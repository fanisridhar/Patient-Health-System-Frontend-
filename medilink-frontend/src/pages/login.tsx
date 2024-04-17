import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <main>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mt-2 text-blue-800">
            Welcome to Medilink, your trusted partner for healthcare management
          </h1>
          <div className="mt-8 max-w-md w-full">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">Login As:</h2>
              <div className="flex justify-between">
                <Link href="/patientlogin">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Patient
                  </button>
                </Link>
                <Link href="/doctorlogin">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Doctor
                  </button>
                </Link>
                <Link href="/insurancelogin">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Insurance Provider
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
