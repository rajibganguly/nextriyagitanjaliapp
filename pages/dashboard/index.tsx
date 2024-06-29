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
import { CONTEXT } from "../../public/context";

const Dashboard = () => {
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

  const app_name = CONTEXT.appName;

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
        <h3 className="text-muted">{app_name}</h3>
        <p>The project is location in heart of Barrackpore Barasat. </p>
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

export default Dashboard;
