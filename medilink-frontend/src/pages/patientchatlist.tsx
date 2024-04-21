import React, { useState, useEffect } from 'react';
import { Grid, List, ListItem, ListItemText } from '@mui/material';

interface ChatInfo {
  doctorName: string;
  lastMessage: string;
  timestamp: string;
}

const PatientChatList: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  const [chats, setChats] = useState<ChatInfo[]>([]);

  useEffect(() => {
    // Simulating patient data fetching
    const fetchPatientData = async () => {
      // Simulated patient data
      const patientData = {
        name: 'Jane Smith'
      };
      setPatientName(patientData.name);

      // Simulated chat data
      const chatData: ChatInfo[] = [
        {
          doctorName: 'Dr. John Doe',
          lastMessage: 'Hi Jane, please take the prescribed medication regularly.',
          timestamp: '2023-04-20 10:30 AM'
        },
        {
          doctorName: 'Dr. Emily Johnson',
          lastMessage: 'Your test results look good. Let me know if you have any concerns.',
          timestamp: '2023-04-19 3:15 PM'
        },
        {
          doctorName: 'Dr. Michael Davis',
          lastMessage: 'We need to schedule a follow-up appointment next month.',
          timestamp: '2023-04-18 11:45 AM'
        }
      ];
      setChats(chatData);
    };
    fetchPatientData();
  }, []);

  const openChat = (doctorName: string) => {
    // Add your logic for opening the chat with the selected doctor
    console.log(`Opening chat with ${doctorName}`);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h2>Welcome, {patientName}</h2>
      </Grid>
      <Grid item xs={12}>
        <List>
          {chats.map((chat, index) => (
            <ListItem button key={index} onClick={() => openChat(chat.doctorName)}>
              <ListItemText
                primary={chat.doctorName}
                secondary={`${chat.lastMessage} - ${chat.timestamp}`}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default PatientChatList;