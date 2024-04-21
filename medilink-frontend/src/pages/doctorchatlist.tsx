import React, { useState, useEffect } from 'react';
import Header1 from '../components/NavBard';
import { Grid, Button, Divider, TextField, List, ListItem, ListItemText } from '@material-ui/core';

interface ChatInfo {
  patientName: string;
  lastMessage: string;
  timestamp: string;
}

const DoctorChatList: React.FC = () => {
  const [doctorInfo, setDoctorInfo] = useState({ name: '', age: '', sex: '', specialization: '', degree: '', experience: '' });
  const [chats, setChats] = useState<ChatInfo[]>([]);

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

      // Simulated chat data
      const chatData: ChatInfo[] = [
        {
          patientName: 'Jane Smith',
          lastMessage: 'Hi doctor, I have a question about my prescription.',
          timestamp: '2023-04-20 10:30 AM'
        },
        {
          patientName: 'Michael Johnson',
          lastMessage: 'Thank you for the appointment yesterday.',
          timestamp: '2023-04-19 3:15 PM'
        },
        {
          patientName: 'Emily Davis',
          lastMessage: 'I need to reschedule my next appointment.',
          timestamp: '2023-04-18 11:45 AM'
        }
      ];
      setChats(chatData);
    };
    fetchDoctorData();
  }, []);

  const openChat = (patientName: string) => {
    // Add your logic for opening the chat with the selected patient
    console.log(`Opening chat with ${patientName}`);
  };

  return (
    <div>
      <Header1 />
      <Grid container spacing={3}>
        {/* Doctor Information */}
        <Grid item xs={12}>
          <TextField label="Name" value={doctorInfo.name} disabled fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Age" value={doctorInfo.age} disabled fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Sex" value={doctorInfo.sex} disabled fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Specialization" value={doctorInfo.specialization} disabled fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Degree" value={doctorInfo.degree} disabled fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Experience" value={doctorInfo.experience} disabled fullWidth />
        </Grid>
        <Divider />
        {/* Chat List */}
        <Grid item xs={12}>
          <List>
            {chats.map((chat, index) => (
              <ListItem button key={index} onClick={() => openChat(chat.patientName)}>
                <ListItemText
                  primary={chat.patientName}
                  secondary={`${chat.lastMessage} - ${chat.timestamp}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorChatList;