import React from 'react';

function Suivi() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>02. Suivi</h2>
                <p>Nous utilisons des métriques clés pour mesurer le succès et apportons des ajustements continus pour optimiser les performances.</p>
                <p>Nos rapports détaillés vous offrent des insights clairs sur le retour sur investissement de vos campagnes SEM, et nous permettent de mettre en place plusieurs stratégies pour améliorer votre taux de conversion.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/cms.webp" alt="Suivi" />
            </div>
        </div>
    );
}

export default Suivi;