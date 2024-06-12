import Link from "next/link";
import Layout from "../../components/Layout";
import RiyaGit from "../../components/RiyaGit";

import react, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Blogs from "../../components/Blogs";
import Footer from "../../components/Footer";
import TutorialsSection from "../../components/Tutorials";
import { DashboardBanner } from "../../utils/dashboard-banners";
import { DashboardCards } from "../../utils/dashboard-banners";
import HeadBanner from "../../components/sub-components/headbanner";

const AllOwnersPage = () => {
  const bgImgList = DashboardBanner;

  let dashBoardStyle = {
    fontWeight: "100",
    padding: "1rem",
  };

  const [bannerImg, setBannerImg] = useState("");
  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    setBannerImg("url(" + bgImgList[day] + ")");
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <HeadBanner />
        </div>        
        <div className="container">
          <h1 style={dashBoardStyle}>RIYA-GITANJALI</h1>
        </div>
        <div className="container">
          <RiyaGit props={DashboardCards} />
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AllOwnersPage;
