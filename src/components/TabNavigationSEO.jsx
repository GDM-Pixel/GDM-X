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
                        <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.25 3.75H3.75V20H41.25V3.75ZM45 20V23.75V28.75V32.5H41.25H28.4609L29.0859 36.25H33.125H35V40H33.125H27.5H17.5H11.875H10V36.25H11.875H15.9141L16.5391 32.5H3.75H0V28.75V23.75V20V3.75V0H3.75H41.25H45V3.75V20ZM3.75 23.75V28.75H41.25V23.75H3.75ZM20.3359 32.5L19.7109 36.25H25.2813L24.6563 32.5H20.3359Z" />
                        </svg>
                        UX / UI</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'ONPage' ? 'active' : ''}`} onClick={() => setActiveTab('ONPage')}>
                        <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5344 0L26.0132 1.79422L15.7307 37.049L15.2095 38.8432L18.4727 40L18.994 38.2058L29.2764 2.95101L29.7977 1.1568L26.5344 0ZM30.933 10.6473L32.1826 11.9378L39.9873 20.0039L32.1826 28.07L30.933 29.3606L33.2752 32.1149L34.5248 30.8243L43.6647 21.3811L45 20.0039L43.6647 18.6268L34.5248 9.18355L33.2752 7.89298L30.933 10.6473ZM11.7249 7.89298L10.4752 9.18355L1.33529 18.6268L0 20.0039L1.33529 21.3811L10.4752 30.8243L11.7249 32.1149L14.067 29.3606L12.8174 28.07L5.01269 20.0039L12.8174 11.9378L14.067 10.6473L11.7249 7.89298Z" />
                        </svg>
                        Dev Front-End</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Contenus' ? 'active' : ''}`} onClick={() => setActiveTab('Contenus')}>
                        <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.90909 5V7.5H19.0909V5H22.9091V35H5.09091V5H8.90909ZM5.09091 0H0V5V35V40H5.09091H22.9091H28V35V5V0H22.9091H5.09091ZM8.90909 30V32.5H10.1818H17.8182H19.0909V30H17.8182H10.1818H8.90909Z" />
                        </svg>
                        Contenus</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Netlinking' ? 'active' : ''}`} onClick={() => setActiveTab('Netlinking')}>
                        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.001 16.7444L40.2744 3.22876L42.376 5.33032L28.8604 25.6038L22.9229 28.7991L16.8057 22.6819L20.001 16.7444ZM20.4385 29.8538C20.54 30.3069 20.5947 30.7756 20.5947 31.26C20.5947 34.7131 17.7979 37.51 14.3447 37.51H8.09473V31.26C8.09473 27.8069 10.8916 25.01 14.3447 25.01C14.8291 25.01 15.2979 25.0647 15.751 25.1663L20.4385 29.8538ZM40.5947 0.0100098L18.0947 15.01L14.0557 22.5178C9.35254 22.6663 5.59473 26.5256 5.59473 31.26V35.01V37.51H3.09473H1.84473H0.594727V40.01H1.84473H3.09473H5.59473H8.09473H14.3447C19.0791 40.01 22.9385 36.2522 23.0869 31.5491L30.5947 27.51L45.5947 5.01001L40.5947 0.0100098Z" />
                        </svg>
                        Sur mesure</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Veille' ? 'active' : ''}`} onClick={() => setActiveTab('Veille')}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2468 0H15.2236L15.0205 1.00762L14.2628 4.79594C13.9348 4.92091 13.6145 5.0537 13.2943 5.1943L10.084 3.04628L9.23257 2.47608L8.50615 3.2025L3.2025 8.50615L2.47608 9.23257L3.04628 10.084L5.18649 13.2943C5.04589 13.6145 4.90529 13.9348 4.78813 14.2628L0.999805 15.0205L0 15.2236V16.2468V23.7454V24.7686L1.00762 24.9717L4.79594 25.7294C4.92091 26.0574 5.0537 26.3777 5.1943 26.6979L3.04628 29.9082L2.47608 30.7596L3.2025 31.486L8.50615 36.7897L9.23257 37.5161L10.084 36.9459L13.2943 34.8057C13.6145 34.9463 13.9348 35.0869 14.2628 35.2041L15.0205 38.9924L15.2236 40H16.2468H23.7454H24.7686L24.9717 38.9924L25.7294 35.2041C26.0574 35.0791 26.3777 34.9463 26.6979 34.8057L29.9082 36.9459L30.7596 37.5161L31.486 36.7897L36.7897 31.486L37.5161 30.7596L36.9459 29.9082L34.8057 26.6979C34.9463 26.3777 35.0869 26.0574 35.2041 25.7294L38.9924 24.9717L40 24.7686V23.7454V16.2468V15.2236L38.9924 15.0205L35.2041 14.2628C35.0791 13.9348 34.9463 13.6145 34.8057 13.2943L36.9459 10.084L37.5161 9.23257L36.7897 8.50615L31.486 3.2025L30.7596 2.47608L29.9082 3.04628L26.6979 5.1943C26.3777 5.0537 26.0574 4.9131 25.7294 4.79594L24.9717 1.00762L24.7686 0H23.7454H16.2468ZM16.5749 5.9754L17.2701 2.49951H22.7221L23.4173 5.9754L23.5579 6.69401L24.2531 6.92052C24.9326 7.13923 25.5966 7.42043 26.2293 7.74068L26.8776 8.07655L27.4868 7.67038L30.4394 5.70201L34.2902 9.55282L32.3218 12.5054L31.9156 13.1146L32.2515 13.7629C32.5718 14.3956 32.8451 15.0517 33.0717 15.7391L33.2982 16.4343L34.0168 16.5749L37.4927 17.2701V22.7221L34.0168 23.4173L33.2982 23.5579L33.0717 24.2531C32.853 24.9326 32.5718 25.5966 32.2515 26.2293L31.9156 26.8776L32.3218 27.4868L34.2902 30.4394L30.4394 34.2902L27.4868 32.3218L26.8776 31.9156L26.2293 32.2515C25.5966 32.5718 24.9404 32.8451 24.2531 33.0717L23.5579 33.2982L23.4173 34.0168L22.7221 37.4927H17.2701L16.5749 34.0168L16.4343 33.2982L15.7391 33.0717C15.0596 32.853 14.3956 32.5718 13.7629 32.2515L13.1146 31.9156L12.5054 32.3218L9.55282 34.2902L5.6942 30.4394L7.66257 27.4868L8.06874 26.8776L7.73287 26.2293C7.41262 25.5966 7.13923 24.9404 6.91271 24.2531L6.68619 23.5579L5.96759 23.4173L2.49951 22.7221V17.2701L5.9754 16.5749L6.69401 16.4343L6.92052 15.7391C7.13923 15.0596 7.42043 14.3956 7.74068 13.7629L8.07655 13.1146L7.67038 12.5054L5.6942 9.55282L9.54501 5.70201L12.4976 7.67038L13.1068 8.07655L13.7551 7.74068C14.3878 7.42043 15.0439 7.14704 15.7313 6.92052L16.4265 6.69401L16.5671 5.9754H16.5749ZM22.48 12.7006L22.6831 11.4665L20.2148 11.0525L20.0117 12.2867L17.5122 27.2837L17.3091 28.5179L19.7774 28.9319L19.9805 27.6977L22.48 12.7006ZM14.63 17.7543L15.5126 16.8717L13.7473 15.1064L12.8647 15.9891L9.74029 19.1135L8.85765 19.9961L9.74029 20.8787L12.8647 24.0031L13.7473 24.8858L15.5126 23.1205L14.63 22.2378L12.3882 19.9961L14.63 17.7543ZM27.1275 15.9891L26.2449 15.1064L24.4796 16.8717L25.3622 17.7543L27.604 19.9961L25.3622 22.2378L24.4796 23.1205L26.2449 24.8858L27.1275 24.0031L30.2519 20.8787L31.1345 19.9961L30.2519 19.1135L27.1275 15.9891Z" />
                        </svg>
                        CMS</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Reporting' ? 'active' : ''}`} onClick={() => setActiveTab('Reporting')}>
                        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.93945 0.0200195H0.689453V2.52002H1.93945H5.93945L11.9707 29.0435L12.1895 30.02H13.1895H39.4395H40.6895V27.52H39.4395H14.1895L13.0566 22.52H39.4395L44.9082 5.02002L45.6895 2.52002H43.0723H8.50195L8.1582 0.996582L7.93945 0.0200195H6.93945H1.93945ZM9.07227 5.02002H42.291L37.6035 20.02H12.4863L9.07227 5.02002ZM15.0645 33.77C15.5617 33.77 16.0386 33.9676 16.3903 34.3192C16.7419 34.6708 16.9395 35.1477 16.9395 35.645C16.9395 36.1423 16.7419 36.6192 16.3903 36.9708C16.0386 37.3225 15.5617 37.52 15.0645 37.52C14.5672 37.52 14.0903 37.3225 13.7386 36.9708C13.387 36.6192 13.1895 36.1423 13.1895 35.645C13.1895 35.1477 13.387 34.6708 13.7386 34.3192C14.0903 33.9676 14.5672 33.77 15.0645 33.77ZM15.0645 40.02C16.2248 40.02 17.3376 39.5591 18.158 38.7386C18.9785 37.9181 19.4395 36.8053 19.4395 35.645C19.4395 34.4847 18.9785 33.3719 18.158 32.5514C17.3376 31.731 16.2248 31.27 15.0645 31.27C13.9041 31.27 12.7913 31.731 11.9709 32.5514C11.1504 33.3719 10.6895 34.4847 10.6895 35.645C10.6895 36.8053 11.1504 37.9181 11.9709 38.7386C12.7913 39.5591 13.9041 40.02 15.0645 40.02ZM34.4395 35.645C34.4395 35.1477 34.637 34.6708 34.9886 34.3192C35.3403 33.9676 35.8172 33.77 36.3145 33.77C36.8117 33.77 37.2886 33.9676 37.6403 34.3192C37.9919 34.6708 38.1895 35.1477 38.1895 35.645C38.1895 36.1423 37.9919 36.6192 37.6403 36.9708C37.2886 37.3225 36.8117 37.52 36.3145 37.52C35.8172 37.52 35.3403 37.3225 34.9886 36.9708C34.637 36.6192 34.4395 36.1423 34.4395 35.645ZM40.6895 35.645C40.6895 34.4847 40.2285 33.3719 39.408 32.5514C38.5876 31.731 37.4748 31.27 36.3145 31.27C35.1541 31.27 34.0413 31.731 33.2209 32.5514C32.4004 33.3719 31.9395 34.4847 31.9395 35.645C31.9395 36.8053 32.4004 37.9181 33.2209 38.7386C34.0413 39.5591 35.1541 40.02 36.3145 40.02C37.4748 40.02 38.5876 39.5591 39.408 38.7386C40.2285 37.9181 40.6895 36.8053 40.6895 35.645Z" />
                        </svg>
                        E-commerce</div>
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
