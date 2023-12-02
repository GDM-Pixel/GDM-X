import React from 'react';

function Analyse() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>01. Analyse</h2>
                <p>Nous effectuons des recherches détaillées sur les mots-clés et les tendances du marché pour identifier les opportunités.</p>
                <p>Cette étape permet d’aligner vos objectifs commerciaux avec les attentes et besoins de votre audience, et permet de créer une stratégie porteuse pour votre visibilité : il s’agit donc bien d’établir des fondations solides pour votre réussite.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/team-charts-audit-sem.webp" alt="Analyse de contenus" />
            </div>
        </div>
    );
}

export default Analyse;