import React from 'react';

function Veille() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>05. Veille</h2>
                <p>La veille SEO consiste à suivre les tendances et mises à jour des algorithmes des moteurs. Nous restons informés des dernières évolutions pour vous assurer que votre stratégie SEO reste efficace. </p><p>Notre veille inclut l'analyse des mises à jour algorithmiques et l'évolution des comportements des utilisateurs en ligne, pour garder votre site à la pointe du progrès.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/veille.webp" alt="Veille" />
            </div>
        </div>
    );
}

export default Veille;