import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";

const BuyPage = () => (
  <>
    <div className="container">
    <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Buy Flats in Riya Gitanjali</h6>
            <div className="d-flex text-body-secondary pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">Rajib Halder</strong>
                  <a href="#">rajib.halder@gmail.com</a>
                </div>
                <span className="d-block">2 BHK | No parking</span>
              </div>
            </div>
            <div className="d-flex text-body-secondary pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">Javed Mondal</strong>
                  <a href="#">javed.m23@yahoo.co.in</a>
                </div>
                <span className="d-block">3 BHK | 2 wheeler parking</span>
              </div>
            </div>
            <div className="d-flex text-body-secondary pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">Paresh Lahiri</strong>
                  <a href="#">paresh2345@sify.com</a>
                </div>
                <span className="d-block">2 BHK | 4 wheeler parking</span>
              </div>
            </div>
            <small className="d-block text-end mt-3">
            By RGO Association
            </small>
          </div>
    </div>
    <div className="container">
        <Footer />
      </div>
  </>
);

export default BuyPage;
