import React from 'react';

function Reporting() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>06. Reporting</h2>
                <p>Un bon reporting SEO mesure le succès et guide les stratégies futures. Nous fournissons des rapports détaillés et faciles à comprendre, mettant en lumière les performances de votre site.</p><p>Nos analyses vous aident à comprendre clairement où vous en êtes et où vous allez. Vos accès sont sécurisés et ne sont communiqués à aucun tiers.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/analytics.webp" alt="Reporting" />
            </div>
        </div>
    );
}

export default Reporting;