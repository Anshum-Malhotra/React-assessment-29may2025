import React from 'react';

interface Props {
  step: number;
}

const StepIndicator: React.FC<Props> = ({ step }) => {
  const progressPercent = (step / 3) * 100;

  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: '#2563eb', marginBottom: 8 }}>
        Step {step} of 3
      </div>
      <div
        style={{
          height: 8,
          width: '100%',
          borderRadius: 8,
          backgroundColor: '#bfdbfe',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: '#2563eb',
            borderRadius: 8,
            transition: 'width 0.3s ease-in-out',
          }}
        ></div>
      </div>
    </div>
  );
};

export default StepIndicator;
