import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button, Paper, TextField, MenuItem } from '@material-ui/core';
import axios from 'axios';
import Header1 from '@/components/NavBard';
interface Appointment {
  id: number;
  patientName: string;
  appointmentTime: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface Message {
  id: number;
  senderName: string;
  recipientName: string;
  message: string;
}

interface Doctor {
  id: number;
  name: string;
  specialization: string;
}

const DoctorDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patientName: 'Sridhar Reddy',
      appointmentTime: '2024-04-18 14:00 ',
      reason: 'Checkup',
      status: 'pending'
    },
    {
      id: 2,
      patientName: 'Virat Kohli',
      appointmentTime: '2024-04-18 10:00 ',
      reason: 'Follow-up',
      status: 'pending'
    }
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      senderName: 'Patient Sridhar',
      recipientName: 'Sridhar Reddy',
      message: 'Doctor, please give medications.'
    },
   
  ]);

  const [doctor] = useState<Doctor>({
    id: 1,
    name: 'Dr. Baali',
    specialization: 'Cardiologist'
  });
  

  const [responseMessage, setResponseMessage] = useState('');
  const [recipient, setRecipient] = useState<string>(''); // To store the selected recipient

  const handleApproveAppointment = (appointmentId: number) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === appointmentId ? { ...appointment, status: 'approved' } : appointment
      )
    );
  };

  const handleSendMessage = async (message: string) => {
    if (message.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        senderName: doctor.name,
        recipientName: recipient,
        message: message.trim()
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setResponseMessage('');
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <main>
       <Header1 />
      <div>

        <Typography variant="h4">Welcome, Dr. {doctor.name}</Typography>

        <Typography variant="h5">Upcoming Appointments</Typography>
        <List>
          {appointments.map(appointment => (
            <ListItem key={appointment.id}>
              <ListItemText primary={`Patient: ${appointment.patientName}`} secondary={`Time: ${appointment.appointmentTime}`} />
              {appointment.status === 'pending' && (
                <Button variant="contained" color="primary" onClick={() => handleApproveAppointment(appointment.id)}>Approve</Button>
              )}
              {appointment.status === 'approved' && (
                <Typography variant="body2" color="primary">Approved</Typography>
              )}
            </ListItem>
          ))}
        </List>

        <Typography variant="h5">Patient Messages</Typography>
        <Paper style={{ padding: '1rem', marginTop: '1rem' }}>
          {messages.map(message => (
            <div key={message.id}>
              <Typography variant="subtitle1">From: {message.senderName}</Typography>
              <Typography variant="subtitle1">To: {message.recipientName}</Typography>
              <Typography variant="body1">{message.message}</Typography>
              <hr style={{ margin: '0.5rem 0' }} />
            </div>
          ))}
        </Paper>

        <Typography variant="h5" style={{ marginTop: '2rem' }}>Send Message to Patient</Typography>
        <TextField
          label="Recipient"
          variant="outlined"
          select
          fullWidth
          value={recipient}
          onChange={(e) => setRecipient(e.target.value as string)}
          style={{ marginBottom: '1rem' }}
        >
          {appointments.map(appointment => (
            <MenuItem key={appointment.id} value={appointment.patientName}>{appointment.patientName}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          value={responseMessage}
          onChange={(e) => setResponseMessage(e.target.value)}
          style={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" onClick={() => handleSendMessage(responseMessage)}>Send</Button>
      </div>
    </main>
  );
};

export default DoctorDashboard;
