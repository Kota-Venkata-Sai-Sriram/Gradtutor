import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

function GraduateRegistration() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Graduate Registration</h1>
        <RegistrationForm userType="graduate" />
      </div>
    </div>
  );
}

export default GraduateRegistration;