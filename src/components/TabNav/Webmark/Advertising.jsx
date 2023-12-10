import React from 'react';

function Ecommerce() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>02. Publicité</h2>
                <p>La publicité en ligne révolutionne la manière de toucher les audiences. Grâce à des outils ciblés, elle permet une interaction directe avec le consommateur.</p>
                <p>Créez des campagnes impactantes, mesurez en temps réel leur efficacité et ajustez pour une performance optimale. <strong>Entrez dans l'ère du marketing digital !</strong></p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center"> <img className="rounded-md" src="/img/advertising.webp" alt="Création de site E-commerce" /></div>
        </div>
    );
}

export default Ecommerce;