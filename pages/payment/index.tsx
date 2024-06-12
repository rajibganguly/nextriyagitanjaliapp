import Link from "next/link";
import React, { useState } from 'react';
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import HeadBanner from "../../components/sub-components/headbanner";
import { Tabs, Tab, Box, Typography } from '@mui/material';



const PaymentPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return(
  <>
    <div className="container-fluid">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <HeadBanner />
        </div>        
        <div className="container">
        <h3 className="text-muted">My Payments</h3>
        <p>You can pay all the paymets to {process.env.APP_NAME}. </p>
        
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Maintainance Change" />
            <Tab label="Festival Subscription" />
          </Tabs>
          <Box sx={{ p: 3 }}>
            {value === 0 && (
              <Typography component="div">
                <h2>Maintainance Charge</h2>
                <p>This is the MC tab content.</p>
              </Typography>
            )}
            {value === 1 && (
              <Typography component="div">
                <h2>Festival Subscription</h2>
                <p>This is the FS tab content.</p>
              </Typography>
            )}
          </Box>
        </Box>

        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
  </>
)};

export default PaymentPage;


