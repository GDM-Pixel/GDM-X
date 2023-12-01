import React from 'react';

function Strategie() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>01. Stratégie</h2>
                <p>Nous établissons des stratégies de publicité en ligne ciblées pour maximiser la visibilité de votre marque. Notre approche commence par une compréhension approfondie de votre public cible, de vos objectifs commerciaux et de votre budget.</p>
                <p>De Google Ads à Bing Ads, nous optimisons chaque campagne pour un impact maximal.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/cms.webp" alt="Stratégie" />
            </div>
        </div>
    );
}

export default Strategie;