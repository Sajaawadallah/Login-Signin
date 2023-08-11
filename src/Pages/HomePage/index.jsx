import React from "react";
import { Link } from "react-router-dom";
import './style.css'


const HomePage = () => {

    return (

        <div className="big-sec">

            <div className="sidebar">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <g filter="url(#filter0_i_10_29)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 6.66665C30 4.8257 31.4924 3.33331 33.3333 3.33331H46.6667C48.5076 3.33331 50 4.8257 50 6.66665V25C50 25.884 49.6488 26.7319 49.0237 27.357L42.357 34.0237C41.0553 35.3254 38.9447 35.3254 37.643 34.0237L30.9763 27.357C30.3512 26.7319 30 25.884 30 25V6.66665ZM36.6667 9.99998V23.6193L40 26.9526L43.3333 23.6193V9.99998H36.6667Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.643 45.9763C38.9447 44.6746 41.0553 44.6746 42.357 45.9763L49.0237 52.643C49.6488 53.2681 50 54.1159 50 55V73.3333C50 75.1743 48.5076 76.6667 46.6667 76.6667H33.3333C31.4924 76.6667 30 75.1743 30 73.3333V55C30 54.1159 30.3512 53.2681 30.9763 52.643L37.643 45.9763ZM36.6667 56.3807V70H43.3333V56.3807L40 53.0474L36.6667 56.3807Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52.643 30.9763C53.2681 30.3512 54.1159 30 55 30H73.3333C75.1743 30 76.6667 31.4924 76.6667 33.3333V46.6667C76.6667 48.5076 75.1743 50 73.3333 50H55C54.1159 50 53.2681 49.6488 52.643 49.0237L45.9763 42.357C44.6746 41.0553 44.6746 38.9447 45.9763 37.643L52.643 30.9763ZM56.3807 36.6667L53.0474 40L56.3807 43.3333H70V36.6667H56.3807Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33331 33.3333C3.33331 31.4924 4.8257 30 6.66665 30H25C25.884 30 26.7319 30.3512 27.357 30.9763L34.0237 37.643C35.3254 38.9447 35.3254 41.0553 34.0237 42.357L27.357 49.0237C26.7319 49.6488 25.884 50 25 50H6.66665C4.8257 50 3.33331 48.5076 3.33331 46.6667V33.3333ZM9.99998 36.6667V43.3333H23.6193L26.9526 40L23.6193 36.6667H9.99998Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_i_10_29" x="0" y="0" width="82" height="82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="2" dy="2" />
                                <feGaussianBlur stdDeviation="1" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_29" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="centerd-icons">
                    <Link to="/users">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 55 55" fill="none">
                            <g filter="url(#filter0_i_3_9)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7608 3.20332C21.8101 2.91288 22.9188 3.40072 23.4136 4.3705C24.1745 5.86193 25.7209 6.87515 27.5 6.87515C29.2791 6.87515 30.8256 5.86193 31.5865 4.3705C32.0812 3.40072 33.19 2.91288 34.2392 3.20332C38.19 4.29696 41.7483 6.32662 44.6615 9.03541C45.4029 9.72479 45.6041 10.819 45.1565 11.727C44.8569 12.3346 44.6875 13.0193 44.6875 13.7501C44.6875 16.2814 46.7396 18.3334 49.2709 18.3334L49.3346 18.333C50.3477 18.3185 51.2501 18.9711 51.5537 19.9377C52.3044 22.3279 52.7084 24.869 52.7084 27.5001C52.7084 29.2367 52.5324 30.9345 52.1967 32.576C51.9615 33.7259 50.8955 34.5123 49.7274 34.3975C49.5773 34.3827 49.4251 34.3751 49.2709 34.3751C46.7396 34.3751 44.6875 36.4272 44.6875 38.9584C44.6875 40.0858 45.0916 41.1128 45.7654 41.9115C46.5223 42.8086 46.479 44.1326 45.6651 44.9783C42.6905 48.0693 38.9313 50.4049 34.7038 51.6635C33.5079 52.0195 32.2469 51.3534 31.867 50.1649C31.2755 48.3146 29.5407 46.9793 27.5 46.9793C25.4594 46.9793 23.7246 48.3146 23.1331 50.1649C22.7531 51.3534 21.4922 52.0195 20.2963 51.6635C16.0688 50.4049 12.3095 48.0693 9.33489 44.9784C8.52096 44.1326 8.47767 42.8086 9.23462 41.9114C9.90847 41.1128 10.3125 40.0858 10.3125 38.9584C10.3125 36.4271 8.26049 34.3751 5.72919 34.3751C5.57503 34.3751 5.42276 34.3827 5.27265 34.3975C4.10456 34.5123 3.03856 33.7259 2.80337 32.576C2.46761 30.9345 2.29169 29.2367 2.29169 27.5001C2.29169 24.869 2.69556 22.3279 3.44635 19.9377C3.74998 18.971 4.65232 18.3185 5.66541 18.333L5.72919 18.3334C8.26049 18.3334 10.3125 16.2814 10.3125 13.7501C10.3125 13.0193 10.1432 12.3346 9.84359 11.727C9.39593 10.819 9.59713 9.72479 10.3385 9.03541C13.2517 6.32662 16.8101 4.29696 20.7608 3.20332ZM14.5941 11.411C14.7911 12.1589 14.8959 12.9433 14.8959 13.7501C14.8959 18.2345 11.6757 21.9668 7.42159 22.7609C7.06436 24.2808 6.87502 25.8671 6.87502 27.5001C6.87502 28.306 6.92112 29.1002 7.0107 29.8806C11.4666 30.504 14.8959 34.3308 14.8959 38.9584C14.8959 40.4234 14.5509 41.8104 13.9386 43.0401C15.6574 44.5415 17.6262 45.7615 19.7733 46.6296C21.401 44.0849 24.2513 42.3959 27.5 42.3959C30.7487 42.3959 33.5991 44.0849 35.2268 46.6296C37.3738 45.7615 39.3427 44.5415 41.0614 43.0401C40.4491 41.8104 40.1042 40.4234 40.1042 38.9584C40.1042 34.3308 43.5334 30.504 47.9893 29.8806C48.0789 29.1002 48.125 28.306 48.125 27.5001C48.125 25.8671 47.9357 24.2808 47.5784 22.7609C43.3243 21.9668 40.1042 18.2345 40.1042 13.7501C40.1042 12.9433 40.209 12.1589 40.4059 11.411C38.6695 10.016 36.7037 8.8973 34.5752 8.12001C32.8957 10.1565 30.3511 11.4585 27.5 11.4585C24.6489 11.4585 22.1044 10.1565 20.4249 8.12001C18.2964 8.8973 16.3306 10.016 14.5941 11.411Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1875 27.5C17.1875 21.8046 21.8046 17.1875 27.5 17.1875C33.1954 17.1875 37.8125 21.8046 37.8125 27.5C37.8125 33.1954 33.1954 37.8125 27.5 37.8125C21.8046 37.8125 17.1875 33.1954 17.1875 27.5ZM27.5 21.7708C24.3359 21.7708 21.7708 24.3359 21.7708 27.5C21.7708 30.6641 24.3359 33.2292 27.5 33.2292C30.6641 33.2292 33.2292 30.6641 33.2292 27.5C33.2292 24.3359 30.6641 21.7708 27.5 21.7708Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_i_3_9" x="0" y="0" width="55" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_9" />
                                </filter>
                            </defs>
                        </svg>
                    </Link>
                    <div className="log-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 55 55" fill="none">
                            <g filter="url(#filter0_i_3_9)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_i_3_9" x="0" y="0" width="55" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_9" />
                                </filter>
                            </defs>
                        </svg>
                    </div>




                </div>

                <div className="log-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 55 55" fill="none">
                        <g filter="url(#filter0_i_3_9)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_i_3_9" x="0" y="0" width="55" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_9" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

        </div>


    );
}


export default HomePage;