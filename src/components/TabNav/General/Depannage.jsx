import React from 'react';

function Depannage() {
    return (
        <div className="flex flex-row-reverse container max-w-5xl gap-6">
            <div className="col w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>Maintenance</h2>
                <p>Un site en panne ou un bug inattendu peuvent nuire à votre image et coûter cher en termes de business. C'est pourquoi nous offrons un service de dépannage réactif et efficace.</p> <p>Notre équipe d'experts intervient rapidement pour résoudre le problème et remettre votre site ou votre application en ordre de marche. Car nous savons à quel point chaque minute compte. </p>
                <a className="cta blue self-start" href="/maintenance-depannage/">En savoir plus</a>
            </div>
            <div className="col w-1/2  flex flex-col justify-center"> <img className="rounded-md" src="/img/maintenance.webp" alt="Maintenance de site web" /></div>
        </div>
    );
}

export default Depannage;