import Link from "next/link";
import Logo from "../components/Logo";
import Image from "next/image";
import doctorPatientImage from "../images/doctor1.jpg";

export default function Home() {
  return (
    <main >
      <div className="flex flex-col md:flex-row items-center justify-between mt-20">
        <div className="flex-1 p-8">
          <Image
            src={doctorPatientImage}
            alt="Doctor Helping Patient"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        <div className="flex-1 p-8">
          <div className="text-center">
            <h1 className="font-bold text-4xl mb-4">
              Welcome to Medilink,
              <br />
              your trusted partner for healthcare management
            </h1>
            <div className="flex flex-col space-y-4">
              <Link
                className="mx-auto text-xl bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg w-64"
                href="/login"
              >
                Explore what Medilink can do for you!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-8">
  <Logo />
</div>
    </main>
  );
}