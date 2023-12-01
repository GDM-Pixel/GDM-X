import React from 'react';

function ABTesting() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>03. AB Testing</h2>
                <p>En testant deux versions (A et B) d'une page web, d'une annonce ou d'un email, nous déterminons quelle version performe le mieux en termes de clics, conversions, et engagement utilisateur.</p>
                <p>Ce processus méthodique nous aide à comprendre précisément ce qui résonne le mieux avec votre public cible. </p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/cms.webp" alt="AB Testing" />
            </div>
        </div>
    );
}

export default ABTesting;