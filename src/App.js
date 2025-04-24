import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const Home = lazy(() => import('./accueil/Home'));
const Contact = lazy(() => import('./accueil/Contact'));
const PageDesChapitres = lazy(() => import('./LeLivre/PageDesChapitres'));
const EnsembleDesPartieUn = lazy(() => import('./LeLivre/Chapitre1/EnsembleParties1'));
const ChapitreUnPartieUne = lazy(() => import('./LeLivre/Chapitre1/Partie1'));
const ChapitreUnPartieDeux = lazy(() => import('./LeLivre/Chapitre1/Partie2'));
const ChapitreUnPartieTrois = lazy(() => import('./LeLivre/Chapitre1/Partie3'));
const ChapitreUnPartieQuatre = lazy(() => import('./LeLivre/Chapitre1/Partie4'));
const EnsembleDesPartieDeux = lazy(() => import('./LeLivre/Chapitre2/EnsembleParties2'));
const ChapitreDeuxPartieUne = lazy(() => import('./LeLivre/Chapitre2/Chap2Partie1'));
const ChapitreDeuxPartieDeux = lazy(() => import('./LeLivre/Chapitre2/Chap2Partie2'));
const ChapitreDeuxPartieTrois = lazy(() => import('./LeLivre/Chapitre2/Chap2Partie3'));
const ChapitreDeuxPartieQuatre = lazy(() => import('./LeLivre/Chapitre2/Chap2Partie4'));
const EnsembleDesPartieTrois = lazy(() => import('./LeLivre/Chapitre3/EnsembleParties3'));
const ChapitreTroisPartieUne = lazy(() => import('./LeLivre/Chapitre3/Chap3Partie1'));
const ChapitreTroisPartieDeux = lazy(() => import('./LeLivre/Chapitre3/Chap3Partie2'));
const ChapitreTroisPartieTrois = lazy(() => import('./LeLivre/Chapitre3/Chap3Partie3'));
const ChapitreTroisPartieQuatre = lazy(() => import('./LeLivre/Chapitre3/Chap3Partie4'));
const EnsembleDesPartieQuatre = lazy(() => import('./LeLivre/Chapitre4/EnsembleParties4'));
const ChapitreQuatrePartieUne = lazy(() => import('./LeLivre/Chapitre4/Chap4Partie1'));
const ChapitreQuatrePartieDeux = lazy(() => import('./LeLivre/Chapitre4/Chap4Partie2'));
const ChapitreQuatrePartieTrois = lazy(() => import('./LeLivre/Chapitre4/Chap4Partie3'));
const ChapitreQuatrePartieQuatre = lazy(() => import('./LeLivre/Chapitre4/Chap4Partie4'));
const Page1 = lazy(() => import('./finance/page1'));
const Budget = lazy(() => import('./finance/apprendre_finance/budget'));
const Epargne = lazy(() => import('./finance/apprendre_finance/epargne'));
const Investissement = lazy(() => import('./finance/apprendre_finance/investissement'));
const Credit = lazy(() => import('./finance/apprendre_finance/credit'));
const Assurance = lazy(() => import('./finance/apprendre_finance/assurance'));
const Fiscalite = lazy(() => import('./finance/apprendre_finance/fiscalite'));
const Immobilier = lazy(() => import('./finance/apprendre_finance/immobilier'));
const Retraite = lazy(() => import('./finance/apprendre_finance/retraite'));
const Bourse = lazy(() => import('./finance/apprendre_finance/bourse'));
const Crypto = lazy(() => import('./finance/apprendre_finance/crypto'));
const Page2 = lazy(() => import('./guide/page2'));
const GuideBudget = lazy(() => import('./guide/nos_guides/guide_budget'));
const GuideEpargne = lazy(() => import('./guide/nos_guides/guide_epargne'));
const GuideInvestissement = lazy(() => import('./guide/nos_guides/guide_investissement'));
const ConseilsFiscalite = lazy(() => import('./guide/nos_guides/conseils_ficalite'));
const StrategiesInvestissement = lazy(() => import('./guide/nos_guides/strategies_investissement'));
const ConseilsRetraite = lazy(() => import('./guide/nos_guides/conseils_retraite'));
const Page3 = lazy(() => import('./actualites/page3'));
const ArticleUn = lazy(() => import('./actualites/Articles/Article_un'));
const ArticleDeux = lazy(() => import('./actualites/Articles/Article_deux'));
const Page4 = lazy(() => import('./ressources/page4'));
const CalculateurEpargne = lazy(() => import('./calculateur_epargne/calculateurEpargne'));
const SimulateurInvest = lazy(() => import('./simulateur_investissement/simulateurInvestissement'));
const Mentionslegales = lazy(() => import('./accueil/MentionsLegales'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/livre" element={<PageDesChapitres />} />
          <Route path="/parties-chapitre-un" element={<EnsembleDesPartieUn />} />
          <Route path="/chapitre-un-partie-une" element={<ChapitreUnPartieUne />} />
          <Route path="/chapitre-un-partie-deux" element={<ChapitreUnPartieDeux />} />
          <Route path="/chapitre-un-partie-trois" element={<ChapitreUnPartieTrois />} />
          <Route path="/chapitre-un-partie-quatre" element={<ChapitreUnPartieQuatre />} />
          <Route path="/parties-chapitre-deux" element={<EnsembleDesPartieDeux />} />
          <Route path="/chapitre-deux-partie-une" element={<ChapitreDeuxPartieUne />} />
          <Route path="/chapitre-deux-partie-deux" element={<ChapitreDeuxPartieDeux />} />
          <Route path="/chapitre-deux-partie-trois" element={<ChapitreDeuxPartieTrois />} />
          <Route path="/chapitre-deux-partie-quatre" element={<ChapitreDeuxPartieQuatre />} />
          <Route path="/parties-chapitre-trois" element={<EnsembleDesPartieTrois />} />
          <Route path="/chapitre-trois-partie-une" element={<ChapitreTroisPartieUne />} />
          <Route path="/chapitre-trois-partie-deux" element={<ChapitreTroisPartieDeux />} />
          <Route path="/chapitre-trois-partie-trois" element={<ChapitreTroisPartieTrois />} />
          <Route path="/chapitre-trois-partie-quatre" element={<ChapitreTroisPartieQuatre />} />
          <Route path="/parties-chapitre-quatre" element={<EnsembleDesPartieQuatre />} />
          <Route path="/chapitre-quatre-partie-une" element={<ChapitreQuatrePartieUne />} />
          <Route path="/chapitre-quatre-partie-deux" element={<ChapitreQuatrePartieDeux />} />
          <Route path="/chapitre-quatre-partie-trois" element={<ChapitreQuatrePartieTrois />} />
          <Route path="/chapitre-quatre-partie-quatre" element={<ChapitreQuatrePartieQuatre />} />
          <Route path="/apprendre" element={<Page1 />} />
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
          <Route path="/guides" element={<Page2 />} />
          <Route path="/guide-budget" element={<GuideBudget />} />
          <Route path="/guide-epargne" element={<GuideEpargne />} />
          <Route path="/guide-investissement" element={<GuideInvestissement />} />
          <Route path="/conseils-fiscalite" element={<ConseilsFiscalite />} />
          <Route path="/strategies-investissement" element={<StrategiesInvestissement />} />
          <Route path="/conseils-retraite" element={<ConseilsRetraite />} />
          <Route path="/actualites" element={<Page3 />} />
          <Route path="/ressources" element={<Page4 />} />
          <Route path="/investir-2025" element={<ArticleUn />} />
          <Route path="/trump-tarifs" element={<ArticleDeux />} />
          <Route path="/calculateur-epargne" element={<CalculateurEpargne />} />
          <Route path="/simulateur-investissement" element={<SimulateurInvest />} />
          <Route path="/mentions-legales" element={<Mentionslegales />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

