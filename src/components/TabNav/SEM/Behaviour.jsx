import React from 'react';

function Behaviour() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>04. Transformation</h2>
                <p>Nos outils nous permettent également de suivre de près les internautes sur votre site, grâce à l’analyse de sessions et la création de cartes de chaleurs.</p>
                <p> Il s’agit de mettre en place des outils permettant de mesurer quelles sont les “zones chaudes” de votre site, et détecter les zones qui, au contraires, sont peu engageantes pour le visiteur.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/heat-optimisation.webp" alt="Création de Heatmap" />
            </div>
        </div>
    );
}

export default Behaviour;