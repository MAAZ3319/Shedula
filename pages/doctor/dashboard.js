import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "lucide-react";

export default function DoctorDashboard() {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  const [activeTab, setActiveTab] = useState("requests");
  // const [showLogoutModal, setShowLogoutModal] = useState(false);

//api/doctor/profile

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const baseURL = "https://schedula-20l9.onrender.com" || "http://localhost:5000";
        await axios.get(`${baseURL}/api/doctor/profile`, {
                  headers: { Authorization: `Bearer ${token}` }
            });

        setDoctor(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!doctor) return <div className="text-center py-10">No profile data found.</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white px-6 py-4 shadow flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={doctor.profile?.image || "/avatar.png"}
            alt="Doctor"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="font-semibold">Dr. {doctor.personalInfo?.name}</h1>
            <p className="text-sm text-gray-500">Manage your practice and appointments</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded">Online</span>
          <a href="/doctor/profile" className="text-sm font-medium">Your Profile</a>

          {/* <button
  className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded hover:bg-red-200 transition"
  onClick={() => setShowLogoutModal(true)}
>
  Logout
</button> */}




         
        </div>
      </header>

      {/* Dashboard Content */}
      <section className="px-6 py-6">
        {/* Quick Actions */}
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="bg-green-600 text-white py-3 rounded font-medium">Your Account</button>
          <button className="bg-white py-3 border rounded font-medium">Schedule</button>
          <button className="bg-white py-3 border rounded font-medium">Analytics</button>
          <button className="bg-white py-3 border rounded font-medium">Messages</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-sm text-gray-600">Pending Requests</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-sm text-gray-600">Confirmed Today</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold">₹0</p>
          </div>
        </div>

        {/* Appointment Management */}
       <div className="bg-white p-6 rounded-9 shadow">
  <h3 className="text-lg font-semibold mb-4">Appointment Management</h3>

  {/* Tab buttons styled like pills */}
  <div className="bg-gray-100 p-1 rounded-9 flex justify-between max-w-md mx-auto mb-6">
    {["requests", "confirmed", "completed"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition ${
          activeTab === tab
            ? "bg-white text-black shadow-sm"
            : "text-gray-500"
        }`}
      >
        {tab === "requests" && "Requests (0)"}
        {tab === "confirmed" && "Confirmed (0)"}
        {tab === "completed" && "Completed (0)"}
      </button>
    ))}
  </div>

  {/* Tab content */}
  <div className="text-center py-12 text-gray-500">
    {activeTab === "requests" && (
      <>
        <img src="/empty-inbox.png" alt="No Requests" className="mx-auto mb-4 w-12 h-12" />
        <p className="font-semibold text-gray-700">No pending requests</p>
        <p className="text-sm">New appointment requests will appear here</p>
      </>
    )}
    {activeTab === "confirmed" && (
      <>
        <img src="/empty-inbox.png" alt="No Confirmed" className="mx-auto mb-4 w-12 h-12" />
        <p className="font-semibold text-gray-700">No confirmed appointments</p>
        <p className="text-sm">Confirmed appointments will be listed here</p>
      </>
    )}
    {activeTab === "completed" && (
      <>
        <img src="/empty-inbox.png" alt="No Completed" className="mx-auto mb-4 w-12 h-12" />
        <p className="font-semibold text-gray-700">No completed appointments</p>
        <p className="text-sm">Completed appointments will show up here</p>
      </>
    )}
  </div>
  {/* {showLogoutModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
      <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
      <p className="text-sm text-gray-600 mb-6">Are you sure you want to logout?</p>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setShowLogoutModal(false)}
          className="px-4 py-2 text-sm rounded bg-gray-100 hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/doctor/login";
          }}
          className="px-4 py-2 text-sm rounded bg-red-600 text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
)} */}

</div>


      </section>
    </div>
  );
}
