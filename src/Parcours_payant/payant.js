import React, { useState } from 'react';
import './payant.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from '../CheckoutForm';

const stripePromise = loadStripe("pk_test_51R7CElPns5d1SnXfjJanYLYCQRo3uvyTAJxA7OuDrF6OCRI7cUAV26okMI2LbRTUqt0KuID5wLZZsmLXfv5d2BML00ITQgKflE"); // Remplace par ta clé publique Stripe

const FormationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="edu-formation-page">
      <header className="edu-header">
        <div className="edu-header-inner">
          <h1>EduEco</h1>
          <nav className="edu-nav">
            <a href="/">Accueil</a>
            <a href="/a-propos">À propos</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="edu-main-content">
        <section className="edu-hero">
          <div className="edu-hero-inner">
            <h2>Transformez votre avenir financier</h2>
            <p>Rejoignez notre formation complète pour maîtriser vos finances, en toute confiance.</p>
            <button className="edu-cta-button" onClick={handleOpenModal}>
              Accéder à la formation complète
            </button>
          </div>
        </section>

        <section className="edu-paid-journey">
          <h2>Votre Parcours Premium</h2>
          <p>Découvrez nos modules exclusifs conçus pour vous accompagner vers la liberté financière.</p>
          <div className="edu-journey-cards">
            <div className="edu-journey-card">
              <h3>Module 1 : Les Fondamentaux</h3>
              <p>Introduction aux bases de la finance et à la gestion de budget, en phase avec vos objectifs.</p>
            </div>
            <div className="edu-journey-card">
              <h3>Module 2 : Investir Intelligemment</h3>
              <p>Stratégies d'investissement et outils pratiques pour optimiser vos placements.</p>
            </div>
            <div className="edu-journey-card">
              <h3>Module 3 : Optimisation Fiscale</h3>
              <p>Techniques pour réduire vos impôts et maximiser vos économies, tout en respectant la légalité.</p>
            </div>
            <div className="edu-journey-card">
              <h3>Module 4 : Liberté Financière</h3>
              <p>Accompagnement personnalisé pour construire votre indépendance financière.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de confirmation */}
      {isModalOpen && (
        <div 
          className="edu-modal-container" 
          onClick={(e) => {
            if (e.target.className === 'edu-modal-container') handleCloseModal();
          }}
        >
          <div className="edu-modal-content">
            <h3>Accéder à la Formation Complète</h3>
            <p>Vous allez rejoindre notre parcours premium en finance.</p>
            <p className="edu-price"><strong>Prix</strong> : 29,99€ par mois</p>

            <Elements stripe={stripePromise}>
              {/* Le formulaire de paiement sera ici */}
              <CheckoutForm closeModal={handleCloseModal} />
            </Elements>

            <div className="edu-modal-buttons">
              <button className="edu-cta-button edu-cancel" onClick={handleCloseModal}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="edu-footer">
        <p>&copy; 2025 EduEco. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default FormationPage;


