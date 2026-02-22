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
const GuideIndex         = React.lazy(() => import('./guide/page2'));
const GuideBudget        = React.lazy(() => import('./guide/nos_guides/guide_budget'));
const GuideEpargne       = React.lazy(() => import('./guide/nos_guides/guide_epargne'));
const GuideInvestissement= React.lazy(() => import('./guide/nos_guides/guide_investissement'));
const ConseilsFiscalite  = React.lazy(() => import('./guide/nos_guides/conseils_fiscalite'));
const ConseilsRetraite   = React.lazy(() => import('./guide/nos_guides/conseils_retraite'));
const StrategiesInvest   = React.lazy(() => import('./guide/nos_guides/strategies_investissement'));

// --- UTILITAIRES ---
const CONSENT_KEY = 'edueco_consent';
const CONSENT_GRANTED = 'granted';
const CONSENT_DENIED = 'denied';

function safeGetItem(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSetItem(key, value) {
  try { localStorage.setItem(key, value); } catch (e) {}
}

// Charge un script dynamiquement (évite les doublons)
// retourne une Promise qui résout quand script chargé ou existant
function loadScript({ id, src, attrs = {} }) {
  return new Promise((resolve, reject) => {
    if (!id || !src) return reject(new Error('id et src requis'));
    // si déjà chargé par id -> resolve
    const existing = document.getElementById(id);
    if (existing) {
      // si readyState disponible, attendre load; sinon considérer comme ok
      if (existing.getAttribute('data-loaded') === 'true') return resolve(existing);
      existing.addEventListener('load', () => resolve(existing));
      existing.addEventListener('error', () => reject(new Error('Erreur chargement script existant')));
      return;
    }
    const s = document.createElement('script');
    s.id = id;
    s.async = true;
    s.src = src;
    Object.keys(attrs).forEach(k => s.setAttribute(k, attrs[k]));
    s.addEventListener('load', () => {
      s.setAttribute('data-loaded', 'true');
      resolve(s);
    });
    s.addEventListener('error', () => reject(new Error('Erreur chargement script')));
    document.head.appendChild(s);
  });
}

function removeScriptById(id) {
  const el = document.getElementById(id);
  if (el && el.parentNode) el.parentNode.removeChild(el);
}

// tentative de suppression de cookies connus par Google Analytics / Ads (heuristique)
// note : impossible de forcer suppression de cookies HttpOnly côté client ; c'est une aide
function deleteCookie(name) {
  try {
    // Récupère le hostname de façon sûre (évite l'usage direct de `location`)
    const hostname = (typeof window !== 'undefined' && window.location && window.location.hostname)
      ? window.location.hostname
      : '';

    if (hostname) {
      // Suppression en spécifiant le domaine si on le connaît
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=' + hostname;
    }
    // Suppression générale (sans domaine) en second recours
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
  } catch (e) {
    // silent fail — on ne veut pas casser l'app si localStorage/cookies sont bloqués
  }
}

function clearGoogleCookiesHeuristic() {
  // noms communs - mise à jour possible en fonction de ton implémentation
  const possible = ['_ga', '_gid', '_gat', '_gcl_au', 'AMP_TOKEN', '_gads', 'IDE', 'ANID', '1P_JAR'];
  possible.forEach(n => deleteCookie(n));
  // cookies avec prefix (ex : _ga_<MEASUREMENT_ID>)
  // parcourir document.cookie et tenter suppression par préfixe
  try {
    const all = document.cookie.split(';').map(s => s.trim().split('=')[0]);
    all.forEach(name => {
      if (name.startsWith('_ga') || name.startsWith('_gcl') || name.startsWith('AMP_')) deleteCookie(name);
    });
  } catch (e) {}
}

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
      // lazy load des scripts si consentement existant
      // (pas d'attente – silencieux)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // wrappers pour charger gtag / ads (renvoient Promise)
  function loadGTAG() {
    // GA4 measurement id (remplace si besoin)
    const MEASUREMENT_ID = 'G-K0414NWY4Z';
    return loadScript({
      id: 'gtag-js',
      src: `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    })
    .then(() => {
      // initialiser gtag si pas déjà présent
      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments); }
      // on protège pour ne pas remplacer si déjà défini
      if (!window.gtag) window.gtag = gtag;
      window.gtag('js', new Date());
      window.gtag('config', MEASUREMENT_ID);
    })
    .catch(err => {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Impossible de charger gtag:', err);
      }
    });
  }

  function loadAds() {
    return loadScript({
      id: 'adsbygoogle-js',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4548588889875726',
      attrs: { crossorigin: 'anonymous' }
    }).catch(err => {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Impossible de charger Google Ads:', err);
      }
    });
  }

  const disableTracking = React.useCallback(() => {
    // Retirer les scripts et tenter de nettoyer les cookies
    removeScriptById('gtag-js');
    removeScriptById('adsbygoogle-js');

    // Effacer la fonction gtag si elle existe
    try {
      if (window.gtag && typeof window.gtag === 'function') {
        try { delete window.gtag; } catch (e) { window.gtag = undefined; }
      }
      if (window.dataLayer) {
        window.dataLayer = [];
      }
    } catch (e) {}

    // tentative heuristique de suppression des cookies analytics/ads
    clearGoogleCookiesHeuristic();
  }, []);

  const handleConsentGiven = React.useCallback(() => {
    setConsentGiven(true);
    setConsentManagerVisible(false);
    setHasDecision(true);
    safeSetItem(CONSENT_KEY, CONSENT_GRANTED);

    // Charger les scripts nécessaires
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

    // Optionnel (fort) : recharger la page pour s'assurer que rien n'est en cache
    // si tu préfères pas reload, retire la ligne suivante (commentée)
    // window.location.reload();
  }, [disableTracking]);

  const toggleConsentManager = () => {
    setConsentManagerVisible(v => !v);
  };

  const AppLayout = () => (
    <div className="consolidated-container">
      <Outlet />
    </div>
  );

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
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={toggleConsentManager}
          aria-label="Gérer les cookies"
        >
          Gérer les cookies
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
