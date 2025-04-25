import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ArticleCard from './ArticleCard';
import articlesData from './articlesData';
import './page3.css';

const Actualites = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories from articlesData, excluding empty or undefined
  const categories = [];
  articlesData.forEach(article => {
    if (article.category && !categories.includes(article.category)) {
      categories.push(article.category);
    }
  });

  // Filter articles by selected category; if none selected, show all
  const filteredArticles = selectedCategory === ''
    ? articlesData
    : articlesData.filter(article => article.category === selectedCategory);

  // Featured article is the first in filtered list
  const [featuredArticle, ...otherArticles] = filteredArticles;

  return (
    <div className="actualites-page">
      <Helmet>
        <title>Actualités - Restez informés | EduEco</title>
        <meta
          name="description"
          content="Suivez les dernières actualités financières et découvrez des articles sur l'investissement, l'optimisation du budget, et bien plus encore avec EduEco."
        />
        <meta
          name="keywords"
          content="actualités, finance, investissement, budget, économie, EduEco"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/actualites" />
      </Helmet>

      <header className="actualites-header">
        <h1 className="page-title-actualites">Actualités</h1>
        <nav className="actualites-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main className="actualites-container">
        {featuredArticle && (
          <section className="featured-article-section featured-highlight">
            <article className="featured-article">
              <div className="featured-badge">À la une</div>
              <h2 className="featured-title">{featuredArticle.title}</h2>
              <p className="featured-date">{featuredArticle.date}</p>
              <p className="featured-summary">{featuredArticle.summary}</p>
              <a href={featuredArticle.link} className="featured-read-more" aria-label={`Lire l'article ${featuredArticle.title}`}>
                Lire la suite
              </a>
            </article>
          </section>
        )}

        <section className="articles-list-section">
          {otherArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </section>
      </main>

      <footer className="actualites-footer">
        <address>
          <p>&copy; 2025 EduEco. Tous droits réservés.</p>
        </address>
      </footer>
    </div>
  );
};

export default Actualites;
