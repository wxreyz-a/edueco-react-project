import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Home.css';
import Image from '../images/clay-banks-GX8KBbVmC6c-unsplash.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// Hook personnalisé pour la gestion du debounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

// Tableau d'articles statique (vérifiez qu'aucun article n'ait une URL vide)
const articles = [
  { id: 1, title: "Investir en 2025", url: "/investir-2025", content: "Stratégies pour investir intelligemment cette année." },
  { id: 2, title: "Optimiser son budget", url: "/guide-budget", content: "Conseils pour maîtriser vos dépenses et épargner efficacement." },
  { id: 3, title: "Réduire ses dettes", url: "", content: "Des solutions pour alléger vos dettes et reprendre le contrôle." },
  { id: 4, title: "En apprendre sur la finance", url: "/apprendre", content: "Découvrez nos conseils pratiques pour investir en 2025" },
  { id: 5, title: "Accueil", url: "/", content: "Page d'accueil du site." },
  { id: 6, title: "À propos", url: "/about", content: "En savoir plus sur nous et notre mission." },
  { id: 7, title: "Articles", url: "/article", content: "Découvrez nos articles informatifs." },
  { id: 8, title: "Contact", url: "/contact", content: "Contactez-nous pour toute demande d'information." },
  { id: 9, title: "Budget", url: "/budget", content: "Guide pour gérer efficacement votre budget." },
  { id: 10, title: "Épargne", url: "/epargne", content: "Conseils pour optimiser votre épargne." },
  { id: 11, title: "Investissement", url: "/investissement", content: "Stratégies et astuces d'investissement." },
  { id: 12, title: "Crédit", url: "/credit", content: "Informations et conseils sur la gestion de crédit." },
  { id: 13, title: "Assurance", url: "/assurance", content: "Tout savoir sur les assurances et la protection financière." },
  { id: 14, title: "Fiscalité", url: "/fiscalite", content: "Astuces pour optimiser votre fiscalité." },
  { id: 15, title: "Immobilier", url: "/immobilier", content: "Guide complet sur l'immobilier." },
  { id: 16, title: "Retraite", url: "/retraite", content: "Préparez votre retraite sereinement." },
  { id: 17, title: "Bourse", url: "/bourse", content: "Actualités et conseils pour investir en bourse." },
  { id: 18, title: "Crypto", url: "/crypto", content: "Infos et stratégies pour la cryptomonnaie." },
  { id: 19, title: "Guides", url: "/guides", content: "Accédez à nos guides pratiques." },
  { id: 20, title: "Guide Budget", url: "/guide-budget", content: "Guide complet pour maîtriser votre budget." },
  { id: 21, title: "Guide Épargne", url: "/guide-epargne", content: "Conseils pour optimiser votre épargne." },
  { id: 22, title: "Guide Investissement", url: "/guide-investissement", content: "Stratégies pour investir intelligemment." },
  { id: 23, title: "Conseils Fiscalité", url: "/conseils_fiscalite", content: "Astuces pour une fiscalité avantageuse." },
  { id: 24, title: "Stratégies Investissement", url: "/strategies-investissement", content: "Stratégies d'investissement éprouvées." },
  { id: 25, title: "Conseils Retraite", url: "/conseils-retraite", content: "Préparez votre retraite avec nos conseils." },
  { id: 26, title: "Actualités", url: "/actualites", content: "Les dernières actualités financières." },
  { id: 27, title: "Ressources", url: "/ressources", content: "Accédez à nos ressources et outils financiers." },
  { id: 28, title: "Article Un", url: "/investir-2025", content: "Premier article de notre section actualités." },
  { id: 29, title: "Article Deux", url: "/article_deux", content: "Deuxième article de notre section actualités." },
  { id: 30, title: "Calculateur Épargne", url: "/calculateur-epargne", content: "Calculez vos économies en quelques clics." },
  { id: 31, title: "Simulateur Investissement", url: "/simulateur-investissement", content: "Simulez vos investissements et anticipez vos gains." },
  { id: 32, title: "Mentions Légales", url: "/mentions-legales", content: "Informations légales et conditions d'utilisation du site." }
];

const Hero = ({ query, setQuery, debouncedQuery, filteredResults }) => (
  <section className="hero">
    <div className="search-container">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="search-input"
          placeholder="Recherchez des conseils, outils..."
          aria-label="Recherche"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button" aria-label="Lancer la recherche">
          Rechercher
        </button>
      </form>
      {debouncedQuery && (
        <div className="live-search-results">
          {filteredResults.length > 0 ? (
            <ul>
              {filteredResults.map(article => (
                <li key={article.id}>
                  <Link to={article.url}>
                    <strong>{article.title}</strong><br />
                    <span>{article.content}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun résultat trouvé.</p>
          )}
        </div>
      )}
    </div>

    <div className="hero-content">
      <p className="intro-text">Votre bien-être financier est notre priorité</p>
      <p className="hero-explanation">
        Bienvenue sur EduEco, votre plateforme dédiée à l’éducation financière. Découvrez des conseils, des outils et des stratégies pour gérer vos finances et investir intelligemment.
      </p>
      <Link to="/apprendre" className="cta-button" aria-label="Accéder au guide gratuit">
        Commencer à Apprendre
      </Link>
      <Link to="/livre" className="cta-button cta-button-pay" aria-label="Accéder à la formation complète">
        L'Histoire de vos finances
      </Link>
    </div>
    <div className="hero-image">
      <img src={Image} alt="Illustration finance - graphique et tableur" loading="lazy" />
    </div>

    <div className="boutons-container">
      <div className="boutonsdaccueil">
        <Link to="/apprendre" className="button" aria-label="En apprendre sur la finance">
          <div className="button-title">En apprendre sur la finance</div>
          <div className="button-description">
            Découvrez nos conseils pratiques pour optimiser votre gestion financière.
          </div>
        </Link>
        <Link to="/guides" className="button" aria-label="Guides et conseils">
          <div className="button-title">Guides et conseils</div>
          <div className="button-description">
            Accédez à des stratégies éprouvées pour maîtriser vos dépenses et investissements.
          </div>
        </Link>
        <Link to="/actualites" className="button" aria-label="L'actualité">
          <div className="button-title">L'actualité</div>
          <div className="button-description">
            Restez informé des dernières tendances et analyses financières.
          </div>
        </Link>
        <Link to="/ressources" className="button" aria-label="Les ressources utiles">
          <div className="button-title">Les ressources utiles</div>
          <div className="button-description">
            Trouvez des outils, guides et références pour mieux gérer votre argent.
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const ArticlesSection = () => (
  <section className="articles-section">
    <h2 className="section-title">Derniers articles</h2>
    <div className="articles-container">
      <article className="article-card">
        <h3>Investir en 2025</h3>
        <p>Stratégies et opportunités pour investir intelligemment cette année.</p>
        <Link to="/investir-2025" className="read-more" aria-label="Lire la suite Investir en 2025">
          Lire la suite
        </Link>
      </article>
      <article className="article-card">
        <h3>Trump et les Tarifs</h3>
        <p>Conseils pratiques pour maîtriser vos dépenses et épargner efficacement.</p>
        <Link to="/trump-tarifs" className="read-more" aria-label="Lire la suite Trump et les Tarifs">
          Lire la suite
        </Link>
      </article>
      <article className="article-card">
        <h3>Réduire ses dettes</h3>
        <p>Des solutions concrètes pour alléger vos dettes et reprendre le contrôle.</p>
        <Link to="/reduire-ses-dettes" className="read-more" aria-label="Lire la suite Réduire ses dettes">
          Lire la suite
        </Link>
      </article>
    </div>
  </section>
);

const ToolsSection = () => (
  <section id="outils" className="tools-section">
    <h2 className="section-title">Outils interactifs</h2>
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
);

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <h2 className="section-title">Témoignages</h2>
    <div className="testimonials-container">
      <blockquote className="testimonial">
        <p>
          "Grâce à EduEco, j'ai retrouvé le contrôle de mon budget et mes investissements ont progressé."
        </p>
        <footer>- Jean D.</footer>
      </blockquote>
      <blockquote className="testimonial">
        <p>
          "Un site indispensable pour optimiser sa gestion financière au quotidien."
        </p>
        <footer>- Marie L.</footer>
      </blockquote>
    </div>
  </section>
);

const FeedbackSection = ({ handleFeedbackSubmit, isSubmitting }) => (
  <section className="feedback-section">
    <h2 className="section-title">Vos retours</h2>
    <p className="section-subtitle">
      Partagez vos impressions et suggestions pour améliorer notre service.
    </p>
    <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
      <textarea
        name="feedback"
        placeholder="Votre message"
        aria-label="Votre message"
        required
        rows="4"
      ></textarea>
      <button type="submit" className="feedback-button" disabled={isSubmitting}>
        {isSubmitting ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  </section>
);

const Home = () => {
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  const filteredResults = useMemo(
    () =>
      articles.filter(article =>
        article.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(debouncedQuery.toLowerCase())
      ),
    [debouncedQuery]
  );

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const message = e.target.elements.feedback.value;
    try {
      const response = await fetch('https://backend-feedback-8sen.onrender.com/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feedback: message })
      });
      const data = await response.json();
      if (data.success) {
        alert("Merci pour votre retour !");
        e.target.reset();
      } else {
        alert("Une erreur est survenue : " + data.error);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-page">
      {/* Insertion des métadonnées essentielles avec react-helmet */}
      <Helmet>
        <title>EduEco - Apprendre, Investir et Gérer vos Finances</title>
        <meta name="description" content="EduEco est votre plateforme d'éducation financière. Découvrez nos guides, articles et outils pour investir, épargner et gérer efficacement votre budget." />
        <meta name="keywords" content="éducation financière, investir, budget, épargne, finance, conseils financiers, outils financiers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/" />
        {/* Balises Open Graph pour le partage sur les réseaux sociaux */}
        <meta property="og:title" content="EduEco - Apprendre, Investir et Gérer vos Finances" />
        <meta property="og:description" content="Découvrez nos guides, articles et outils pour optimiser votre éducation financière et prendre les bonnes décisions en matière d'investissement et de budget." />
        <meta property="og:url" content="https://edueco.fr/" />
        <meta property="og:type" content="website" />
        {/* Balisage JSON-LD pour le référencement enrichi (structured data) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "EduEco",
            "url": "https://edueco.fr/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://edueco.fr/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      </Helmet>

      {/* Header et Navigation */}
      <header className="sticky-header">
        <div className="header-top container">
          <h1 className="slogan">S'ÉDUQUER FINANCIÈREMENT</h1>
          <div className="brand-container">
            <p className="brand">EduEco</p>
          </div>
          <button className="hamburger" aria-label="Menu" onClick={() => setIsNavOpen(!isNavOpen)}>
            ☰
          </button>
        </div>
        <nav className={`main-nav container ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsNavOpen(false)}>Accueil</Link></li>
            <li><Link to="/guides" onClick={() => setIsNavOpen(false)}>Guides</Link></li>
            <li><Link to="/actualites" onClick={() => setIsNavOpen(false)}>Actualités</Link></li>
            <li><Link to="/ressources" onClick={() => setIsNavOpen(false)}>Outils</Link></li>
            <li><Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        {/* Section Hero */}
        <Hero query={query} setQuery={setQuery} debouncedQuery={debouncedQuery} filteredResults={filteredResults} />
        {/* Section Articles */}
        <ArticlesSection />
        {/* Section Outils interactifs */}
        <ToolsSection />
        {/* Section Témoignages */}
        <TestimonialsSection />
        {/* Section Feedback */}
        <FeedbackSection handleFeedbackSubmit={handleFeedbackSubmit} isSubmitting={isSubmitting} />
      </main>

      <footer>
        <div className="footer-container container">
          <div className="footer-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com/edueco.fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Instagram"
              style={{ marginRight: "15px", color: "#E4405F", fontSize: "30px" }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <address>
            <p>&copy; 2025 EduEco. Tous droits réservés.</p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default Home;
