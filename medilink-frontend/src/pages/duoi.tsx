import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, TextField, Button } from '@material-ui/core';

const Duoi = () => {
  const [duoCode, setDuoCode] = useState('');
  const router = useRouter();

  const handleDuoSubmit = async () => {
    if (!duoCode.trim()) {
      console.error('Duo code cannot be empty');
      return;
    }

    // Simulate sending the duo code for verification
    // Replace this with your actual logic to verify the duo code
    try {
      // Assuming the duo code is valid, navigate to the dashboard page
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
      router.push('/insurancedb');
    } catch (error) {
      console.error('Error verifying duo code:', error);
    }
  };

  return (
    <Grid container item direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <h2>OTP Authentication</h2>
        <p>A verification code has been sent to your email. Enter the code below:</p>
      </Grid>
      <Grid item>
        <TextField
          variant="outlined"
          label="Duo Code"
          value={duoCode}
          onChange={(e) => setDuoCode(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDuoSubmit}
          disabled={!duoCode.trim()}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Duoi;
