import React from 'react';

function Responsive() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>03. Responsive Web Design</h2>
                <p>Le responsive design est essentiel chez GDM-Pixel. Nous nous assurons que votre site s'adapte parfaitement à tous les appareils, améliorant l'expérience utilisateur.</p><p>Nos créations web sont conçues pour être esthétiques et fonctionnelles sur toute taille d'écran.</p>
</div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/responsive.webp" alt="Création de site web responsive" />
            </div>
        </div>
    );
}

export default Responsive;