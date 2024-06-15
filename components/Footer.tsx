import Link from "next/link";
import React, { ReactNode } from "react";

const Footer = () => {
  const styled = {
    borderTop: "1px solid transparent",
    padding: "15px",
    borderImage:
      "url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg) 90 round",
  };
  const appName = process.env.APP_NAME;
  return (
    <>
      <div className="container" style={styled}>
        <footer className="py-5">
          <div className="row">
            <div className="col-md-5 col-xs-12 mb-4">
              <h5>About:</h5>
              <p className="nav flex-column">
              {appName} is developed with a touch of Bengal which will
                give a feeling of a close community to all the residents. The
                project is surrounded with a lot of greenery and a scenic view
                the occupants can enjoy by having a walk around the property.
                {appName} has good connectivity and is 20 min from Barasat.
                {appName} vicinity includes several basic utilities like
                Barrackpore Math Para Bus Stop, Barrackpore Railway Station, St
                Claret School, Doctor BN Bose State General Hospital, HDFC Bank
                ATM, Viraat Bazaar, Apollo Pharmacy, Dada Boudi Hotel, Atindra
                Cinema Hall, Air Force Station, and Petrol Pump etc.
              </p>
              <p>Phase 1: Registered HIRA/P/NOR/2018/000074</p>
              <p>
                RERA | HIRA:{" "}
                <a href="http://rera.wb.gov.in/">http://rera.wb.gov.in/</a> |{" "}
                <a href="http://rera.wb.gov.in/">http://hira.wb.gov.in/</a>
              </p>
              <hr />
              <div>
                <div>Site developed & maintained by: w3earth</div>
                <div>Write to us: w3earth@outlook.com</div>
                <div>
                  <a href="https://wa.me/8217528181">
                    Connect to <strong>what`sApp</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 RiyaGitanjali, All rights reserved.</p>
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
};

export default Footer;
