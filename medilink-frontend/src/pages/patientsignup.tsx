import { useState } from 'react';
import Header from "../components/NavBar";

export default function PatientSignUp() {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleRegistration = () => {
    // You can perform client-side validation here before registration
    // Simulate registration by displaying a success message
    setRegistrationMessage("Registration successful. Welcome to Medilink!");
    // Reset form fields after successful registration
    setName("");
    setDOB("");
    setGender("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  };

  return (
    <main>
      <Header />
      <div className="flex justify-center mt-20">
        <div className="w-96">
          <h1 className="font-bold text-4xl mb-8">Patient Registration</h1>
          {registrationMessage && <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md mb-4">{registrationMessage}</div>}
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
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button onClick={handleRegistration} className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">
            Register as Patient
          </button>
        </div>
      </div>
    </main>
  );
}
