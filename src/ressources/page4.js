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

        <section className="books-section">
          <h2 className="section-title">Recommandations de livres</h2>
          <div className="books-list">
            <article className="recommandation">
              <h3>Rich Dad Poor Dad</h3>
              <p>Robert Kiyosaki compare deux visions de l’argent et enseigne la différence entre actifs et passifs pour adopter un état d’esprit entrepreneurial, essentiel pour bâtir une richesse durable.</p>
            </article>
            <article className="recommandation">
              <h3>The Psychology of Money</h3>
              <p>Morgan Housel explore comment nos émotions et biais cognitifs influencent nos décisions financières, soulignant l'importance du comportement et de la psychologie dans la gestion de l'argent.</p>
            </article>
            <article className="recommandation">
              <h3>The Intelligent Investor</h3>
              <p>Benjamin Graham, mentor de Warren Buffett, pose les bases du value investing et insiste sur la « marge de sécurité », offrant une approche prudente et réfléchie pour investir en bourse.</p>
            </article>
            <article className="recommandation">
              <h3>Your Money or Your Life</h3>
              <p>Vicki Robin propose neuf étapes pour aligner dépenses et valeurs, et atteindre l’indépendance financière en adoptant un mode de vie conscient et responsable.</p>
            </article>
            <article className="recommandation">
              <h3>The Total Money Makeover</h3>
              <p>Dave Ramsey détaille un plan en sept étapes pour éliminer les dettes, constituer un fonds d’urgence et bâtir une sécurité financière solide.</p>
            </article>
            <article className="recommandation">
              <h3>I Will Teach You To Be Rich</h3>
              <p>Ramit Sethi encourage l’automatisation des finances, l’investissement régulier et la gestion intelligente de l’argent sans sacrifier son mode de vie.</p>
            </article>
            <article className="recommandation">
              <h3>The Millionaire Next Door</h3>
              <p>Thomas J. Stanley révèle que la plupart des millionnaires partagent des habitudes frugales, une discipline financière rigoureuse et une gestion prudente des ressources.</p>
            </article>
            <article className="recommandation">
              <h3>Think and Grow Rich</h3>
              <p>Napoleon Hill formule 13 principes basés sur l’étude de personnalités à succès pour développer une mentalité de réussite et atteindre ses objectifs financiers.</p>
            </article>
            <article className="recommandation">
              <h3>Financial Freedom</h3>
              <p>Grant Sabatier partage son plan pour atteindre l’indépendance financière en cinq ans grâce à un fort taux d’épargne, des investissements intelligents et une gestion rigoureuse.</p>
            </article>
            <article className="recommandation">
              <h3>Enough</h3>
              <p>John C. Bogle prône une stratégie d’investissement simple et peu coûteuse basée sur les fonds indiciels, favorisant la patience et la discipline à long terme.</p>
            </article>
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