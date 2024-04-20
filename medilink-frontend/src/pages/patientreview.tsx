import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../components/NavBar';
import axios from 'axios';

const PatientReview: React.FC = () => {
  const [reviewData, setReviewData] = useState({
    appointment_date: '',
    appointment_time: '',
    doctor: '',
    reason: '',
    symptoms: '',
    feedback: '', // New feedback field
    rating: 0, // New rating field
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setReviewData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setReviewData(prevData => ({
      ...prevData,
      rating
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/reviews', reviewData);
      console.log('Review submitted successfully:', response.data);
      // Optionally, reset the form after submission
      setReviewData({
        appointment_date: '',
        appointment_time: '',
        doctor: '',
        reason: '',
        symptoms: '',
        feedback: '', // Reset feedback field
        rating: 0, // Reset rating field
      });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Patient Review</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="appointment_date" className="block text-sm font-bold mb-2">Appointment Date:</label>
          <input
            type="date"
            id="appointment_date"
            name="appointment_date"
            value={reviewData.appointment_date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="appointment_time" className="block text-sm font-bold mb-2">Appointment Time:</label>
          <input
            type="time"
            id="appointment_time"
            name="appointment_time"
            value={reviewData.appointment_time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="doctor" className="block text-sm font-bold mb-2">Doctor:</label>
          <select
            id="doctor"
            name="doctor"
            value={reviewData.doctor}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Arvind">Dr. Arvind</option>
            <option value="Dr. Mukesh">Dr. Mukesh</option>
            <option value="Dr. Pavan">Dr. Pavan</option>
            {/* Add more doctor names as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="reason" className="block text-sm font-bold mb-2">Reason:</label>
          <input
            type="text"
            id="reason"
            name="reason"
            value={reviewData.reason}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="symptoms" className="block text-sm font-bold mb-2">Symptoms:</label>
          <input
            type="text"
            id="symptoms"
            name="symptoms"
            value={reviewData.symptoms}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={reviewData.feedback}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Rating:</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`mr-2 focus:outline-none ${value <= reviewData.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={() => handleRatingChange(value)}
              >
                &#9733;
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default PatientReview;
