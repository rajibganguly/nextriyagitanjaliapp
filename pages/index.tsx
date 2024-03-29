import Link from "next/link";
import Layout from "../components/Layout";
import react, { useState, useEffect, useRef } from "react";
import Header from "./../components/Header";
import Blogs from "./../components/Blogs";
import RiyaGit from "./../components/RiyaGit";
import Footer from "../components/Footer";
import TutorialsSection from "../components/Tutorials";
import { DashboardBanner } from "./../utils/dashboard-banners";

const IndexPage = () => {
  const [ code, setCode] = useState("");
  const handleChange = (e) => {
    setCode(e.target.value)
  }

  const handlerEnter = (event) => {
    if(event.keyCode === 13) {
      if(code === "rg") {
        localStorage.setItem("user", JSON.stringify({id: "1", name: "rg", code: "rg"}));
        window.location.href="/all";
      }
      else {
        window.location.href="";
      }
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div className="row mb-3" style={{ width: "200px", marginTop: "20%" }}>
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"  style={{ width: "200px" }}>
              Enter code
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3"  style={{ width: "200px" }} onChange={handleChange} onKeyDown={handlerEnter} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
