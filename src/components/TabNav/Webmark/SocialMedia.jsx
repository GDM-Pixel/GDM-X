import React from 'react';

function SocialMedia() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>04. SMO</h2>
                <p>En optimisant vos profils sur les réseaux sociaux et en créant du contenu engageant, nous vous aidons à construire une communauté fidèle, à accroître votre notoriété et à générer du trafic de qualité vers votre site. </p><p><strong>Connectez et convertissez via les réseaux sociaux !</strong></p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center"> <img className="rounded-md" src="/img/social-media.webp" alt="Travail sur l'identité visuelle" /></div>
        </div>
    );
}

export default SocialMedia;