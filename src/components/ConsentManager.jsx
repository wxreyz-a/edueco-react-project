import React, { useState } from 'react';
import './ConsentManager.css';

const detailedConsentText = (
  <>
    <p>
      edueco.fr demande votre consentement pour utiliser vos données à caractère personnel dans les cas suivants :
    </p>
    <ul>
      <li>Publicités et contenu personnalisés, mesure de performance des publicités et du contenu, études d’audience et développement de services</li>
      <li>Stocker et/ou accéder à des informations sur un appareil</li>
    </ul>
    <p><strong>En savoir plus</strong></p>
    <p>
      Vos données à caractère personnel seront traitées, et les informations liées à votre appareil (cookies, identifiants uniques et autres types de données) pourront être stockées et consultées par 132 fournisseur(s) TCF et 65 partenaires publicitaires, ainsi que partagées avec eux, ou utilisées spécifiquement par ce site ou cette application.
    </p>
    <p>
      Certains fournisseurs sont susceptibles de traiter vos données à caractère personnel selon le principe de l'intérêt légitime. Vous pouvez vous y opposer en gérant vos options ci-dessous. Cliquez sur le lien en bas de cette page pour gérer ou retirer votre consentement des paramètres de confidentialité et des cookies.
    </p>
  </>
);

const ConsentManager = ({
  onConsentGiven,
  onConsentDeclined,
  onConsentWithdrawn,
  visible,
  onClose,
  consent = false,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleAccept = () => {
    onConsentGiven();
    if (onClose) onClose();
  };

  const handleDecline = () => {
    if (onConsentDeclined) onConsentDeclined();
    if (onClose) onClose();
  };

  const handleWithdraw = () => {
    if (onConsentWithdrawn) {
      onConsentWithdrawn();
    }
    if (onClose) onClose();
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (!visible) {
    return null;
  }

  // Show initial consent prompt UI when consent is false
  if (consent === false) {
    return (
      <div className="consent-manager">
        <p className="consent-summary">
          Paramètres concernant la confidentialité et les cookies.
        </p>
        <p className="consent-explanation">
          Ce site utilise des cookies pour personnaliser le contenu, analyser le trafic et améliorer votre expérience.
        </p>
        {showDetails && (
          <div className="consent-text">
            {detailedConsentText}
          </div>
        )}
        <div className="consent-buttons">
          <button className="btn-accept" onClick={handleAccept}>Autoriser</button>
          <button className="btn-decline" onClick={handleDecline}>Refuser</button>
          <button className="btn-manage" onClick={toggleDetails}>
            {showDetails ? 'Cacher les options' : 'En savoir plus'}
          </button>
        </div>
      </div>
    );
  }

  // consent === true
  return (
    <div className="consent-manager withdrawn-state">
      <p>Vous avez donné votre consentement pour l'utilisation des cookies.</p>
      <button className="btn-withdraw" onClick={handleWithdraw}>Retirer le consentement</button>
      <button className="btn-close" onClick={onClose}>Fermer</button>
    </div>
  );
};

export default ConsentManager;
