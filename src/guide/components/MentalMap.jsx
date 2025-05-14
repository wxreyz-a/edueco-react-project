import React, { useState } from 'react';
import './MentalMap.css';

const MentalMap = ({ title, subtitle, steps }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentStep = steps[currentStepIndex];

  const goToNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div className="mental-map-container">
      <header className="mental-map-header">
        <h1>{title}</h1>
        {subtitle && <p className="mental-map-subtitle">{subtitle}</p>}
      </header>
      <nav className="mental-map-navigation">
        {steps.map((step, index) => (
          <button
            key={step.id}
            className={`mental-map-step-button ${index === currentStepIndex ? 'active' : ''}`}
            onClick={() => setCurrentStepIndex(index)}
            aria-label={`Aller à l'étape ${index + 1}: ${step.title}`}
          >
            {index + 1}
          </button>
        ))}
      </nav>
      <section className="mental-map-step-content">
        <h2>{currentStep.title}</h2>
        {currentStep.content && <p>{currentStep.content}</p>}
        {currentStep.listType === 'ul' && (
          <ul>
            {currentStep.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        {currentStep.listType === 'ol' && (
          <ol>
            {currentStep.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        )}
        {currentStep.image && (
          <img src={currentStep.image.src} alt={currentStep.image.alt} style={{ maxWidth: '100%', marginTop: '1em', marginBottom: '1em' }} />
        )}
      </section>
      <div className="mental-map-footer">
        <button onClick={goToPrev} disabled={currentStepIndex === 0} aria-label="Étape précédente">
          Précédent
        </button>
        <button onClick={goToNext} disabled={currentStepIndex === steps.length - 1} aria-label="Étape suivante">
          Suivant
        </button>
      </div>
    </div>
  );
};

export default MentalMap;
