import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { verifyCertificate } from '../utils/certificateVerification';

interface RegistrationFormProps {
  userType: 'student' | 'graduate';
}

interface VerificationStatus {
  isVerifying: boolean;
  result?: {
    isValid: boolean;
    message: string;
  };
}

function RegistrationForm({ userType }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualifications: '',
    photo: null as File | null,
    certificates: {
      tenth: null as File | null,
      intermediate: null as File | null,
      degree: null as File | null,
    },
    subjects: '',
    address: '',
  });

  const [verificationStatus, setVerificationStatus] = useState<{
    tenth?: VerificationStatus;
    intermediate?: VerificationStatus;
    degree?: VerificationStatus;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleFileChange = (field: string, subfield?: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (subfield && file) {
      setFormData(prev => ({
        ...prev,
        [field]: { ...prev[field as keyof typeof prev], [subfield]: file }
      }));

      // Start verification for certificates
      setVerificationStatus(prev => ({
        ...prev,
        [subfield]: { isVerifying: true }
      }));

      verifyCertificate(file)
        .then(result => {
          setVerificationStatus(prev => ({
            ...prev,
            [subfield]: {
              isVerifying: false,
              result: {
                isValid: result.isValid,
                message: result.message
              }
            }
          }));
        })
        .catch(() => {
          setVerificationStatus(prev => ({
            ...prev,
            [subfield]: {
              isVerifying: false,
              result: {
                isValid: false,
                message: "Verification failed. Please try again."
              }
            }
          }));
        });
    } else {
      setFormData(prev => ({ ...prev, [field]: file }));
    }
  };

  const renderVerificationStatus = (certificateType: 'tenth' | 'intermediate' | 'degree') => {
    const status = verificationStatus[certificateType];
    
    if (!status) return null;
    
    if (status.isVerifying) {
      return (
        <div className="flex items-center text-sky-600 mt-1">
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span>Verifying certificate...</span>
        </div>
      );
    }

    if (status.result) {
      return (
        <div className={`flex items-center mt-1 ${status.result.isValid ? 'text-green-600' : 'text-red-600'}`}>
          {status.result.isValid ? (
            <CheckCircle2 className="w-4 h-4 mr-2" />
          ) : (
            <AlertCircle className="w-4 h-4 mr-2" />
          )}
          <span>{status.result.message}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 mb-2">
          {userType.toUpperCase()} NAME:
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">
          {userType.toUpperCase()} PHN. NO.:
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">
          {userType.toUpperCase()} EMAIL ID:
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">
          {userType.toUpperCase()} QUALIFICATIONS:
        </label>
        <input
          type="text"
          value={formData.qualifications}
          onChange={(e) => setFormData(prev => ({ ...prev, qualifications: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">UPLOAD PHOTO:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange('photo')}
          className="w-full"
          required
        />
        <p className="text-sm text-gray-500 mt-1">10 TO 100 KB</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 mb-2">10th Certificate:</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange('certificates', 'tenth')}
            className="w-full"
            required
          />
          {renderVerificationStatus('tenth')}
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Inter/Diploma:</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange('certificates', 'intermediate')}
            className="w-full"
            required
          />
          {renderVerificationStatus('intermediate')}
        </div>
        <div>
          <label className="block text-gray-700 mb-2">B.Tech/Degree:</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange('certificates', 'degree')}
            className="w-full"
            required
          />
          {renderVerificationStatus('degree')}
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">SUBJECTS:</label>
        <input
          type="text"
          value={formData.subjects}
          onChange={(e) => setFormData(prev => ({ ...prev, subjects: e.target.value }))}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
          required
        />
      </div>

      {userType === 'student' && (
        <div>
          <label className="block text-gray-700 mb-2">ADDRESS:</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-200 focus:border-sky-400 outline-none"
            rows={4}
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-sky-200 hover:bg-sky-300 text-navy-900 font-bold py-3 px-6 rounded-full transition-colors"
      >
        REGISTER
      </button>
    </form>
  );
}

export default RegistrationForm;