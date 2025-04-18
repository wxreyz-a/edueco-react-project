import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './accueil/Home';
import Contact from './accueil/Contact';
import PageDesChapitres from './LeLivre/PageDesChapitres';
import EnsembleDesPartieUn from './LeLivre/Chapitre1/EnsembleParties1';
import ChapitreUnPartieUne from './LeLivre/Chapitre1/Partie1';
import ChapitreUnPartieDeux from './LeLivre/Chapitre1/Partie2';
import ChapitreUnPartieTrois from './LeLivre/Chapitre1/Partie3';
import ChapitreUnPartieQuatre from './LeLivre/Chapitre1/Partie4';
import EnsembleDesPartieDeux from './LeLivre/Chapitre2/EnsembleParties2';
import ChapitreDeuxPartieUne from './LeLivre/Chapitre2/Chap2Partie1';
import ChapitreDeuxPartieDeux from './LeLivre/Chapitre2/Chap2Partie2';
import ChapitreDeuxPartieTrois from './LeLivre/Chapitre2/Chap2Partie3';
import ChapitreDeuxPartieQuatre from './LeLivre/Chapitre2/Chap2Partie4';
import EnsembleDesPartieTrois from './LeLivre/Chapitre3/EnsembleParties3';
import ChapitreTroisPartieUne from './LeLivre/Chapitre3/Chap3Partie1';
import ChapitreTroisPartieDeux from './LeLivre/Chapitre3/Chap3Partie2';
import ChapitreTroisPartieTrois from './LeLivre/Chapitre3/Chap3Partie3';
import ChapitreTroisPartieQuatre from './LeLivre/Chapitre3/Chap3Partie4';
import EnsembleDesPartieQuatre from './LeLivre/Chapitre4/EnsembleParties4';
import ChapitreQuatrePartieUne from './LeLivre/Chapitre4/Chap4Partie1';
import ChapitreQuatrePartieDeux from './LeLivre/Chapitre4/Chap4Partie2';
import ChapitreQuatrePartieTrois from './LeLivre/Chapitre4/Chap4Partie3';
import ChapitreQuatrePartieQuatre from './LeLivre/Chapitre4/Chap4Partie4';
import Page1 from './finance/page1';
import FormationComplete from './Parcours_payant/payant';
import Budget from './finance/apprendre_finance/budget';
import Epargne from './finance/apprendre_finance/epargne';
import Investissement from './finance/apprendre_finance/investissement';
import Credit from './finance/apprendre_finance/credit';
import Assurance from './finance/apprendre_finance/assurance';
import Fiscalite from './finance/apprendre_finance/fiscalite';
import Immobilier from './finance/apprendre_finance/immobilier';
import Retraite from './finance/apprendre_finance/retraite';
import Bourse from './finance/apprendre_finance/bourse';
import Crypto from './finance/apprendre_finance/crypto';
import Page2 from './guide/page2';
import GuideBudget from './guide/nos_guides/guide_budget';
import GuideEpargne from './guide/nos_guides/guide_epargne';
import GuideInvestissement from './guide/nos_guides/guide_investissement';
import ConseilsFiscalite from './guide/nos_guides/conseils_ficalite';
import StrategiesInvestissement from './guide/nos_guides/strategies_investissement';
import ConseilsRetraite from './guide/nos_guides/conseils_retraite';
import Page3 from './actualites/page3';
import ArticleUn from './actualites/Articles/Article_un';
import ArticleDeux from './actualites/Articles/Article_deux';
import Page4 from './ressources/page4';
import CalculateurEpargne from './calculateur_epargne/calculateurEpargne';
import SimulateurInvest from './simulateur_investissement/simulateurInvestissement';
import Mentionslegales from './accueil/MentionsLegales';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/formation-complete" element={<FormationComplete />} />
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
    </BrowserRouter>
  );
}

export default App;

