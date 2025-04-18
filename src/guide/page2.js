import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './page2.css';

const GuidesConseils = () => {
  return (
    <div className="page2-guides-page">
      <Helmet>
        {/* Métadonnées essentielles pour le SEO */}
        <title>Guides et Conseils – Optimisez vos Finances | EduEco</title>
        <meta 
          name="description" 
          content="Explorez nos guides et conseils pour apprendre à optimiser vos finances : budget, épargne, investissement, fiscalité, retraite et plus encore." 
        />
        <meta 
          name="keywords" 
          content="guides, conseils, finances, budget, épargne, investissement, fiscalité, retraite, EduEco" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/guides" />
        {/* Open Graph pour le partage sur les réseaux sociaux */}
        <meta property="og:title" content="Guides et Conseils – Optimisez vos Finances | EduEco" />
        <meta 
          property="og:description" 
          content="Parcourez nos guides et découvrez des conseils pratiques pour maîtriser votre budget, économiser et investir intelligemment." 
        />
        <meta property="og:url" content="https://edueco.fr/guides" />
        <meta property="og:type" content="website" />
        {/* Si disponible, ajouter une image de type Open Graph */}
        <meta property="og:image" content="https://edueco.fr/images/guides-og.jpg" />
        {/* JSON-LD pour un balisage structuré (structured data) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Guides et Conseils – Optimisez vos Finances",
            "url": "https://edueco.fr/guides-conseils",
            "description": "Explorez nos guides et conseils pour apprendre à optimiser vos finances, gérer votre budget, épargner, investir et planifier votre avenir."
          }
        `}</script>
      </Helmet>

      {/* Header */}
      <header className="page2-guides-header">
        <div className="page2-guides-header-wrapper page2-container">
          <h1 className="page2-guides-slogan">Guides et Conseils</h1>
          <p className="page2-guides-brand">EduEco</p>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="page2-container">
        {/* Section Introduction */}
        <section className="page2-guides-intro">
          <h2 className="page2-intro-title">Explorez nos guides pour optimiser vos finances</h2>
          <p className="page2-intro-text">
            Découvrez une sélection de conseils pratiques et de stratégies éprouvées pour améliorer votre gestion financière. Parcourez nos guides pour apprendre à économiser, investir et planifier votre avenir.
          </p>
        </section>

        {/* Section Guides Cards */}
        <section className="page2-guides-cards">
          <div className="page2-guide-card">
            <h3 className="page2-guide-card-title">Guide Budget</h3>
            <p className="page2-guide-card-text">
              Apprenez à établir un budget solide et réaliste pour contrôler vos dépenses.
            </p>
            <Link to="/guide-budget" className="page2-guide-card-link" aria-label="Lire le guide Budget">
              Lire la suite
            </Link>
          </div>
          <div className="page2-guide-card">
            <h3 className="page2-guide-card-title">Guide Épargne</h3>
            <p className="page2-guide-card-text">
              Découvrez des techniques efficaces pour optimiser votre épargne et sécuriser votre avenir.
            </p>
            <Link to="/guide-epargne" className="page2-guide-card-link" aria-label="Lire le guide Épargne">
              Lire la suite
            </Link>
          </div>
          <div className="page2-guide-card">
            <h3 className="page2-guide-card-title">Guide Investissement</h3>
            <p className="page2-guide-card-text">
              Explorez les fondamentaux de l'investissement pour faire fructifier votre argent intelligemment.
            </p>
            <Link to="/guide-investissement" className="page2-guide-card-link" aria-label="Lire le guide Investissement">
              Lire la suite
            </Link>
          </div>
          <div className="page2-guide-card">
            <h3 className="page2-guide-card-title">Conseils Fiscalité</h3>
            <p className="page2-guide-card-text">
              Optimisez votre situation fiscale et réduisez vos impôts grâce à nos conseils avisés.
            </p>
            <Link to="/conseils-fiscalite" className="page2-guide-card-link" aria-label="Lire le guide Fiscalité">
              Lire la suite
            </Link>
          </div>
          <div className="page2-guide-card">
            <h3 className="page2-guide-card-title">Stratégies d'Investissement</h3>
            <p className="page2-guide-card-text">
              Découvrez des stratégies avancées pour diversifier votre portefeuille et maximiser vos retours.
            </p>
            <Link to="/strategies-investissement" className="page2-guide-card-link" aria-label="Lire le guide Stratégies d'Investissement">
              Lire la suite
            </Link>
          </div>
          <div className="page2-guide-card">
            <h3 className="page2-guide-card-title">Conseils Retraite</h3>
            <p className="page2-guide-card-text">
              Préparez votre avenir en adoptant les meilleures pratiques pour une retraite sereine.
            </p>
            <Link to="/conseils-retraite" className="page2-guide-card-link" aria-label="Lire le guide Retraite">
              Lire la suite
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="page2-guides-footer">
        <div className="page2-footer-container page2-container">
          <address>
            <p>&copy; 2025 EduEco. Tous droits réservés.</p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default GuidesConseils;

