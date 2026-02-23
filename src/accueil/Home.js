import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import '../styles/variables.css';
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faGraduationCap, faBook } from "@fortawesome/free-solid-svg-icons";
import articles from '../data/articles.json';
import useDebounce from '../utils/useDebounce';

const Hero = ({ query, setQuery, debouncedQuery = '', filteredResults }) => (
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
          name="q"
          type="text"
          className="search-input"
          placeholder="Recherchez des conseils, outils, chroniques..."
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
        <div className={'live-search-results ' + (query.length > 0 ? 'visible' : '')}>
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
        <Link to="/chroniques" className="button" aria-label="Chroniques">
          <div className="button-title">Chroniques</div>
          <div className="button-description">
            Articles, analyses et idées (finance et au-delà).
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

Hero.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  debouncedQuery: PropTypes.string,
  filteredResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ArticlesSection = () => (
  <section className="articles-section">
    <h2 className="section-title">Dernieres chroniques</h2>
    <div className="articles-container">
      <article className="article-card">
        <h3>Finance, business et societe</h3>
        <p>Chaque semaine, de nouvelles analyses sur l'education financiere et les sujets qui comptent pour la vie quotidienne.</p>
        <Link to="/chroniques" className="read-more" aria-label="Voir les chroniques">
          Lire la suite
        </Link>
      </article>
      <article className="article-card">
        <h3>Ouvert a tous les sujets</h3>
        <p>Tu n'es plus limite a l'actualite financiere: cette section regroupe aussi tes autres centres d'interet.</p>
        <Link to="/chroniques" className="read-more" aria-label="Acceder au blog WordPress">
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

const Home = () => {
  const [query, setQuery] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  const filteredResults = useMemo(() => {
    const term = debouncedQuery ? debouncedQuery.trim().toLowerCase() : '';
    if (!term) return [];
    return articles.filter(article =>
      (article.title || '').toLowerCase().includes(term) ||
      (article.content || '').toLowerCase().includes(term)
    );
  }, [debouncedQuery]);

  return (
    <div className="home-page">
      <Helmet>
        <title>EduEco - Apprendre, Investir et Gérer vos Finances</title>
        <meta name="description" content="EduEco est votre plateforme d'éducation financière. Découvrez nos guides, articles et outils pour investir, épargner et gérer efficacement votre budget." />
        <meta name="keywords" content="éducation financière, investir, budget, épargne, finance, conseils financiers, outils financiers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/" />
        <meta property="og:title" content="EduEco - Apprendre, Investir et Gérer vos Finances" />
        <meta property="og:description" content="Découvrez nos guides, articles et outils pour optimiser votre éducation financière et prendre les bonnes décisions en matière d'investissement et de budget." />
        <meta property="og:url" content="https://edueco.fr/" />
        <meta property="og:type" content="website" />
      </Helmet>

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
            <li><Link to="/chroniques" onClick={() => setIsNavOpen(false)}>Chroniques</Link></li>
            <li><Link to="/ressources" onClick={() => setIsNavOpen(false)}>Outils</Link></li>
            <li><Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <Hero query={query} setQuery={setQuery} debouncedQuery={debouncedQuery} filteredResults={filteredResults} />
        <ArticlesSection />
        <ToolsSection />
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/guides">Tous nos guides</Link>
            <Link to="/chroniques">Chroniques</Link>
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
