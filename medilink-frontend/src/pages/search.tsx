import React, { useState } from 'react';
import Header from '../components/NavBar';
import Book from './book1'; // Import the Book component

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

interface AvailabilityData {
  [location: string]: {
    [doctorName: string]: number;
  };
}

const initialAvailabilityData: AvailabilityData = {
  'Veterans Affairs Mental Health Group': {
    'Dr. Arvind': 10,
    'Dr. Mukesh': 5,
    'Dr. Pavan': 0
  },
  'IU Public Health, Bloomington': {
    'Dr. Arvind': 12,
    'Dr. Mukesh': 8,
    'Dr. Pavan': 3
  },
  'Everside Health, Bloomington': {
    'Dr. Arvind': 20,
    'Dr. Mukesh': 12,
    'Dr. Pavan': 12
  },
  'Metro Infusion Health, Bloomington': {
    'Dr. Arvind': 25,
    'Dr. Mukesh': 15,
    'Dr. Pavan': 10
  }
};

const DoctorSearchPage: React.FC = () => {
  const [selectedProfession, setSelectedProfession] = useState<string>('');
  const [doctorName, setDoctorName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [availabilityData, setAvailabilityData] = useState<AvailabilityData>(initialAvailabilityData);

  const handleProfessionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProfession(event.target.value);
  };

  const handleDoctorNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDoctorName(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    if (!location || !doctorName) {
      console.error('Location or doctor name is missing');
      return;
    }

    const updatedAvailabilityData = { ...availabilityData };
    const currentAvailability = updatedAvailabilityData[location]?.[doctorName];

    if (currentAvailability !== undefined && currentAvailability > 0) {
      updatedAvailabilityData[location][doctorName] -= 1;
      setAvailabilityData(updatedAvailabilityData);
    } else {
      console.error('No available seats for the selected doctor and location');
    }
  };

  const availability = availabilityData[location]?.[doctorName] ?? null;

  const handleBookSlot = () => {
    if (location && doctorName) {
      const updatedAvailabilityData = { ...availabilityData };
      const currentAvailability = updatedAvailabilityData[location]?.[doctorName];

      if (currentAvailability !== undefined && currentAvailability > 0) {
        updatedAvailabilityData[location][doctorName] -= 1;
        setAvailabilityData(updatedAvailabilityData);
      } else {
        console.error('No available seats for the selected doctor and location');
      }
    }
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
            <label>Doctor Name:</label>
            <input
              list="doctorNames"
              type="text"
              className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
              value={doctorName}
              onChange={handleDoctorNameChange}
              placeholder="Enter doctor's name"
            />
            <datalist id="doctorNames">
              <option value="Dr. Arvind" />
              <option value="Dr. Mukesh" />
              <option value="Dr. Pavan" />
              {/* Add more doctor names as needed */}
            </datalist>
          </div>
          <div className="mt-4">
            <label>Enter Location:</label>
            <input
              list="locations"
              type="text"
              className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter location"
            />
            <datalist id="locations">
              <option value="Veterans Affairs Mental Health Group" />
              <option value="IU Public Health, Bloomington" />
              <option value="Everside Health, Bloomington" />
              <option value="Metro Infusion Health, Bloomington" />
              {/* Add more location options as needed */}
            </datalist>
          </div>
          <button
            className="mt-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            onClick={handleSearch}
          >
            Search
          </button>
          {availability !== null && (
            <p className="mt-4">
              Availability: {availability > 0 ? (
                <span style={{ color: 'green' }}>Available ({availability} seats)</span>
              ) : (
                <span style={{ color: 'red' }}>Fully Booked</span>
              )}
            </p>
          )}
          <Book handleBookSlot={handleBookSlot} /> {/* Pass the booking handler function */}
        </div>
      </div>
    </main>
  );
};

export default DoctorSearchPage;
