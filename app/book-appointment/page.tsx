import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Calendar, ChevronRight } from 'lucide-react';

// A reusable component for the speciality tags
const SpecialityTag = ({ text }: { text: string }) => (
  <div className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700">
    {text}
  </div>
);

const BookAppointmentPage: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Wave Effect */}
      <div className="absolute left-0 top-0 h-48 w-full bg-cyan-100/50 [border-bottom-left-radius:40px] [border-bottom-right-radius:40px]"></div>

      <div className="relative z-10 p-4">
        {/* Header */}
        <header className="mb-4 flex items-center">
          <Link href="/doctors" className="p-2">
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </Link>
          <h1 className="flex-1 text-center text-xl font-bold text-gray-800">
            Book Appointment
          </h1>
          <div className="w-8"></div> {/* Spacer to balance the title */}
        </header>

        {/* Doctor Info Card */}
        <div className="mb-6 rounded-xl bg-white p-4 shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">Dr. Kumar Das</h2>
              <p className="text-base text-gray-600">Ophthalmologist</p>
              <p className="text-sm font-semibold text-cyan-600">MBBS, MS (Surgeon)</p>
              <p className="mt-1 text-xs text-gray-500">Fellow of Sanskara netralaya, Chennai</p>
            </div>
            <Image
              src="/placeholder-male-1.jpg" // Replace with actual image
              alt="Dr. Kumar Das"
              width={80}
              height={80}
              className="h-20 w-20 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Speciality Section */}
        <section className="mb-6">
          <h3 className="mb-3 text-lg font-bold text-gray-800">Speciality</h3>
          <div className="flex flex-wrap gap-2">
            <SpecialityTag text="Cataract specialist" />
            <SpecialityTag text="Eye diabetes" />
            <SpecialityTag text="Conjunctivitis" />
            <SpecialityTag text="Pre cataract" />
            <SpecialityTag text="Foreign body" />
            <SpecialityTag text="Eye check up" />
            <SpecialityTag text="Refraction" />
          </div>
        </section>

        {/* About Doctor Section */}
        <section className="mb-6">
          <h3 className="mb-2 text-lg font-bold text-gray-800">About Doctor</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            15+ years of experience in all aspects of cardiology, including non-invasive and interventional interventional procedures.
          </p>
        </section>

        {/* Availability Section */}
        <section className="mb-8">
          <h3 className="mb-2 text-lg font-bold text-gray-800">Availability For Consulting</h3>
          <div className="text-sm text-gray-600">
            <p>Monday to Friday | 10 PM to 1 Pm</p>
            <p>Saturday | 2 Pm to 5 Pm</p>
          </div>
        </section>

        {/* Earliest Appointment Card */}
        <div className="mb-8 flex cursor-pointer items-center justify-between rounded-xl bg-white p-4 shadow-md">
          <div className="flex items-center space-x-4">
            <div className="rounded-lg bg-gray-100 p-2">
              <Calendar className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-cyan-600">Earliest Available Appointment</p>
              <p className="font-bold text-gray-800">10 Oct, 2023 | 11:30 AM</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Footer Book Appointment Button */}
      <footer className="sticky bottom-0 bg-white p-4">
        <Link href= "./select-slot">
        <button className="w-full rounded-lg bg-cyan-500 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
          Book appointment
        </button>
        </Link>
      </footer>
    </div>
  );
};

export default BookAppointmentPage;