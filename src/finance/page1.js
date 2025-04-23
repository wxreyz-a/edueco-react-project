import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './page1.css';

const Finance = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Tous les modules' },
    { id: 'budget', label: 'Budget' },
    { id: 'epargne', label: 'Épargne' },
    { id: 'investissement', label: 'Investissement' },
    { id: 'credit', label: 'Crédit' },
    { id: 'assurance', label: 'Assurance' },
    { id: 'fiscalite', label: 'Fiscalité' },
    { id: 'immobilier', label: 'Immobilier' },
    { id: 'retraite', label: 'Retraite' },
    { id: 'bourse', label: 'Bourse' },
    { id: 'crypto', label: 'Crypto' }
  ];

  const modules = [
    {
      id: 'budget',
      title: 'Budget',
      description: 'Apprenez à établir et suivre un budget efficace pour mieux gérer vos revenus.',
      category: 'budget',
      link: '/faire-un-budget'
    },
    {
      id: 'epargne',
      title: 'Épargne',
      description: 'Découvrez des stratégies pour économiser intelligemment au quotidien.',
      category: 'epargne',
      link: '/epargne'
    },
    {
      id: 'investissement',
      title: 'Investissement',
      description: 'Explorez les différents types d\'investissements et apprenez à diversifier votre portefeuille.',
      category: 'investissement',
      link: '/investissement'
    },
    {
      id: 'credit',
      title: 'Crédit',
      description: 'Comprenez le fonctionnement du crédit et comment l\'utiliser à votre avantage.',
      category: 'credit',
      link: '/credit'
    },
    {
      id: 'assurance',
      title: 'Assurance',
      description: 'Informez-vous sur les assurances indispensables pour protéger votre patrimoine.',
      category: 'assurance',
      link: '/assurance'
    },
    {
      id: 'fiscalite',
      title: 'Fiscalité',
      description: 'Maîtrisez les règles fiscales pour optimiser vos impôts et vos finances.',
      category: 'fiscalite',
      link: '/fiscalite'
    },
    {
      id: 'immobilier',
      title: 'Immobilier',
      description: 'Apprenez les clés pour investir dans l\'immobilier et générer des revenus passifs.',
      category: 'immobilier',
      link: '/immobilier'
    },
    {
      id: 'retraite',
      title: 'Retraite',
      description: 'Préparez votre avenir grâce à des stratégies de planification de retraite adaptées.',
      category: 'retraite',
      link: '/retraite'
    },
    {
      id: 'bourse',
      title: 'Bourse',
      description: 'Découvrez comment investir en bourse et gérer les risques liés aux marchés financiers.',
      category: 'bourse',
      link: '/bourse'
    },
    {
      id: 'crypto',
      title: 'Crypto',
      description: 'Comprenez le fonctionnement des crypto-monnaies et leurs enjeux dans l\'économie moderne.',
      category: 'crypto',
      link: '/crypto'
    }
  ];

  const filteredModules = selectedCategory === 'tous' 
    ? modules 
    : modules.filter(module => module.category === selectedCategory);

  return (
    <div className="page1-page">
      <Helmet>
        <title>Parcours d'apprentissage - Introduction à la Finance | EduEco</title>
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
      </Helmet>

      <header className="page1-header">
        <h1 className="page1-slogan">Parcours d'apprentissage : Introduction à la Finance</h1>
      </header>

      <main className="page1-container">
        <section className="page1-categories">
          <div className="page1-categories-container">
            {categories.map(category => (
              <button
                key={category.id}
                className={`page1-category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        <section className="page1-cards">
          {filteredModules.map(module => (
            <div key={module.id} className="page1-card">
              <h3 className="page1-card-title">{module.title}</h3>
              <p className="page1-card-text">{module.description}</p>
              <Link to={module.link} className="page1-card-link" aria-label={`Lire le module ${module.title}`}>
                Lire
              </Link>
            </div>
          ))}
        </section>
      </main>

      <footer className="page1-footer page1-container">
        <address>
          <p>&copy; 2025 EduEco. Tous droits réservés.</p>
        </address>
      </footer>
    </div>
  );
};

export default Finance;
