import React, { useState } from 'react';
import Header from "../components/NavBar";

const Insurance: React.FC = () => {
  // Mock data for insurance providers
  const [insuranceProviders] = useState([
    { id: 1, name: 'James', companyName: 'Humana', policyNumber: '94527843', insuranceType: 'Medical', startDate: '01-04-2024', endDate: '03-05-2025' },
    { id: 2, name: 'Williams', companyName: 'UnitedHealthcare', policyNumber: '80452849', insuranceType: 'Medical', startDate: '02-05-2024', endDate: '04-08-2025' },
    { id: 3, name: 'Jordan', companyName: 'Blue Cross Blue Shield', policyNumber: '96754921', insuranceType: 'Finance', startDate: '03-04-2024', endDate: '03-10-2025' },
    { id: 4, name: 'Kane Richardon', companyName: 'Golden Rule Insurance Company', policyNumber: '85674921', insuranceType: 'Medical', startDate: '06-15-2024', endDate: '10-04-2025' },
    { id: 5, name: 'Andrew', companyName: 'ManhattanLife Assurance Company', policyNumber: '79804627', insuranceType: 'Medical', startDate: '03-08-2024', endDate: '08-21-2025' },
  ]);

  // State for selected insurance provider
  const [selectedProvider, setSelectedProvider] = useState<any>(null);

  // Handle selection of insurance provider
  const handleSelectProvider = (provider: any) => {
    setSelectedProvider(provider);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement submission logic here
    console.log('Selected insurance provider:', selectedProvider);
  };

  return (
    <div className="insurance-container">
      <Header />
      <h2>Insurance Providers</h2>
      <form onSubmit={handleSubmit}>
        <ul className="provider-list">
          {insuranceProviders.map(provider => (
            <li key={provider.id} className="provider-item">
              <div className="provider-details">
                <h3>{provider.name}</h3>
                <p><strong>Company Name:</strong> {provider.companyName}</p>
                <p><strong>Policy Number:</strong> {provider.policyNumber}</p>
                <p><strong>Insurance Type:</strong> {provider.insuranceType}</p>
                <p><strong>Start Date:</strong> {provider.startDate}</p>
                <p><strong>End Date:</strong> {provider.endDate}</p>
              </div>
              <button type="button" className="select-button" onClick={() => handleSelectProvider(provider)}>Select</button>
            </li>
          ))}
        </ul>
        <button type="submit" className="submit-button" disabled={!selectedProvider}>Submit</button>
      </form>
      {selectedProvider && (
        <div className="selected-provider">
          <h3>Successfully chosen the provider: {selectedProvider.name}</h3>
          <p><strong>Company Name:</strong> {selectedProvider.companyName}</p>
          <p><strong>Policy Number:</strong> {selectedProvider.policyNumber}</p>
          <p><strong>Insurance Type:</strong> {selectedProvider.insuranceType}</p>
          <p><strong>Start Date:</strong> {selectedProvider.startDate}</p>
          <p><strong>End Date:</strong> {selectedProvider.endDate}</p>
        </div>
      )}
      <style jsx>{`
        .insurance-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .provider-list {
          list-style-type: none;
          padding: 0;
        }

        .provider-item {
          border: 1px solid #ccc;
          margin-bottom: 20px;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: box-shadow 0.3s;
        }

        .provider-item:hover {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .provider-details {
          flex-grow: 1;
        }

        .select-button, .submit-button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .select-button:hover, .submit-button:hover {
          background-color: #0056b3;
        }

        .submit-button {
          margin-top: 20px;
        }

        .selected-provider {
          margin-top: 20px;
          border: 1px solid #28a745;
          padding: 20px;
          background-color: #d4edda;
        }

        .selected-provider h3 {
          margin-top: 0;
          font-size: 24px;
          color: #28a745;
        }

        .selected-provider p {
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default Insurance;
