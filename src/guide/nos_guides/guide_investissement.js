import React from 'react';
import { Helmet } from 'react-helmet';
import MentalMap from '../components/MentalMap';
import '../components/MentalMap.css';

const GuideInvestissementArticle = () => {
  const content = {
    title: 'Conseils Pratiques : Optimisez vos Investissements',
    subtitle: "Un guide complet et approfondi pour définir vos objectifs, sélectionner vos actifs, gérer les risques et suivre vos performances",
    sections: [
      {
        id: 'introduction',
        title: 'Pourquoi investir intelligemment ?',
        content:
          "Investir permet de faire croître votre patrimoine sur le long terme tout en maîtrisant les risques. Ce guide vous accompagne dans l'élaboration d'une stratégie d'investissement adaptée à votre profil, en vous guidant dans le choix des actifs, la gestion des risques et l'utilisation des outils d'analyse.",
        image: { src: '/images/investissement-strategie.jpg', alt: "Stratégie d'investissement" },
        example:
          "Si vous avez 30 ans et un horizon d'investissement à long terme, privilégiez des actions diversifiées. Pour un investisseur proche de la retraite, une allocation plus prudente avec des obligations peut être préférable.",
      },
      {
        id: 'actions-cles',
        title: 'Démarches Pratiques pour Investir',
        listType: 'ul',
        items: [
          "Définir vos objectifs : Identifiez clairement vos priorités : croissance à long terme, préparation de la retraite ou génération de revenus complémentaires.",
          "Diversifier vos investissements : Répartissez votre capital entre différentes classes d'actifs, secteurs et zones géographiques pour limiter les risques et optimiser les rendements.",
          "Gérer les risques : Apprenez à évaluer et à maîtriser les risques liés à chaque investissement pour protéger votre capital.",
          "Utiliser des outils d'analyse : Combinez analyse fondamentale et technique pour identifier les meilleures opportunités et prendre des décisions éclairées.",
        ],
        links: [
          { href: '/guide-budget', title: 'Guide Budget' },
          { href: '/simulateur-investissement', title: 'Simulateur d\'investissement' },
        ],
      },
      {
        id: 'demarches',
        title: 'Démarches Concrètes et Ressources',
        listType: 'ol',
        items: [
          "Ouvrir un compte chez un courtier : Choisissez une plateforme reconnue en fonction des frais, des outils proposés et de la sécurité.",
          "Suivre des formations : Participez à des webinaires, formations en ligne et lisez des ouvrages spécialisés pour approfondir vos connaissances.",
          "Planifier et réévaluer : Mettez en place un calendrier de suivi pour ajuster régulièrement votre stratégie en fonction des évolutions du marché et de votre situation personnelle.",
        ],
      },
      {
        id: 'conclusion',
        title: 'En Résumé',
        content:
          "En définissant clairement vos objectifs, en diversifiant intelligemment vos actifs et en maîtrisant les risques, vous poserez les bases d'une stratégie d'investissement réussie et durable.",
        listType: 'ul',
        items: [
          "Fixez des objectifs clairs et réalistes.",
          "Diversifiez pour réduire les risques.",
          "Surveillez et ajustez votre portefeuille régulièrement.",
        ],
      },
    ],
  };

  return (
    <div className="article">
      <Helmet>
        <html lang="fr" />
        <title>Conseils Pratiques : Optimisez vos Investissements | EduEco</title>
        <meta
          name="description"
          content="Un guide complet et approfondi pour définir vos objectifs d'investissement, sélectionner vos actifs, gérer les risques et suivre vos performances afin de faire croître durablement votre patrimoine."
        />
        <meta
          name="keywords"
          content="investissement, optimisation, diversification, analyse fondamentale, analyse technique, gestion de portefeuille, gestion des risques, stratégie d'investissement"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://edueco.fr/guide-investissement" />
        <meta property="og:title" content="Conseils Pratiques : Optimisez vos Investissements" />
        <meta
          property="og:description"
          content="Découvrez comment définir vos objectifs, diversifier votre portefeuille, gérer les risques et suivre vos performances grâce à des démarches concrètes et des conseils d'experts."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://edueco.fr/guide-investissement" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conseils Pratiques : Optimisez vos Investissements" />
        <meta name="twitter:description" content="Un guide complet pour définir vos objectifs d'investissement, diversifier votre portefeuille et gérer les risques efficacement." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Conseils Pratiques : Optimisez vos Investissements",
              "description": "Un guide complet et approfondi pour définir vos objectifs d'investissement, sélectionner vos actifs, gérer les risques et suivre vos performances afin de faire croître durablement votre patrimoine.",
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
                "@id": "https://edueco.fr/guide-investissement"
              }
            }
          `}
        </script>
      </Helmet>

      <MentalMap title={content.title} subtitle={content.subtitle} steps={content.sections} />
    </div>
  );
};

export default GuideInvestissementArticle;
