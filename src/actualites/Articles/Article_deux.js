import React from 'react';
import './Articles.css';

function TarifsTrump() {
  return (
    <article className="article-actualites">
      <h1>TRUMP RELANCE LA GUERRE</h1>
      <p className="subtitle">
        Donald Trump impose des tarifs douaniers comme levier de négociation internationale.
      </p>

      <section className="article-section">
        <h2>Introduction</h2>
        <p>
          Dans un contexte économique mondial marqué par des tensions commerciales accrues, Donald Trump
          a récemment intensifié sa stratégie protectionniste en imposant de nouveaux tarifs douaniers. Ces mesures visent notamment
          les importations en provenance de l'Union européenne, du Canada, du Mexique et de l'Inde, et sont perçues comme des leviers
          de négociation dans les relations commerciales internationales.
        </p>
      </section>

      <section className="article-section">
        <h2>Retour sur les mesures tarifaires récentes</h2>
        <p>
          Le 1er février 2025, Donald Trump a signé des décrets imposant des tarifs de 25 % sur l'ensemble des produits en provenance
          du Mexique et du Canada, à l'exception des exportations canadiennes de pétrole et d'énergie, qui sont soumises à un tarif de 10 %.
          Ces mesures ont été justifiées par la nécessité de protéger l'industrie américaine et de lutter contre l'afflux de drogues
          illicites transitant par ces pays.
        </p>
      </section>
    
      <section className="article-section">
        <h2>Réactions internationales</h2>
        <ul>
          <li><strong>Union européenne :</strong> L'UE peine à entamer un dialogue avec Trump pour éviter ces nouveaux tarifs. Face aux taxes sur l'acier et l'aluminium, elle envisage des contre-mesures visant notamment le bourbon américain.</li>
          <li><strong>Canada et Mexique :</strong> Ces pays, directement touchés par les nouveaux tarifs, préparent des mesures de rétorsion économiques pour défendre leurs industries.</li>
          <li><strong>Inde :</strong> Trump a affirmé que l'Inde devrait réduire ses propres taxes sur les produits américains sous peine de subir des représailles tarifaires dès le 2 avril.</li>
        </ul>
      </section>
      
      <section className="article-section">
        <h2>Perspectives économiques</h2>
        <p>
          Ces décisions ont immédiatement provoqué des réactions sur les marchés financiers, augmentant la volatilité et alimentant
          les craintes d'une escalade protectionniste. De plus, Trump a suggéré que la Réserve fédérale devrait réduire les taux d'intérêt
          pour compenser l'impact des tarifs sur l'économie américaine.
        </p>
      </section>

      <section className="article-section">
        <h2>Conclusion</h2>
        <p>
          En réintroduisant des barrières commerciales, Donald Trump réaffirme son approche protectionniste et bouleverse les
          dynamiques économiques mondiales. Alors que les partenaires commerciaux des États-Unis préparent leurs ripostes, la
          situation pourrait rapidement évoluer et impacter de nombreux secteurs économiques.
        </p>
      </section>

      <footer className="article-footer">
        <p>Publié le 20 mars 2025 </p>
      </footer>
    </article>
  );
}

export default TarifsTrump;
