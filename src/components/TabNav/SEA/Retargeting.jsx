import React from 'react';

function Retargeting() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>05. Retargeting</h2>
                <p>Nous créons des campagnes de retargeting ciblées qui diffusent des annonces personnalisées aux utilisateurs qui ont déjà interagi avec votre site mais n'ont pas effectué l'action souhaitée (comme un achat).</p>
                <p>En affichant des annonces pertinentes sur différentes plateformes et réseaux publicitaires, nous augmentons les chances de conversion en ramenant ces visiteurs.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/cms.webp" alt="Retargeting" />
            </div>
        </div>
    );
}

export default Retargeting;