// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function DoctorProfile() {
//   const [doctor, setDoctor] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

//   const fetchProfile = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/doctor/profile", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setDoctor(data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     const [section, key] = e.target.name.split(".");
//     setDoctor((prev) => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [key]: e.target.value,
//       },
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put("http://localhost:5000/api/doctor/profile", doctor, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert("Profile updated");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update profile");
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!doctor) return <div>No profile data found.</div>;

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="file"
//           name="personalInfo.image"
//           value={doctor.profile?.image || ""}
//           className="border p-2 w-full cursor-allowed"
//           placeholder="image"
//           />
//         <input
//           name="personalInfo.name"
//           value={doctor.personalInfo?.name || ""}
//           disabled
//           className="border p-2 w-full bg-gray-100 cursor-not-allowed"
//           placeholder="Name"
//         />
//         <input
//           name="personalInfo.email"
//           value={doctor.personalInfo?.email || ""}
//           disabled
//           className="border p-2 w-full bg-gray-100 cursor-not-allowed"
//           placeholder="Email"
//         />
//         <input
//           name="personalInfo.contactNumber"
//           value={doctor.personalInfo?.contactNumber || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="Contact Number"
//         />
//         <input
//           name="personalInfo.degree"
//           value={doctor.personalInfo?.degree || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="Degree"
//         />
//         <input
//           name="personalInfo.yearsOfExpertise"
//           type="number"
//           value={doctor.personalInfo?.yearsOfExpertise || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="Years of Expertise"
//         />
//         <input
//           name="consultationDetails.specialist"
//           value={doctor.consultationDetails?.specialist || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="Specialist In"
//         />
//         <input
//           name="consultationDetails.timings"
//           value={doctor.consultationDetails?.timings || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="Timings"
//         />
//         <input
//           name="consultationDetails.timePerPatient"
//           value={doctor.consultationDetails?.timePerPatient || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="Time per Patient"
//         />
//         <input
//           name="consultationDetails.consultationFee"
//           type="number"
//           value={doctor.consultationDetails?.consultationFee || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="Consultation Fee"
//         />
//         <textarea
//           name="profile.description"
//           value={doctor.profile?.description || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="About You"
//         />
//         <input
//           name="profile.Hospital"
//           value={doctor.profile?.Hospital || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="Hospital"
//         />
//         <input
//           name="profile.Address"
//           value={doctor.profile?.Address || ""}
//           onChange={handleChange}
//           className="border p-2 w-full"
//           placeholder="Address"
//         />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";

export default function DoctorProfile() {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [editable, setEditable] = useState(false);
    const BASE_URL = "https://schedula-20l9.onrender.com" || "http://localhost:5000/api";

    

    


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}api/doctor/profile`, {
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

  const handleChange = (e) => {
  const { name, value } = e.target;
  const path = name.split(".");
  setDoctor((prev) => {
    const updated = { ...prev };
    let current = updated;

    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];

      if (!current[key]) {
        // if next key is a number, treat current as array
        current[key] = isNaN(Number(path[i + 1])) ? {} : [];
      }

      current = current[key];
      if (Array.isArray(current)) {
        const index = Number(path[i + 1]);
        if (!current[index]) current[index] = {};
        current = current[index];
        i++; // skip the index key
      }
    }

    current[path[path.length - 1]] = value;
    return updated;
  });
};




  const handleSubmit = async (e) => {
    e.preventDefault();
      const { personalInfo, consultationDetails, profile } = doctor;
  const updatedDoctor = {
  personalInfo: {
    ...doctor.personalInfo,
    yearsOfExpertise: [{
      years: parseInt(doctor.personalInfo?.yearsOfExpertise?.[0]?.years || doctor.personalInfo?.yearsOfExpertise || 0),
      specialisation: doctor.consultationDetails.specialist,
      services: []
    }]
  },
  consultationDetails: doctor.consultationDetails,
  profile: doctor.profile
};

     try {
    await axios.put(`${BASE_URL}/api/doctor/profile`, updatedDoctor, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("Profile updated successfully");
  } catch (err) {
    console.error("Update profile error:", err);
    alert("Profile update failed");
  
}
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!doctor) return <div className="text-center py-10">No profile data found.</div>;

  return (
  <div className="bg-gray-50 min-h-screen p-6">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Your Account & Practice Settings</h2>
          <p className="text-sm text-gray-500">Manage your professional profile and practice information</p>
        </div>
        
                  <button
  className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded hover:bg-red-200 transition"
  onClick={() => setShowLogoutModal(true)}
>
  Logout
</button>

        
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture Card */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img
  src={doctor.profile?.image}
  alt=""
  className="w-24 h-24 rounded-full mb-3 object-cover"
/>

          <h4 className="text-lg font-semibold">{doctor.personalInfo?.name}</h4>
          <p className="text-sm text-gray-500">Dr. • Specialist</p>
          <input
  type="file"
  accept="image/*"
  onChange={async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post(`${BASE_URL}/api/doctor/upload-photo`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Uploaded!");
      window.location.reload();
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      alert("Failed to upload photo");
    }
  }}
/>


          
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-lg shadow p-6 col-span-2">
          <h4 className="text-md font-semibold mb-4">Personal Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input disabled value={doctor.personalInfo?.name || ''} placeholder="Full Name" className="input-field bg-gray-100" />
            <input disabled value={doctor.personalInfo?.email || ''} placeholder="Email" className="input-field bg-gray-100" />
            <input name="personalInfo.contactNumber" value={doctor.personalInfo?.contactNumber || ''} onChange={handleChange} placeholder="Phone Number" className="input-field" />
            <input name="profile.address.state" value={doctor.profile?.address?.state || ''} onChange={handleChange} placeholder="state" className="input-field" />
            <input
  name="profile.address.district"
  value={doctor.profile?.address?.district || ''}
  onChange={handleChange}
  placeholder="district"
  className="input-field"
/>

          </div>
        </div>
        

        {/* Practice Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-md font-semibold mb-4">Practice Status</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
  <span>Availability</span>
  <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
    {doctor.profile?.practiceStatus?.availability || 'N/A'}
  </span>
</div>
<div className="flex justify-between">
  <span>Accepting Patients</span>
  <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
    {doctor.profile?.practiceStatus?.acceptingPatients || 'N/A'}
  </span>
</div>

            <div className="flex justify-between">
              <span>Experience</span>
              <span>{doctor.personalInfo?.yearsOfExpertise?.[0]?.years ?? 0} years</span>

            </div>
          </div>
        </div>
        

        {/* Professional Info */}
        <div className="bg-white rounded-lg shadow p-6 col-span-2">
          <h4 className="text-md font-semibold mb-4">Professional Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            

            <input
              name="consultationDetails.specialist"
              value={doctor.consultationDetails?.specialist || ''}
              onChange={handleChange}
              placeholder="Medical Specialization"
              className="input-field"
            />
<input
  name="personalInfo.yearsOfExpertise.0.years"
  type="number"
  value={doctor.personalInfo?.yearsOfExpertise?.[0]?.years || ''}
  onChange={handleChange}
  placeholder="Years of Experience"
  className="input-field"
/>

<select
  name="profile.practiceStatus.availability"
  value={doctor.profile?.practiceStatus?.availability || ''}
  onChange={handleChange}
  className="input-field"
>
  <option value="">Select Availability</option>
  <option value="Available">Available</option>
  <option value="Unavailable">Unavailable</option>
  <option value="On Leave">On Leave</option>
</select>

<select
  name="profile.practiceStatus.acceptingPatients"
  value={doctor.profile?.practiceStatus?.acceptingPatients || ''}
  onChange={handleChange}
  className="input-field"
>
  <option value="">Select Patient Status</option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
</select>

            
          </div>
          <textarea
            name="profile.description"
            value={doctor.profile?.description || ''}
            onChange={handleChange}
            className="input-field mt-4"
            placeholder="Tell patients about your background, approach to healthcare, and areas of expertise..."
            rows={3}
          />
        </div>
      </div>


      {/* Save Button */}
      <div className="text-right mt-6">
        <button 
  type="submit" 
  onClick={handleSubmit} 
  disabled={!editable}
  className={`px-6 py-2 rounded text-white ${editable ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300'}`}
>
  Update Profile
</button>

        <button 
  onClick={() => setEditable(prev => !prev)} 
  className="bg-yellow-500 text-white px-4 py-2 rounded float-right ml-10"
>
  {editable ? "Cancel Edit" : "Edit"}
</button>

        

      </div>
       {showLogoutModal && (
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
)}
    </div>
  </div>
);

}
