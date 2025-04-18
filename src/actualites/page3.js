import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ImageUn from '../images/aidan-hancock-dA0SA67EgOQ-unsplash.jpg';
import ImageDeux from '../images/darren-halstead-B_vXFdzvw3g-unsplash.jpg';
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
            {/* Article 1 */}
            <article className="article-card-actualites">
              <div className="article-image-actualites">
                <img src={ImageUn} alt="Stratégies pour investir en 2025" loading="lazy" />
              </div>
              <div className="article-content-actualites">
                <h3>Investir en 2025</h3> 
                <p>
                  Découvrez les stratégies clés pour investir intelligemment cette année et saisir les opportunités du marché.
                </p>
                <Link to="/investir-2025" className="read-more-actualites" aria-label="Lire l'article Investir en 2025">
                  Lire la suite
                </Link>
              </div>
            </article>

            {/* Article 2 */}
            <article className="article-card-actualites">
              <div className="article-image-actualites">
                <img src={ImageDeux} alt="Optimiser son budget : Tarifs Douaniers" loading="lazy" />
              </div>
              <div className="article-content-actualites">
                <h3>Tarifs Douaniers : Une Clé de bras de la part de Donald Trump</h3>
                <p>
                  Des conseils pratiques pour maîtriser vos dépenses et améliorer votre gestion financière.
                </p>
                <Link to="/trump-tarifs" className="read-more-actualites" aria-label="Lire l'article Optimiser son budget">
                  Lire la suite
                </Link>
              </div>
            </article>
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
