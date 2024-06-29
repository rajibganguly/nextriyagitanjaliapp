import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Login from "../../components/login";

const LoginPage = () => {
  

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
        <h6>
          <a href="/login" className="btn btn-link">Login</a> | 
          <a href="/register" className="btn btn-link">Register</a>
        </h6>
          <Login />
        </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  </>
)};

export default LoginPage;
