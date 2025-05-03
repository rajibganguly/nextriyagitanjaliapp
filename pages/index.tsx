import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import react, { useState, useEffect, useRef } from "react";
import Login from "../components/login";
import Register from "../components/register";
import Footer from "../components/Footer";
import logo from "./../public/images/logo.png";

import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  
  const background = {
    //backgroundImage: "url('/images/landingpageimages/Screenshot4-2025.jpg')",
    backgroundImage: "url('/images/landingpageimages/geetanjali.png')",
    backgroundRepeat: "no-repeat",
    //backgroundPosition: "163px 0",
    backgroundSize: "contain",
    backgroundColor: "#81c6a6 !important"
}

const size = {
  width:"auto",
}

const gotoDashboard = () => {
  router.push('/dashboard');
}
  return (
    <>
    <section>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary" style={background}>
            <div className="col-md-6 p-lg-5 mx-auto my-5">
              <h1 className="display-3 fw-bold">RIYA GItanjali Society</h1>
              <h3 className="fw-normal text-muted mb-3">Explore the vibrant, inclusive community</h3>
              <div className="d-flex gap-3 justify-content-center lead fw-normal">
                <Link className="icon-link" href="/buy">
                  Buy
                  
                </Link>
                <Link className="icon-link" href="/">
                  Rent
                  
                </Link>
              </div>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          </div>
    </section>
    <section>
    <div className="container px-4 py-5">
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <h2 className="fw-bold text-body-emphasis">Empowering Communities, Enriching Lives</h2>
                <p className="text-body-secondary">Riya Gitanjali society is a harmonious enclave where diverse communities, religions, and varying income families live together joyfully in Modibari, Barrackpore.</p>
                <button type="button" className="btn btn-info btn-lg w-100" onClick={gotoDashboard}>Enter</button>
              </div>
        
              <div className="col">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" version="1.1" id="_x32_" viewBox="0 0 512 512"><g><path fill="#333333" d="M429.823,409.401c-11.741-17.577-29.574-27.295-46.322-33.618c-8.41-3.157-16.624-5.492-23.859-7.474   c-7.227-1.965-13.508-3.618-17.725-5.213c-7.384-2.738-15.186-6.289-20.628-10.112c-2.722-1.899-4.81-3.856-6.027-5.517   c-1.225-1.702-1.562-2.878-1.578-3.906c0-7.103,0-15.974,0-27.666c9.447-10.508,23.021-26.794,28.595-52.618   c1.949-0.88,3.873-1.875,5.731-3.166c4.62-3.19,8.542-7.819,11.864-14.116c3.346-6.323,6.306-14.405,9.463-25.463   c1.603-5.607,2.343-10.474,2.343-14.815c0.008-4.999-1.028-9.332-2.911-12.85c-2.482-4.678-6.29-7.457-9.701-9.002l7.703-11.478   v-12.727c0.732-0.995,1.2-1.908,1.085-2.631v-27.567l19.6-39.184c4.966-9.932,1.127-22.018-8.666-27.263L265.693,2.43   c-6.05-3.24-13.327-3.24-19.378,0L133.21,63.015c-9.784,5.245-13.624,17.331-8.657,27.263l19.6,39.209v27.543   c-0.123,0.748,0.288,1.66,1.085,2.696v12.662l7.704,11.46c-0.798,0.354-1.62,0.757-2.467,1.275   c-2.664,1.644-5.352,4.218-7.235,7.745c-1.883,3.519-2.919,7.851-2.91,12.85c0,4.341,0.74,9.208,2.343,14.815   c4.226,14.726,8.041,24.238,12.982,31.218c2.475,3.461,5.287,6.24,8.345,8.361c1.858,1.29,3.783,2.286,5.731,3.166   c5.574,25.824,19.148,42.111,28.595,52.618c0,11.692,0,20.562,0,27.666c0,0.872-0.354,2.13-1.702,3.93   c-1.989,2.672-6.108,5.912-11,8.657c-4.876,2.771-10.483,5.18-15.391,6.907c-5.764,2.047-15.054,4.168-25.455,7.153   c-15.629,4.522-34.111,11.033-49.149,23.925c-7.506,6.446-14.092,14.544-18.729,24.607c-4.636,10.056-7.301,22.01-7.292,35.986   c0,3.248,0.14,6.602,0.428,10.072c0.222,2.434,1.142,4.407,2.236,6.034c2.064,3.042,4.81,5.295,8.246,7.622   c6.019,3.979,14.364,7.876,25.043,11.699c31.958,11.396,84.881,21.829,150.449,21.846c53.268,0,98.232-6.914,130.329-15.605   c16.057-4.349,28.875-9.118,38.141-13.878c4.646-2.393,8.394-4.768,11.37-7.358c1.488-1.316,2.795-2.688,3.889-4.325   c1.094-1.627,2.015-3.6,2.228-6.034c0.288-3.461,0.428-6.816,0.428-10.046C442.419,436.114,437.633,421.093,429.823,409.401z    M231.936,137.544c0-13.294,10.77-24.065,24.073-24.065c13.286,0,24.056,10.77,24.056,24.065v2.31   c0,13.287-10.77,24.065-24.056,24.065c-13.303,0-24.073-10.778-24.073-24.065V137.544z M236.466,460.639l-54.806-86.517   c4.991-2.088,10.104-4.727,14.84-7.777l31.366,45.104l15.128-28.455L236.466,460.639z M227.117,398.837l-25.273-36.332   c2.31-1.891,4.505-3.897,6.306-6.256c2.54-3.33,4.472-7.49,4.596-12.218l35.386,15.276L227.117,398.837z M212.795,336.887   c0-6.462,0-14.142,0-23.761v-2.77l-1.858-2.072c-9.874-10.993-23.234-25.586-27.871-51.516l-0.732-4.144l-3.955-1.414   c-2.524-0.896-4.439-1.817-6.116-2.984c-2.475-1.743-4.72-4.127-7.342-9.011c-2.59-4.86-5.328-12.119-8.328-22.65   c-1.324-4.604-1.792-8.181-1.792-10.845c0.008-3.083,0.6-4.884,1.2-6.026c0.913-1.653,2.032-2.36,3.454-2.936   c0.642-0.246,1.29-0.378,1.842-0.468l14.873,22.157l6.363-37.285l0.699-2.336c19.42,6.159,44.644,11.1,72.779,11.1   c28.06,0,53.366-4.9,72.794-11.041l0.674,2.277l6.364,37.285l14.873-22.141c0.937,0.148,2.195,0.46,3.166,1.102   c0.83,0.535,1.504,1.151,2.121,2.286c0.6,1.142,1.192,2.943,1.209,6.026c0,2.664-0.477,6.24-1.792,10.845   c-3.988,14.059-7.564,22.231-10.853,26.77c-1.644,2.293-3.149,3.724-4.818,4.892c-1.677,1.168-3.592,2.089-6.116,2.984   l-3.963,1.414l-0.724,4.144c-4.636,25.93-17.998,40.524-27.871,51.516l-1.858,2.072v2.77c0,9.62,0,17.299,0,23.761l-43.204,18.655   L212.795,336.887z M299.262,344.031c0.107,4.572,1.883,8.707,4.342,12.012c1.841,2.483,4.053,4.636,6.47,6.585l-25.191,36.208   l-21.006-39.53L299.262,344.031z M275.543,460.655l-6.528-77.653l15.12,28.447l31.308-45.022c1.044,0.667,2.089,1.324,3.182,1.949   c3.789,2.154,7.794,3.98,11.798,5.664L275.543,460.655z"/></g></svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Security</h4>
                    <p className="text-body-secondary">Enjoy peace of mind with round-the-clock security and comprehensive CCTV surveillance</p>
                  </div>
        
                  <div className="col d-flex flex-column gap-2">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 1024 1024" version="1.1"><path d="M451.7 837.9c44.4 0 84.2-20.4 110.2-52.2 17.3-18 17.3-18 34.7 0 26 31.8 65.7 52.2 110.2 52.2 44.4 0 84.2-20.4 110.2-52.2 17.3-18 17.3-18 34.7 0 26 31.8 65.7 52.2 110.2 52.2v-28.1c-43.8 0-83.1-25-102-63.4-10.3-21.1-40.6-21.1-51 0-18.8 38.4-58.2 63.4-102 63.4s-83.1-25-102-63.4c-10.3-21.1-40.6-21.1-51 0-18.8 38.4-58.2 63.4-102 63.4s-83.1-25-102-63.4c-10.3-21.1-40.6-21.1-51 0-18.8 38.4-58.2 63.4-102 63.4-44.8 0-83.7-26-102-63.4-11.3-20.8-39.6-20.8-27.7 7.4 21.9 49.4 71.8 84.1 129.8 84.1 44.4 0 84.2-20.4 110.2-52.2 17.3-18 17.3-18 34.7 0 25.6 31.8 65.3 52.2 109.8 52.2zM597.7 304.1v-56.7c-0.3-15.3-12.7-27.6-28.1-27.6-15.5 0-28.1 12.6-28.1 28.1 0 0 0 28.1-28.1 28.1s-28.1-28.1-28.1-28.1c0-46.5 37.7-84.3 84.3-84.3 46.5 0 84.3 37.7 84.3 84.3v332.5c8.9-8.8 16.5-19.1 22.1-30.7 10.3-21.1 40.6-21.1 51 0 18.8 38.4 58.2 63.4 102 63.4 44.8 0 83.7-26 102-63.4 11.3-20.8 39.6-20.8 27.7 7.4-21.9 49.4-71.8 84.1-129.8 84.1-44.4 0-84.2-20.4-110.2-52.2-17.3-18-17.3-18-34.7 0-26 31.8-65.7 52.2-110.2 52.2-44.4 0-84.2-20.4-110.2-52.2-17.3-18-17.3-18-34.7 0-26 31.8-65.7 52.2-110.2 52.2-44.4 0-84.2-20.4-110.2-52.2-17.3-18-17.3-18-34.7 0-26 31.8-65.7 52.2-110.2 52.2v-28.1c43.8 0 83.1-25 102-63.4 10.3-21.1 40.6-21.1 51 0 18.8 38.4 58.2 63.4 102 63.4 31.7 0 61.1-13.1 82.1-34.9V247.5c-0.3-15.3-12.7-27.6-28.1-27.6-15.5 0-28.1 12.6-28.1 28.1 0 0 0 28.1-28.1 28.1S288.7 248 288.7 248c0-46.5 37.7-84.3 84.3-84.3 46.5 0 84.3 37.7 84.3 84.3v56.2l140.4-0.1z" fill="#333333"/><path d="M457.3 360.3h140.4v56.2H457.3zM457.3 472.7h140.4v56.2H457.3zM597.7 610.7V585H499c20.3 17.7 46.7 28.1 75 28.1 8.1 0 16-0.8 23.7-2.4z" fill="#FFFFFF"/></svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Swimming Pool</h4>
                    <p className="text-body-secondary">Dive into luxury and make a splash in our sparkling, crystal-clear swimming pool</p>
                  </div>
        
                  <div className="col d-flex flex-column gap-2">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path d="M3.5 12c.015 0 .028-.004.042-.004l.94 4.226a2.497 2.497 0 1 0 3.345 3.173l7.182 1.197a2.491 2.491 0 1 0 3.527-2.36l1.902-8.238c.021 0 .04.006.062.006a2.5 2.5 0 1 0-2.03-3.95l-4.53-2.012a2.5 2.5 0 1 0-4.692.528L5.151 7.637A2.495 2.495 0 1 0 3.5 12zm1.018-.222a2.51 2.51 0 0 0 1.26-1.26l4.226.94c0 .014-.004.027-.004.042a2.484 2.484 0 0 0 .416 1.377l-3.54 3.54A2.483 2.483 0 0 0 5.5 16c-.014 0-.028.004-.042.004zm7.184-2.635a2.501 2.501 0 0 0-1.48 1.339l-4.226-.94c0-.014.004-.027.004-.042a2.472 2.472 0 0 0-.247-1.065l4.096-3.072a2.477 2.477 0 0 0 1.457.617zM14 11v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zm1.173 8.605L7.99 18.408a2.483 2.483 0 0 0-.407-1.285l3.54-3.54a2.405 2.405 0 0 0 2.123.29l2.632 4.74a2.494 2.494 0 0 0-.706.992zM6 20H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm13 0v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zm-1.438-1.994c-.02 0-.04-.006-.062-.006a2.466 2.466 0 0 0-.747.127l-2.632-4.74a2.411 2.411 0 0 0 .784-2.53l3.638-1.82a2.502 2.502 0 0 0 .92.731zM20 6h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm-1.939.963a2.301 2.301 0 0 0 .034 1.18l-3.638 1.82a2.483 2.483 0 0 0-1.763-.943l-.396-3.163a2.499 2.499 0 0 0 1.231-.908zM10 4V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM2 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Knowledge Thrive</h4>
                    <p className="text-body-secondary">Elevate your lifestyle with our state-of-the-art gym and serene library</p>
                  </div>
        
                  <div className="col d-flex flex-column gap-2">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 20 20"><g id="quality-5" transform="translate(-2 -2)">
                    <circle id="secondary" fill="#FFFFFF" cx="7" cy="7" r="7" transform="translate(5 3)"/><path id="primary" d="M10,10l1.33,1.5L14,8.5" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path id="primary-2" data-name="primary" d="M5.79,13.57,3,17.56l3.03.9L7.91,21l2.88-4.11" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path id="primary-3" data-name="primary" d="M18.21,13.57,21,17.56l-3.03.9L16.09,21l-2.88-4.11" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle id="primary-4" data-name="primary" cx="7" cy="7" r="7" transform="translate(5 3)" fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Convenient Amenities</h4>
                    <p className="text-body-secondary">Enjoy the perfect blend of education and convenience with top-notch schools and bustling markets just a stone's throw away from Society.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
    <section className="container my-5">
        <div className="row p-4 pb-0pe-lg-0pt-lg-5 align-items-center rounded-3 border shadow-lg">
              <div className="col-lg-4 p-0 overflow-hidden shadow-lg">
                <img src="./images/landingpageimages/Screenshot6-2025.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={size} loading="lazy" />
              </div>
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Rabindra Nazrul Sandhya</h1>
                <p className="lead">Rabindranath Tagore and Kazi Nazrul Islam share interesting similarities in the Gregorian calendar. They were both born in the month of May; Rabindranath on May 7, 1861, and Nazrul on May 25, 1899. They also died in the same month; Rabindranath on August 7, 1941, and Nazrul on August 29, 1976. </p>
                <p>Rabindranath Tagore dedicated his play "Basanta" to Nazrul Islam in 1923. Nazrul Islam wrote the poem "Aj Srishti Shukher Ullashe" to thank Tagore.</p>
                <p>Let's Join to share more interesting facts!</p>
              </div>
            
          </div>
    </section>
    <section>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Celebration Godess Saraswati on 2nd Feb. 2025</h1>
                <p className="lead">
                Welcome All Gitanjalian :<br/>
                On this auspicious occasion of Saraswati Puja, we extend a heartfelt welcome to everyone. On 2nd Feb. 2025, Sunday at 12:15 PM, we come together to celebrate the divine presence of Goddess Saraswati, the embodiment of knowledge, wisdom, and art. May her blessings guide us toward enlightenment and success in all our endeavors.<br/>
                Let us immerse ourselves in devotion and seek her grace to illuminate our minds and hearts. Together, let's make this celebration a harmonious and joyous event.<br/>
                Welcome, one and all!.<br/>
                </p>
                
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
              <img src="./images/landingpageimages/Screenshot5-2025.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={size} loading="lazy" />
              </div>
            </div>
          </div>
    </section>
    <section>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="./images/landingpageimages/Screenshot2-2025.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={size} loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Republic Day Celebration on 26th January 2025</h1>
                <p className="lead">
                Programme schedule :<br/>
                9:00 a.m. Flag Hoisting by Nihar Ranjan Sinha accompanied by President. <br/>
                9:05 a.m. National Anthem <br/>
                9:10 a.m. Vice President's speech on Republic Day.<br/>
                9:20 a.m.  Garlanding on  Netaji , M. K. Gandhi, Baba Saheb Ambedkar.<br/>
                9:30 a.m. Republic Day speech by any College/School student. <br/>
                9:40 a.m. Cultural Programme ( Now it is tentative, programme schedule will be finalised shortly)<br/>
                10:20 a.m. Valediction speech by President.<br/>
                10:30 a.m. Refreshment.<br/>
                </p>
                
              </div>
            </div>
          </div>
    </section>
    <section>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Festive Comitee Organised List Chart: 2025</h1>
                <p className="lead">
                We are pleased to inform you that we have already started our festivals with khuti puja. 
This year, 15th August, and Republic Day ( 26th January ) will be arranged on behalf of the Association. 
All the enlisted festivals are as mentioned below. 
                </p>
                <ol>
                  <li>Durga Puja </li>
                  <li>Laxmi Puja </li>
                  <li>Kali Puja </li>
                  <li>Chhath Puja </li>
                  <li>Christmas</li> 
                  <li>31st December </li>
                  <li>Saraswati Puja </li>
                  <li>Holi </li>
                  <li>Eid- Ul - Fitre </li>
                  <li>Rabindra Nazrul Sandhya</li>
                </ol>
                
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="./images/landingpageimages/Screenshot1-2025.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={size} loading="lazy" />
              </div>
            </div>
          </div>
    </section>
    </>
  );
};

export default IndexPage;
