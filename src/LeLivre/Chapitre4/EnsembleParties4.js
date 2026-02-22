import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./EnsembleParties4.css"; // Import du CSS spécifique

const ChapterFour = () => {
  const sections = [
    { title: "L'argent et les émotions", path: "/chapitre-quatre-partie-une" },
    { title: "Les biais cognitifs en finance", path: "/chapitre-quatre-partie-deux" },
    { title: "Les habitudes financières saines", path: "/chapitre-quatre-partie-trois" },
    { title: "La richesse et le bonheur", path: "/chapitre-quatre-partie-quatre" },
  ];

  // JSON‑LD pour les données structurées
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Chapitre 4 : La Psychologie de l'Argent",
    "description": "Découvrez comment les émotions, les biais cognitifs et les habitudes influencent notre gestion de l'argent. Ce chapitre explore la psychologie de l'argent et son impact sur nos décisions financières.",
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
    "datePublished": "2025-04-16"
  };

  return (
    <div className="chapter-page-container">
      <Helmet>
        {/* Déclaration de la langue */}
        <html lang="fr" />
        
        {/* Titre & Meta Description */}
        <title>Chapitre 4 : La Psychologie de l'Argent | EduEco</title>
        <meta
          name="description"
          content="Découvrez comment les émotions, les biais cognitifs et les habitudes influencent notre gestion de l'argent. Ce chapitre explore la psychologie de l'argent et son impact sur nos décisions financières."
        />
        <meta
          name="keywords"
          content="psychologie de l'argent, émotions et argent, biais cognitifs, gestion de l'argent, finance comportementale, habitudes financières, EduEco"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/parties-chapitre-quatre" />

        {/* Open Graph pour le partage social */}
        <meta property="og:title" content="Chapitre 4 : La Psychologie de l'Argent" />
        <meta
          property="og:description"
          content="Plongez dans la psychologie de l'argent et comprenez comment les émotions et les biais cognitifs influencent nos décisions financières."
        />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chapitre 4 : La Psychologie de l'Argent" />
        <meta
          name="twitter:description"
          content="Découvrez comment les biais cognitifs, les émotions et les habitudes influencent notre gestion de l'argent."
        />

        {/* JSON‑LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="chapter-book">
        <h1 className="chapter-title">Chapitre 4 : La Psychologie de l'Argent</h1>
        <p className="chapter-intro">
          L'argent ne se limite pas à des chiffres sur un compte bancaire. Nos décisions financières sont guidées par nos émotions, nos croyances et notre éducation. Ce chapitre explore la manière dont notre psychologie influence notre gestion de l'argent.
        </p>

        <div className="chapter-sections">
          {sections.map((section) => (
            <Link key={section.path} to={section.path} className="chapter-link">
              <div className="chapter-card">
                <h2>{section.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterFour;



