import React from 'react';
import { Link } from 'react-router-dom';
import './page4.css';

const RessourcesUtiles = () => {
  return (
    <div className="ressources-page">
      <header className="page-header">
        <h1 className="page-title">Les Ressources Utiles</h1>
      </header>

      <main className="page-container">
        <section className="tools-section">
          <h2 className="section-title-ressources">Outils</h2>
          <div className="tools-list">
            <div className="tool-card">
              <h3>Calculatrice d'épargne</h3>
              <p>Projetez votre épargne sur plusieurs années en tenant compte des taux d'intérêt, des versements réguliers et des objectifs financiers personnalisés pour mieux planifier votre avenir.</p>
              <Link to="/calculateur-epargne" className="tool-button" aria-label="Utiliser la calculatrice d'épargne">
                Utiliser l'outil
              </Link>
            </div>
            <div className="tool-card">
              <h3>Simulateur d'investissement</h3>
              <p>Estimez vos retours sur investissement potentiels en analysant différents scénarios de marché, profils de risque et durées d'investissement pour optimiser vos décisions financières.</p>
              <Link to="/simulateur-investissement" className="tool-button" aria-label="Utiliser le simulateur d'investissement">
                Utiliser l'outil
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <address>
          <p>© 2025 EduEco. Tous droits réservés.</p>
        </address>
      </footer>
    </div>
  );
};

export default RessourcesUtiles;