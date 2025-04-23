import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './page2.css';

const GuidesConseils = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Tous les guides' },
    { id: 'budget', label: 'Budget' },
    { id: 'epargne', label: 'Épargne' },
    { id: 'investissement', label: 'Investissement' },
    { id: 'fiscalite', label: 'Fiscalité' },
    { id: 'retraite', label: 'Retraite' }
  ];

  const guides = [
    {
      id: 'budget',
      title: 'Guide Budget',
      description: 'Apprenez à établir un budget solide et réaliste pour contrôler vos dépenses.',
      category: 'budget',
      icon: '💰',
      link: '/guide-budget'
    },
    {
      id: 'epargne',
      title: 'Guide Épargne',
      description: 'Découvrez des techniques efficaces pour optimiser votre épargne et sécuriser votre avenir.',
      category: 'epargne',
      icon: '🏦',
      link: '/guide-epargne'
    },
    {
      id: 'investissement',
      title: 'Guide Investissement',
      description: 'Explorez les fondamentaux de l\'investissement pour faire fructifier votre argent intelligemment.',
      category: 'investissement',
      icon: '📈',
      link: '/guide-investissement'
    },
    {
      id: 'fiscalite',
      title: 'Conseils Fiscalité',
      description: 'Optimisez votre situation fiscale et réduisez vos impôts grâce à nos conseils avisés.',
      category: 'fiscalite',
      icon: '📋',
      link: '/conseils-fiscalite'
    },
    {
      id: 'strategies',
      title: 'Stratégies d\'Investissement',
      description: 'Découvrez des stratégies avancées pour diversifier votre portefeuille et maximiser vos retours.',
      category: 'investissement',
      icon: '🎯',
      link: '/strategies-investissement'
    },
    {
      id: 'retraite',
      title: 'Conseils Retraite',
      description: 'Préparez votre avenir en adoptant les meilleures pratiques pour une retraite sereine.',
      category: 'retraite',
      icon: '👴',
      link: '/conseils-retraite'
    }
  ];

  const filteredGuides = selectedCategory === 'tous' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

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
      <header className="page2-header">
          <h1 className="page2-slogan">Guides et Conseils</h1>
      </header>

      {/* Contenu principal */}
      <main className="page2-container">
        <section className="page2-categories">
          <div className="page2-categories-container">
            {categories.map(category => (
              <button
                key={category.id}
                className={`page2-category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Section Guides Cards */}
        <section className="page2-cards">
          {filteredGuides.map(guide => (
            <div key={guide.id} className="page2-card">
              <div className="page2-card-icon">{guide.icon}</div>
              <h3 className="page2-card-title">{guide.title}</h3>
              <p className="page2-card-text">{guide.description}</p>
              <Link to={guide.link} className="page2-card-link" aria-label={`Lire le guide ${guide.title}`}>
                Lire 
              </Link>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="page2-footer page2-footer-container">
          <address>
            <p>&copy; 2025 EduEco. Tous droits réservés.</p>
          </address>
      </footer>
    </div>
  );
};

export default GuidesConseils;

