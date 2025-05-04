import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Blogs from "../../components/Blogs";
import TutorialsSection from "../../components/Tutorials";
import { useState, useEffect } from "react";
import keywords from "../../lib/keywords"

const AdminPage = () => {
  const [showAdmin, setAdmin] = useState(false)
    const [promoCode, setPromoCode] = useState(''); 
    const [parkingIssueData, setParkingIssueData] = useState([]);
    const handleInputChange = (event) => { setPromoCode(event.target.value); };

    useEffect(() => {
      getParkingData();
    }, []);
  
  const font100 = {
    fontWeight: "100"
}

const handlerClik = () => {
  if(promoCode === keywords.admin) {
    console.log(keywords.admin)
    setAdmin(true)
  } else {
    setAdmin(false)
  }

}

const getParkingData = async() => {
  const response = await fetch('/api/requests/parking', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  setParkingIssueData(data.parkingIssues);
  console.log(data)
  //return data;
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
      { showAdmin ? (<div className="my-3 p-3 bg-body rounded shadow-sm ">
              <h6 className="border-bottom pb-2 mb-0">List of all requests</h6>
              <div className="d-flex text-body-secondary pt-3">
                <div className="m-4 w-100">
                 {parkingIssueData.length > 0 ? (
                   <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Issue</th>
                    <th scope="col">Category</th>
                    <th scope="col">Timestamp</th>
                    <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parkingIssueData.map((issue, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{issue.message}</td>
                      <td>{issue.catergory}</td>
                      <td>{issue.timestamp}</td>
                      <td><button>Remove</button></td>
                    </tr>
                    ))}
                  </tbody>
                  </table>
                 ) : (
                   <p>No parking issues found.</p>
                 )}
                </div>
              </div>
      </div>) : (
              <>
              <h6 className="border-bottom pb-2 mb-0">Required association permission code to see seller lists</h6>
              <div className="d-flex text-body-secondary pt-3 centerbox">
                <div className="m-4">
                <form className="card p-2">
                <div className="input-group">
                  <input type="password" className="form-control" value={promoCode} onChange={handleInputChange} placeholder="code required" />
                  <button type="submit" className="btn btn-secondary" onClick={handlerClik}>Show Sell Owners Lists</button>
                </div>
              </form>
                </div>
              </div>
              </>
            )}
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
