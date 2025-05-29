import React, { useState } from 'react';
import type { AddressInfo } from '../types/formTypes';

interface Props {
  data: AddressInfo;
  updateForm: (fields: Partial<AddressInfo>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const Step2: React.FC<Props> = ({ data, updateForm, nextStep, prevStep }) => {
  const [errors, setErrors] = useState<Partial<Record<keyof AddressInfo, string>>>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!data.address) newErrors.address = 'Address is required.';
    if (!data.city) newErrors.city = 'City is required.';
    if (!data.zipCode) newErrors.zipCode = 'Zip Code is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', color: '#1e293b', marginBottom: 24 }}>
        Address Information
      </h2>

      <div style={{ marginBottom: 20 }}>
        <label className="label-base" htmlFor="address">Address</label>
        <input
          id="address"
          className={`input-base ${errors.address ? 'input-error' : ''}`}
          value={data.address}
          onChange={e => updateForm({ address: e.target.value })}
        />
        {errors.address && <p className="error-text">{errors.address}</p>}
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="label-base" htmlFor="city">City</label>
        <input
          id="city"
          className={`input-base ${errors.city ? 'input-error' : ''}`}
          value={data.city}
          onChange={e => updateForm({ city: e.target.value })}
        />
        {errors.city && <p className="error-text">{errors.city}</p>}
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="label-base" htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          className={`input-base ${errors.zipCode ? 'input-error' : ''}`}
          value={data.zipCode}
          onChange={e => updateForm({ zipCode: e.target.value })}
        />
        {errors.zipCode && <p className="error-text">{errors.zipCode}</p>}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16 }}>
        <button onClick={prevStep} className="btn-base btn-secondary">
          Back
        </button>
        <button onClick={() => validate() && nextStep()} className="btn-base btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
