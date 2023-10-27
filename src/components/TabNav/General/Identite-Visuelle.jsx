import React from 'react';

function IdentiteVisuelle() {
    return (
        <div className="flex flex-row-reverse container max-w-5xl gap-6">
            <div className="col w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>Identité visuelle</h2>
                <p>L'identité visuelle est bien plus qu'un logo. C'est la première impression, la signature de votre entreprise dans le monde numérique. Nous créons des identités percutantes, mémorables et cohérentes avec votre marque. </p><p>Du choix des couleurs au design du logo, en passant par les supports imprimés, tout est pensé pour refléter vos valeurs et votre message.</p>
                <a className="cta blue self-start" href="/identite-visuelle/">En savoir plus</a>
            </div>
            <div className="col w-1/2 flex flex-col justify-center"> <img className="rounded-md" src="/img/identitevisuelle.webp" alt="Travail sur l'identité visuelle" /></div>
        </div>
    );
}

export default IdentiteVisuelle;