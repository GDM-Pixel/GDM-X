import React from 'react';

function Gestion() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>04. Gestion</h2>
                <p>Nous employons des stratégies d'enchères sophistiquées pour maximiser l'utilisation de votre budget publicitaire. </p>
                <p>Cela inclut l'ajustement des enchères en fonction des heures de la journée, des jours de la semaine, de la géolocalisation et de la performance des annonces. Notre objectif est d'optimiser vos dépenses pour atteindre les meilleurs résultats possibles avec votre budget.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/charts-audit2-ref.webp" alt="Gestion des ressources" />
            </div>
        </div>
    );
}

export default Gestion;