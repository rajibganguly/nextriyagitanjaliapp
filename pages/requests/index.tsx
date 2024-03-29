import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";

const RequestsPage = () => (
  <>
    <div className="container-fluid">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <h1>Raise request for your concern</h1>
      </div>
      <div className="container">
        <div>
          <p><a href="#">Bookings for banquet</a></p>
          <p><a href="#">Parking issues</a></p>
          <p><a href="#">Security related issues</a></p>
          <p><a href="#">Electricity</a></p>
          <p><a href="#">Festival subscription</a></p>
          <p><a href="#">Other requests</a></p>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  </>
);

export default RequestsPage;
