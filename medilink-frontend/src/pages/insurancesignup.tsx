import { useState, ChangeEvent } from "react";
import Header1 from "../components/NavBard";

export default function InsuranceSignUp() {
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registrationDone, setRegistrationDone] = useState(false);

  const handleRegistration = () => {
    console.log("Insurance provider registration:", { companyName, contactPerson, email, phoneNumber });
    // Add your insurance provider registration logic here

    // Set registrationDone to true after registration
    setRegistrationDone(true);
  };

  return (
    <>
      <Header1 />
      <div className="flex justify-center mt-20">
        <div className="w-96">
          <h1 className="font-bold text-4xl mb-8">Insurance Provider Registration</h1>
          {registrationDone ? (
            <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md mb-4">
              Registration done, an administrator will verify your details
            </div>
          ) : null}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Contact Person Name"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button onClick={handleRegistration} className="bg-blue-500 text-white border border-blue-500 font-bold py-2 px-6 rounded-lg">
            Register as Insurance Provider
          </button>
        </div>
      </div>
    </>
  );
}
