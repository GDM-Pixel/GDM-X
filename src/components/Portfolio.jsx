import React, { useRef, useEffect } from "react";
import * as FancyappsUI from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Fancyboxbox() {

  useEffect(() => {
    // Initialise Fancybox
    FancyappsUI.Fancybox.bind('.portfoliome', {
      // vos options FancyBox ici si nécessaire
    });
  }, []);
  
  return (
    <div className="portfoliogrid grid grid-cols-4 mx-auto gap-6 px-6">
      <div className="portfoliome" href="/img/anahata-yoga.webp" data-fancybox="gdmportfolio" data-src="/img/anahata-yoga.webp">
        <img className="pfthumb" alt="Anahata Yoga" src="/img/anahata-yoga-thumb.webp" data-lazy-type="image" data-src="/img/anahata-yoga-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/atout-chat-chien.webp">
        <img className="pfthumb" alt="Atout chat et Chien" src="/img/atout-chat-chien-thumb.webp" data-lazy-type="image" data-src="/img/atout-chat-chien-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/become-devenir.webp">
        <img className="pfthumb" alt="Become Devenir" src="/img/become-devenir-thumb.webp" data-lazy-type="image" data-src="/img/become-devenir-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/cabourg-par-amour.webp">
        <img className="pfthumb" alt="Cabourg par amour" src="/img/cabourg-par-amour-thumb.webp" data-lazy-type="image" data-src="/img/cabourg-par-amour-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/cime-avocats.webp">
        <img className="pfthumb" alt="Cime Avocats" src="/img/cime-avocats-thumb.webp" data-lazy-type="image" data-src="/img/cime-avocats-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/cokitec.webp">
        <img className="pfthumb" alt="Cokitec" src="/img/cokitec-thumb.webp" data-lazy-type="image" data-src="/img/cokitec-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/evazio.webp">
        <img className="pfthumb" alt="Evazio" src="/img/evazio-thumb.webp" data-lazy-type="image" data-src="/img/evazio-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/fun-formation.webp">
        <img className="pfthumb" alt="Fun Formation" src="/img/fun-formation-thumb.webp" data-lazy-type="image" data-src="/img/fun-formation-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/hotel-le-havre.webp">
        <img className="pfthumb" alt="Hotel Le Havre" src="/img/hotel-le-havre-thumb.webp" data-lazy-type="image" data-src="/img/hotel-le-havre-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/ims-cameroun.webp">
        <img className="pfthumb" alt="IMS Cameroun" src="/img/ims-cameroun-thumb.webp" data-lazy-type="image" data-src="/img/ims-cameroun-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/les-clapiottes.webp">
        <img className="pfthumb" alt="Les Clapiottes" src="/img/les-clapiottes-thumb.webp" data-lazy-type="image" data-src="/img/les-clapiottes-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/medecine-esthetique.webp">
        <img className="pfthumb" alt="Médecine Esthétique" src="/img/medecine-esthetique-thumb.webp" data-lazy-type="image" data-src="/img/medecine-esthetique-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/nbe-avocats.webp">
        <img className="pfthumb" alt="NBE Avocats" src="/img/nbe-avocats-thumb.webp" data-lazy-type="image" data-src="/img/nbe-avocats-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/no-stress-guru.webp">
        <img className="pfthumb" alt="No Stress Guru" src="/img/no-stress-guru-thumb.webp" data-lazy-type="image" data-src="/img/no-stress-guru-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/provaches.webp">
        <img className="pfthumb" alt="Provaches" src="/img/provaches-thumb.webp" data-lazy-type="image" data-src="/img/provaches-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/renov-et-tradition.webp">
        <img className="pfthumb" alt="Renov et Tradition" src="/img/renov-et-tradition-thumb.webp" data-lazy-type="image" data-src="/img/renov-et-tradition-thumb.webp" />
      </div>
      <div className="portfoliome" data-fancybox="gdmportfolio" data-src="/img/rue-du-print.webp">
        <img className="pfthumb" alt="Rue du print" src="/img/rue-du-print-thumb.webp" data-lazy-type="image" data-src="/img/rue-du-print-thumb.webp" />
      </div>
    </div>);
}

export default Fancyboxbox;