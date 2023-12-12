import React from 'react';

function SeoSeaSem() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>SEO / SEA / SEM</h2>
                <p>Sur internet, la visibilité est la clé. Nos services englobent le SEO, pour un référencement naturel optimisé, le SEA, pour des campagnes publicitaires ciblées qui maximisent votre ROI, et le SEM, combinant les deux pour une stratégie de marketing en ligne complète. </p><p>Nous nous basons sur des données concrètes pour élaborer des stratégies adaptées à vos besoins. </p>
                <a className="cta blue self-start" data-image-src="/img/SEOHero.webp" href="/referencement/">En savoir plus</a>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center"> <img className="rounded-md" src="/img/seo.webp" alt="SEO, SEA et SEM" /></div>
        </div>
    );
} 

export default SeoSeaSem;