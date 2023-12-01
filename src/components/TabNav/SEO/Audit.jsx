import React from 'react';

function Audit() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>01. Audit</h2>
                <p>L'audit de site permet de comprendre les forces et faiblesses de votre présence en ligne.</p>
                <p>Nous scrutons minutieusement chaque aspect de votre site, depuis sa structure jusqu'à son contenu, en passant par ses performances techniques. Nous identifions les opportunités d'optimisation et dressons une feuille de route claire pour améliorer votre classement dans les moteurs de recherche.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/audit-seo.webp" alt="Audit SEO" />
            </div>
        </div>
    );
}

export default Audit;