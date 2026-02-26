import React from 'react';
import { Helmet } from 'react-helmet';
import './mentionslegales.css';

const LegalMentions = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - EduEco</title>
        <meta name="description" content="Consultez les mentions légales du site EduEco, incluant les informations sur l'éditeur, l'hébergeur, les conditions d'utilisation et la propriété intellectuelle." />
        <meta name="keywords" content="mentions légales, EduEco, conditions d'utilisation, propriété intellectuelle, contact" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/mentions-legales" />
        <meta property="og:title" content="Mentions Légales - EduEco" />
        <meta property="og:description" content="Consultez les mentions légales du site EduEco, incluant les informations sur l'éditeur, l'hébergeur, les conditions d'utilisation et la propriété intellectuelle." />
        <meta property="og:url" content="https://edueco.fr/mentions-legales" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mentions Légales - EduEco" />
        <meta name="twitter:description" content="Consultez les mentions légales du site EduEco, incluant les informations sur l'éditeur, l'hébergeur, les conditions d'utilisation et la propriété intellectuelle." />
      </Helmet>
      <div className="legal-container">
        <h1>Mentions Légales</h1>

        <section className="editor">
          <h2>Identité de l'éditeur</h2>
          <p><strong>Nom :</strong> Hocini </p>
          <p><strong>Prénom :</strong> Aris</p>
          <p><strong>Statut juridique :</strong> Individuel </p>
        </section>

        <section className="host">
          <h2>Hébergeur</h2>
          <p><strong>Nom :</strong> o2switch</p>
          <p><strong>Adresse :</strong> 29 Rue de l'Eglise, 95170 Deuil-La-Barre ·</p>
        </section>

        <section className="conditions">
          <h2>Conditions d'utilisation</h2>
          <p>Ce site est financé par la publicité.</p>
          <p>Les cookies sont utilisés pour améliorer l'expérience utilisateur et analyser le trafic du site.</p>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Pour toute question ou information, vous pouvez nous contacter à l'adresse suivante :</p>
          <p><strong>Email :</strong>mefinancer@edueco.fr</p>
        </section>

        <section className="responsibility">
          <h2>Responsabilité</h2>
          <p>L'éditeur n'est pas responsable des contenus des publicités affichées sur le site.</p>
        </section>

        <section className="intellectual-property">
          <h2>Propriété intellectuelle</h2>
          <p>Tous les droits d'auteur et droits de propriété intellectuelle relatifs au contenu du site sont réservés.</p>
        </section>

        <section className="external-links">
          <h2>Liens externes</h2>
          <p>Le site peut contenir des liens vers d'autres sites dont l'éditeur n'est pas responsable.</p>
        </section>

        <section className="legal-updates">
          <h2>Mise à jour des mentions légales</h2>
          <p>Les présentes mentions légales peuvent être mises à jour. Nous vous invitons à les consulter régulièrement.</p>
        </section>
      </div>
    </>
  );
};

export default LegalMentions;
