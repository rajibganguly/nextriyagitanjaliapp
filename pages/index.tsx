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
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={gotoDashboard}>Enter</button>
              </div>
        
              <div className="col">
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                  <div className="col d-flex flex-column gap-2">
                    <div>
                        <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"><path d="M29.22,13.95h-.28v-2.07c0-4.75-5.76-8.61-12.84-8.61S3.26,7.14,3.26,11.88v2.07h-.48c-.84,0-1.52,.68-1.52,1.52v1.06c0,.84,.68,1.52,1.52,1.52h.48v2.07c0,4.74,5.76,8.6,12.84,8.6s12.84-3.86,12.84-8.6v-2.07h.28c.84,0,1.52-.68,1.52-1.52v-1.06c0-.84-.68-1.52-1.52-1.52ZM16.1,4.78c5.85,0,10.68,2.79,11.28,6.36H4.82c.6-3.57,5.43-6.36,11.28-6.36ZM4.76,12.63H27.44v1.32H4.76v-1.32Zm11.34,14.58c-5.85,0-10.68-2.79-11.28-6.35h12.49l1.8,3c.14,.23,.38,.36,.64,.36s.51-.14,.64-.36l1.8-3h5.17c-.6,3.56-5.43,6.35-11.28,6.35Zm11.34-7.85h-5.66c-.26,0-.51,.14-.64,.36l-1.38,2.29-1.38-2.29c-.14-.23-.38-.36-.64-.36H4.76v-1.32H27.44v1.32Zm1.78-2.82l-26.46-.02,.02-1.08h1.22s0,0,0,0H28.19s0,0,0,0h1.02s.02,.02,.02,.02l-.02,1.08Z"></path></svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Security</h4>
                    <p className="text-body-secondary">Enjoy peace of mind with round-the-clock security and comprehensive CCTV surveillance</p>
                  </div>
        
                  <div className="col d-flex flex-column gap-2">
                    <div>
                        <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"><path d="M29.22,13.95h-.28v-2.07c0-4.75-5.76-8.61-12.84-8.61S3.26,7.14,3.26,11.88v2.07h-.48c-.84,0-1.52,.68-1.52,1.52v1.06c0,.84,.68,1.52,1.52,1.52h.48v2.07c0,4.74,5.76,8.6,12.84,8.6s12.84-3.86,12.84-8.6v-2.07h.28c.84,0,1.52-.68,1.52-1.52v-1.06c0-.84-.68-1.52-1.52-1.52ZM16.1,4.78c5.85,0,10.68,2.79,11.28,6.36H4.82c.6-3.57,5.43-6.36,11.28-6.36ZM4.76,12.63H27.44v1.32H4.76v-1.32Zm11.34,14.58c-5.85,0-10.68-2.79-11.28-6.35h12.49l1.8,3c.14,.23,.38,.36,.64,.36s.51-.14,.64-.36l1.8-3h5.17c-.6,3.56-5.43,6.35-11.28,6.35Zm11.34-7.85h-5.66c-.26,0-.51,.14-.64,.36l-1.38,2.29-1.38-2.29c-.14-.23-.38-.36-.64-.36H4.76v-1.32H27.44v1.32Zm1.78-2.82l-26.46-.02,.02-1.08h1.22s0,0,0,0H28.19s0,0,0,0h1.02s.02,.02,.02,.02l-.02,1.08Z"></path></svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Swimming Pool</h4>
                    <p className="text-body-secondary">Dive into luxury and make a splash in our sparkling, crystal-clear swimming pool</p>
                  </div>
        
                  <div className="col d-flex flex-column gap-2">
                    <div>
                        <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"><path d="M29.22,13.95h-.28v-2.07c0-4.75-5.76-8.61-12.84-8.61S3.26,7.14,3.26,11.88v2.07h-.48c-.84,0-1.52,.68-1.52,1.52v1.06c0,.84,.68,1.52,1.52,1.52h.48v2.07c0,4.74,5.76,8.6,12.84,8.6s12.84-3.86,12.84-8.6v-2.07h.28c.84,0,1.52-.68,1.52-1.52v-1.06c0-.84-.68-1.52-1.52-1.52ZM16.1,4.78c5.85,0,10.68,2.79,11.28,6.36H4.82c.6-3.57,5.43-6.36,11.28-6.36ZM4.76,12.63H27.44v1.32H4.76v-1.32Zm11.34,14.58c-5.85,0-10.68-2.79-11.28-6.35h12.49l1.8,3c.14,.23,.38,.36,.64,.36s.51-.14,.64-.36l1.8-3h5.17c-.6,3.56-5.43,6.35-11.28,6.35Zm11.34-7.85h-5.66c-.26,0-.51,.14-.64,.36l-1.38,2.29-1.38-2.29c-.14-.23-.38-.36-.64-.36H4.76v-1.32H27.44v1.32Zm1.78-2.82l-26.46-.02,.02-1.08h1.22s0,0,0,0H28.19s0,0,0,0h1.02s.02,.02,.02,.02l-.02,1.08Z"></path></svg>
                    </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis">Knowledge Thrive</h4>
                    <p className="text-body-secondary">Elevate your lifestyle with our state-of-the-art gym and serene library</p>
                  </div>
        
                  <div className="col d-flex flex-column gap-2">
                    <div>
                        <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"><path d="M29.22,13.95h-.28v-2.07c0-4.75-5.76-8.61-12.84-8.61S3.26,7.14,3.26,11.88v2.07h-.48c-.84,0-1.52,.68-1.52,1.52v1.06c0,.84,.68,1.52,1.52,1.52h.48v2.07c0,4.74,5.76,8.6,12.84,8.6s12.84-3.86,12.84-8.6v-2.07h.28c.84,0,1.52-.68,1.52-1.52v-1.06c0-.84-.68-1.52-1.52-1.52ZM16.1,4.78c5.85,0,10.68,2.79,11.28,6.36H4.82c.6-3.57,5.43-6.36,11.28-6.36ZM4.76,12.63H27.44v1.32H4.76v-1.32Zm11.34,14.58c-5.85,0-10.68-2.79-11.28-6.35h12.49l1.8,3c.14,.23,.38,.36,.64,.36s.51-.14,.64-.36l1.8-3h5.17c-.6,3.56-5.43,6.35-11.28,6.35Zm11.34-7.85h-5.66c-.26,0-.51,.14-.64,.36l-1.38,2.29-1.38-2.29c-.14-.23-.38-.36-.64-.36H4.76v-1.32H27.44v1.32Zm1.78-2.82l-26.46-.02,.02-1.08h1.22s0,0,0,0H28.19s0,0,0,0h1.02s.02,.02,.02,.02l-.02,1.08Z"></path></svg>
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
                <img src="./images/landingpageimages/Screenshot5-2025.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={size} loading="lazy" />
              </div>
              
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Celebration Godess Saraswati on 2nd Feb. 2025</h1>
                <p className="lead">
                Welcome All Gitanjalian :<br/>
                On this auspicious occasion of Saraswati Puja, we extend a heartfelt welcome to everyone. On 2nd Feb. 2025, Sunday at 12:15 PM, we come together to celebrate the divine presence of Goddess Saraswati, the embodiment of knowledge, wisdom, and art. May her blessings guide us toward enlightenment and success in all our endeavors.<br/>
                Let us immerse ourselves in devotion and seek her grace to illuminate our minds and hearts. Together, let's make this celebration a harmonious and joyous event.<br/>
                Welcome, one and all!.<br/>
                </p>
                
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
