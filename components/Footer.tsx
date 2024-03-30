import Link from "next/link";
import React, { ReactNode } from "react";

const Footer = () => {
  const styled = {
    borderTop: "1px solid transparent",
    padding: "15px",
    borderImage: "url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg) 90 round"
  }
  return (
    <>
      <div className="container" style={styled}>
        <footer className="py-5">
          <div className="row">
            <div className="col-md-5 col-xs-12 mb-4">
              <h5>About:</h5>
              <p className="nav flex-column">
              Riya Gitanjali is developed with a touch of Bengal which will give a feeling of a close community to all the residents. The project is surrounded with a lot of greenery and a scenic view the occupants can enjoy by having a walk around the property. Riya Gitanjali has good connectivity and is 20 min from Barasat. Riya Gitanjali vicinity includes several basic utilities like Barrackpore Math Para Bus Stop, Barrackpore Railway Station, St Claret School, Doctor BN Bose State General Hospital, HDFC Bank ATM, Viraat Bazaar, Apollo Pharmacy, Dada Boudi Hotel, Atindra Cinema Hall, Air Force Station, and Petrol Pump etc.
              </p>
              <p>
                Phase 1: Registered HIRA/P/NOR/2018/000074
                </p>
              <p>
                RERA | HIRA: <a href="http://rera.wb.gov.in/">http://rera.wb.gov.in/</a> | <a href="http://rera.wb.gov.in/">http://hira.wb.gov.in/</a>
                </p>
              <hr/>
              <div>
                <div>Write Me: w3earth@outlook.com</div>
                <div>
                  <a href="https://wa.me/8217528181">Connect to <strong>what`sApp</strong></a>
              </div>
                </div>
            </div>          
  
            {/* <div className="col-6 col-md-2 mb-3">
              <h5>Popular links:</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="/" className="nav-link p-0 text-body-secondary">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/projects" className="nav-link p-0 text-body-secondary">
                    Features
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/faq" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/contact" className="nav-link p-0 text-body-secondary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div> */}
  
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Connect with us:</h5>              
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 w3earth, All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  Twitter
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  Facebook
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
