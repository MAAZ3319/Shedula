import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function DoctorAuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  // Shared form state
  const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  contactNumber: "",
  specialization: "",
  experience: "",
  location: ""
});

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = isLogin ? "login" : "signup";
    const BASE_URL = "https://schedula-20l9.onrender.com" || "http://localhost:5000/api";
    const url = `${BASE_URL}/auth/${endpoint}`;


    try {
      const res = await axios.post(url, {
        email: form.email,
        password: form.password,
        name: form.name,
        contactNumber: form.contactNumber,
        personalInfo: {
          name: form.name,
          email: form.email,
          contactNumber: form.contactNumber,
          
        },
        profile: {
    address: {
      state: form.location
    }}
      });

      const token = res.data.token;
      localStorage.setItem("token", token);
      router.push("/doctor/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Auth failed");
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
    <div className="flex justify-center mb-6">
      <div className="bg-green-100 p-3 rounded-full">
        <span className="text-green-600 text-2xl">📄</span>
      </div>
    </div>
    <h2 className="text-center text-xl font-semibold mb-1">Welcome to Schedula</h2>
    <div className="flex justify-center mb-6">
      <button
        className={`px-6 py-1 font-medium rounded-l-full ${isLogin ? "bg-white text-black border" : "bg-gray-200 text-gray-600"}`}
        onClick={() => setIsLogin(true)}
      >
        Sign In
      </button>
      <button
        className={`px-6 py-1 font-medium rounded-r-full ${!isLogin ? "bg-white text-black border" : "bg-gray-200 text-gray-600"}`}
        onClick={() => setIsLogin(false)}
      >
        Sign Up
      </button>
    </div>

    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && (
        <>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="input" required />
          <input name="specialization" placeholder="Specialization (e.g., Cardiology)" value={form.specialization} onChange={handleChange} className="input" />
          <div className="flex space-x-2">
            <input name="experience" placeholder="Experience (years)" value={form.experience} onChange={handleChange} className="input flex-1" />
            <input name="location" placeholder="Location (City, State)" value={form.location} onChange={handleChange} className="input flex-1" />
          </div>
        </>
      )}

      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="input" required />
      <input name="contactNumber" placeholder="Contact Number" value={form.contactNumber} onChange={handleChange} className="input" required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="input" required />
      {!isLogin && (
        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="input" required />
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded">
        {isLogin ? "Sign In" : "Create Account"}
      </button>
    </form>

    <p className="text-xs text-center mt-4 text-gray-500">
      By continuing, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>
    </p>
  </div>
</div>

  );
}
