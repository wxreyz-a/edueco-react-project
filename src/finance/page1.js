import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './page1.css';

const Finance = () => {
  return (
    <div>
      <Helmet>
        {/* Métadonnées essentielles */}
        <title>Parcours d'apprentissage - Introduction à la Finance | Mes Finances</title>
        <meta 
          name="description" 
          content="Découvrez notre parcours complet pour maîtriser la finance : budget, épargne, investissement, crédit, assurance, fiscalité, immobilier, retraite, bourse et crypto-monnaies." 
        />
        <meta 
          name="keywords" 
          content="finance, apprentissage, budget, épargne, investissement, crédit, assurance, fiscalité, immobilier, retraite, bourse, crypto-monnaies" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/apprendre" />
        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:title" content="Parcours d'apprentissage : Introduction à la Finance" />
        <meta 
          property="og:description" 
          content="Parcourez notre formation complète pour apprendre les fondamentaux de la finance et maîtriser vos finances personnelles." 
        />
        <meta property="og:url" content="https://edueco.fr/apprendre" />
        <meta property="og:type" content="website" />
        {/* Balisage JSON-LD pour améliorer le référencement enrichi */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Parcours d'apprentissage : Introduction à la Finance",
            "url": "https://edueco.fr/apprendre",
            "description": "Découvrez notre parcours complet pour maîtriser la finance : budget, épargne, investissement, crédit, assurance, fiscalité, immobilier, retraite, bourse et crypto-monnaies."
          }
        `}</script>
      </Helmet>

      {/* Header */}
      <header>
        <div className="header-wrapper container">
          <h1 className="slogan">Parcours d'apprentissage : Introduction à la Finance</h1>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container">
        <section className="learning-path">
          <p className="intro-text">
            Découvrez notre parcours complet pour maîtriser toutes les facettes de la finance.
          </p>
          <div className="learning-buttons">
            <Link to="/faire-un-budget" id="premierbouton" className="button" aria-label="Accéder au module Budget">
              <div className="button-title">Budget</div>
              <div className="button-description">
                Apprenez à établir et suivre un budget efficace pour mieux gérer vos revenus.
              </div>
            </Link>
            <Link to="/epargne" className="button" aria-label="Accéder au module Épargne">
              <div className="button-title">Épargne</div>
              <div className="button-description">
                Découvrez des stratégies pour économiser intelligemment au quotidien.
              </div>
            </Link>
            <Link to="/investissement" className="button" aria-label="Accéder au module Investissement">
              <div className="button-title">Investissement</div>
              <div className="button-description">
                Explorez les différents types d'investissements et apprenez à diversifier votre portefeuille.
              </div>
            </Link>
            <Link to="/credit" className="button" aria-label="Accéder au module Crédit">
              <div className="button-title">Crédit</div>
              <div className="button-description">
                Comprenez le fonctionnement du crédit et comment l'utiliser à votre avantage.
              </div>
            </Link>
            <Link to="/assurance" className="button" aria-label="Accéder au module Assurance">
              <div className="button-title">Assurance</div>
              <div className="button-description">
                Informez-vous sur les assurances indispensables pour protéger votre patrimoine.
              </div>
            </Link>
            <Link to="/fiscalite" className="button" aria-label="Accéder au module Fiscalité">
              <div className="button-title">Fiscalité</div>
              <div className="button-description">
                Maîtrisez les règles fiscales pour optimiser vos impôts et vos finances.
              </div>
            </Link>
            <Link to="/immobilier" className="button" aria-label="Accéder au module Immobilier">
              <div className="button-title">Immobilier</div>
              <div className="button-description">
                Apprenez les clés pour investir dans l'immobilier et générer des revenus passifs.
              </div>
            </Link>
            <Link to="/retraite" className="button" aria-label="Accéder au module Retraite">
              <div className="button-title">Retraite</div>
              <div className="button-description">
                Préparez votre avenir grâce à des stratégies de planification de retraite adaptées.
              </div>
            </Link>
            <Link to="/bourse" className="button" aria-label="Accéder au module Bourse">
              <div className="button-title">Bourse</div>
              <div className="button-description">
                Découvrez comment investir en bourse et gérer les risques liés aux marchés financiers.
              </div>
            </Link>
            <Link to="/crypto" className="button" aria-label="Accéder au module Crypto-monnaies">
              <div className="button-title">Crypto</div>
              <div className="button-description">
                Comprenez le fonctionnement des crypto-monnaies et leurs enjeux dans l'économie moderne.
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-container container">
          <address>
            <p>&copy; 2025 EduEco. Tous droits réservés.</p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default Finance;
