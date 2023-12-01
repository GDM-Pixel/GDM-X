import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Audit from './TabNav/SEO/Audit.jsx';
import ONPage from './TabNav/SEO/On-Page.jsx';
import Contenus from './TabNav/SEO/Contenus.jsx';
import Netlinking from './TabNav/SEO/Netlinking.jsx';
import Veille from './TabNav/SEO/Veille.jsx';
import Reporting from './TabNav/SEO/Reporting.jsx';

function TabSliderSEO() {
    const [activeTab, setActiveTab] = useState('Audit');

    return (
        <div className="overflow-x-clip">
            <div className="container wide xs:w-full overflow-x-clip">
                <div className="grid lg:grid-cols-6 md:grid-cols-3 xs:grid-cols-2 gap-6 items-center mb-6">
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Audit' ? 'active' : ''}`} onClick={() => setActiveTab('Audit')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M32 32V48 448H496h16v32H496 16 0V464 48 32H32zM160 224v16 96 16H128V336 240 224h32zm96-80v96 16H224V240 144 128h32v16zm96-80V80v96 16H320V176 80 64h32zm96 16V336v16H416V336 80 64h32V80z" /></svg>

                        Audit</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'ONPage' ? 'active' : ''}`} onClick={() => setActiveTab('ONPage')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="45" height="40" fill="none"><path d="M381.5 4l-4.7 15.3-144 464L228 498.5l30.6 9.5 4.7-15.3 144-464L412 13.5 381.5 4zM160.7 105.4l-11.7 11L13 244.4 .7 256 13 267.7l136 128 11.7 11 21.9-23.3-11.7-11L47.3 256 171 139.6l11.7-11-21.9-23.3zm296.7 23.9l12 10.6c27.8 24.7 47.5 44 67.4 63.5l0 0c16.8 16.4 33.7 32.9 55.5 52.8L469 372.3l-11.7 11 21.9 23.3 11.7-11 136-128 12.7-12L626.6 244c-27.8-24.7-47.5-44-67.4-63.5l0 0C539.2 161 519 141.3 490.6 116l-12-10.6-21.3 23.9z" /></svg>

                        On Page</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Contenus' ? 'active' : ''}`} onClick={() => setActiveTab('Contenus')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M32 32H224l48 64H480h32v32V448v32H480 32 0V448 64 32H32zm240 96H256l-9.6-12.8L208 64H32V448H480V128H272zM112 272v32h32V272H112zM80 240h32 32 32v32 32 32H144 112 80V304 272 240zm160 64h32V272H240v32zm-32-64h32 32 32v32 32 32H272 240 208V304 272 240zm192 32H368v32h32V272zm-32-32h32 32v32 32 32H400 368 336V304 272 240h32z" /></svg>
                        Contenus</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Netlinking' ? 'active' : ''}`} onClick={() => setActiveTab('Netlinking')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512"><path d="M128 64C57.3 64 0 121.3 0 192s57.3 128 128 128h32V288H128c-53 0-96-43-96-96s43-96 96-96H304.1c52.9 0 95.9 42.9 95.9 95.9c0 50.3-38.9 92-89 95.6l-8.1 .6 2.3 31.9 8.1-.6C380.2 314.6 432 258.9 432 191.9C432 121.2 374.8 64 304.1 64H128zM512 448c70.7 0 128-57.3 128-128s-57.3-128-128-128H480v32h32c53 0 96 43 96 96s-43 96-96 96H335.9c-52.9 0-95.9-42.9-95.9-95.9c0-50.3 38.9-92 89-95.6l8.1-.6L334.9 192l-8.1 .6C259.8 197.4 208 253.1 208 320.1C208 390.8 265.2 448 335.9 448H512z" /></svg>
                        Netlinking</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Veille' ? 'active' : ''}`} onClick={() => setActiveTab('Veille')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 576 512"><path d="M118 373c-39.8-38.3-67.9-83.7-83.2-117c15.3-33.3 43.4-78.6 83.2-117c44.6-42.9 101.5-75 170-75s125.4 32.1 170 75c39.8 38.3 67.9 83.7 83.2 117c-15.3 33.3-43.4 78.6-83.2 117c-44.6 42.9-101.5 75-170 75s-125.4-32.1-170-75zM288 480c158.4 0 258-149.3 288-224C546 181.3 446.4 32 288 32S30 181.3 0 256c30 74.7 129.6 224 288 224zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>
                        Veille</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Reporting' ? 'active' : ''}`} onClick={() => setActiveTab('Reporting')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="53" viewBox="0 0 384 512"><path d="M32 480V32H192V176v16h16H352V480H32zM224 37.3L346.7 160H224V37.3zM232 0H32 0V32 480v32H32 352h32V480 152L232 0zm51.3 294l11.3-11.3L272 260l-11.3 11.3-95.4 95.4-42-42L112 313.4 89.4 336l11.3 11.3L154 400.6 165.3 412l11.3-11.3L283.3 294z" /></svg>
                        Reporting</div>
                </div>
            </div>

            <div className="tab-content relative">
                <CSSTransition in={activeTab === 'Audit'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Audit />
                </CSSTransition>

                <CSSTransition in={activeTab === 'ONPage'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <ONPage />
                </CSSTransition>

                <CSSTransition in={activeTab === 'Reporting'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Reporting />
                </CSSTransition>

                <CSSTransition in={activeTab === 'Contenus'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Contenus />
                </CSSTransition>

                <CSSTransition in={activeTab === 'Netlinking'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Netlinking />
                </CSSTransition>

                <CSSTransition in={activeTab === 'Veille'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Veille />
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
    .tab.active {background-color:#D62246;color:white;transition:300ms ease all;border-style:solid;}
    .tab.active svg {fill:white;}
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

export default TabSliderSEO;
