import react, { useEffect, useState } from "react";
import { DashboardBanner } from "../../utils/dashboard-banners";
import { CONTEXT } from "../../public/context";

function HeadBanner() {
  const bgImgList = DashboardBanner;

  const [bannerImg, setBannerImg] = useState("");
  
  let bgImage = {
    backgroundImage: bannerImg,
  }; 

  const app_name = CONTEXT.appName

  const doSetTimeout = (startIndex: number = 0) => {
    let currentIndex: number = startIndex;
    

    // Display each banner image in an infinite loop
    var intervalId = setInterval(function() {
        // Display the current banner
        setBannerImg("url(" + bgImgList[currentIndex] + ")")

        // Move to the next banner
        currentIndex = (currentIndex + 1) % bgImgList.length;
    }, 5000); // Display each banner for 5 seconds

    // Clear the interval after 5 seconds multiplied by the number of banners
    setTimeout(function() {
        clearInterval(intervalId);
    }, bgImgList.length * 5000);

    //setBannerImg("url(" + bgImgList[currentIndex] + ")")
  }

  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    doSetTimeout(day)
  }, []);

  return (
    <>
      <div
        className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-image"
        style={bgImage}
      >
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">
          {app_name} | consists of 206 units spanned over 7 towers
          </h1>
          <p className="lead my-3">
          {app_name} is a project by Riya Projects located in the prime
            area of Barrackpore, Kolkata offering simple and aesthetically
            designed 1 BHK and 2 BHK apartments. {app_name} price rate
            starts from Rs. 12.9 Lac onward..
          </p>
          <p className="lead mb-0">
            <a href="#" className="text-body-emphasis fw-bold">
              Continue reading...
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default HeadBanner;
