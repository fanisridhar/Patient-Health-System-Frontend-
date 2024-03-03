import Header from "../components/NavBar";

export default function AppointmentBooking() {
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
          <div className="mt-4">
            {/* add appointment booking form here, not sure what we're using*/}
          </div>
          
        </div>
      </div>
    </main>
  );
}
