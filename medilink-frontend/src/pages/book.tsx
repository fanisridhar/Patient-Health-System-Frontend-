import React, { useState } from 'react';
import Header from '@/components/NavBar';
import axios from 'axios';

interface MessageData {
  senderName: string;
  recipientName: string;
  message: string;
}

// Define sendMessageToDoctor function within the component
const sendMessageToDoctor = async (messageData: MessageData) => {
  try {
    // Make POST request to API route with message data
    await axios.post('/api/messages', messageData);
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

interface Props {
  handleBookSlot: () => void;
}

const Book: React.FC<Props> = ({ handleBookSlot }) => {
  const startTime = 9; // Start time in 24-hour format (9 AM)
  const endTime = 17; // End time in 24-hour format (5 PM)

  // Define availability data for doctors at each hospital
  const availabilityData: Record<string, Record<string, number>> = {
    'Veterans Affairs Mental Health Group': {
      'Dr. Arvind': 10,
      'Dr. Mukesh': 5,
      'Dr. Pavan': 0
    },
    'IU Public Health, Bloomington': {
      'Dr. Arvind': 15,
      'Dr. Mukesh': 8,
      'Dr. Pavan': 3
    },
    'Everside Health, Bloomington': {
      'Dr. Arvind': 20,
      'Dr. Mukesh': 12,
      'Dr. Pavan': 6
    },
    'Metro Infusion Health, Bloomington': {
      'Dr. Arvind': 25,
      'Dr. Mukesh': 15,
      'Dr. Pavan': 10
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = startTime; hour < endTime; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push({ time, booked: false });
      }
    }
    return slots;
  };
  
  const [timeSlots, setTimeSlots] = useState(generateTimeSlots());
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');
  const [message, setMessage] = useState('');

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      const messageData = {
        senderName: 'Patient',
        recipientName: 'Doctor',
        message: message
      };
      try {
        await sendMessageToDoctor(messageData);
        console.log('Message sent successfully:', message);
        setMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleBookSlotClick = () => {
    handleBookSlot(); // Call the parent component's handleBookSlot function
    if (selectedTime) {
      const updatedSlots = timeSlots.map(slot =>
        slot.time === selectedTime ? { ...slot, booked: true } : slot
      );
      setTimeSlots(updatedSlots);
      setBookingMessage(`Successfully booked ${selectedTime}`);

      // Decrement available seats for the selected doctor and hospital
      const doctor = 'Dr. Arvind'; // Replace with selected doctor
      const hospital = 'Veterans Affairs Mental Health Group'; // Replace with selected hospital
      const doctorAvailability = availabilityData[hospital]?.[doctor];
      if (doctorAvailability !== undefined && doctorAvailability > 0) {
        const updatedAvailabilityData = { ...availabilityData };
        updatedAvailabilityData[hospital][doctor] -= 1;
        console.log(updatedAvailabilityData);
        // Update availability data state or send it to the backend for storage
      } else {
        console.error('No available seats for the selected doctor and hospital');
      }
      
      setSelectedTime('');
    }
  };

  return (
    <main>
       <Header/ >
      <div className="flex justify-center mt-20">
        <div className="flex flex-col text-center justify-center items-center">
          <h1 className="font-bold text-4xl mt-2">
            Book Your Appointment
          </h1>
          <p className="text-lg mt-2">
            Choose a convenient time for your appointment:
          </p>
          <div className="mt-4 flex flex-wrap justify-center">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => handleTimeSelection(slot.time)}
                className={`py-2 px-4 rounded-lg m-2 ${slot.booked ? 'bg-red-500 text-white cursor-not-allowed' : selectedTime === slot.time ? 'bg-blue-500 text-white' : 'bg-emerald-700 text-white'}`}
                disabled={slot.booked}
              >
                {slot.time}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <button
              onClick={handleBookSlotClick}
              className={`bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg ${!selectedTime ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!selectedTime}
            >
              Book a Slot
            </button>
          </div>
          {bookingMessage && (
            <div className="mt-4 text-green-600">
              {bookingMessage}
            </div>
          )}
          <div className="mt-8">
            <textarea
              rows={4}
              cols={50}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message for the doctor"
              className="border border-gray-400 rounded-md p-2 mb-2"
            />
            <button
              onClick={handleSendMessage}
              className={`bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg ${!message ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={!message}
            >
              Send Message to Doctor
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Book;
