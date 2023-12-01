import React from 'react';

function ONPage() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>02. Optimisation "On Page"</h2>
                <p>Nous nous concentrons sur l'amélioration des éléments internes de votre site web pour augmenter sa pertinence et sa visibilité. Cela inclut l'optimisation des balises meta, des titres, des mots-clés, de la structure des URL, et l'optimisation de la vitesse de chargement des pages.</p><p>Ces ajustements assurent que votre site plait à la fois aux moteurs de recherche et à vos visiteurs.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/copywriting.webp" alt="ONPage" />
            </div>
        </div>
    );
}

export default ONPage;