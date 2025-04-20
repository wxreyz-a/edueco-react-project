import React from 'react';
import { Helmet } from 'react-helmet';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contactez EduEco - Votre plateforme d'éducation financière</title>
        <meta name="description" content="Contactez EduEco pour toute question ou demande d'information sur nos services d'éducation financière." />
        <meta name="keywords" content="contact, EduEco, éducation financière, support, aide" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/contact" />
        <meta property="og:title" content="Contactez EduEco - Votre plateforme d'éducation financière" />
        <meta property="og:description" content="Contactez EduEco pour toute question ou demande d'information sur nos services d'éducation financière." />
        <meta property="og:url" content="https://edueco.fr/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contactez EduEco - Votre plateforme d'éducation financière" />
        <meta name="twitter:description" content="Contactez EduEco pour toute question ou demande d'information sur nos services d'éducation financière." />
      </Helmet>
      <div className="container-contact">
        <header>
          <h2>Nous contacter</h2>
        </header>
        <main>
          <p>
            Pour plus d'informations, n'hésitez pas à nous contacter à l'adresse : 
            <a href="mailto:mefinancer@edueco.fr" className="email-link" aria-label="Envoyer un email à mefinancer@edueco.fr"> mefinancer@edueco.fr</a>
          </p>
        </main>
        <footer>
          <p>&copy; 2025 EduEco. Tous droits réservés.</p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
