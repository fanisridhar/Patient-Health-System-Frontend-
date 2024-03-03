import { useState } from "react";
import Link from "next/link";
import Header from "../components/NavBar";

export default function Login() {
  const [patientUsername, setPatientUsername] = useState("");
  const [patientPassword, setPatientPassword] = useState("");
  const [doctorLicenseId, setDoctorLicenseId] = useState("");
  const [doctorPassword, setDoctorPassword] = useState("");

  const handlePatientLogin = () => {
    console.log("Patient login with username:", patientUsername, "and password:", patientPassword);
    // Add your login logic here for patients
  };

  const handleDoctorLogin = () => {
    console.log("Doctor login with license ID:", doctorLicenseId, "and password:", doctorPassword);
    // Add your login logic here for doctors
  };

  return (
    <main>
      <Header />
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mt-2">
            Welcome to Medilink,<br />your trusted partner for healthcare management
          </h1>
          <div className="mt-8 w-72">
            <div>
              <h2 className="text-xl font-semibold mb-4">Patient Login</h2>
              <input
                type="text"
                placeholder="Username"
                value={patientUsername}
                onChange={(e) => setPatientUsername(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={patientPassword}
                onChange={(e) => setPatientPassword(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="flex justify-between mb-4">
                <button onClick={handlePatientLogin} className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">
                  Patient Sign In
                </button>
                <Link href="/forgot-password">
                  <div className="text-sm text-gray-600 cursor-pointer">Forgot Password?</div>
                </Link>
              </div>
            </div>
            <div className="mb-8 border-t border-gray-400 pt-6">
              <h2 className="text-xl font-semibold mb-4">Doctor Login</h2>
              <input
                type="text"
                placeholder="License ID"
                value={doctorLicenseId}
                onChange={(e) => setDoctorLicenseId(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={doctorPassword}
                onChange={(e) => setDoctorPassword(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="flex justify-between mb-4">
                <button onClick={handleDoctorLogin} className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">
                  Doctor Sign In
                </button>
                <Link href="/forgot-password">
                  <div className="text-sm text-gray-600 cursor-pointer">Forgot Password?</div>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Patient Sign Up</h2>
              <Link href="/patientsignup">
                <button className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">
                  Patient Sign Up
                </button>
              </Link>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Doctor Sign Up</h2>
              <Link href="/doctorsignup">
                <button className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">
                  Doctor Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
