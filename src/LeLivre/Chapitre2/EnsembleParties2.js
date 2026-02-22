import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./EnsembleParties2.css"; // Import du CSS spécifique pour le chapitre 2

const ChapterTwo = () => {
  const sections = [
    { title: "Introduction au chapitre", path: "/chapitre-deux-partie-une" },
    { title: "La naissance du capitalisme", path: "/chapitre-deux-partie-deux" },
    { title: "Les premières grandes puissances économiques", path: "/chapitre-deux-partie-trois" },
    { title: "Mondialisation et économie globale", path: "/chapitre-deux-partie-quatre" },
  ];

  // JSON‑LD pour les données structurées
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Chapitre 2 : L'émergence du capitalisme et de la mondialisation",
    "description": "Explorez l'émergence du capitalisme et de la mondialisation, des concepts qui ont transformé le monde économique moderne, influençant ainsi notre vie financière quotidienne.",
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
        <title>Chapitre 2 : L'émergence du capitalisme et de la mondialisation | EduEco</title>
        <meta
          name="description"
          content="Explorez l'émergence du capitalisme et de la mondialisation, des concepts qui ont transformé le monde économique moderne, influençant ainsi notre vie financière quotidienne."
        />
        <meta
          name="keywords"
          content="capitalisme, mondialisation, économie, chapitre 2, EduEco, naissance du capitalisme, grandes puissances économiques"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/parties-chapitre-deux" />

        {/* Open Graph pour le partage social */}
        <meta property="og:title" content="Chapitre 2 : L'émergence du capitalisme et de la mondialisation" />
        <meta
          property="og:description"
          content="Découvrez l'impact du capitalisme et de la mondialisation sur l'économie moderne et comment ces processus façonnent notre quotidien financier."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://edueco.fr/parties-chapitre-deux" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chapitre 2 : L'émergence du capitalisme et de la mondialisation" />
        <meta
          name="twitter:description"
          content="Un aperçu du capitalisme et de la mondialisation, deux forces majeures qui ont transformé l'économie mondiale et influencent notre vie financière."
        />

        {/* JSON‑LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="chapter-book">
        <h1 className="chapter-title">Chapitre 2 : L'émergence du capitalisme et de la mondialisation</h1>
        <p className="chapter-intro">
          Découvrez comment le capitalisme et la mondialisation ont façonné le monde économique moderne, et comment ces
          concepts influencent directement votre vie financière quotidienne.
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

export default ChapterTwo;

