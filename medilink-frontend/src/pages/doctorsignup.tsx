import { useState, ChangeEvent } from "react";
import Header from "../components/NavBar";

export default function DoctorSignUp() {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [degree, setDegree] = useState("");
  const [certificate, setCertificate] = useState<File | null>(null);
  const [registrationDone, setRegistrationDone] = useState(false);

  const handleRegistration = () => {
    console.log("Doctor registration:", { name, dob, degree, certificate });
    // Add your doctor registration logic here

    // Set registrationDone to true after registration
    setRegistrationDone(true);
  };

  const handleCertificateChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCertificate(e.target.files[0]);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center mt-20">
        <div className="w-96">
          <h1 className="font-bold text-4xl mb-8">Doctor Registration</h1>
          {registrationDone ? (
            <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md mb-4">
              Registration done, super admin will verify your documents
            </div>
          ) : null}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Degree Obtained"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="certificate" className="block mb-2 text-sm font-semibold">Upload License Certificate</label>
            <input
              type="file"
              id="certificate"
              accept=".pdf,.doc,.docx"
              onChange={handleCertificateChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button onClick={handleRegistration} className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">
            Register as Doctor
          </button>
        </div>
      </div>
    </>
  );
}
