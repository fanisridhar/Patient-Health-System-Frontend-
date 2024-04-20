import React from 'react';
import Header2 from '@/components/Navbari';
const PatientDetailsPage = () => {
  const patients = getDetails();

  return (
    <div style={styles.container}>
    <Header2/ >
      <h1 style={styles.pageTitle}>Patient Details</h1>
      {patients.map((patient, index) => (
        <div key={index} style={styles.patientContainer}>
          <h2 style={styles.patientTitle}>Patient {index + 1}</h2>
          <div style={styles.patientDataContainer}>
            <div style={styles.dataSection}>
              <h3 style={styles.dataSectionHeader}>Patient Name:</h3>
              <p>{patient.name}</p>
            </div>
            <div style={styles.dataSection}>
              <h3 style={styles.dataSectionHeader}>Age:</h3>
              <p>{patient.age}</p>
            </div>
            <div style={styles.dataSection}>
              <h3 style={styles.dataSectionHeader}>Height (cm):</h3>
              <p>{patient.height}</p>
            </div>
            <div style={styles.dataSection}>
              <h3 style={styles.dataSectionHeader}>Weight (kg):</h3>
              <p>{patient.weight}</p>
            </div>
          </div>
          <div style={styles.historyContainer}>
            <div style={styles.dataSection}>
              <h3 style={styles.dataSectionHeader}>Medical History:</h3>
              <ul>
                {patient.medicalHistory.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={styles.dataSection}>
              <h3 style={styles.dataSectionHeader}>Billing History:</h3>
              <ul>
                {patient.billingHistory.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const getDetails = () => {
  return [
    {
      name: 'John Doe',
      age: 35,
      height: 170,
      weight: 70,
      medicalHistory: ['History item 1', 'History item 2', 'History item 3'],
      billingHistory: ['Billing item 1', 'Billing item 2'],
    },
    {
      name: 'Jane Smith',
      age: 45,
      height: 165,
      weight: 60,
      medicalHistory: ['History item 4', 'History item 5'],
      billingHistory: ['Billing item 3', 'Billing item 4'],
    },
    // Add more patients here if needed
  ];
};

const styles = {
  container: {
    margin: '20px',
  },
  pageTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  patientContainer: {
    marginBottom: '40px',
  },
  patientTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  patientDataContainer: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    flexWrap: 'wrap' as 'wrap',
    gap: '20px',
  },
  historyContainer: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    flexWrap: 'wrap' as 'wrap',
    gap: '20px',
    marginTop: '20px',
  },
  dataSection: {
    flex: '1',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    minWidth: '200px',
  },
  dataSectionHeader: {
    fontSize: '16px',
    marginBottom: '10px',
  },
};

export default PatientDetailsPage;
