import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import SiteWeb from './TabNav/General/Site-Web.jsx';
import Ecommerce from './TabNav/General/E-Commerce.jsx';
import SEOSEASEM from './TabNav/General/SEO-SEA-SEM.jsx';
import IdentiteVisuelle from './TabNav/General/Identite-Visuelle.jsx';
import Depannage from './TabNav/General/Depannage.jsx';
import Webmarketing from './TabNav/General/Webmarketing.jsx';

function TabSlider() {
    const [activeTab, setActiveTab] = useState('SiteWeb');

    // Fonction pour précharger une image
    const preloadImage = (imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
    };

    return (
        <div className="overflow-x-clip">
            <div className="container wide xs:w-full overflow-x-clip">
                <div className="grid lg:grid-cols-6 md:grid-cols-3 xs:grid-cols-2 gap-6 items-center mb-6">
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'SiteWeb' ? 'active' : ''}`} onClick={() => setActiveTab('SiteWeb')} onMouseEnter={() => preloadImage('/img/ecommerce.webp')}>
                        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43 2.50513V30.0051H27.3984C27.3828 30.0051 27.3672 30.0051 27.3516 30.0051H18.6484C18.6328 30.0051 18.6172 30.0051 18.6016 30.0051H3V2.50513H43ZM3 32.5051H17.1484L16.3125 37.5051H11.75H10.5V40.0051H11.75H17.375H28.625H34.25H35.5V37.5051H34.25H29.6875L28.8516 32.5051H43H45.5V30.0051V2.50513V0.00512695H43H3H0.5V2.50513V30.0051V32.5051H3ZM18.8516 37.5051L19.6875 32.5051H26.3203L27.1562 37.5051H18.8516ZM20.1328 12.1379L21.0156 11.2551L19.25 9.4895L18.3672 10.3723L13.3672 15.3723L12.4844 16.2551L13.3672 17.1379L18.3672 22.1379L19.25 23.0208L21.0156 21.2551L20.1328 20.3723L16.0156 16.2551L20.1328 12.1379ZM27.6328 10.3723L26.75 9.4895L24.9844 11.2551L25.8672 12.1379L29.9844 16.2551L25.8672 20.3723L24.9844 21.2551L26.75 23.0208L27.6328 22.1379L32.6328 17.1379L33.5156 16.2551L32.6328 15.3723L27.6328 10.3723Z" fill="current" />
                        </svg>Site Web</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Ecommerce' ? 'active' : ''}`} onClick={() => setActiveTab('Ecommerce')} onMouseEnter={() => preloadImage('/img/ecommerce.webp')}>
                        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.84473 0.00512695H0.594727V2.50513H1.84473H5.84473L11.876 29.0286L12.0947 30.0051H13.0947H39.3447H40.5947V27.5051H39.3447H14.0947L12.9619 22.5051H39.3447L44.8135 5.00513L45.5947 2.50513H42.9775H8.40723L8.06348 0.981689L7.84473 0.00512695H6.84473H1.84473ZM8.97754 5.00513H42.1963L37.5088 20.0051H12.3916L8.97754 5.00513ZM14.9697 33.7551C15.467 33.7551 15.9439 33.9527 16.2956 34.3043C16.6472 34.6559 16.8447 35.1328 16.8447 35.6301C16.8447 36.1274 16.6472 36.6043 16.2956 36.956C15.9439 37.3076 15.467 37.5051 14.9697 37.5051C14.4724 37.5051 13.9955 37.3076 13.6439 36.956C13.2923 36.6043 13.0947 36.1274 13.0947 35.6301C13.0947 35.1328 13.2923 34.6559 13.6439 34.3043C13.9955 33.9527 14.4724 33.7551 14.9697 33.7551ZM14.9697 40.0051C16.13 40.0051 17.2428 39.5442 18.0633 38.7237C18.8838 37.9032 19.3447 36.7904 19.3447 35.6301C19.3447 34.4698 18.8838 33.357 18.0633 32.5365C17.2428 31.7161 16.13 31.2551 14.9697 31.2551C13.8094 31.2551 12.6966 31.7161 11.8761 32.5365C11.0557 33.357 10.5947 34.4698 10.5947 35.6301C10.5947 36.7904 11.0557 37.9032 11.8761 38.7237C12.6966 39.5442 13.8094 40.0051 14.9697 40.0051ZM34.3447 35.6301C34.3447 35.1328 34.5423 34.6559 34.8939 34.3043C35.2455 33.9527 35.7224 33.7551 36.2197 33.7551C36.717 33.7551 37.1939 33.9527 37.5456 34.3043C37.8972 34.6559 38.0947 35.1328 38.0947 35.6301C38.0947 36.1274 37.8972 36.6043 37.5456 36.956C37.1939 37.3076 36.717 37.5051 36.2197 37.5051C35.7224 37.5051 35.2455 37.3076 34.8939 36.956C34.5423 36.6043 34.3447 36.1274 34.3447 35.6301ZM40.5947 35.6301C40.5947 34.4698 40.1338 33.357 39.3133 32.5365C38.4928 31.7161 37.38 31.2551 36.2197 31.2551C35.0594 31.2551 33.9466 31.7161 33.1261 32.5365C32.3057 33.357 31.8447 34.4698 31.8447 35.6301C31.8447 36.7904 32.3057 37.9032 33.1261 38.7237C33.9466 39.5442 35.0594 40.0051 36.2197 40.0051C37.38 40.0051 38.4928 39.5442 39.3133 38.7237C40.1338 37.9032 40.5947 36.7904 40.5947 35.6301Z" fill="current" />
                        </svg>E-commerce</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'SEOSEASEM' ? 'active' : ''}`} onClick={() => setActiveTab('SEOSEASEM')}>
                        <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.8916 2.46606L25.8916 14.9661L25.0713 15.6458L24.2666 14.9426L15.0244 6.85669L2.0791 16.2629L0.610352 14.2473L14.3604 4.24731L15.165 3.66138L15.915 4.31763L25.1104 12.3645L39.2979 0.544189L40.8994 2.46606H40.8916ZM6.34473 26.5051H3.84473V34.0051H6.34473V26.5051ZM3.84473 24.0051H6.34473H8.84473V26.5051V34.0051V36.5051H6.34473H3.84473H1.34473V34.0051V26.5051V24.0051H3.84473ZM13.8447 19.0051V34.0051H16.3447V19.0051H13.8447ZM11.3447 16.5051H13.8447H16.3447H18.8447V19.0051V34.0051V36.5051H16.3447H13.8447H11.3447V34.0051V19.0051V16.5051ZM26.3447 24.0051H23.8447V34.0051H26.3447V24.0051ZM23.8447 21.5051H26.3447H28.8447V24.0051V34.0051V36.5051H26.3447H23.8447H21.3447V34.0051V24.0051V21.5051H23.8447ZM33.8447 19.0051V34.0051H36.3447V19.0051H33.8447ZM31.3447 16.5051H33.8447H36.3447H38.8447V19.0051V34.0051V36.5051H36.3447H33.8447H31.3447V34.0051V19.0051V16.5051Z" fill="current" />
                        </svg>SEO / SEA / SEM</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'IdentiteVisuelle' ? 'active' : ''}`} onClick={() => setActiveTab('IdentiteVisuelle')}>
                        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.001 16.7395L40.2744 3.22388L42.376 5.32544L28.8604 25.5989L22.9229 28.7942L16.8057 22.677L20.001 16.7395ZM20.4385 29.8489C20.54 30.302 20.5947 30.7708 20.5947 31.2551C20.5947 34.7083 17.7979 37.5051 14.3447 37.5051H8.09473V31.2551C8.09473 27.802 10.8916 25.0051 14.3447 25.0051C14.8291 25.0051 15.2979 25.0598 15.751 25.1614L20.4385 29.8489ZM40.5947 0.00512695L18.0947 15.0051L14.0557 22.5129C9.35254 22.6614 5.59473 26.5208 5.59473 31.2551V35.0051V37.5051H3.09473H1.84473H0.594727V40.0051H1.84473H3.09473H5.59473H8.09473H14.3447C19.0791 40.0051 22.9385 36.2473 23.0869 31.5442L30.5947 27.5051L45.5947 5.00513L40.5947 0.00512695Z" fill="current" />
                        </svg>Identité visuelle</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Depannage' ? 'active' : ''}`} onClick={() => setActiveTab('Depannage')}>
                        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1104 4.38794L15.3291 0.630127H9.86035L9.0791 4.38794C8.00098 4.79419 7.00879 5.38013 6.14941 6.10669L2.78223 5.00513L0.0947266 9.64575L2.74316 12.0129C2.64941 12.5754 2.59473 13.1614 2.59473 13.7551C2.59473 14.3489 2.64941 14.9348 2.74316 15.4973L0.0947266 17.8645L2.78223 22.5051L6.14941 21.3958C7.0166 22.1223 8.00098 22.7083 9.0791 23.1145L9.86035 26.8801H15.3291L16.1104 23.1223C17.1885 22.7161 18.1807 22.1301 19.04 21.4036L22.4072 22.5051L25.0947 17.8645L22.4463 15.4973C22.5479 14.927 22.5947 14.3489 22.5947 13.7551C22.5947 13.1614 22.54 12.5754 22.4463 12.0129L25.0947 9.64575L22.4072 5.00513L19.04 6.1145C18.1729 5.38794 17.1885 4.802 16.1104 4.39575V4.38794ZM21.2666 8.01294L21.915 9.13013L20.7822 10.1379L19.7432 11.0676L19.9854 12.4426C20.0635 12.8645 20.1025 13.302 20.1025 13.7551C20.1025 14.2083 20.0635 14.6458 19.9854 15.0676L19.7432 16.4426L20.7822 17.3723L21.915 18.3801L21.2666 19.4973L19.8291 19.0208L18.501 18.5833L17.4307 19.4817C16.7822 20.0286 16.04 20.4661 15.2354 20.7708L13.9463 21.2551L13.665 22.5989L13.2979 24.3801H11.8916L11.5244 22.6067L11.2432 21.2629L9.9541 20.7786C9.14941 20.4739 8.40723 20.0364 7.75879 19.4895L6.68848 18.5833L5.36035 19.0208L3.92285 19.4973L3.27441 18.3801L4.40723 17.3723L5.44629 16.4426L5.2041 15.0676C5.12598 14.6458 5.08691 14.2083 5.08691 13.7551C5.08691 13.302 5.12598 12.8645 5.2041 12.4426L5.44629 11.0676L4.40723 10.1458L3.28223 9.13794L3.92285 8.01294L5.36035 8.4895L6.68848 8.927L7.75879 8.02856C8.40723 7.48169 9.14941 7.04419 9.9541 6.7395L11.2432 6.25513L11.5244 4.91138L11.8916 3.13013H13.2979L13.665 4.90356L13.9463 6.24731L15.2354 6.73169C16.04 7.03638 16.7822 7.47388 17.4307 8.02075L18.501 8.91919L19.8291 8.48169L21.2666 8.00513V8.01294ZM12.5947 15.6301C12.3485 15.6301 12.1047 15.5816 11.8772 15.4874C11.6497 15.3932 11.443 15.2551 11.2689 15.081C11.0948 14.9068 10.9567 14.7001 10.8625 14.4727C10.7682 14.2452 10.7197 14.0014 10.7197 13.7551C10.7197 13.5089 10.7682 13.2651 10.8625 13.0376C10.9567 12.8101 11.0948 12.6034 11.2689 12.4293C11.443 12.2552 11.6497 12.1171 11.8772 12.0229C12.1047 11.9286 12.3485 11.8801 12.5947 11.8801C12.841 11.8801 13.0848 11.9286 13.3123 12.0229C13.5397 12.1171 13.7464 12.2552 13.9206 12.4293C14.0947 12.6034 14.2328 12.8101 14.327 13.0376C14.4212 13.2651 14.4697 13.5089 14.4697 13.7551C14.4697 14.0014 14.4212 14.2452 14.327 14.4727C14.2328 14.7001 14.0947 14.9068 13.9206 15.081C13.7464 15.2551 13.5397 15.3932 13.3123 15.4874C13.0848 15.5816 12.841 15.6301 12.5947 15.6301ZM8.21973 13.7551C8.21973 14.3297 8.33289 14.8986 8.55275 15.4294C8.77262 15.9602 9.09488 16.4425 9.50113 16.8487C9.90739 17.255 10.3897 17.5772 10.9205 17.7971C11.4513 18.017 12.0202 18.1301 12.5947 18.1301C13.1693 18.1301 13.7382 18.017 14.269 17.7971C14.7998 17.5772 15.2821 17.255 15.6883 16.8487C16.0946 16.4425 16.4168 15.9602 16.6367 15.4294C16.8566 14.8986 16.9697 14.3297 16.9697 13.7551C16.9697 13.1806 16.8566 12.6117 16.6367 12.0809C16.4168 11.5501 16.0946 11.0678 15.6883 10.6615C15.2821 10.2553 14.7998 9.93302 14.269 9.71315C13.7382 9.49329 13.1693 9.38013 12.5947 9.38013C12.0202 9.38013 11.4513 9.49329 10.9205 9.71315C10.3897 9.93302 9.90739 10.2553 9.50113 10.6615C9.09488 11.0678 8.77262 11.5501 8.55275 12.0809C8.33289 12.6117 8.21973 13.1806 8.21973 13.7551ZM26.9775 23.9895L23.2197 24.7708V30.2395L26.9775 31.0208C27.3838 32.0989 27.9697 33.0911 28.6963 33.9504L27.5947 37.3176L32.2354 40.0051L34.6025 37.3567C35.1729 37.4583 35.751 37.5051 36.3447 37.5051C36.9385 37.5051 37.5244 37.4504 38.0869 37.3567L40.4541 40.0051L45.0947 37.3176L43.9854 33.9504C44.7119 33.0833 45.2979 32.0989 45.7041 31.0208L49.4697 30.2395V24.7708L45.7119 23.9895C45.3057 22.9114 44.7197 21.9192 43.9932 21.0598L45.0947 17.6926L40.4541 15.0051L38.0869 17.6536C37.5166 17.552 36.9385 17.5051 36.3447 17.5051C35.751 17.5051 35.165 17.5598 34.6025 17.6536L32.2354 15.0051L27.5947 17.6926L28.7041 21.0598C27.9775 21.927 27.3916 22.9114 26.9854 23.9895H26.9775ZM30.6025 18.8333L31.7197 18.1848L32.7275 19.3176L33.6572 20.3567L35.0322 20.1145C35.4541 20.0364 35.8916 19.9973 36.3447 19.9973C36.7979 19.9973 37.2354 20.0364 37.6572 20.1145L39.0322 20.3567L39.9619 19.3176L40.9697 18.1848L42.0869 18.8333L41.6104 20.2708L41.1729 21.5989L42.0713 22.6692C42.6182 23.3176 43.0557 24.0598 43.3604 24.8645L43.8447 26.1536L45.1885 26.4348L46.9697 26.802V28.2083L45.1963 28.5754L43.8525 28.8567L43.3682 30.1458C43.0635 30.9504 42.626 31.6926 42.0791 32.3411L41.1807 33.4114L41.6182 34.7395L42.0947 36.177L40.9775 36.8254L39.9697 35.6926L39.04 34.6536L37.665 34.8958C37.2432 34.9739 36.8057 35.0129 36.3525 35.0129C35.8994 35.0129 35.4619 34.9739 35.04 34.8958L33.665 34.6536L32.7354 35.6926L31.7275 36.8254L30.6025 36.177L31.0791 34.7395L31.5166 33.4114L30.6182 32.3411C30.0713 31.6926 29.6338 30.9504 29.3291 30.1458L28.8447 28.8567L27.501 28.5754L25.7197 28.2083V26.802L27.4932 26.4348L28.8369 26.1536L29.3213 24.8645C29.626 24.0598 30.0635 23.3176 30.6104 22.6692L31.5088 21.5989L31.0713 20.2708L30.6025 18.8333ZM38.2197 27.5051C38.2197 28.0024 38.0222 28.4793 37.6706 28.831C37.3189 29.1826 36.842 29.3801 36.3447 29.3801C35.8474 29.3801 35.3705 29.1826 35.0189 28.831C34.6673 28.4793 34.4697 28.0024 34.4697 27.5051C34.4697 27.0078 34.6673 26.5309 35.0189 26.1793C35.3705 25.8277 35.8474 25.6301 36.3447 25.6301C36.842 25.6301 37.3189 25.8277 37.6706 26.1793C38.0222 26.5309 38.2197 27.0078 38.2197 27.5051ZM36.3447 31.8801C37.505 31.8801 38.6178 31.4192 39.4383 30.5987C40.2588 29.7782 40.7197 28.6654 40.7197 27.5051C40.7197 26.3448 40.2588 25.232 39.4383 24.4115C38.6178 23.5911 37.505 23.1301 36.3447 23.1301C35.1844 23.1301 34.0716 23.5911 33.2511 24.4115C32.4307 25.232 31.9697 26.3448 31.9697 27.5051C31.9697 28.6654 32.4307 29.7782 33.2511 30.5987C34.0716 31.4192 35.1844 31.8801 36.3447 31.8801Z" fill="current" />
                        </svg>Dépannage</div>
                    <div className={`tab p-6 border border-1 text-center ${activeTab === 'Webmarketing' ? 'active' : ''}`} onClick={() => setActiveTab('Webmarketing')}>
                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.8135 0.00512695H33.2822H33.8447H35.0947V1.25513V36.2551V37.5051H33.8447H33.2822H32.8135L32.4619 37.1926L27.6104 32.9348C24.1182 29.8723 19.7275 28.0442 15.0947 27.7161V38.7551V40.0051H13.8447H6.34473H5.09473V38.7551V27.5051H1.34473H0.0947266V26.2551V11.2551V10.0051H1.34473H11.3135L14.7822 9.80981C19.5244 9.54419 24.04 7.70044 27.6104 4.56763L32.4619 0.317627L32.8135 0.00512695ZM7.59473 27.5051V37.5051H12.5947V27.5754L11.3135 27.5051H7.59473ZM32.5947 3.52075L29.2588 6.45044C25.9463 9.35669 21.9072 11.2708 17.5947 12.0051V25.5051C21.8994 26.2395 25.9463 28.1536 29.2588 31.0598L32.5947 33.9895V3.52075ZM15.0947 25.2083V12.2942C15.0322 12.2942 14.9775 12.302 14.915 12.302L11.415 12.5051H11.3838H11.3447H2.59473V25.0051H11.3447H11.376H11.4072L14.9072 25.2004C14.9697 25.2004 15.0244 25.2083 15.0869 25.2083H15.0947ZM40.0947 15.0051V16.2551V21.2551V22.5051H37.5947V21.2551V16.2551V15.0051H40.0947Z" fill="current" />
                        </svg>Webmarketing</div>
                </div>
            </div>

            <div className="tab-content relative">
                <CSSTransition in={activeTab === 'SiteWeb'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <SiteWeb />
                </CSSTransition>

                <CSSTransition in={activeTab === 'Ecommerce'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Ecommerce />
                </CSSTransition>

                <CSSTransition in={activeTab === 'Webmarketing'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Webmarketing />
                </CSSTransition>

                <CSSTransition in={activeTab === 'SEOSEASEM'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <SEOSEASEM />
                </CSSTransition>

                <CSSTransition in={activeTab === 'IdentiteVisuelle'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <IdentiteVisuelle />
                </CSSTransition>

                <CSSTransition in={activeTab === 'Depannage'} timeout={{ enter: 600, exit: 300 }} classNames="slidetransit" unmountOnExit>
                    <Depannage />
                </CSSTransition>


            </div>
            <style>{`
    
    .tab-content  {
        position: relative;  
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .tab-content h2 {font-size:1.5rem;font-weight:bold;color:#273043;margin-bottom:15px;}
    .tab {background-color:#fafffd;transition:300ms ease all;font-weight:bold;color:#273043;border-style:dashed;
    display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;min-height:120px;}
    .tab svg {fill:#273043;}
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
    .tabslidercontent p {margin-bottom:10px;}
    .tabslidercontent p:last-of-type {margin-bottom:20px;}
`}</style>
        </div>
    );
}

export default TabSlider;
