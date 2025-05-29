import React, { useState, useEffect } from 'react';
import type { FormData } from './types/formTypes';
import StepIndicator from './components/StepIndicator';
import Step1 from './components/PersonalInfo';
import Step2 from './components/AddressInfo';
import Step3 from './components/ReviewSubmit';

const App: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(() => {
        const saved = localStorage.getItem('formData');
        return saved
            ? JSON.parse(saved)
            : {
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                city: '',
                zipCode: '',
            };
    });

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
    const updateForm = (fields: Partial<FormData>) =>
        setFormData(prev => ({ ...prev, ...fields }));

    return (
        <div className="app-container">
            <div className="app-inner-wrapper">
                <div className="app-card">
                    <h1 className="app-title">Multi-Step Form</h1>
                    <StepIndicator step={step} />
                    <div className="step-content">
                        {step === 1 && (
                            <Step1 data={formData} updateForm={updateForm} nextStep={nextStep} />
                        )}
                        {step === 2 && (
                            <Step2
                                data={formData}
                                updateForm={updateForm}
                                nextStep={nextStep}
                                prevStep={prevStep}
                            />
                        )}
                        {step === 3 && <Step3 data={formData} prevStep={prevStep} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
