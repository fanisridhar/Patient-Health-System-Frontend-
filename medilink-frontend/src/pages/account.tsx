import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "../components/NavBar";

export default function Profile() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: session } = useSession(); // Define session variable here
      try {
        const res = await fetch("/api/protected");
        if (res.ok) {
          const json = await res.json();
          setContent(json.content);
        } else {
          console.error("Error fetching data:", res.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); 

  const { data: session, status } = useSession(); 

  return (
    <SessionProvider session={session}>
      <main>
        <Header />
        <div className="flex flex-col text-center">
          <h1 className="text-2xl mt-8 mb-8">
            You are logged in as{" "}
            <span className="font-bold">{session?.user?.name}</span> {/* Safely access user name */}
          </h1>
          <button
            className="m-auto mt-8 bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-bold py-2 px-6 rounded-md w-40"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </main>
    </SessionProvider>
  );
}
