import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./EnsembleParties1.css"; // Import du CSS spécifique

const ChapterOneParts = () => {
  const sections = [
    { title: "Introduction au chapitre", path: "/chapitre-un-partie-une" },
    { title: "Les premières formes d'échange", path: "/chapitre-un-partie-deux" },
    { title: "L'apparition de la monnaie", path: "/chapitre-un-partie-trois" },
    { title: "Les banques et leur rôle", path: "/chapitre-un-partie-quatre" },
  ];

  // JSON‑LD pour un fil d’Ariane (BreadcrumbList)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://edueco.fr/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Chapitre 1 : Une brève histoire de l'argent",
        "item": "https://edueco.fr/parties-chapitre-un"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="fr" />
        {/* Titre et meta description pour améliorer l'indexation */}
        <title>Chapitre 1 : Une brève histoire de l'argent | EduEco</title>
        <meta
          name="description"
          content="Explorez l'évolution de l'argent à travers les âges, du troc à la monnaie moderne. Découvrez le rôle des échanges, de la monnaie et des banques dans cette histoire passionnante."
        />
        <meta
          name="keywords"
          content="histoire de l'argent, troc, monnaie, banques, échanges, Chapitre 1, EduEco"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/parties-chapitre-un" />

        {/* Open Graph pour le partage sur les réseaux sociaux */}
        <meta property="og:title" content="Chapitre 1 : Une brève histoire de l'argent | EduEco" />
        <meta
          property="og:description"
          content="Découvrez comment l'argent a évolué, du troc à la monnaie moderne, et le rôle fondamental joué par les banques dans cette transformation."
        />
        <meta property="og:url" content="https://edueco.fr/parties-chapitre-un" />
        <meta property="og:type" content="article" />
        {/* Note : ajouter une image à l'URL si possible pour renforcer l'impact visuel */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chapitre 1 : Une brève histoire de l'argent | EduEco" />
        <meta name="twitter:description" content="Plongez dans l'histoire de l'argent, du troc aux banques modernes, et comprenez les premières formes d'échange." />

        {/* JSON‑LD pour le fil d’Ariane */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="chapter-page-container">
        <div className="chapter-book">
          <h1 className="chapter-title">Chapitre 1 : Une brève histoire de l'argent</h1>
          <p className="chapter-intro">
            Découvrez comment l'argent a évolué à travers les âges, depuis le troc jusqu'à la monnaie moderne.
          </p>

          <div className="chapter-sections">
            {sections.map((section, index) => (
              <Link key={index} to={section.path} className="chapter-link">
                <div className="chapter-card">
                  <h2>{section.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterOneParts;
