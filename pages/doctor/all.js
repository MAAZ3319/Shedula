import { useEffect, useState } from "react";
import axios from "axios";

export default function AllDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const token = localStorage.getItem("token");
      try {
        const baseURL = "https://schedula-20l9.onrender.com" || "http://localhost:5000";

          await axios.get(`${baseURL}/api/doctor/all`, {
                  headers: { Authorization: `Bearer ${token}` }
            });

        setDoctors(data);
      } catch (err) {
        console.error("Failed to fetch doctors", err);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Doctors</h1>
      {doctors.map((doc, index) => (
        <div key={index} className="border p-4 mb-2 rounded shadow">
          <h2 className="text-lg font-semibold">{doc.personalInfo?.name}</h2>
          <p>{doc.profile?.description}</p>
          <p>Fee: ₹{doc.consultationDetails?.consultationFee}</p>
          <p>Timings: {doc.consultationDetails?.timings}</p>
          <p>image: {doc.profile?.image}</p>
        </div>
      ))}
    </div>
  );
}
