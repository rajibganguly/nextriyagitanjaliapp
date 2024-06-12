import Link from "next/link";
import React, { useState } from 'react';
import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import HeadBanner from "../../components/sub-components/headbanner";
import { Tabs, Tab, Box, Typography } from '@mui/material';

// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

const ProfilePage = () => {
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
        <h3 className="text-muted">My Profile</h3>
        <p>You can update and edit profile here. </p>
        
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="View Profile" />
            <Tab label="Edit Profile" />
          </Tabs>
          <Box sx={{ p: 3 }}>
            {value === 0 && (
              <Typography component="div">
                <h2>View Profile</h2>
                <p>This is the View Profile tab content.</p>
              </Typography>
            )}
            {value === 1 && (
              <Typography component="div">
                <h2>Edit Profile</h2>
                <p>This is the Edit Profile tab content.</p>
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

export default ProfilePage;
