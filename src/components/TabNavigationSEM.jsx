import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Analyse from './TabNav/SEM/Analyse.jsx';
import Suivi from './TabNav/SEM/Suivi.jsx';
import ABTesting from './TabNav/SEM/ABTesting.jsx';
import Behaviour from './TabNav/SEM/Behaviour.jsx';


function TabSliderSEM() {
    const [activeTab, setActiveTab] = useState('Analyse');

    return (
        <div className="overflow-x-clip">
            <div className="container wide max-w-screen-lg overflow-x-clip">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2 gap-6 items-center mb-6">
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Analyse' ? 'active' : ''}`} onClick={() => setActiveTab('Analyse')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 384c51.7 0 99-18.8 135.3-50L484.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM128 224l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64-96V288c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 64v96c0 8.8 7.2 16 16 16s16-7.2 16-16V192c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>
                        Analyse</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Suivi' ? 'active' : ''}`} onClick={() => setActiveTab('Suivi')}>
                       <svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512"><path d="M334.1 31.1l-14.3-28-14.3 28L282.8 75.8l-49.5 7.9-30.9 4.9 22.1 22.2 35.4 35.5-7.8 49.6-4.9 31 27.9-14.2 44.7-22.7 44.7 22.7 27.9 14.2-4.9-31-7.8-49.6 35.4-35.5 22.1-22.2-30.9-4.9-49.5-7.9L334.1 31.1zM307.6 97.6l12.2-24 12.2 24 3.7 7.3 8 1.3 26.6 4.2-19 19.1-5.7 5.8 1.3 8 4.2 26.6-24-12.2-7.3-3.7-7.3 3.7-24 12.2 4.2-26.6 1.3-8-5.7-5.8-19-19.1 26.6-4.2 8-1.3 3.7-7.3zM224 256v32 32V480v32h32H384h32V480 384 352 288 256H384 256 224zM384 480H256V288H384V480zM0 320v32V480v32H32 160h32V480 352 320H160 32 0zM160 480H32V352H160V480zm320-64H608v64H480V416zm160-32H608 480 448v32 64 32h32H608h32V480 416 384z"/></svg>
                        Suivi</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'ABTesting' ? 'active' : ''}`} onClick={() => setActiveTab('ABTesting')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M416 33.4l11.3 11.3L494.6 112H496v1.4l3.3 3.3L510.6 128l-11.3 11.3-3.3 3.3V144h-1.4l-67.3 67.3L416 222.6 393.4 200l11.3-11.3L449.4 144H400 326.6l-112 112 112 112H400h49.4l-44.7-44.7L393.4 312 416 289.4l11.3 11.3L494.6 368H496v1.4l3.3 3.3L510.6 384l-11.3 11.3-3.3 3.3V400h-1.4l-67.3 67.3L416 478.6 393.4 456l11.3-11.3L449.4 400H400 320h-6.6l-4.7-4.7L185.4 272H48 32 16 0V240H16 32 48 185.4L308.7 116.7l4.7-4.7H320h80 49.4L404.7 67.3 393.4 56 416 33.4z"/></svg>
                        AB-Testing</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Behaviour' ? 'active' : ''}`} onClick={() => setActiveTab('Behaviour')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512"><path d="M96 80a48 48 0 1 1 96 0A48 48 0 1 1 96 80zm128 0A80 80 0 1 0 64 80a80 80 0 1 0 160 0zm96 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM199.8 384H440.2L469 480H171l28.8-96zM464 352H176L137.6 480 128 512h33.4H478.6 512l-9.6-32L464 352zM448 224H569.8l36 96H640L592 192H444c2.6 10.2 4 21 4 32zM196 192H48L0 320H34.2l36-96H192c0-11 1.4-21.8 4-32zM464 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0A80 80 0 1 0 432 80a80 80 0 1 0 160 0z"/></svg>
                        Optimisation</div>

                </div>
            </div>

            <div className="tab-content relative">
                <CSSTransition in={activeTab === 'Analyse'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Analyse />
                </CSSTransition>

                <CSSTransition in={activeTab === 'Suivi'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Suivi />
                </CSSTransition>

                <CSSTransition in={activeTab === 'ABTesting'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <ABTesting />
                </CSSTransition>

                <CSSTransition in={activeTab === 'Behaviour'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Behaviour />
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

export default TabSliderSEM;
