import { useState } from 'react';
import Header from "../components/NavBar";

export default function AppointmentBooking() {
  const startTime = 9; // Start time in 24-hour format (9 AM)
  const endTime = 17; // End time in 24-hour format (5 PM)

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

  const handleTimeSelection = (time: string) => { // Explicitly type the argument
    setSelectedTime(time);
  };

  const handleBookSlot = () => {
    if (selectedTime) {
      const updatedSlots = timeSlots.map(slot =>
        slot.time === selectedTime ? { ...slot, booked: true } : slot
      );
      setTimeSlots(updatedSlots);
      setBookingMessage(`Successfully booked ${selectedTime}`);
      setSelectedTime('');
    }
  };

  return (
    <main>
      <Header />
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
              onClick={handleBookSlot}
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
        </div>
      </div>
    </main>
  );
}
