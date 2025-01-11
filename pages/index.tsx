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
    backgroundImage: "url('/images/bgimg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 137px"
}

const size = {
  width:"700px",
  height:"500px"
}

const gotoDashboard = () => {
  router.push('/dashboard');
}
  return (
    <>
    <section>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary" style={background}>
            <div className="col-md-6 p-lg-5 mx-auto my-5">
              <h1 className="display-3 fw-bold">Riya Gitanjali Society</h1>
              <h3 className="fw-normal text-muted mb-3">Empowering Communities, Enriching Lives.</h3>
              <div className="d-flex gap-3 justify-content-center lead fw-normal">
                <Link className="icon-link" href="/">
                  Available for buy
                  
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
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="https://lh3.googleusercontent.com/p/AF1QipOC4Kt7BZPsuNJGoUzbk62iQmcKpcFSXlGch5JZ=s1360-w1360-h1020" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={size} loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Riya Gitanjali | consists of 206 units spanned over 7 towers</h1>
                <p className="lead">Riya Gitanjali is a project by Riya Projects located in the prime area of Barrackpore, Kolkata offering simple and aesthetically designed 1 BHK and 2 BHK apartments. Riya Gitanjali price rate starts from Rs. 12.9 Lac onward.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={gotoDashboard}>Dashboard</button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div>
              </div>
            </div>
          </div>
    </section>
    <section>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Riya Gitanjali | consists of 206 units spanned over 7 towers</h1>
                <p className="lead">Riya Gitanjali is a project by Riya Projects located in the prime area of Barrackpore, Kolkata offering simple and aesthetically designed 1 BHK and 2 BHK apartments. Riya Gitanjali price rate starts from Rs. 12.9 Lac onward.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={gotoDashboard}>Dashboard</button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div>
              </div>
              <div className="col-10 col-sm-8 col-lg-6">
                <img src="https://lh3.googleusercontent.com/p/AF1QipOC4Kt7BZPsuNJGoUzbk62iQmcKpcFSXlGch5JZ=s1360-w1360-h1020" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={size} loading="lazy" />
              </div>
            </div>
          </div>
    </section>
    </>
  );
};

export default IndexPage;
