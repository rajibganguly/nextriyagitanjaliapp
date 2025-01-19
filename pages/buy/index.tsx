import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import React, {useState} from 'react';
import Image from 'next/image';
import Footer from "../../components/Footer";
import apartment from "./../../public/icons/svg/apartment.svg"

const apartmentIcon = {
  width: "30px",
  height: "30px",
  paddingRight: "10px"
}
const BuyPage = () => {
  const [showBuyer, setShowBuyer] = useState(false)
  const [promoCode, setPromoCode] = useState(''); 
  const handleInputChange = (event) => { setPromoCode(event.target.value); };

  const handlerClik = () => {
    const passmsg = "w3earth10";
    if(passmsg === promoCode) {
      setShowBuyer(true)
    } else {
      setShowBuyer(false)
    }

  }

  return(
    <>
      <div className="container">
          <Header />
      </div>
      <div className="container">
      {showBuyer ? (<div className="my-3 p-3 bg-body rounded shadow-sm">
              <h6 className="border-bottom pb-2 mb-0">Buy Flats in Riya Gitanjali</h6>
              <div className="d-flex text-body-secondary pt-3">
              <Image src={apartment} style={apartmentIcon} alt="Apartment Icon" />
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">Mr. Abhimanyu Patel</strong>
                    <cite> 8910807443 / 9398009553 </cite>
                  </div>
                  <span className="d-block">Block 7-1D | 2 BHK | covered 4 wheeler parking</span>
                </div>
              </div>
              <div className="d-flex text-body-secondary pt-3">
              <Image src={apartment} style={apartmentIcon} alt="Apartment Icon" />
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">Mr. Debopam Das</strong>
                    <cite>9547830958 </cite>
                  </div>
                  <span className="d-block">Block 5-1C | 2 BHK | covered 4 wheeler parking</span>
                </div>
              </div>
              <div className="d-flex text-body-secondary pt-3">
              <Image src={apartment} style={apartmentIcon} alt="Apartment Icon" />
                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">Mr. Solanky Chakrabortty</strong>
                    <cite>9674908630 </cite>
                  </div>
                  <span className="d-block">Block 2-1C | 2 BHK | 2 wheeler parking</span>
                </div>
              </div>
              <small className="d-block text-end mt-3">
              By RGO Association
              </small>
            </div>) : (
              <>
              <h6 className="border-bottom pb-2 mb-0">Required association permission code to see seller lists</h6>
              <div className="d-flex text-body-secondary pt-3">
                <div className="m-4">
                <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" value={promoCode} onChange={handleInputChange} placeholder="code required" />
                  <button type="submit" className="btn btn-secondary" onClick={handlerClik}>Show Sell Owners Lists</button>
                </div>
              </form>
                </div>
              </div>
              </>
            )}
      </div>
      <div className="container">
          <Footer />
        </div>
    </>
  )
};

export default BuyPage;
