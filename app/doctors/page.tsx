import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Bell, Calendar, FileText, Search, User } from 'lucide-react';

// --- MOCK DATA ---
// In a real app, you would fetch this from an API.
const doctors = [
  {
    id: 1,
    name: ' Dr. Kumar Das',
    specialty: 'Ophthalmologist',
    imageUrl: '/placeholder-male-1.jpg', 
    experience: ' MBBS, MS (Surgeon) 10+ years',
    isAvailable: true,
    hours: '09:30 AM - 07:00 PM',
  },
  {
    id: 2,
    name: 'Dr. Sanket Atkari',
    specialty: 'Dermitologist',
    imageUrl: '/placeholder-male-1.jpg', 
    experience: '2+ years',
    isAvailable: true,
    hours: '10:30 AM - 07:00 PM',
  },
  {
    id: 3,
    name: 'Dr. Prakash Das',
    specialty: 'Neurologist',
    imageUrl: '/placeholder-male-1.jpg', 
    experience: '5+ years',
    isAvailable: false,
    hours: '07:30 AM - 03:00 PM',
  },
  {
    id: 4,
    name: 'Dr. Prakash Das',
    specialty: 'Sr. Psychologist',
    imageUrl: '/placeholder-male-1.jpg', 
    experience: '1+ years',
    isAvailable: false,
    hours: '05:30 PM - 07:00 PM',
  },
];

// --- DOCTOR CARD COMPONENT ---
// A reusable component for displaying each doctor's information.
const DoctorCard = ({ doctor }: { doctor: (typeof doctors)[0] }) => (
  <div className="flex space-x-4 rounded-xl bg-white p-4 shadow-md">
    <Image
      src={doctor.imageUrl}
      alt={doctor.name}
      width={90}
      height={90}
      className="h-24 w-24 rounded-lg object-cover"
    />
    <div className="flex flex-col">
      <h3 className="font-bold text-gray-800">{doctor.name}</h3>
      <p className="text-sm font-semibold text-cyan-500">{doctor.specialty}</p>
      
      {doctor.isAvailable ? (
        <p className="my-1 text-sm font-semibold text-green-600">Available today</p>
      ) : (
        <p className="my-1 text-sm font-semibold text-gray-500">Not available</p>
      )}

      <p className="text-xs text-gray-500">
        As Psychologist dr das practices about {doctor.experience}...
      </p>
      <p className="mt-auto pt-1 text-xs font-medium text-gray-600">{doctor.hours}</p>
    </div>
  </div>
);


// --- MAIN PAGE COMPONENT ---
const FindDoctorPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Image
            src="data:image/jpeg;base64,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" // Replace with user's avatar
            alt="Priya"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold text-gray-800">Hello, Maaz</h1>
            <p className="text-sm text-gray-500">Hyderabad,Telangana</p>
          </div>
        </div>
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
        </button>
      </header>

      {/* Search Bar */}
      <div className="relative px-4 pb-4">
        <Search className="absolute left-7 top-1/2 h-5 w-5 -translate-y-2/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Doctors"
          className="w-full rounded-full border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-500"
        />
      </div>

      {/* Doctor List */}
      <main className="flex flex-col space-y-4 px-4">
        <Link href="/book-appointment" >
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
        </Link>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 flex w-full max-w-md justify-around border-t border-gray-200 bg-white py-2">
        <Link href="book-appointment" className="flex flex-col items-center text-cyan-500">
          <Search className="h-6 w-6" />
          <span className="mt-1 text-xs font-bold">Find a Doctor</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-gray-400">
          <Calendar className="h-6 w-6" />
          <span className="mt-1 text-xs">Appoint.</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-gray-400">
          <FileText className="h-6 w-6" />
          <span className="mt-1 text-xs">Records</span>
        </Link>
        <Link href="/book-appointment" className="flex flex-col items-center text-gray-400">
          <User className="h-6 w-6" />
          <span className="mt-1 text-xs">Profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default FindDoctorPage;