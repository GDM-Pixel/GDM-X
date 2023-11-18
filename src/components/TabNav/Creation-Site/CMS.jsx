import React from 'react';

function CMS() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>05. CMS</h2>
                <p>Les systèmes de gestion de contenus sont au coeur de nos services chez GDM-Pixel. Ils offrent une gestion de contenu intuitive pour que vous puissiez facilement actualiser votre site.</p><p>Nous intégrons des solutions CMS flexibles et évolutives, assurant une maintenance et une mise à jour aisées.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/cms.webp" alt="CMS" />
            </div>
        </div>
    );
}

export default CMS;