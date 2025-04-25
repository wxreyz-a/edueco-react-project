import React from 'react';
import { Link } from 'react-router-dom';
import './Articles/Articles.css';

const ArticleCard = ({ article }) => {
  return (
    <article className="article-list-item">
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <Link to={article.link} className="read-more-link" aria-label={`Lire l'article ${article.title}`}>
        Lire la suite
      </Link>
    </article>
  );
};

export default ArticleCard;
