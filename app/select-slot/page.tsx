import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronDown } from 'lucide-react';

// --- MOCK DATA ---
// In a real app, this data would be dynamic.

const DATES = [
  { dayNum: '13', dayName: 'MON', active: false },
  { dayNum: '14', dayName: 'TUE', active: true },
  { dayNum: '16', dayName: 'WED', active: false },
  { dayNum: '17', dayName: 'WED', active: false },
  { dayNum: '18', dayName: 'WED', active: false },
];

const TIME_SLOTS = [
  { time: '09:30 AM - 9:45AM', available: true },
  { time: '10:00 AM - 10:15AM', available: true },
  { time: '10:30 AM - 10:45AM', available: true },
  { time: '11:00 AM - 11:15AM', available: true },
  { time: '11:30 AM - 11:45AM', available: true },
  { time: '12:00 PM - 12:15PM', available: true },
  { time: '12:30 PM - 12:45PM', available: false },
  { time: '01:00 PM - 01:15PM', available: false },
];

const SelectSlotPage: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Wave Effect */}
      <div className="absolute left-0 top-0 h-40 w-full bg-cyan-100/50 [border-bottom-left-radius:40px] [border-bottom-right-radius:40px]"></div>

      <div className="relative z-10 flex h-full flex-col p-4">
        {/* Header */}
        <header className="mb-4 flex items-center">
          <Link href="/book-appointment" className="p-2">
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </Link>
          <h1 className="flex-1 text-center text-xl font-bold text-gray-800">
            Book Appointment
          </h1>
          <div className="w-8"></div> {/* Spacer to balance the title */}
        </header>

        {/* Doctor Info Card */}
        <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-4 shadow-lg">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Dr. Kumar Das</h2>
            <p className="text-sm text-gray-600">Cardiologist - Dombivali</p>
            <p className="mt-1 text-sm font-semibold text-gray-800">MBBS, MD (Internal Medicine)</p>
          </div>
          <Image
            src="/placeholder-male-1.jpg" // Replace with actual image
            alt="Dr. Kumar Das"
            width={80}
            height={80}
            className="h-20 w-20 rounded-lg object-cover"
          />
        </div>

        {/* Main Content Area */}
        <main className="flex-grow">
          <h2 className="text-lg font-bold text-gray-800">Book Appointment</h2>

          {/* Month Selector */}
          <div className="my-4 flex items-center">
            <button className="flex items-center space-x-1 text-lg font-semibold text-gray-700">
              <span>July, 2023</span>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Date Selector */}
          <div className="mb-6 flex space-x-3 overflow-x-auto pb-2">
            {DATES.map((date, index) => (
              <button
                key={index}
                className={`flex-shrink-0 rounded-lg p-3 text-center ${
                  date.active
                    ? 'bg-cyan-500 text-white'
                    : 'border border-gray-200 bg-white text-gray-700'
                }`}
              >
                <p className="text-2xl font-bold">{date.dayNum}</p>
                <p className="text-xs">{date.dayName}</p>
              </button>
            ))}
          </div>

          {/* Slot Selector */}
          <h3 className="mb-4 text-lg font-bold text-gray-800">Select slot</h3>
          <div className="grid grid-cols-2 gap-3">
            {TIME_SLOTS.map((slot, index) => (
              <button
                key={index}
                disabled={!slot.available}
                className={`rounded-lg py-3 text-center text-sm font-medium ${
                  slot.available
                    ? 'border border-gray-300 bg-white text-gray-700 hover:border-cyan-500 hover:text-cyan-500'
                    : 'cursor-not-allowed border-none bg-gray-100 text-gray-400'
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </main>

        {/* Footer Book Appointment Button */}
        <footer className="mt-8">
            <Link href="/confirm-booking">
          <button className="w-full rounded-lg bg-cyan-500 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
            Book appointment
          </button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SelectSlotPage;