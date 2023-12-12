import React, { useRef, useEffect, useState } from "react";
import * as FancyappsUI from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { gsap } from "gsap";

function Fancyboxbox() {
  const [displayCount, setDisplayCount] = useState(8);
  useEffect(() => {
    // Initialise Fancybox
    FancyappsUI.Fancybox.bind('.portfoliome', {
      wheel: "slide"  // vos options FancyBox ici si nécessaire
    });

    // Anime les 8 premiers éléments
    gsap.to('.portfoliome', {
      duration: 0.6,
      opacity: 1,
      x: 0,
      scale: 1,
      stagger: 0.1,
      ease: " back.out(.6)"
    });
  }, []);

  const showAll = () => {
    setDisplayCount(Infinity);
    setButtonClicked(true);
    // Ajoutez un petit délai pour permettre aux nouveaux éléments de s'ajouter au DOM
    setTimeout(() => {
      gsap.to('.portfoliome', {
        duration: 0.6,
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.1,
        ease: "back.out(.6)"
      });
    }, 50); // 100 ms de délai
  };

  

  const [buttonClicked, setButtonClicked] = useState(false);
  // Données du portfolio
  const portfolioData = [
    { src: "/img/anahata-yoga.webp", alt: "Anahata Yoga", thumb: "/img/anahata-yoga-thumb.webp" },
    { src: "/img/atout-chat-chien.webp", alt: "Anahata Yoga", thumb: "/img/atout-chat-chien-thumb.webp" },
    { src: "/img/become-devenir.webp", alt: "Anahata Yoga", thumb: "/img/become-devenir-thumb.webp" },
    { src: "/img/cabourg-par-amour.webp", alt: "Anahata Yoga", thumb: "/img/cabourg-par-amour-thumb.webp" },
    { src: "/img/cime-avocats.webp", alt: "Anahata Yoga", thumb: "/img/cime-avocats-thumb.webp" },
    { src: "/img/evazio.webp", alt: "Anahata Yoga", thumb: "/img/evazio-thumb.webp" },
    { src: "/img/fun-formation.webp", alt: "Anahata Yoga", thumb: "/img/fun-formation-thumb.webp" },
    { src: "/img/hotel-le-havre.webp", alt: "Anahata Yoga", thumb: "/img/hotel-le-havre-thumb.webp" },
    { src: "/img/ims-cameroun.webp", alt: "Anahata Yoga", thumb: "/img/ims-cameroun-thumb.webp" },
    { src: "/img/les-clapiottes.webp", alt: "Anahata Yoga", thumb: "/img/les-clapiottes-thumb.webp" },
    { src: "/img/medecine-esthetique.webp", alt: "Anahata Yoga", thumb: "/img/medecine-esthetique-thumb.webp" },
    { src: "/img/nbe-avocats.webp", alt: "Anahata Yoga", thumb: "/img/nbe-avocats-thumb.webp" },
    { src: "/img/no-stress-guru.webp", alt: "Anahata Yoga", thumb: "/img/no-stress-guru-thumb.webp" },
    { src: "/img/provaches.webp", alt: "Anahata Yoga", thumb: "/img/provaches-thumb.webp" },
    { src: "/img/renov-et-tradition.webp", alt: "Anahata Yoga", thumb: "/img/renov-et-tradition-thumb.webp" },
    { src: "/img/rue-du-print.webp", alt: "Anahata Yoga", thumb: "/img/rue-du-print-thumb.webp" },
  ];

  return (
    <div className="portfoliocontainer">
      <div className="portfoliogrid grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-auto gap-6 px-6 max-w-[1900px]">
        {portfolioData.slice(0, displayCount).map((item, index) => (

          <div key={index} className="portfoliome w-full" data-fancybox="gdmportfolio" data-src={item.src}>
            <img className="pfthumb w-full" width="435" height="245" alt={item.alt} src={item.thumb} data-lazy-type="image" data-src={item.thumb} loading="lazy" />
          </div>
        ))}
      </div>
 
      <button
        className={`cta sktn ${buttonClicked ? "grey" : "red"}`}
        onClick={showAll}
        aria-label="Afficher tout"
      >
        {buttonClicked ? "Le portfolio est chargé" : "Afficher tout"}
      </button>
      
        {/* ligne 35 : Ajoutez un écouteur d'événements onClick */}
      <style>{`
        .portfoliocontainer {
          text-align:center;
        }
        .portfoliocontainer button {
          margin-top:40px;
          display:inline-block;
        }
        .portfoliome {
         opacity: 0;
         transform: translateX(-100px) scale(0.8);
        }
        .portfoliocontainer button.grey {
  background-color: grey;pointer-events:none;cursor:default;
}
      `}</style>
    </div>
  );
}

export default Fancyboxbox;