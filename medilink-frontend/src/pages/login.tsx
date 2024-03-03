import Link from "next/link";
import Header from "../components/NavBar";

export default function Login() {
  return (
    <main>
      <Header />
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mt-2">
            Welcome to Medilink,<br />your trusted partner for healthcare management
          </h1>
          <div className="mt-8 w-72">
            <input
              type="text"
              placeholder="Username"
              className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className="flex justify-between">
              <Link legacyBehavior href="/forgot-password">
                <a className="text-sm text-gray-600">Forgot Password?</a>
              </Link>
              <Link legacyBehavior href="/account">
              <button className="bg-emerald-700 text-white border border-emerald-700 font-bold py-2 px-6 rounded-lg">
                Sign In
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
