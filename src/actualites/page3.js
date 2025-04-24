import React from 'react';
import { Helmet } from 'react-helmet';
import ArticleCard from './ArticleCard';
import articlesData from './articlesData';
import './page3.css';

const Actualites = () => {
  return (
    <div className="actualites-page">
      <Helmet>
        {/* Métadonnées essentielles */}
        <title>Actualités - Restez informés</title>
        <meta 
          name="description" 
          content="Suivez les dernières actualités financières et découvrez des articles sur l'investissement, l'optimisation du budget, et bien plus encore avec Mes Finances." 
        />
        <meta 
          name="keywords" 
          content="actualités, finance, investissement, budget, économie, EduEco" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/actualites" />
        {/* Open Graph pour les réseaux sociaux */}
        <meta property="og:title" content="Actualités - Restez informés | EduEco" />
        <meta property="og:description" content="Découvrez les dernières actualités financières, des conseils et stratégies pour maîtriser votre budget et investir intelligemment." />
        <meta property="og:url" content="https://edueco.fr/actualites" />
        <meta property="og:type" content="website" />
        {/* Balisage JSON-LD */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "Actualités - Restez informés",
            "datePublished": "2025-01-01T08:00:00+00:00",
            "image": [
              "https://edueco.fr/images/aidan-hancock-dA0SA67EgOQ-unsplash.jpg",
              "https://edueco.fr/images/darren-halstead-B_vXFdzvw3g-unsplash.jpg"
            ],
            "author": {
              "@type": "Organization",
              "name": "EduEco"
            },
            "publisher": {
              "@type": "Organization",
              "name": "EduEco",
              "logo": {
                "@type": "ImageObject",
                "url": "https://edueco.fr/images/logo.png"
              }
            },
            "description": "Suivez les dernières actualités financières et découvrez des conseils pour maîtriser votre budget et investir intelligemment."
          }
        `}</script>
      </Helmet>

      {/* Header */}
      <header className="actualites-header">
        <div className="header-wrapper-actualites container">
          <h1 className="slogan-actualites">Restez informés</h1>
          <p className="brand-actualites">EduEco</p>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container-actualites">
        <section className="articles-section-actualites">
          <div className="articles-container-actualites">
            {articlesData.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="actualites-footer">
        <div className="footer-container container">
          <address>
            <p>&copy; 2025 EduEco. Tous droits réservés.</p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default Actualites;
