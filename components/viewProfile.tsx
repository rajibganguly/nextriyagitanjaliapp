import Link from "next/link";
import React, { useEffect, useState } from 'react';

// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';



const ViewProfilePage = (props) => {

    return (
        <>
            <div className="container-fluid">
                {props ? (
                    <>                        
                        <p>My bio: {props?.props?.bio}</p>
                        <p>My blockflat: {props?.props?.blockflat}</p>
                        <p>My name: {props?.props?.name}</p>                        
                        <p>My date of birth: {props?.props?.date_of_birth}</p>
                        <p>My gender: {props?.props?.gender}</p>
                        <p>My role_type: {props?.props?.role_type}</p>
                        <p>My phone number: {props?.props?.phone_number}</p>
                        <p>My registration of flat: {props?.props?.registration_of_flat}</p>
                        <p>My photo: {props?.props?.photo}</p>
                        <h5>location</h5>
                        <p>My latitude: {props?.props?.location?.latitude}</p>
                        <p>My longitude: {props?.props?.location?.longitude}</p>
                        <h5>socials</h5>
                        <p>My facebook: {props?.props?.socials?.facebook}</p>
                        <p>My instagram: {props?.props?.socials?.instagram}</p>
                        <p>My linkedin: {props?.props?.socials?.linkedin}</p>
                        <h5>activity</h5>
                        <p>My likePost: {props?.props?.activity?.likePost}</p>
                        <p>My following: {props?.props?.activity?.following}</p>
                        <p>My followers: {props?.props?.activity?.followers}</p>
                        <h5>profession</h5>
                        <p>My occupation: {props?.props?.profession?.occupation}</p>
                        <p>My company: {props?.props?.profession?.company}</p>
                        <p>My skills: {props?.props?.profession?.skills}</p>
                        <h5>miscellaneous</h5>
                        <p>My details1: {props?.props?.miscellaneous?.details1}</p>
                        <p>My details2: {props?.props?.miscellaneous?.details2}</p>
                        <p>My details3: {props?.props?.miscellaneous?.details3}</p>
                        <h5>parking</h5>
                        <p>My details1: {props?.props?.parking?.status}</p>
                        <p>My details2: {props?.props?.parking?.assigned_parking}</p>
                        <hr/>
                        <p>My email: {props?.props?.email}</p>                        
                        <p>My payment: {props?.props?.payment}</p>
                        <p>My interest: {props?.props?.interest}</p>
                        <p>My Membership Status: {props?.props?.membershipStatus}</p>
                        <p>My date of birth: {props?.props?.date_of_birth}</p>
                        <p>My date of birth: {props?.props?.date_of_birth}</p>
                    </>
                ) : (
                    <p>No Data Available for user!</p>
                )}
            </div>
        </>
    )
};

export default ViewProfilePage;
