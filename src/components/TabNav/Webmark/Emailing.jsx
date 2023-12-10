import React from 'react';

function Emailing() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>05. E-mailing</h2>
                <p>En créant des campagnes personnalisées et ciblées, nous captivons votre audience directement dans leur boîte de réception.</p><p>Nos stratégies renforcent votre relation client et stimulent l'engagement, <strong>pour des résultats mesurables et un retour sur investissement optimal.</strong></p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center"> <img className="rounded-md" src="/img/emailing.webp" alt="Maintenance de site web" /></div>
        </div>
    );
}

export default Emailing;