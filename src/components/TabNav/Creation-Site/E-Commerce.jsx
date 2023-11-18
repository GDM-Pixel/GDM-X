import React from 'react';

function Ecommerce2() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>06. E-commerce</h2>
                <p>Spécialistes de l'e-commerce, nous concevons des boutiques en ligne ergonomiques, sécurisées et performantes, conçues pour maximiser vos conversions.</p><p>Nous intégrons les meilleures pratiques UX pour une expérience d'achat en ligne sans faille.</p>
</div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/ecommerce2.webp" alt="Création de site E-commerce" />
            </div>
        </div>
    );
}

export default Ecommerce2;