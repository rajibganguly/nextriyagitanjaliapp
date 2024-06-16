import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Register from "../../components/register";

const RegisterPage = () => {
  
  
  return (
  <>
    <div className="container-fluid">
      <div className="container">
        <Header />
      </div>
      <div className="container" >
        <h6>
          <a href="/login" className="btn btn-light">Login</a> | 
          <a href="/register" className="btn btn-light">Register</a>
        </h6>
          <Register />
        </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  </>
)};

export default RegisterPage;
