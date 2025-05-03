import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Blogs from "../../components/Blogs";
import TutorialsSection from "../../components/Tutorials";

const AdminPage = () => {
  
  const font100 = {
    fontWeight: "100"
}


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
      <h1 style={font100}>Administrator</h1>
       <p>Coming soon</p>
      </div>
      <div className="container">
          <Blogs />
        </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  </>
)};

export default AdminPage;
