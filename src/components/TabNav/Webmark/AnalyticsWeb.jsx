import React from 'react';

function AnalyticsWeb() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>06. Analytics</h2>
                <p>En interprétant les données de trafic web, nous dévoilons des insights clés pour affiner votre stratégie en ligne. Nos analyses approfondies vous aident à comprendre le comportement des visiteurs, optimiser l'expérience utilisateur.</p><p><strong>Vous prenez ainsi des décisions basées sur des données probantes pour un impact maximal.</strong></p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center"> <img className="rounded-md" src="/img/analyticswebmark.webp" alt="AnalyticsWeb" /></div>
        </div>
    );
}

export default AnalyticsWeb;