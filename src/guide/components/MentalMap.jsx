import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MentalMap.css';

const stepShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  example: PropTypes.string,
  listType: PropTypes.oneOf(['ul', 'ol']),
  items: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  subsections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
    })
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
});

const MentalMap = ({ title, subtitle = '', steps }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const safeSteps = Array.isArray(steps) ? steps : [];

  if (safeSteps.length === 0) {
    return null;
  }

  const boundedStepIndex = Math.min(currentStepIndex, safeSteps.length - 1);
  const currentStep = safeSteps[boundedStepIndex];

  const goToNext = () => {
    if (boundedStepIndex < safeSteps.length - 1) {
      setCurrentStepIndex(boundedStepIndex + 1);
    }
  };

  const goToPrev = () => {
    if (boundedStepIndex > 0) {
      setCurrentStepIndex(boundedStepIndex - 1);
    }
  };

  return (
    <div className="mental-map-container">
      <header className="mental-map-header">
        <h1>{title}</h1>
        {subtitle && <p className="mental-map-subtitle">{subtitle}</p>}
      </header>

      <nav className="mental-map-navigation">
        {safeSteps.map((step, index) => (
          <button
            key={step.id || step.title}
            className={`mental-map-step-button ${index === boundedStepIndex ? 'active' : ''}`}
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
        {currentStep.example && <p>{currentStep.example}</p>}

        {currentStep.listType === 'ul' && Array.isArray(currentStep.items) && (
          <ul>
            {currentStep.items.map((item) => (
              <li key={String(item)}>{item}</li>
            ))}
          </ul>
        )}

        {currentStep.listType === 'ol' && Array.isArray(currentStep.items) && (
          <ol>
            {currentStep.items.map((item) => (
              <li key={String(item)}>{item}</li>
            ))}
          </ol>
        )}

        {currentStep.image && (
          <img
            src={currentStep.image.src}
            alt={currentStep.image.alt}
            style={{ maxWidth: '100%', marginTop: '1em', marginBottom: '1em' }}
          />
        )}

        {Array.isArray(currentStep.subsections) &&
          currentStep.subsections.map((subsection) => (
            <article key={subsection.title}>
              <h3>{subsection.title}</h3>
              {subsection.content && <p>{subsection.content}</p>}
            </article>
          ))}

        {Array.isArray(currentStep.links) && currentStep.links.length > 0 && (
          <ul>
            {currentStep.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="mental-map-footer">
        <button onClick={goToPrev} disabled={boundedStepIndex === 0} aria-label="Étape précédente">
          Précédent
        </button>
        <button onClick={goToNext} disabled={boundedStepIndex === safeSteps.length - 1} aria-label="Étape suivante">
          Suivant
        </button>
      </div>
    </div>
  );
};

MentalMap.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  steps: PropTypes.arrayOf(stepShape).isRequired,
};

export default MentalMap;
