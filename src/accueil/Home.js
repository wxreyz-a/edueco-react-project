import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/variables.css';
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {  faSearch, faGraduationCap, faBook } from "@fortawesome/free-solid-svg-icons";
import articles from '../data/articles.json';
import useDebounce from '../utils/useDebounce';

const Hero = ({ query, setQuery, debouncedQuery, filteredResults }) => (
  <section className="hero">
    <div className="hero-content">
      <p className="intro-text">Votre bien-être financier est notre priorité</p>
      <p className="hero-explanation">
        Bienvenue sur EduEco, votre plateforme dédiée à l'éducation financière. Découvrez des conseils, des outils et des stratégies pour gérer vos finances et investir intelligemment.
      </p>
      <div className="cta-buttons">
        <Link to="/apprendre" className="cta-button" aria-label="Commencer à apprendre">
          <FontAwesomeIcon icon={faGraduationCap} className="cta-icon" />
          <span>Commencer à Apprendre</span>
        </Link>
        <Link to="/livre" className="cta-button-pay" aria-label="Découvrir notre livre">
          <FontAwesomeIcon icon={faBook} className="cta-icon" />
          <span>L'Histoire de vos finances</span>
        </Link>
      </div>
    </div>

    <div className="search-container">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="search-input"
          placeholder="Recherchez des conseils, outils, actualités..."
          aria-label="Recherche"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button" aria-label="Lancer la recherche">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <span>Rechercher</span>
        </button>
      </form>
      {debouncedQuery !== undefined && (
        <div className={
          'live-search-results ' +
          (query.length > 0 ? 'visible' : '')
        }>
          {filteredResults.length > 0 ? (
            <ul>
              {filteredResults.map(article => (
                <li key={article.id}>
                  <Link to={article.url}>
                    <strong>{article.title}</strong>
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
    </div>
  </section>
);

const ToolsSection = () => (
  <section id="outils" className="tools-section">
    <h2 className="section-title">Outils interactifs</h2>
    <p className="section-subtitle">
      Simulez vos finances et optimisez votre budget grâce à nos outils.
    </p>
    <div className="tools-grid">
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

const FeedbackSection = ({ handleFeedbackSubmit, isSubmitting, feedbackMessage }) => (
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
    {feedbackMessage && (
      <div
        className={`feedback-message ${feedbackMessage.type === 'success' ? 'success' : 'error'}`}
        role="alert"
        aria-live="assertive"
      >
        {feedbackMessage.text}
      </div>
    )}
  </section>
);

const Home = () => {
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
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
    setFeedbackMessage(null);
    const message = e.target.elements.feedback.value;
    const apiUrl = process.env.REACT_APP_FEEDBACK_API_URL || 'https://backend-feedback-8sen.onrender.com/api/feedback';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feedback: message })
      });
      const data = await response.json();
      if (data.success) {
        setFeedbackMessage({ type: 'success', text: "Merci pour votre retour !" });
        e.target.reset();
      } else {
        setFeedbackMessage({ type: 'error', text: "Une erreur est survenue : " + data.error });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setFeedbackMessage({ type: 'error', text: "Une erreur est survenue lors de l'envoi. Veuillez réessayer." });
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
            },
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
            }
          }
        `}</script>
      </Helmet>

      {/* Header et Navigation */}
      <header className="sticky-header">
        <div className="header-top">
          <div className="brand-container">
            <p className="brand">EduEco</p>
          </div>
          <h1 className="slogan">S'ÉDUQUER FINANCIÈREMENT</h1>
          <div className="nav-toggle-container">
            <button className="hamburger" aria-label="Menu" onClick={() => setIsNavOpen(!isNavOpen)}>
              ☰
            </button>
          </div>
        </div>
        <nav className={`main-nav ${isNavOpen ? 'open' : ''}`}>
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
        <FeedbackSection handleFeedbackSubmit={handleFeedbackSubmit} isSubmitting={isSubmitting} feedbackMessage={feedbackMessage} />
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/guides">Tous nos guides</Link>
            <Link to="/actualites">Actualités</Link>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com/edueco.fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <address>
            <p>&copy; {new Date().getFullYear()} EduEco. Tous droits réservés.</p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default Home;
