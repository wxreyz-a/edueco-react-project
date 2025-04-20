import React from 'react';
import './contact.css';

const Contact = () => {
  return (
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
  );
};

export default Contact;
