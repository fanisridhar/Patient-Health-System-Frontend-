import React, { useState, useEffect } from 'react';
import { Grid, Button, Divider, TextField } from '@material-ui/core';
import Header2 from '../components/Navbari';

const Account: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fname: '',
    lname: '',
    email: '',
    phonenumber: ''
  });

  useEffect(() => {
    // Simulating user data fetching
    const fetchUserData = async () => {
      // Simulated user data
      const userData = {
        fname: 'John',
        lname: 'Doe',
        email: 'john.doe@example.com',
        phonenumber: '1234567890'
      };
      setUserInfo(userData);
      setLoaded(true);
    };

    fetchUserData();
  }, []);

  const updateUserInfo = async () => {
    // Add your logic for updating user info
  };

  const updatePassword = async () => {
    // Add your logic for updating password
  };

  const updateMedicalInfo = async () => {
    // Add your logic for updating medical info
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
      <Header2 />
      <Grid container spacing={3}>
        {/* User Information */}
        <Grid item xs={12}>
          <TextField
            label="First Name"
            value={userInfo.fname}
            onChange={(e) => setUserInfo({ ...userInfo, fname: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Name"
            value={userInfo.lname}
            onChange={(e) => setUserInfo({ ...userInfo, lname: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            value={userInfo.phonenumber}
            onChange={(e) => setUserInfo({ ...userInfo, phonenumber: e.target.value })}
            fullWidth
          />
        </Grid>
        <Divider />
        {/* Action Buttons */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={updateUserInfo}>Update User Info</Button>
          <Button variant="contained" color="primary" onClick={updatePassword}>Update Password</Button>
          <Button variant="contained" color="primary" onClick={updateMedicalInfo}>Update Medical Info</Button>
          <Button variant="contained" color="primary" onClick={logoutUser}>Logout</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;
