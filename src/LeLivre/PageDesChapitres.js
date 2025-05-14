import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./PagesDesChapitres.css";

const ChapterIndex = () => {
  return (
    <div className="chapter-index-container">
      <Helmet>
        {/* Déclaration de la langue */}
        <html lang="fr" />

        {/* Balises de titre et meta description */}
        <title>Explorez l'Histoire de l'Argent & ses Impacts | EduEco</title>
        <meta
          name="description"
          content="Découvrez l'évolution de l'argent, de l'histoire ancienne aux enjeux modernes, et explorez comment le capitalisme, les investissements et la psychologie influencent votre vie financière."
        />
        <meta
          name="keywords"
          content="histoire de l'argent, capitalisme, mondialisation, investissement, bourse, cryptomonnaies, psychologie de l'argent, EduEco"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/livre" />

        {/* Open Graph */}
        <meta property="og:title" content="Explorez l'Histoire de l'Argent & ses Impacts | EduEco" />
        <meta
          property="og:description"
          content="Plongez dans l'évolution de l'argent et comprenez l'impact des systèmes financiers et psychologiques sur votre quotidien."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edueco.fr/livre" />
        <meta
          property="og:image"
          content="https://via.placeholder.com/1200x630.png?text=Histoire+de+l%27Argent"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Explorez l'Histoire de l'Argent & ses Impacts | EduEco" />
        <meta
          name="twitter:description"
          content="Apprenez comment l'argent a évolué et comment les enjeux financiers et psychologiques influencent nos vies."
        />

        {/* JSON‑LD pour données structurées */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Explorez l'Histoire et l'Impact de l'Argent",
              "url": "https://edueco.fr/livre",
              "description": "Découvrez l'évolution de l'argent, du troc aux marchés financiers modernes, et comprenez son impact sur la société et vos finances."
            }
          `}
        </script>
      </Helmet>

      <div className="chapter-book-index">
        <header className="index-header">
          <h1 className="index-title">
            Explorez l'Histoire et l'Impact de l'Argent
          </h1>
        </header>

        <section className="chapter-list">
          <div className="chapter-item">
            <Link to="/parties-chapitre-un" className="chapter-link">
              <h2>Chapitre 1 : Une brève histoire de l'argent</h2>
              <p>Découvrez comment l'argent a évolué, du troc aux premières monnaies.</p>
            </Link>
          </div>

          <div className="chapter-item">
            <Link to="/parties-chapitre-deux" className="chapter-link">
              <h2>Chapitre 2 : Capitalisme et Mondialisation</h2>
              <p>Comprenez comment ces concepts influencent directement votre quotidien et votre argent.</p>
            </Link>
          </div>

          <div className="chapter-item">
            <Link to="/parties-chapitre-trois" className="chapter-link">
              <h2>Chapitre 3 : Investissement, Bourse et Cryptomonnaies</h2>
              <p>
                Apprenez les bases de l’investissement et comment les marchés financiers façonnent l'économie.
              </p>
            </Link>
          </div>

          <div className="chapter-item">
            <Link to="/parties-chapitre-quatre" className="chapter-link">
              <h2>Chapitre 4 : La Psychologie de l'Argent</h2>
              <p>
                Explorez comment nos émotions et nos biais cognitifs influencent nos décisions financières.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChapterIndex;
