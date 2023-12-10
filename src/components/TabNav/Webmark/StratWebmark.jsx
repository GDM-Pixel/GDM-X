import React from 'react';

function SiteWeb() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>01. Stratégie</h2>
                <p>Le marketing de contenu n'est pas seulement une question de mots, c'est une stratégie pour établir votre autorité, et engager votre audience. </p> <p>Nous planifions et créons du contenu de qualité qui informe, divertit, convertit et fidélise votre audience : <strong>nous racontons l'histoire de votre marque de manière inoubliable.</strong></p>
               
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img className="rounded-md" src="/img/webmarkstrat.webp" alt="Stratégie webmarketing" />
            </div>
        </div>
    );
}

export default SiteWeb;