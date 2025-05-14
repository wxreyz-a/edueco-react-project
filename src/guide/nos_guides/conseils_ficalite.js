import React from 'react';
import { Helmet } from 'react-helmet';
import MentalMap from '../components/MentalMap';
import '../components/MentalMap.css';

const ConseilsFiscaliteArticle = () => {
  const content = {
    title: 'Conseils Fiscalité : Optimisez vos Impôts',
    subtitle: 'Tirez le meilleur parti des dispositifs fiscaux',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content:
          "Une bonne gestion fiscale peut considérablement alléger votre charge d'impôts. Cet article vous propose des conseils pratiques pour optimiser votre situation fiscale et vous guide à travers une carte mentale interactive des stratégies à adopter.",
      },
      {
        id: 'declarations',
        title: 'Déclarations',
        content: 'Maîtrisez vos obligations déclaratives.',
        listType: 'ul',
        items: [
          'Respectez les dates limites.',
          'Utilisez des logiciels fiscaux.',
          'Archivez vos documents.',
        ],
      },
      {
        id: 'deductions',
        title: 'Déductions',
        content: 'Réduisez votre base imposable.',
        listType: 'ul',
        items: [
          'Frais professionnels.',
          'Dons caritatifs.',
          'Intérêts d’emprunt.',
        ],
      },
      {
        id: 'credits-impot',
        title: "Crédits d'Impôt",
        content: 'Récupérez une partie de vos dépenses.',
        listType: 'ul',
        items: [
          'Travaux énergétiques.',
          'Emploi à domicile.',
          'Investissements PME.',
        ],
      },
      {
        id: 'planification',
        title: 'Planification',
        content: 'Optimisez sur le long terme.',
        listType: 'ul',
        items: [
          'Anticipez vos investissements.',
          'Planifiez vos dépenses.',
          'Consultez un expert.',
        ],
      },
      {
        id: 'comparaison',
        title: 'Comparaison',
        content: 'Choisissez le meilleur dispositif.',
        listType: 'ul',
        items: [
          'Comparez les régimes fiscaux.',
          'Évaluez les avantages.',
          'Analysez les contraintes.',
        ],
      },
      {
        id: 'reevaluation',
        title: 'Réévaluation',
        content: 'Ajustez votre stratégie.',
        listType: 'ul',
        items: [
          'Suivez vos revenus.',
          'Adaptez vos dépenses.',
          'Révisez annuellement.',
        ],
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content:
          'En visualisant vos stratégies sous forme de carte mentale, vous pouvez optimiser vos finances et réduire vos impôts efficacement.',
      },
    ],
  };

  return (
    <div className="article">
      <Helmet>
        <html lang="fr" />
        <title>Conseils Fiscalité : Optimisez vos Impôts | EduEco</title>
        <meta
          name="description"
          content="Découvrez des conseils pratiques pour optimiser votre fiscalité et réduire vos impôts efficacement. Maîtrisez déclarations, déductions, crédits d'impôt, planification et réévaluation pour une meilleure gestion de vos finances."
        />
        <meta
          name="keywords"
          content="fiscalité, impôts, optimisation fiscale, déductions, crédits d'impôt, déclarations fiscales, planification fiscale, EduEco"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/conseils-fiscalite" />
        <meta property="og:title" content="Conseils Fiscalité : Optimisez vos Impôts | EduEco" />
        <meta
          property="og:description"
          content="Apprenez à optimiser votre fiscalité et à réduire vos impôts grâce à nos conseils pratiques et une carte mentale interactive des stratégies fiscales."
        />
        <meta property="og:url" content="https://edueco.fr/conseils-fiscalite" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conseils Fiscalité : Optimisez vos Impôts | EduEco" />
        <meta
          name="twitter:description"
          content="Optimisez votre fiscalité et réduisez vos impôts grâce à une carte mentale interactive des conseils fiscaux."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Conseils Fiscalité : Optimisez vos Impôts",
              "description": "Découvrez des conseils pratiques pour optimiser votre fiscalité et réduire vos impôts grâce à une carte mentale interactive des stratégies fiscales.",
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
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://edueco.fr/conseils-fiscalite"
              }
            }
          `}
        </script>
      </Helmet>

      <MentalMap title={content.title} subtitle={content.subtitle} steps={content.sections} />
    </div>
  );
};

export default ConseilsFiscaliteArticle;