import React, { useState, useEffect } from 'react';
import Header from "../components/NavBard";
import { Grid, Button, Divider, TextField } from '@material-ui/core';
import Header1 from '../components/NavBard';

const Account: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    age: '',
    sex: '',
    specialization: '',
    degree: '',
    experience: ''
  });
  
  useEffect(() => {
    // Simulating doctor data fetching
    const fetchDoctorData = async () => {
      // Simulated doctor data
      const doctorData = {
        name: 'Dr. John Doe',
        age: '45',
        sex: 'Male',
        specialization: 'Cardiologist',
        degree: 'MD, PhD',
        experience: '20 years'
      };
      setDoctorInfo(doctorData);
      setLoaded(true);
    };

    fetchDoctorData();
  }, []);

  const updateDoctorInfo = async () => {
    // Add your logic for updating doctor info
  };

  const updateProfilePic = async (img: string) => {
    // Add your logic for updating profile picture
  };

  const logoutUser = async () => {
    // Add your logic for logging out user
    window.location.href = '/login';
  };

  return (
    <div>
      <Header1 />
      <Grid container spacing={3}>
        {/* Doctor Information */}
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={doctorInfo.name}
            onChange={(e) => setDoctorInfo({ ...doctorInfo, name: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Age"
            value={doctorInfo.age}
            onChange={(e) => setDoctorInfo({ ...doctorInfo, age: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Sex"
            value={doctorInfo.sex}
            onChange={(e) => setDoctorInfo({ ...doctorInfo, sex: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Specialization"
            value={doctorInfo.specialization}
            onChange={(e) => setDoctorInfo({ ...doctorInfo, specialization: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Degree"
            value={doctorInfo.degree}
            onChange={(e) => setDoctorInfo({ ...doctorInfo, degree: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Experience"
            value={doctorInfo.experience}
            onChange={(e) => setDoctorInfo({ ...doctorInfo, experience: e.target.value })}
            fullWidth
          />
        </Grid>
        <Divider />
        {/* Action Buttons */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={updateDoctorInfo}>Update Doctor Info</Button>
          <Button variant="contained" color="primary" onClick={logoutUser}>Logout</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;
