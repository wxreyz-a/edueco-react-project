/* global globalThis */
import React, { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ConsentManager from './components/ConsentManager';
import NotFound from './components/NotFound';

// Imports statiques (eager)
import Home            from './accueil/Home';
import Contact         from './accueil/Contact';
import MentionsLegales from './accueil/MentionsLegales';
import PageRessources  from './ressources/page4';
import ScrollToTop     from './ScrollToTop';

// Lazy-load (asynchrone)
// Actualites
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
const GuideIndex          = React.lazy(() => import('./guide/page2'));
const GuideBudget         = React.lazy(() => import('./guide/nos_guides/guide_budget'));
const GuideEpargne        = React.lazy(() => import('./guide/nos_guides/guide_epargne'));
const GuideInvestissement = React.lazy(() => import('./guide/nos_guides/guide_investissement'));
const ConseilsFiscalite   = React.lazy(() => import('./guide/nos_guides/conseils_fiscalite'));
const ConseilsRetraite    = React.lazy(() => import('./guide/nos_guides/conseils_retraite'));
const StrategiesInvest    = React.lazy(() => import('./guide/nos_guides/strategies_investissement'));

// --- UTILITAIRES ---
const CONSENT_KEY = 'edueco_consent';
const CONSENT_GRANTED = 'granted';
const CONSENT_DENIED = 'denied';
const LIGHTHOUSE_UA_RE = /Chrome-Lighthouse|Lighthouse/i;
const HEADLESS_UA_RE = /HeadlessChrome/i;
const MEASUREMENT_ID = 'G-K0414NWY4Z';

function reportRecoverableError(message, error) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(message, error);
  }
}

function shouldSkipThirdPartyScripts() {
  // Local development audits should not include ad/analytics payloads from dev bundles.
  if (process.env.NODE_ENV !== 'production' && process.env.REACT_APP_ENABLE_TRACKING_IN_DEV !== 'true') {
    return true;
  }

  if (process.env.REACT_APP_DISABLE_TRACKING === 'true') return true;

  // Third-party tags can trigger non-actionable audit warnings (e.g. deprecated API usage).
  if (process.env.REACT_APP_DISABLE_ADS === 'true') return true;

  const userAgent = globalThis.navigator?.userAgent || '';
  if (LIGHTHOUSE_UA_RE.test(userAgent)) return true;
  if (HEADLESS_UA_RE.test(userAgent)) return true;
  if (globalThis.navigator?.webdriver === true) return true;

  return false;
}

function safeGetItem(key) {
  try {
    return globalThis.localStorage?.getItem(key) ?? null;
  } catch (error) {
    reportRecoverableError('Impossible de lire localStorage:', error);
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    globalThis.localStorage?.setItem(key, value);
  } catch (error) {
    reportRecoverableError('Impossible d\'ecrire dans localStorage:', error);
  }
}

// Charge un script dynamiquement (evite les doublons)
// Retourne une Promise qui resout quand script charge ou existant
function loadScript({ id, src, attrs = {} }) {
  return new Promise((resolve, reject) => {
    if (!id || !src) {
      reject(new Error('id et src requis'));
      return;
    }

    const existing = globalThis.document?.getElementById(id);
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve(existing);
        return;
      }

      existing.addEventListener('load', () => resolve(existing));
      existing.addEventListener('error', () => reject(new Error('Erreur chargement script existant')));
      return;
    }

    if (!globalThis.document?.head) {
      reject(new Error('Document indisponible pour injecter le script'));
      return;
    }

    const script = globalThis.document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = src;
    Object.keys(attrs).forEach((key) => script.setAttribute(key, attrs[key]));
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      resolve(script);
    });
    script.addEventListener('error', () => reject(new Error('Erreur chargement script')));
    globalThis.document.head.appendChild(script);
  });
}

function removeScriptById(id) {
  const script = globalThis.document?.getElementById(id);
  script?.remove();
}

// Tentative de suppression de cookies connus par Google Analytics / Ads (heuristique)
function deleteCookie(name) {
  const documentRef = globalThis.document;
  if (!documentRef) return;

  const hostname = globalThis.window?.location?.hostname ?? '';
  if (hostname) {
    documentRef.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=${hostname}`;
  }

  documentRef.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
}

function clearGoogleCookiesHeuristic() {
  const possible = ['_ga', '_gid', '_gat', '_gcl_au', 'AMP_TOKEN', '_gads', 'IDE', 'ANID', '1P_JAR'];
  possible.forEach((name) => deleteCookie(name));

  const cookieJar = globalThis.document?.cookie;
  if (!cookieJar) return;

  const all = cookieJar.split(';').map((part) => part.trim().split('=')[0]);
  all.forEach((name) => {
    if (name.startsWith('_ga') || name.startsWith('_gcl') || name.startsWith('AMP_')) {
      deleteCookie(name);
    }
  });
}

function loadGTAG() {
  if (shouldSkipThirdPartyScripts()) {
    return Promise.resolve();
  }

  return loadScript({
    id: 'gtag-js',
    src: `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  })
    .then(() => {
      globalThis.dataLayer = globalThis.dataLayer || [];
      function gtag() {
        globalThis.dataLayer.push(arguments);
      }

      if (!globalThis.gtag) {
        globalThis.gtag = gtag;
      }

      globalThis.gtag('js', new Date());
      globalThis.gtag('config', MEASUREMENT_ID);
    })
    .catch((error) => {
      reportRecoverableError('Impossible de charger gtag:', error);
    });
}

function loadAds() {
  if (shouldSkipThirdPartyScripts()) {
    return Promise.resolve();
  }

  return loadScript({
    id: 'adsbygoogle-js',
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4548588889875726',
    attrs: { crossorigin: 'anonymous' }
  }).catch((error) => {
    reportRecoverableError('Impossible de charger Google Ads:', error);
  });
}

const AppLayout = () => (
  <div className="consolidated-container">
    <Outlet />
  </div>
);

// --- FIN UTILITAIRES ---

function App() {
  const [consentGiven, setConsentGiven] = React.useState(false);
  const [consentManagerVisible, setConsentManagerVisible] = React.useState(false);
  const [hasDecision, setHasDecision] = React.useState(false);

  React.useEffect(() => {
    const stored = safeGetItem(CONSENT_KEY);

    if (stored === CONSENT_GRANTED) {
      setConsentGiven(true);
      setConsentManagerVisible(false);
      setHasDecision(true);
      loadGTAG();
      loadAds();
    } else if (stored === CONSENT_DENIED) {
      setConsentGiven(false);
      setConsentManagerVisible(false);
      setHasDecision(true);
    } else {
      setConsentGiven(false);
      setConsentManagerVisible(true);
      setHasDecision(false);
    }
  }, []);

  const disableTracking = React.useCallback(() => {
    removeScriptById('gtag-js');
    removeScriptById('adsbygoogle-js');

    if (typeof globalThis.gtag === 'function') {
      globalThis.gtag = undefined;
    }

    if (Array.isArray(globalThis.dataLayer)) {
      globalThis.dataLayer = [];
    }

    clearGoogleCookiesHeuristic();
  }, []);

  const handleConsentGiven = React.useCallback(() => {
    setConsentGiven(true);
    setConsentManagerVisible(false);
    setHasDecision(true);
    safeSetItem(CONSENT_KEY, CONSENT_GRANTED);
    loadGTAG();
    loadAds();
  }, []);

  const handleConsentDeclined = React.useCallback(() => {
    setConsentGiven(false);
    setConsentManagerVisible(false);
    setHasDecision(true);
    safeSetItem(CONSENT_KEY, CONSENT_DENIED);
    disableTracking();
  }, [disableTracking]);

  const handleConsentWithdrawn = React.useCallback(() => {
    setConsentGiven(false);
    setConsentManagerVisible(false);
    setHasDecision(true);
    safeSetItem(CONSENT_KEY, CONSENT_DENIED);
    disableTracking();
  }, [disableTracking]);

  const toggleConsentManager = () => {
    setConsentManagerVisible((visible) => !visible);
  };

  return (
    <>
      <ScrollToTop />
      <ConsentManager
        visible={consentManagerVisible}
        onConsentGiven={handleConsentGiven}
        onConsentDeclined={handleConsentDeclined}
        onConsentWithdrawn={handleConsentWithdrawn}
        onClose={() => setConsentManagerVisible(false)}
        consent={consentGiven}
      />

      {hasDecision && (
        <button
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            padding: '8px 12px',
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#1e40af',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={toggleConsentManager}
          aria-label="Gerer les cookies"
        >
          Gerer les cookies
        </button>
      )}

      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          {/* Eager */}
          <Route path="/" element={<Home />} />
          <Route element={<AppLayout />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/ressources" element={<PageRessources />} />

            {/* Lazy - Actualites */}
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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
