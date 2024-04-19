import { useState, ChangeEvent } from "react";
import Header1 from "../components/NavBard";

interface DoctorSignUpData {
  first_name: string;
  last_name: string;
  email: string;
  hospital: number;
  licence_number?: number; // Making licence_number optional
  specialty: string;
  mobile?: number; // Making mobile optional
  password: string;
  confirm_password: string;
  certificate: File | null;
}

const DoctorSignUp: React.FC = () => {
  const [formData, setFormData] = useState<DoctorSignUpData>({
    first_name: "",
    last_name: "",
    email: "",
    hospital: -1,
    specialty: "",
    password: "",
    confirm_password: "",
    certificate: null,
  });
  const [registrationDone, setRegistrationDone] = useState(false);

  const handleRegistration = () => {
    console.log("Doctor registration:", formData);
    // Add your doctor registration logic here

    // Set registrationDone to true after registration
    setRegistrationDone(true);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCertificateChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, certificate: e.target.files[0] });
    }
  };

  return (
    <>
      <Header1 />
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
              placeholder="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Licence Number"
              name="licence_number"
              value={formData.licence_number}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <select
              name="specialty"
              value={formData.specialty}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Specialty</option>
              <option value="General Practitioner">General Practitioner</option>
              <option value="Dentist">Dentist</option>
              <option value="Dermotologist">Dermotologist</option>
              {/* Add other specialties */}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleInputChange}
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
          <button
            onClick={handleRegistration}
            className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg"
          >
            Register as Doctor
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorSignUp;
