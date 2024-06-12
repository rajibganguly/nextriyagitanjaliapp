import Link from "next/link";
import Image from 'next/image';
import Layout from "../components/Layout";
import react, { useState, useEffect, useRef } from "react";
import Login from "../components/login";
import Register from "../components/register";
import Footer from "../components/Footer";
import logo from './../public/images/logo.png';

const IndexPage = () => {
  const [ login, setLogin] = useState(true);

  
  return (
    <>
    <div className="container-fluid">
      <div className="container">
      <Image src={logo} width={128} height={74} alt="Riya gitanjali Logo" />
      </div>
      <div className="container-fluid">
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div className="row mb-3" style={{ width: "300px", marginTop: "2%" }}>
            <div>
              <button className="btn btn-light mr-2" onClick={() => setLogin(true)}>Login</button>
              <button className="btn btn-dark" onClick={() => setLogin(false)}>Register</button>
            </div>
            { login === true ? ( <Login /> ) : (<Register />)}
          </div>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>      
    </>
  );
};

export default IndexPage;
