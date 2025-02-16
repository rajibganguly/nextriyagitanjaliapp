import React, { useState, ReactNode } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
import logo from './../public/images/logo.png';

const Header = () => {
  const [mobNan, setMobNav] = useState(false);
  const toggleNav = () => {
    if (mobNan) {
      setMobNav(false);
    } else {
      setMobNav(true);
    }
  };

  const collapse = mobNan ? { display: "block" } : { display: "none" };

  return (
    <>
      <Head>
        <title>RiyaGitanjali</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="copyright" content="riyaGitanjali" />
        <meta name="description" content="Website offering some details about Riya Gitanjali Society and Gitanjalians" />
        <meta name="keywords" content="Modibai, Barrackpore, Flats, Buy Flats near Barrackpore, Barasat Appartments, Society" />
        <meta name="author" content="nextriyagitanjaliapp.vercel.app" />
        <meta name="robots" content="application, web apps, modibari, barrackpore, Rajib Ganguly" />
        <meta name="url" content="nextriyagitanjaliapp.vercel.app/" />
        <meta name="DC.title" content="Society Application" />
        <meta property="og:title" content="Society near Modibari" />
        <meta property="og:description" content="Riya Gitanjali Website" />
        <meta property="og:url" content="./favicon.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="./favicon.jpg" />
        <meta property="og:site_name" content="w3earth society Web App" />
        <link rel="icon" type="image/x-icon" href="./favicon.jpg" />
      </Head>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <Image src={logo} width={128} height={74} alt="Riya gitanjali Logo" />
          </a>
          <div
            style={collapse}
            className="navbar-collapse"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/dashboard" className="nav-link active">
                  RG Owners
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/rules" className="nav-link active">
                  Rules
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/requests" className="nav-link">
                  Request
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <nav>
        <a href="/api/users">Users API</a>
      </nav> */}
    </>
  );
};

export default Header;
