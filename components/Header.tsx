import React, { useState, ReactNode } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

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
            Riya Gitanjali..
          </a>
          <div
            style={collapse}
            className="navbar-collapse"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/all" className="nav-link active">
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
                <Link href="/explore" className="nav-link">
                  Explorer
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
