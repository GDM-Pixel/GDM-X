import React from 'react';

function Performances() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>03. Performances</h2>
                <p>Nous utilisons des outils avancés pour suivre les performances de vos annonces. Cela inclut l'analyse des clics, du taux de conversion, et du coût par acquisition.</p>
                <p>Nous fournissons des rapports détaillés et des insights pour vous aider à comprendre le retour sur investissement de vos campagnes et à prendre des décisions éclairées.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/cms.webp" alt="Performances" />
            </div>
        </div>
    );
}

export default Performances;