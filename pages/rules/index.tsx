import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Blogs from "../../components/Blogs";
import TutorialsSection from "../../components/Tutorials";

const RulesPage = () => {
  let bgStyle = {
    background: "linear-gradient(105deg, #f5f5f5, #f0f0f0)",
  };

  let dashBoardStyle = {
    fontWeight: "100",
    padding: "1rem",
  };
  
  return (
  <>
    <div className="container-fluid">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <h1>Rules & Regulation</h1>
      </div>
      <div className="container">
          <Blogs />
        </div>
        <div className="container-fluid" style={bgStyle}>
          <h1 style={dashBoardStyle}>TUTORIAL</h1>
          <TutorialsSection />
        </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  </>
)};

export default RulesPage;
