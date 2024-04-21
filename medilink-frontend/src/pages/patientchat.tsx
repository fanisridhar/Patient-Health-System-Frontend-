import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Grid, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

interface Message {
  sender: 'doctor' | 'patient';
  text: string;
}

const PatientChat: React.FC = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const [doctorName, setDoctorName] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Connect to the Socket.IO server
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    // Join the chat room with the doctor's name
    newSocket.emit('join', { role: 'patient', doctorName });

    // Listen for incoming messages
    newSocket.on('message', (data: { sender: 'doctor' | 'patient'; text: string }) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, [doctorName]);

  const handleSendMessage = () => {
    if (newMessage.trim() && socket) {
      // Send the message to the server
      socket.emit('message', { sender: 'patient', text: newMessage });
      setNewMessage('');
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${message.sender}: ${message.text}`}
                secondary={message.sender === 'patient' ? 'You' : 'Doctor'}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="New Message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default PatientChat;