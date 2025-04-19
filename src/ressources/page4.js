import React from 'react';
import { Link } from 'react-router-dom';
import './page4.css';

const RessourcesUtiles = () => {
  return (
    <div className="ressources-page">
      {/* Contenu principal intégré dans le conteneur */}
      <main className="container">
        <h1 className="slogan">Les Ressources Utiles</h1> {/* Titre déplacé ici */}

        {/* Section Outils */}
        <section id="outils" className="tools-section">
          <p className="section-subtitle">
            Simulez vos finances et optimisez votre budget grâce à nos outils.
          </p>
          <div className="tools-container">
            <div className="tool-card">
              <h3>Calculatrice d'épargne</h3>
              <p>Projetez votre épargne sur plusieurs années.</p>
              <Link to="/calculateur-epargne" className="tool-link" aria-label="Utiliser la calculatrice d'épargne">
                Utiliser l'outil
              </Link>
            </div>

            <div className="tool-card">
              <h3>Simulateur d'investissement</h3>
              <p>Estimez vos retours sur investissement potentiels.</p>
              <Link to="/simulateur-investissement" className="tool-link" aria-label="Utiliser le simulateur d'investissement">
                Utiliser l'outil
              </Link>
            </div>
          </div>
        </section>

        {/* Section Livres */}
        <section className="book-recommendations">
          <h2 className="section-title">Recommandations de livres</h2>
          <div className="books-container">
          <div className="book-card">
              <h3>Rich Dad Poor Dad</h3>
              <p>Robert Kiyosaki compare deux visions de l’argent et enseigne la différence entre actifs et passifs pour adopter un état d’esprit entrepreneurial.</p>
            </div>
            <div className="book-card">
              <h3>The Psychology of Money</h3>
              <p>Morgan Housel explore comment nos émotions et biais cognitifs influencent nos décisions financières, soulignant l'importance du comportement.</p>
            </div>
            <div className="book-card">
              <h3>The Intelligent Investor</h3>
              <p>Benjamin Graham, mentor de Warren Buffett, pose les bases du value investing et insiste sur la « marge de sécurité ».</p>
            </div>
            <div className="book-card">
              <h3>Your Money or Your Life</h3>
              <p>Vicki Robin propose neuf étapes pour aligner dépenses et valeurs, et atteindre l’indépendance financière.</p>
            </div>
            <div className="book-card">
              <h3>The Total Money Makeover</h3>
              <p>Dave Ramsey détaille un plan en sept étapes pour éliminer les dettes et constituer un fonds d’urgence.</p>
            </div>
            <div className="book-card">
              <h3>I Will Teach You To Be Rich</h3>
              <p>Ramit Sethi encourage l’automatisation des finances et l’investissement régulier sans sacrifier son mode de vie.</p>
            </div>
            <div className="book-card">
              <h3>The Millionaire Next Door</h3>
              <p>Thomas J. Stanley révèle que la plupart des millionnaires partagent des habitudes frugales et une discipline financière.</p>
            </div>
            <div className="book-card">
              <h3>Think and Grow Rich</h3>
              <p>Napoleon Hill formule 13 principes basés sur l’étude de personnalités à succès pour développer une mentalité de réussite.</p>
            </div>
            <div className="book-card">
              <h3>Financial Freedom</h3>
              <p>Grant Sabatier partage son plan pour atteindre l’indépendance financière en cinq ans grâce à un fort taux d’épargne.</p>
            </div>
            <div className="book-card">
              <h3>Enough</h3>
              <p>John C. Bogle prône une stratégie d’investissement simple et peu coûteuse basée sur les fonds indiciels.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ressources-footer">
        <div className="footer-container container">
          <address>
            <p>&copy; 2025 EduEco. Tous droits réservés.</p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default RessourcesUtiles;