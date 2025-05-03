import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";

const RequestsPage = () => {
  const [showInput, setShowInput] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [issueText, setIssueText] = useState({message: '', catergory: 'Parking Issue'}); // Store textarea value

  const boxmodel = {
    margin: "1rem",
    padding: "1rem 0.5rem",
    borderRadius: "0.25rem",
  }

  const parkingShowInput = (event) => {
    event.preventDefault();
    
    if(showInput === true) {
      setShowInput(false);
    } else {
      setShowInput(true);
    }
    setShowThankYou(false); // Hide thank-you message when opening input
  };
  // sending data
  const parkingSubmit = async (e) => {
    e.preventDefault();
        const response = await fetch('/api/requests/parking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ issueText }),
        });

        const data = await response.json();
        if (data.success) {
            setShowInput(false);
            setIssueText({message: '', catergory: 'Parking Issue'}); // Reset textarea value
            // Hide the thank-you message after 10 seconds (10,000 milliseconds)
          setTimeout(() => {
            setShowThankYou(false);
          }, 10000);
        } else {
            alert('Failed to post message.');
        }

  };

  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <h1>Raise request for your concern</h1>
        <p className="muted">
        Do you have a concern that needs attention? We are here to help! Our request platform makes it easy for you to raise issues and get them resolved swiftly. Whether you need to book a banquet for your next celebration, address parking issues, report security concerns, request assistance with electricity services, subscribe to festival plans, or have other requests, you can submit your concerns seamlessly. Simply click on the respective link and provide the necessary details—our team will take care of the rest, ensuring a smooth and hassle-free experience for you. Your convenience is our priority!

        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-sm-12 col-xs-12">
          <div className="p-1">
            <div>Link: <a href="#">Bookings for banquet</a></div>
          </div>
          
          <div className="p-1">
            <div>Link: <a href="#" onClick={parkingShowInput}>Parking issues</a>
            {showInput && (
            <div className="mt-3">
              <textarea
                className="form-control"
                rows={4}
                placeholder="Describe your parking issue with -[name, block & flat number]"
                value={issueText.message}
                onChange={(e) => setIssueText({ ...issueText, message: e.target.value, catergory: 'Parking Issue' })} // Capture input
              ></textarea>

              <button className="btn btn-dark mt-2" onClick={parkingSubmit}>Send Now!</button>
            </div>
          )}

          {showThankYou && (
            <div className="mt-3 text-success fw-bold">
              Thank you for reporting the issue!
            </div>
          )}
            
            </div>
          </div>

          <div className="p-1">
          <div>Link: <a href="#">Security related issues</a></div>
          </div>
          <div className="p-1">
          <div>Link: <a href="#">Electricity</a></div>
          </div>
          <div className="p-1">
          <div>Link: <a href="#">Festival subscription</a></div>
          </div>
          <div className="p-1">
          <div>Link: <a href="#">Other requests</a></div>
          </div>
          </div>
          <div className="col-xl-6 col-sm-12 col-xs-12">
            <img src="/images/people-asking-questions.jpg" alt="People asking questions" className="img-fluid" />
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
