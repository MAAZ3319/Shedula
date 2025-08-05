import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function handleDoctorContinue() {
    router.push("/doctor/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Schedula</h1>
      <p className="text-gray-600 text-center mb-12 max-w-xl">
        The modern platform connecting patients with healthcare professionals.
        Book appointments, manage your health records, and get the care you need.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
          <div className="text-blue-500 text-4xl mb-4">👤</div>
          <h2 className="text-xl font-semibold mb-2">I'm a Patient</h2>
          <p className="text-gray-500 mb-4">
            Find and book appointments with qualified doctors in your area.
            Manage your health records and get the care you deserve.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Continue as Patient
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
          <div className="text-green-500 text-4xl mb-4">📋</div>
          <h2 className="text-xl font-semibold mb-2">I'm a Doctor</h2>
          <p className="text-gray-500 mb-4">
            Manage your practice, accept appointment requests, and connect
            with patients who need your expertise.
          </p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={handleDoctorContinue}
          >
            Continue as Doctor
          </button>
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-12">
        Join thousands of healthcare professionals and patients using Schedula
      </p>
    </main>
  );
}
