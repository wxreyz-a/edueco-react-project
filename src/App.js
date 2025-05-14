import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ConsentManager from './components/ConsentManager';

// Imports statiques (éager)
import Home            from './accueil/Home';
import Contact         from './accueil/Contact';
import MentionsLegales from './accueil/MentionsLegales';
import PageRessources  from './ressources/page4';
import ScrollToTop     from './ScrollToTop';

// Lazy-load (asynchrone)
// Actualités
const NewsListing        = React.lazy(() => import('./actualites/page3'));
const ArticleUn          = React.lazy(() => import('./actualites/Articles/Article_un'));
const ArticleDeux        = React.lazy(() => import('./actualites/Articles/Article_deux'));

// Outils
const CalculateurEpargne = React.lazy(() => import('./calculateur_epargne/calculateurEpargne'));
const SimulateurInvest   = React.lazy(() => import('./simulateur_investissement/simulateurInvestissement'));

// LeLivre - Chapitres
const LivreIndex         = React.lazy(() => import('./LeLivre/PageDesChapitres'));
const EnsembleParties1   = React.lazy(() => import('./LeLivre/Chapitre1/EnsembleParties1'));
const Partie1            = React.lazy(() => import('./LeLivre/Chapitre1/Partie1'));
const Partie2            = React.lazy(() => import('./LeLivre/Chapitre1/Partie2'));
const Partie3            = React.lazy(() => import('./LeLivre/Chapitre1/Partie3'));
const Partie4            = React.lazy(() => import('./LeLivre/Chapitre1/Partie4'));
const EnsembleParties2   = React.lazy(() => import('./LeLivre/Chapitre2/EnsembleParties2'));
const Chap2Partie1       = React.lazy(() => import('./LeLivre/Chapitre2/Chap2Partie1'));
const Chap2Partie2       = React.lazy(() => import('./LeLivre/Chapitre2/Chap2Partie2'));
const Chap2Partie3       = React.lazy(() => import('./LeLivre/Chapitre2/Chap2Partie3'));
const Chap2Partie4       = React.lazy(() => import('./LeLivre/Chapitre2/Chap2Partie4'));
const EnsembleParties3   = React.lazy(() => import('./LeLivre/Chapitre3/EnsembleParties3'));
const Chap3Partie1       = React.lazy(() => import('./LeLivre/Chapitre3/Chap3Partie1'));
const Chap3Partie2       = React.lazy(() => import('./LeLivre/Chapitre3/Chap3Partie2'));
const Chap3Partie3       = React.lazy(() => import('./LeLivre/Chapitre3/Chap3Partie3'));
const Chap3Partie4       = React.lazy(() => import('./LeLivre/Chapitre3/Chap3Partie4'));
const EnsembleParties4   = React.lazy(() => import('./LeLivre/Chapitre4/EnsembleParties4'));
const Chap4Partie1       = React.lazy(() => import('./LeLivre/Chapitre4/Chap4Partie1'));
const Chap4Partie2       = React.lazy(() => import('./LeLivre/Chapitre4/Chap4Partie2'));
const Chap4Partie3       = React.lazy(() => import('./LeLivre/Chapitre4/Chap4Partie3'));
const Chap4Partie4       = React.lazy(() => import('./LeLivre/Chapitre4/Chap4Partie4'));

// Finance
const FinanceIndex       = React.lazy(() => import('./finance/page1'));
const Budget             = React.lazy(() => import('./finance/apprendre_finance/budget'));
const Epargne            = React.lazy(() => import('./finance/apprendre_finance/epargne'));
const Investissement     = React.lazy(() => import('./finance/apprendre_finance/investissement'));
const Credit             = React.lazy(() => import('./finance/apprendre_finance/credit'));
const Assurance          = React.lazy(() => import('./finance/apprendre_finance/assurance'));
const Fiscalite          = React.lazy(() => import('./finance/apprendre_finance/fiscalite'));
const Immobilier         = React.lazy(() => import('./finance/apprendre_finance/immobilier'));
const Retraite           = React.lazy(() => import('./finance/apprendre_finance/retraite'));
const Bourse             = React.lazy(() => import('./finance/apprendre_finance/bourse'));
const Crypto             = React.lazy(() => import('./finance/apprendre_finance/crypto'));

// Guides
const GuideIndex         = React.lazy(() => import('./guide/page2'));
const GuideBudget        = React.lazy(() => import('./guide/nos_guides/guide_budget'));
const GuideEpargne       = React.lazy(() => import('./guide/nos_guides/guide_epargne'));
const GuideInvestissement= React.lazy(() => import('./guide/nos_guides/guide_investissement'));
const ConseilsFiscalite  = React.lazy(() => import('./guide/nos_guides/conseils_ficalite'));
const ConseilsRetraite   = React.lazy(() => import('./guide/nos_guides/conseils_retraite'));
const StrategiesInvest   = React.lazy(() => import('./guide/nos_guides/strategies_investissement'));

function App() {
  const [consentGiven, setConsentGiven] = React.useState(false);
  const [consentManagerVisible, setConsentManagerVisible] = React.useState(false);

  React.useEffect(() => {
    const storedConsent = localStorage.getItem('userConsent');
    if (storedConsent === 'granted') {
      setConsentGiven(true);
      setConsentManagerVisible(false);
    } else {
      setConsentGiven(false);
      setConsentManagerVisible(true);
    }
  }, []);

  const handleConsentGiven = () => {
    setConsentGiven(true);
    setConsentManagerVisible(false);

    // Dynamically load Google Tag Manager script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-K0414NWY4Z';
    gtagScript.id = 'gtag-js';
    document.head.appendChild(gtagScript);

    // After loading gtag.js, initialize gtag
    gtagScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-K0414NWY4Z');
    };

    // Dynamically load Google Ads script
    const adsScript = document.createElement('script');
    adsScript.async = true;
    adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4548588889875726';
    adsScript.crossOrigin = 'anonymous';
    adsScript.id = 'adsbygoogle-js';
    document.head.appendChild(adsScript);
  };

  const handleConsentWithdrawn = () => {
    setConsentGiven(false);
    setConsentManagerVisible(false);

    // Remove Google Tag Manager script
    const gtagScript = document.getElementById('gtag-js');
    if (gtagScript) {
      document.head.removeChild(gtagScript);
    }

    // Remove Google Ads script
    const adsScript = document.getElementById('adsbygoogle-js');
    if (adsScript) {
      document.head.removeChild(adsScript);
    }

    // Clear Google Tag Manager dataLayer
    if (window.dataLayer) {
      window.dataLayer = [];
    }
  };

  const toggleConsentManager = () => {
    setConsentManagerVisible(!consentManagerVisible);
  };

  return (
    <>
      <ScrollToTop />
      <ConsentManager
        visible={consentManagerVisible}
        onConsentGiven={handleConsentGiven}
        onConsentWithdrawn={handleConsentWithdrawn}
        onClose={() => setConsentManagerVisible(false)}
        isManagementMode={consentGiven}
      />
      {consentGiven && (
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            padding: '8px 12px',
            fontSize: '14px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={toggleConsentManager}
        >
          Gérer les cookies
        </button>
      )}
      <Suspense fallback={<div>Chargement…</div>}>
        <Routes>
          {/* Éager */}
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div className="consolidated-container">
                <Routes>
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/mentions-legales" element={<MentionsLegales />} />
                  <Route path="/ressources" element={<PageRessources />} />

                  {/* Lazy - Actualités */}
                  <Route path="/actualites" element={<NewsListing />} />
                  <Route path="/investir-2025" element={<ArticleUn />} />
                  <Route path="/trump-tarifs" element={<ArticleDeux />} />

                  {/* Lazy - Outils */}
                  <Route path="/calculateur-epargne" element={<CalculateurEpargne />} />
                  <Route path="/simulateur-investissement" element={<SimulateurInvest />} />

                  {/* Lazy - LeLivre */}
                  <Route path="/livre" element={<LivreIndex />} />
                  <Route path="/parties-chapitre-un" element={<EnsembleParties1 />} />
                  <Route path="/chapitre-un-partie-une" element={<Partie1 />} />
                  <Route path="/chapitre-un-partie-deux" element={<Partie2 />} />
                  <Route path="/chapitre-un-partie-trois" element={<Partie3 />} />
                  <Route path="/chapitre-un-partie-quatre" element={<Partie4 />} />
                  <Route path="/parties-chapitre-deux" element={<EnsembleParties2 />} />
                  <Route path="/chapitre-deux-partie-une" element={<Chap2Partie1 />} />
                  <Route path="/chapitre-deux-partie-deux" element={<Chap2Partie2 />} />
                  <Route path="/chapitre-deux-partie-trois" element={<Chap2Partie3 />} />
                  <Route path="/chapitre-deux-partie-quatre" element={<Chap2Partie4 />} />
                  <Route path="/parties-chapitre-trois" element={<EnsembleParties3 />} />
                  <Route path="/chapitre-trois-partie-une" element={<Chap3Partie1 />} />
                  <Route path="/chapitre-trois-partie-deux" element={<Chap3Partie2 />} />
                  <Route path="/chapitre-trois-partie-trois" element={<Chap3Partie3 />} />
                  <Route path="/chapitre-trois-partie-quatre" element={<Chap3Partie4 />} />
                  <Route path="/parties-chapitre-quatre" element={<EnsembleParties4 />} />
                  <Route path="/chapitre-quatre-partie-une" element={<Chap4Partie1 />} />
                  <Route path="/chapitre-quatre-partie-deux" element={<Chap4Partie2 />} />
                  <Route path="/chapitre-quatre-partie-trois" element={<Chap4Partie3 />} />
                  <Route path="/chapitre-quatre-partie-quatre" element={<Chap4Partie4 />} />

                  {/* Lazy - Finance & Guides */}
                  <Route path="/apprendre" element={<FinanceIndex />} />
                  <Route path="/faire-un-budget" element={<Budget />} />
                  <Route path="/epargne" element={<Epargne />} />
                  <Route path="/investissement" element={<Investissement />} />
                  <Route path="/credit" element={<Credit />} />
                  <Route path="/assurance" element={<Assurance />} />
                  <Route path="/fiscalite" element={<Fiscalite />} />
                  <Route path="/immobilier" element={<Immobilier />} />
                  <Route path="/retraite" element={<Retraite />} />
                  <Route path="/bourse" element={<Bourse />} />
                  <Route path="/crypto" element={<Crypto />} />
                  <Route path="/guides" element={<GuideIndex />} />
                  <Route path="/guide-budget" element={<GuideBudget />} />
                  <Route path="/guide-epargne" element={<GuideEpargne />} />
                  <Route path="/guide-investissement" element={<GuideInvestissement />} />
                  <Route path="/conseils-fiscalite" element={<ConseilsFiscalite />} />
                  <Route path="/strategies-investissement" element={<StrategiesInvest />} />
                  <Route path="/conseils-retraite" element={<ConseilsRetraite />} />
                </Routes>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
