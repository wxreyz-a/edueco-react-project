import React from 'react';
import { Link } from 'react-router-dom';
import './Articles/Articles.css';

const ArticleCard = ({ article }) => {
  return (
    <article className="article-card-actualites">
      <div className="article-content-actualites">
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <Link to={article.link} className="read-more-actualites" aria-label={`Lire l'article ${article.title}`}>
          Lire la suite
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
