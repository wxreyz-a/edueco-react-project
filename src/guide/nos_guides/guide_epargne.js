import React from 'react';
import content from './content/guide_epargne_content.json';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { getCanonicalUrl } from '../../utils/canonical';
import '../nos_guides_styles/General_guides.css';

const GuideEpargneArticle = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <html lang="fr" />

        {/* Titre et Meta Description */}
        <title>Guide Pratique pour Booster Votre Épargne – Conseils et Automatisation | EduEco</title>
        <meta
          name="description"
          content="Apprenez comment booster votre épargne grâce à des conseils pratiques et des démarches concrètes pour automatiser vos économies. Un guide complet pour sécuriser votre avenir financier."
        />
        <meta
          name="keywords"
          content="épargne, automatisation, économies, conseils financiers, gestion budgétaire, guide épargne"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={getCanonicalUrl(location.pathname)} />

        {/* Open Graph & Twitter Card */}
        <meta property="og:title" content="Guide Pratique pour Booster Votre Épargne" />
        <meta property="og:description" content="Découvrez des conseils pratiques pour automatiser vos économies et atteindre vos objectifs financiers." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={getCanonicalUrl(location.pathname)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guide Pratique pour Booster Votre Épargne" />
        <meta name="twitter:description" content="Boostez votre épargne avec nos conseils pratiques et démarches pour automatiser vos économies." />

        {/* JSON‑LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Conseils Pratiques : Boostez Votre Épargne",
              "description": "Un guide complet pour automatiser vos économies et atteindre vos objectifs financiers grâce à des conseils pratiques et démarches concrètes.",
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
              "datePublished": "2025-04-16",
              "dateModified": "2025-04-16",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${getCanonicalUrl(location.pathname)}"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="guide-article">
        <header className="article-header">
          <h1>{content.title}</h1>
          <p className="article-subtitle">{content.subtitle}</p>
        </header>
        <article className="article-content">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id} className={section.id}>
              <h2>{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.id === 'introduction' && (
                <img src="/images/epargne-securite.jpg" alt="Sécurité financière par l'épargne" style={{ maxWidth: '100%', marginTop: '1em', marginBottom: '1em' }} />
              )}
              {section.listType === 'ul' && (
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {section.listType === 'ol' && (
                <ol>
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              )}
              {section.id === 'actions-cles' && (
                <p>
                  <em>Exemple :</em> Automatiser un virement mensuel de 100€ vers un compte épargne dédié peut vous aider à constituer un fonds d'urgence en moins d'un an.
                </p>
              )}
              {section.id === 'demarches' && (
                <p>
                  Pour plus de conseils, consultez notre <a href="/guide-budget" title="Guide Budget">Guide Budget</a> et explorez nos <a href="/outils-financiers" title="Outils Financiers">outils financiers</a>.
                </p>
              )}
            </section>
          ))}
        </article>
      </div>
    </>
  );
};

export default GuideEpargneArticle;
