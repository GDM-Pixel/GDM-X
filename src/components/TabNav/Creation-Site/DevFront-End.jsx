import React from 'react';

function Frontenddev() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>02. Développement Front-End</h2>
                <p>Le développement front-end est au coeur de nos créations de sites web réactifs et dynamiques. Nous écrivons un code propre et moderne pour une interactivité et une compatibilité sans faille.</p><p>Nos développeurs transforment le design en une expérience utilisateur interactive, engageante et optimisée pour le référencement.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/devfrontend.webp" alt="Développement front end" />
            </div>
        </div>
    );
}

export default Frontenddev;