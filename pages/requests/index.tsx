import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";

const RequestsPage = () => {
  const [showInput, setShowInput] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [issueText, setIssueText] = useState(""); // Store textarea value

  const parkingShowInput = (event) => {
    event.preventDefault();
    setShowInput(true);
    setShowThankYou(false); // Hide thank-you message when opening input
  };

  const parkingSubmit = () => {
    console.log("Reported Parking Issue:", issueText); // Log textarea value
    setShowInput(false); // Hide input
    setShowThankYou(true); // Show thank-you message
    // Hide the thank-you message after 10 seconds (10,000 milliseconds)
  setTimeout(() => {
    setShowThankYou(false);
  }, 10000);

  };

  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <h1>Raise request for your concern</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-1">
            <p><a href="#">Bookings for banquet</a></p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-1">
            <p><a href="#" onClick={parkingShowInput}>Parking issues</a>
            {showInput && (
        <div className="mt-3">
          <textarea
            className="form-control"
            rows={4}
            placeholder="Describe your parking issue with name, block, flat number."
            value={issueText}
            onChange={(e) => setIssueText(e.target.value)} // Capture input
          ></textarea>

          <button className="btn btn-light mt-2" onClick={parkingSubmit}>Send Now!</button>
        </div>
      )}

      {showThankYou && (
        <div className="mt-3 text-success fw-bold">
          Thank you for reporting the issue!
        </div>
      )}
            
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-1">
          <p><a href="#">Security related issues</a></p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-1">
          <p><a href="#">Electricity</a></p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-1">
          <p><a href="#">Festival subscription</a></p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-1">
          <p><a href="#">Other requests</a></p>
          </div>

          
          
          
          
          
          
          

        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  </>
  )
}
  

  


export default RequestsPage;
