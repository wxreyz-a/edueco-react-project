import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../nos_guides_styles/General_guides.css';

const GuideEpargneArticle = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/src/guide/nos_guides/content/guide_epargne_content.json')
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => {
        console.error('Erreur lors du chargement du contenu:', error);
      });
  }, []);

  if (!content) {
    return <div>Chargement du contenu...</div>;
  }

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
        <link rel="canonical" href="https://edueco.fr/guide-epargne" />

        {/* Open Graph & Twitter Card */}
        <meta property="og:title" content="Guide Pratique pour Booster Votre Épargne" />
        <meta property="og:description" content="Découvrez des conseils pratiques pour automatiser vos économies et atteindre vos objectifs financiers." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://edueco.fr/guide-epargne" />
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
                "@id": "https://edueco.fr/guide-epargne"
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
            </section>
          ))}
        </article>
      </div>
    </>
  );
};

export default GuideEpargneArticle;
