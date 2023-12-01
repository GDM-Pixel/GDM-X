import React from 'react';

function Annonces() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>02. Annonces</h2>
                <p>Nous concevons des annonces visuellement attrayantes et rédigeons des copies publicitaires persuasives qui résonnent avec votre public cible.</p>
                <p>Notre expertise comprend l'optimisation des mots-clés, le ciblage démographique et comportemental, et l'utilisation de techniques d'appel à l'action efficaces pour améliorer les taux de clics et de conversion.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/cms.webp" alt="Annonces" />
            </div>
        </div>
    );
}

export default Annonces;