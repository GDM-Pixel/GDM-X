import React from 'react';

function UXUI() {
    return (
        <div className="flex lg:flex-row-reverse flex-col container max-w-5xl gap-6">
            <div className="col lg:w-1/2 tabslidercontent flex flex-col justify-center">
                <h2>01. UX / UI</h2>
                <p>Chez GDM-Pixel, nous transformons votre site en expérience captivante. Nous concevons des parcours utilisateurs fluides et des interfaces élégantes, pour un site qui convertit.</p><p>Nos designs allient forme et fonction, assurant une navigation intuitive et une interaction sans effort pour vos visiteurs, ainsi que des temps de chargement extrêmement brefs !</p>
            </div>
            <div className="col lg:w-1/2 flex flex-col justify-center">
                <img width="468" height="262" className="rounded-md" src="/img/uxui.webp" alt="UX et UI" />
            </div>
        </div>
    );
}

export default UXUI;