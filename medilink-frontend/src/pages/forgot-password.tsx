import Link from "next/link";
import Header from "../components/NavBar";

export default function ForgotPassword() {
  return (
    <main>
      <Header />
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mt-2">
            Forgot Your Password?
          </h1>
          <div className="mt-8 w-72">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">
              Reset Password
            </button>
          </div>
          <div className="mt-4">
            <Link legacyBehavior href="/login">
              <a className="text-lg bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-bold py-2 px-6 rounded-md">Back to Login</a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
