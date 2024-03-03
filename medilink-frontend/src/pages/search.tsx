import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/NavBar';

interface DoctorProfession {
  value: string;
  label: string;
}

const professionOptions: DoctorProfession[] = [
  { value: 'general_practitioner', label: 'General Practitioner' },
  { value: 'dentist', label: 'Dentist' },
  { value: 'dermatologist', label: 'Dermatologist' },
  // Add more profession options as needed
];

const DoctorSearchPage: React.FC = () => {
  const [selectedProfession, setSelectedProfession] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleProfessionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProfession(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality based on selected profession and location
    console.log('Searching for:', selectedProfession, 'in', location);
  };

  return (
    <main>
      <Header />
      <div className="flex justify-center mt-20">
        <div className="flex flex-col text-center justify-center items-center">
          <h1 className="font-bold text-4xl mt-2">Find a Doctor</h1>
          <div className="mt-6">
            <label>Select Profession:</label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
              value={selectedProfession}
              onChange={handleProfessionChange}
            >
              <option value="">Select</option>
              {professionOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label>Enter Location:</label>
            <input
              type="text"
              className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter location"
            />
          </div>
          <button
            className="mt-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default DoctorSearchPage;
