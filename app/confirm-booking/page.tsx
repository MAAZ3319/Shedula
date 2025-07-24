"use client";

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { ChevronLeft } from 'lucide-react';

// --- Reusable Input Field Component ---
const InputField = ({ label, name, placeholder, as = 'input' }: { label: string, name: string, placeholder: string, as?: 'input' | 'textarea' }) => {
  const commonProps = {
    id: name,
    name: name,
    placeholder: placeholder,
    className: "w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm focus:border-cyan-500 focus:ring-cyan-500",
  };
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-gray-700">{label}</label>
      {as === 'textarea' ? (
        <textarea {...commonProps} rows={4}></textarea>
      ) : (
        <input type="text" {...commonProps} />
      )}
    </div>
  );
};

// --- Success Modal Component ---
const BookingSuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">
        <Image
          src="/success.png" // Replace with your actual illustration
          alt="Appointment Booked Successfully"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-900">
          Appointment Booked Successfully!
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Token No <span className="font-bold text-blue-600">1234</span>
        </p>
        <p className="mt-4 text-sm text-gray-500">
          You will receive a notification half an hour before as a reminder. Thank you!
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-teal-600 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
        >
          Done
        </button>
      </div>
    </div>
  );
};


// --- Main Page Component ---
const PatientDetailsPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you would submit form data to your backend here.
    // On successful submission, you open the modal.
    console.log("Form submitted, opening success modal...");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // After closing the modal, navigate the user to a relevant page,
    // like the main doctors list or a "my appointments" page.
    router.push('/doctors');
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="flex items-center bg-white p-4 shadow-sm">
          <Link href="/select-slot" className="p-2">
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </Link>
          <h1 className="flex-1 text-center text-xl font-bold text-gray-800">
            Patient Details
          </h1>
          <div className="w-8"></div> {/* Spacer to balance the title */}
        </header>

        {/* Patient Details Form */}
        <main className="p-4">
          <form onSubmit={handleBookingSubmit} className="space-y-5 rounded-lg bg-white p-5 shadow-sm">
            <div className='text-gray-500'>
            <h2 className="text-lg font-bold text-gray-700">Patient Details</h2>
            <InputField label="" name="fullName" placeholder="Enter your full name" />
            <InputField label="" name="age" placeholder="Enter your age" />
            <InputField label="" name="problem" placeholder="Briefly describe your health issue" as="textarea" />
</div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-teal-600 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && <BookingSuccessModal onClose={handleCloseModal} />}
    </>
  );
};

export default PatientDetailsPage;