// types.ts

export interface Appointment {
    id: number;
    patientName: string;
    appointmentTime: string;
    reason: string;
    status: 'pending' | 'approved' | 'rejected';
  }
  
  export interface Message {
    id: number;
    senderName: string;
    message: string;
  }
  