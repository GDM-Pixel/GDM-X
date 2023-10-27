import React from 'react';

function Webmarketing() {
    return (
        <div className="flex flex-row-reverse container max-w-5xl gap-6">
            <div className="col w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>Webmarketing</h2>
                <p>Le webmarketing est au cœur de la croissance en ligne. Il s'agit de bien plus que de simples publicités: c'est l'art d'atteindre, d'engager et de convertir votre audience cible à travers divers canaux numériques.</p> <p>Nous élaborons des stratégies sur mesure, combinant le marketing de contenu, les médias sociaux, l'e-mail marketing et plus encore pour créer une présence en ligne cohérente et puissante pour votre marque. </p>
                <a className="cta blue self-start" href="/webmarketing/">En savoir plus</a>
            </div>
            <div className="col w-1/2 flex flex-col justify-center"> <img className="rounded-md" src="/img/webmarketing.webp" alt="Webmarketing" /></div>
        </div>
    );
}

export default Webmarketing;