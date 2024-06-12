import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import react, { useState, useEffect, useRef } from "react";
import Blogs from "../../components/Blogs";
import TutorialsSection from "../../components/Tutorials";
import HeadBanner from "../../components/sub-components/headbanner";

const ServicesPage = () => {   

  
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <Header />
        </div>
        <div className="container">
            <HeadBanner />
          </div>
        <div className="container">
          <section>
            <h2>Overview:</h2>
            <p>
            {process.env.APP_NAME} is a project by Riya Projects located in the prime
              area of Barrackpore, Kolkata offering simple and aesthetically
              designed 1 BHK and 2 BHK apartments. It consists of 206 units
              spanned over 7 towers and is currently undergoing construction. Riya
              Gitanjali price rate starts from Rs. 12.9 Lac onward.
            </p>
            <h2>Project Details:</h2>
            <p>
            {process.env.APP_NAME} is well thought plot in the strategic and thoughtful
              area of Barrackpore, Kolkata by the well experienced Riya Projects
              offering simple and aesthetically designed 1 BHK and 2 BHK
              apartments. {process.env.APP_NAME} plot areas for its 1 BHK flat range from
              539 sq. ft. to 540 sq. ft. and 2 BHK flat areas range from 731 sq.
              ft. to 858 sq. ft. {process.env.APP_NAME} apartments are designed with
              ceramic tiles and vitrified tiles flooring, laminated flush doors,
              concealed copper wiring with standard switches, branded CP fittings
              and sanitary ware, and premium fixtures etc. {process.env.APP_NAME} provides
              high quality amenities for its residents like 24*7 power back up,
              swimming pool, lift, 24*7 security facilities, park, gymnasium,
              indoor games room, kids play area, library & business centre, air
              conditioned, outdoor tennis court, and fire fighting equipment etc.
              and several more.
              <h2>Highpoints:</h2>
              {process.env.APP_NAME} is developed with a touch of Bengal which will give a
              feeling of a close community to all the residents. The project is
              surrounded with a lot of greenery and a scenic view the occupants
              can enjoy by having a walk around the property. {process.env.APP_NAME} has
              good connectivity and is 20 min from Barasat. {process.env.APP_NAME}
              vicinity includes several basic utilities like Barrackpore Math Para
              Bus Stop, Barrackpore Railway Station, St Claret School, Doctor BN
              Bose State General Hospital, HDFC Bank ATM, Viraat Bazaar, Apollo
              Pharmacy, Dada Boudi Hotel, Atindra Cinema Hall, Air Force Station,
              and Petrol Pump etc.
            </p>
            <h2>About {process.env.APP_NAME}:</h2>
            <p>
              Located in Barrackpore, Kolkata, the {process.env.APP_NAME} is a
              thoughtfully planned one, equipped with all amenities for a
              comfortable living. The well-designed {process.env.APP_NAME} project is
              available in the price range of Rs. 17. 0 Lac - 30. 0 Lac. It covers
              an area of 3 Acre that is well-maintained. The 221 in this project
              all come with smart interiors and well-utilised spaces. It is a
              beautifully constructed Residential property that is sure to please
              you. The available project units are in Ready To Move state. The
              project offers property options such as Flat which are unparalleled
              and value for money. The property units are spacious and range in
              size from 2 BHK Flat (731. 0 Sq. Ft. - 822. 0 Sq. Ft. ), 1 BHK Flat
              (539. 0 Sq. Ft. - 539. 0 Sq. Ft. ). The design of the project is
              such that it is classified into 4 towers. The launch date of this
              much awaited project is 01 May 2015. The estimated possession date
              of the project is 01 May 2019. This world class {process.env.APP_NAME} has
              been granted. its commencement certificate. The occupancy
              certificate of this modern project not granted. {process.env.APP_NAME} has
              been developed by the well-known builder Riya Projects. In Riya
              Gitanjali you may take advantage of the best facilities like Power
              Back Up, Outdoor Tennis Courts, Library And Business Centre, Kids
              Play Area, Indoor Games Room, Fire Fighting Equipment, Air
              Conditioned, Security, Lift, Swimming Pool. The site's complete
              address is Barrackpore, Kolkata North. The required pincode of the
              project is 700122. Relish the benefits of living in {process.env.APP_NAME},
              which offers all modern comforts.
            </p>
            <h2>{process.env.APP_NAME} Floor Plan:</h2>
            <p>
              To get an idea of the space covered, layout and room sizes, browsing
              through the floor plan would help. {process.env.APP_NAME} boasts of having 2
              configurations available in 5 types of immaculately designed
              layouts. 2 BHK Flat size is available in sizes of 731, 796, 812 and
              822 sq. ft super area. In 1 BHK Flat you will get floor plans in
              sizes of 539 sq. ft super area. These configurations come with
              well-fitted bathrooms and accessible balconies. You can view
              differnt configurations across unit sizes of {process.env.APP_NAME} on
              Magicbricks.
            </p>
            <h2>{process.env.APP_NAME} Address:</h2>
            <p>
              The {process.env.APP_NAME} is strategically located at Barrackpore, Kolkata
              North, 700122.
            </p>
          </section>
        </div> 
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  )
}


export default ServicesPage;
