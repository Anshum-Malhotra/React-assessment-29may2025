import React, { useState } from 'react';
import type { PersonalInfo } from '../types/formTypes';

interface Props {
  data: PersonalInfo;
  updateForm: (fields: Partial<PersonalInfo>) => void;
  nextStep: () => void;
}

const Step1: React.FC<Props> = ({ data, updateForm, nextStep }) => {
  const [errors, setErrors] = useState<Partial<Record<keyof PersonalInfo, string>>>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!data.firstName) newErrors.firstName = 'First name is required.';
    if (!data.lastName) newErrors.lastName = 'Last name is required.';
    if (!data.email || !data.email.includes('@')) newErrors.email = 'Enter a valid email.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', color: '#1e293b', marginBottom: 24 }}>
        Personal Information
      </h2>

      <div style={{ marginBottom: 20 }}>
        <label className="label-base" htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          className={`input-base ${errors.firstName ? 'input-error' : ''}`}
          value={data.firstName}
          onChange={e => updateForm({ firstName: e.target.value })}
        />
        {errors.firstName && <p className="error-text">{errors.firstName}</p>}
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="label-base" htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          className={`input-base ${errors.lastName ? 'input-error' : ''}`}
          value={data.lastName}
          onChange={e => updateForm({ lastName: e.target.value })}
        />
        {errors.lastName && <p className="error-text">{errors.lastName}</p>}
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="label-base" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className={`input-base ${errors.email ? 'input-error' : ''}`}
          value={data.email}
          onChange={e => updateForm({ email: e.target.value })}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <button
        onClick={() => validate() && nextStep()}
        className="btn-base btn-primary"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
