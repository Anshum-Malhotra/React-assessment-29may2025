import React from 'react';
import type { FormData } from '../types/formTypes';

interface Props {
  data: FormData;
  prevStep: () => void;
}

const Step3: React.FC<Props> = ({ data, prevStep }) => {
  const handleSubmit = () => {
    alert('Form submitted!');
    localStorage.removeItem('formData');
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', color: '#1e293b', marginBottom: 24 }}>
        Review & Submit
      </h2>

      <div className="review-box">
        <div>
          <span>First Name: </span>{data.firstName}
        </div>
        <div>
          <span>Last Name: </span>{data.lastName}
        </div>
        <div>
          <span>Email: </span>{data.email}
        </div>
        <div>
          <span>Address: </span>{data.address}
        </div>
        <div>
          <span>City: </span>{data.city}
        </div>
        <div>
          <span>Zip Code: </span>{data.zipCode}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16 }}>
        <button onClick={prevStep} className="btn-base btn-secondary">
          Back
        </button>
        <button onClick={handleSubmit} className="btn-base btn-submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
