import React from 'react';
import { Helmet } from 'react-helmet';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contactez EduEco - Votre plateforme d'Ã©ducation financiÃ¨re</title>
        <meta name="description" content="Contactez EduEco pour toute question ou demande d'information sur nos services d'Ã©ducation financiÃ¨re." />
        <meta name="keywords" content="contact, EduEco, Ã©ducation financiÃ¨re, support, aide" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/contact" />
        <meta property="og:title" content="Contactez EduEco - Votre plateforme d'Ã©ducation financiÃ¨re" />
        <meta property="og:description" content="Contactez EduEco pour toute question ou demande d'information sur nos services d'Ã©ducation financiÃ¨re." />
        <meta property="og:url" content="https://edueco.fr/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contactez EduEco - Votre plateforme d'Ã©ducation financiÃ¨re" />
        <meta name="twitter:description" content="Contactez EduEco pour toute question ou demande d'information sur nos services d'Ã©ducation financiÃ¨re." />
      </Helmet>
      <div className="contact-page">
        <div className="container-contact">
          <header className="contact-header">
            <h2 className="contact-title">Nous contacter</h2>
          </header>
          <main className="contact-main">
            <p className="contact-text">
              Pour plus d'informations, n'hÃ©sitez pas Ã  nous contacter Ã  l'adresse:{' '}<a href="mailto:mefinancer@edueco.fr" className="email-link" aria-label="Envoyer un email Ã  mefinancer@edueco.fr"> mefinancer@edueco.fr</a>
            </p>
          </main>
        </div>
        <footer className="site-footer contact-footer">
          <address>
            <p>&copy; 2025 EduEco. Tous droits rÃ©servÃ©s.</p>
          </address>
        </footer>
      </div>
    </>
  );
};

export default Contact;


