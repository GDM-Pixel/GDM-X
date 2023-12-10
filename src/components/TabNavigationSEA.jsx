import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Strategie from './TabNav/SEA/Strategie.jsx';
import Annonces from './TabNav/SEA/Annonces.jsx';
import Performances from './TabNav/SEA/Performances.jsx';
import Gestion from './TabNav/SEA/Gestion.jsx';
import Retargeting from './TabNav/SEA/Retargeting.jsx';

function TabSliderSEA() {
    const [activeTabSEA, setActiveTabSEA] = useState('Strategie');

    // Fonction pour précharger une image
    const preloadImage = (imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
    };

    return (
        <div className="overflow-x-clip">
            <div className="overflow-x-clip">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 gap-6 items-center mb-6">
                    <div className={`tab p-6 border border-1 text-center ${activeTabSEA === 'Strategie' ? 'activeSEA' : ''}`} onClick={() => setActiveTabSEA('Strategie')} onMouseEnter={() => preloadImage('/img/working-audit-ref.webp')}>
                        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M144 0V16 32h16 16V64H160 144V96h48 32v32 24l-32.7 72H200h16v32H200 186.2l13.1 96H167l-13.1-96H102.1L89 352H56.7l13.1-96H56 40V224H56h8.7L32 152V128 96H64h48V64H96 80V32H96h16V16 0h32zM99.9 224h56.2L192 145.1V128H144 112 64v17.1L99.9 224zM32 480H224V463.3L191.2 416H64.8L32 463.3V480zM0 480V453.3L48 384H208l48 69.3V480v32H224 32 0V480zm350.1-64L320 470.2V480H480v-9.8L449.9 416H350.1zm118.6-32l2.3 4.1 40 72 1 1.8V464v16 24 8h-8H480 320 296h-8v-8V480 464v-2.1l1-1.8 40-72 2.3-4.1H336 464h4.7zM304 160h64 64 64 16v16 80 5.8l-3.7 4.5L472 309.8V336v16H440V336 304v-5.8l3.7-4.5L480 250.2V192H448v16 16H416V208 192H384v16 16H352V208 192H320v58.2l36.3 43.6 3.7 4.5V304v32 16H328V336 309.8l-36.3-43.5-3.7-4.5V256 176 160h16z"/></svg>
                        Strategie</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTabSEA === 'Annonces' ? 'activeSEA' : ''}`} onClick={() => setActiveTabSEA('Annonces')} onMouseEnter={() => preloadImage('/img/proofreading-ref.webp')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M416 44.2c0-7.2-8.8-10.8-13.8-5.5L378.4 63.9C336.5 108 282.7 138.4 224 151.5V328.5c58.7 13.1 112.5 43.4 154.4 87.6l23.8 25.1c5 5.3 13.8 1.7 13.8-5.5V44.2zM192 323.1V156.9c-5.8 .7-11.6 1.1-17.5 1.5L144.9 160l-.4 0H144 64c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h80 .4l.4 0 29.7 1.6c5.8 .3 11.7 .8 17.5 1.5zM379 16.7c24.9-26.3 69-8.7 69 27.5V435.8c0 36.2-44.2 53.8-69 27.5l-23.8-25.1c-43.3-45.7-101-74.9-163.1-82.8V456c0 30.9-25.1 56-56 56H120c-30.9 0-56-25.1-56-56V352c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64l79.6 0 29.2-1.6c69.4-3.9 134.6-34.1 182.4-84.5L379 16.7zM96 352V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V352.9l-16.4-.9H96zM496 192c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8 7.2-16 16-16z"/></svg>
                        Annonces</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTabSEA === 'Performances' ? 'activeSEA' : ''}`} onClick={() => setActiveTabSEA('Performances')} onMouseEnter={() => preloadImage('/img/seo-audit-ref.webp')}>
                        <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48V400c0 44.2 35.8 80 80 80H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48V48zM475.3 155.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L320 265.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 214.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0l144-144z"/></svg>
                        Performances</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTabSEA === 'Gestion' ? 'activeSEA' : ''}`} onClick={() => setActiveTabSEA('Gestion')} onMouseEnter={() => preloadImage('/img/charts-audit2-ref.webp')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512"><path d="M384 64c0 29.8-20.4 54.9-48 62V480H528c8.8 0 16 7.2 16 16s-7.2 16-16 16H320 112c-8.8 0-16-7.2-16-16s7.2-16 16-16H304V126c-27.6-7.1-48-32.2-48-62H112c-8.8 0-16-7.2-16-16s7.2-16 16-16H264.6C275.6 12.9 296.3 0 320 0s44.4 12.9 55.4 32H512c8.8 0 16 7.2 16 16s-7.2 16-16 16H384zm56.7 298.3C457.8 375.1 482.9 384 512 384s54.2-8.9 71.3-21.7C600.4 349.5 608 334.2 608 320H416v-1.6l0 .1V320c0 14.2 7.6 29.5 24.7 42.3zm71.3-215L426.3 288H597.7L512 147.3zM384 320v-1.6c0-14.7 4-29.1 11.7-41.6l92-151.2c5.2-8.5 14.4-13.7 24.3-13.7s19.2 5.2 24.3 13.7l92 151.2c7.6 12.5 11.7 26.9 11.7 41.6V320c0 53-57.3 96-128 96s-128-43-128-96zM32 320c0 14.2 7.6 29.5 24.7 42.3C73.8 375.1 98.9 384 128 384s54.2-8.9 71.3-21.7C216.4 349.5 224 334.2 224 320H32v-1.6l0 .1V320zm10.3-32H213.7L128 147.3 42.3 288zM128 416C57.3 416 0 373 0 320v-1.6c0-14.7 4-29.1 11.7-41.6l92-151.2c5.2-8.5 14.4-13.7 24.3-13.7s19.2 5.2 24.3 13.7l92 151.2c7.6 12.5 11.7 26.9 11.7 41.6V320c0 53-57.3 96-128 96zM320 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                        Gestion</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTabSEA === 'Retargeting' ? 'activeSEA' : ''}`} onClick={() => setActiveTabSEA('Retargeting')} onMouseEnter={() => preloadImage('/img/retargeting-ref.webp')}>
                       <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M256 480c123.7 0 224-100.3 224-224S379.7 32 256 32S32 132.3 32 256c0 10.4 .7 20.6 2.1 30.6l-9.6 3.5c-7.8 2.9-14.7 7.7-19.9 13.9C1.5 288.5 0 272.4 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256c-16.4 0-32.5-1.5-48.1-4.5c6.2-5.3 11-12.1 13.9-19.9l3.5-9.6c10 1.4 20.2 2.1 30.6 2.1zm-7.7-64.2L260 383.9c68.8-2.1 124-58.6 124-127.9c0-70.7-57.3-128-128-128c-69.3 0-125.8 55.1-127.9 124L96.2 263.7c-.1-2.6-.2-5.1-.2-7.7c0-88.4 71.6-160 160-160s160 71.6 160 160s-71.6 160-160 160c-2.6 0-5.2-.1-7.7-.2zM271 261.5l-79.2 215c-2.3 6.2-8.1 10.3-14.7 10.5s-12.6-3.8-15.1-9.9l-30.5-74L27.3 507.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L108.9 380.5 34.9 350c-6.1-2.5-10-8.5-9.9-15.1s4.3-12.4 10.5-14.7l215-79.2c5.9-2.2 12.4-.7 16.8 3.7s5.9 11 3.7 16.8zM143.3 360c3.9 1.6 7.1 4.8 8.7 8.7l24 58.2L229 283 85.1 336l58.2 24z"/></svg>
                        Retargeting</div>
                </div>
            </div>
            <div className="tab-content relative">
                <CSSTransition in={activeTabSEA === 'Strategie'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Strategie />
                </CSSTransition>

                <CSSTransition in={activeTabSEA === 'Annonces'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Annonces />
                </CSSTransition>

                <CSSTransition in={activeTabSEA === 'Performances'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Performances />
                </CSSTransition>

                <CSSTransition in={activeTabSEA === 'Gestion'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Gestion />
                </CSSTransition>

                <CSSTransition in={activeTabSEA === 'Retargeting'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Retargeting />
                </CSSTransition>


            </div>
            <style>{`
    
    .tab-content  {
        position: relative;  
        display:flex;
        flex-direction:column;
        justify-content:flex-start; 
        align-items:center;
    }
    .tab-content h2 {font-size:1.5rem;font-weight:bold;color:#FAFFFD;margin-bottom:15px;}
    .tab {background-color:transparent;transition:300ms ease all;font-weight:bold;color:#FAFFFD;border-style:dashed;
    display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;min-height:120px;}
    .tab svg {fill:#00B2CB;}
    .tab:hover {background-color:#E6607B;color:white;transition:300ms ease all;cursor:pointer;}
    .tab:hover svg {fill:white;}
    .tab.activeSEA {background-color:#D62246;color:white;transition:300ms ease all;border-style:solid;}
    .tab.activeSEA svg {fill:white;}
    .tab-content.active {border:none;}
    .tab-content .flex-col img {width:100%;height:100%;object-fit:cover;}
   .slidetransit-enter {
    transform: translateX(250px);
    opacity: 0;
    width:100%;
    height:100%;
    }
    .slidetransit-enter-active {
    transform: translateX(0);
    opacity: 1; 
    transition-delay: 300ms;
    transition: 300ms ease all;
    }
    .slidetransit-exit {
    transform: translateX(0);
    opacity: 1;
    position:absolute;
    width:100%;
    height:100%;
    } 
    .slidetransit-exit-active {
    transform: translateX(-250px);
    opacity: 0;
    position:absolute;
    transition: 300ms ease all;
    }
    .tabslidercontent p {margin-bottom:10px;color:#FAFFFD;}
    .tabslidercontent p:last-of-type {margin-bottom:20px;}
`}</style>
        </div>
    );
}

export default TabSliderSEA;
