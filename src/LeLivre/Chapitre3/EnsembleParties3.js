import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./EnsembleParties3.css"; // Import du CSS spécifique

const ChapterThree = () => {
  const sections = [
    { title: "Introduction à l'investissement", path: "/chapitre-trois-partie-une" },
    { title: "Le fonctionnement de la bourse", path: "/chapitre-trois-partie-deux" },
    { title: "Les cryptomonnaies : révolution ou illusion ?", path: "/chapitre-trois-partie-trois" },
    { title: "Stratégies d'investissement pour le citoyen lambda", path: "/chapitre-trois-partie-quatre" },
  ];

  // JSON‑LD pour les données structurées
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Chapitre 3 : Comprendre l'Investissement, la Bourse et les Cryptomonnaies",
    "description": "Découvrez comment fonctionne l'investissement, pourquoi la bourse est essentielle dans l'économie moderne et comment les cryptomonnaies pourraient transformer l'avenir financier.",
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
        <title>Chapitre 3 : Comprendre l'Investissement, la Bourse et les Cryptomonnaies | EduEco</title>
        <meta
          name="description"
          content="Découvrez comment fonctionne l'investissement, pourquoi la bourse est essentielle dans l'économie moderne et comment les cryptomonnaies pourraient transformer l'avenir financier."
        />
        <meta
          name="keywords"
          content="investissement, bourse, cryptomonnaies, économie, finance, EduEco, chapitre 3"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/parties-chapitre-trois" />

        {/* Open Graph pour le partage social */}
        <meta property="og:title" content="Chapitre 3 : Comprendre l'Investissement, la Bourse et les Cryptomonnaies" />
        <meta
          property="og:description"
          content="Découvrez en détail le fonctionnement de l'investissement, l'importance de la bourse, et les impacts potentiels des cryptomonnaies sur la finance mondiale."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://edueco.fr/parties-chapitre-trois" />
        <meta property="og:image" content="https://edueco.fr/images/chapitre3-og.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chapitre 3 : Comprendre l'Investissement, la Bourse et les Cryptomonnaies" />
        <meta
          name="twitter:description"
          content="Plongez dans l'univers de l'investissement, comprenez l'importance de la bourse et découvrez le potentiel des cryptomonnaies."
        />
        <meta name="twitter:image" content="https://edueco.fr/images/chapitre3-og.jpg" />

        {/* JSON‑LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="chapter-book">
        <h1 className="chapter-title">
          Chapitre 3 : Comprendre l'Investissement, la Bourse et les Cryptomonnaies
        </h1>
        <p className="chapter-intro">
          Découvrez comment fonctionne l'investissement, le rôle crucial de la bourse dans l'économie et comment les cryptomonnaies pourraient révolutionner le paysage financier.
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

export default ChapterThree;

