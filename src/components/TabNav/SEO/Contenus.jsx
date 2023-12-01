import React from 'react';

function Contenus() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>03. Contenus</h2>
                <p>Le contenu est roi en SEO. Nous créons des contenus riches et pertinents, ciblant à la fois votre audience et les moteurs de recherche. Notre approche est fondée sur une recherche approfondie des mots-clés et une compréhension claire de votre audience cible.</p><p>Qu'il s'agisse d'articles, de vidéos ou d'infographies, nous produisons un contenu qui attire et retient l'attention.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/contenus.webp" alt="Contenus" />
            </div>
        </div>
    );
}

export default Contenus;