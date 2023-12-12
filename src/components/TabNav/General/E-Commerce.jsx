import React from 'react';

function Ecommerce() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>Boutique E-Commerce</h2>
                <p>Dans un monde numérique en constante évolution, il est nécessaire d'avoir une présence en ligne solide. Notre expertise en matière d'e-commerce vous offre une plateforme robuste, que ce soit avec Prestashop ou Woocommerce. </p>
                    <p>De la personnalisation complète de l'interface à la gestion d'un vaste catalogue produits, nous façonnons votre vision en un site e-commerce dynamique et engageant.</p>
                <a className="cta blue self-start" data-image-src="/img/HeroEcommerce.webp" href="/creation-site/creer-ecommerce/">En savoir plus</a>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center"> <img className="rounded-md" src="/img/ecommerce.webp" alt="Création de site E-commerce" /></div>
        </div>
    );
}
export default Ecommerce;