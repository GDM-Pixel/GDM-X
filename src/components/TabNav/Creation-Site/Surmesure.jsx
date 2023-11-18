import React from 'react';

function Surmesure() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>04. Création Sur Mesure</h2><p>La personnalisation est la clé. Votre site sera conçu sur mesure, reflétant l'unicité de votre marque et répondant à vos besoins spécifiques.</p><p>Nous offrons des solutions web uniques pour vous démarquer dans le paysage numérique.</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/surmesure.webp" alt="Création de site web sur mesure" />
            </div>
        </div>
    );
}

export default Surmesure;