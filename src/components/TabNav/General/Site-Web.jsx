import React from 'react';

function SiteWeb() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>Création de Site Web</h2>
                <p>La création de site web est une affaire de collaboration et d'expertise. Nous prenons le temps de comprendre vos objectifs, votre marque et vos clients pour concevoir une solution web unique et efficace.</p> <p>Alliant design intuitif, fonctionnalités sur mesure et optimisation SEO, nous construisons des sites performants, conçus pour convertir les visiteurs en clients.</p>
                <a className="cta blue self-start" href="/creation-site/">En savoir plus</a>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img className="rounded-md" src="/img/siteweb.webp" alt="Création de site web" />
            </div>
        </div>
    );
}

export default SiteWeb;