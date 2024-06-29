import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import HeadBanner from "../../components/sub-components/headbanner";
import { Tabs, Tab, Box, Typography } from '@mui/material';
import ViewProfilePage from "./../../components/viewProfile";
import EditProfilePage from "../../components/editProfile";

// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';



const ProfilePage = () => {
    const [value, setValue] = useState(0);
    const [localObj, setLocalObj] = useState({
        blockflat: '',
        email: "",
        id: "",
        name: "",
        payment: false,
        phone_number: "",
        role_type: ""
    });
    const [formData, setFormData] = useState({
        email: localObj?.email,
        blockflat: localObj?.blockflat,
        name: localObj.name,
        role_type: localObj.role_type,
        payment: false,
        phone_number: '',
        registration_of_flat: '',
        photo: '',
        bio: '',
        date_of_birth: '',
        gender: '',
        intertest: [],
        location: { latitude: '', longitude: '' },
        socials: { facebook: '', instagram: '', linkedin: '' },
        activity: { likePost: '', following: 0, followers: 0 },
        profession: { occupation: '', company: '', skills: '' },
        miscellaneous: { details1: '', details2: '', details3: '' },
        parking: { status: '', assigned_parking: '' },
        membershipStatus: ''
    });

    useEffect(() => {
        const localuser = localStorage.getItem('user');
        if (localuser) {
            const myUser = JSON.parse(localuser)
            setLocalObj(myUser)

            // Replace this with your authentication logic
            const myHeaders = new Headers();
            // myHeaders.append("authorization", "Bearer " + token);
            myHeaders.append("content-type", "application/json");

            const loginPayload = JSON.stringify({
                userId: "667055b7c69cc0656a783833"
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: loginPayload
            };

            console.log('requestdata', requestOptions)

            fetchProfile(requestOptions)

        }
    }, [])

    const fetchProfile = async (options) => {
        await fetch("/api/profile", options)
            .then(result => result.json())
            .then(async (result: any | { success: boolean, message: string, data: any }) => {
                const response = result.data;
                if (response.length > 0) {
                    console.log('response data85', response[0])
                    setFormData(response[0])
                } else {
                    console.log('response data2', response)
                }
            })
            .catch((error) => console.error(error));
    }

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    

    

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
                    <h3 className="text-muted">My Profile</h3>
                    <p>You can update and edit profile here. </p>

                    <Box sx={{ width: '100%' }}>
                        <Tabs value={value} onChange={handleChangeTabs} aria-label="basic tabs example">
                            <Tab label="View Profile" />
                            <Tab label="Edit Profile" />
                        </Tabs>
                        <Box sx={{ p: 3 }}>
                            {value === 0 && (
                                <Typography component="div">
                                    {/**   VIEW  PROFILE    */}
                                    <h2>View Profile</h2>
                                    <ViewProfilePage props={formData} />
                                </Typography>
                            )}
                            {value === 1 && (
                                <Typography component="div">
                                    {/**   VIEW  PROFILE    */}
                                    <h2>Edit Profile</h2>

                                    <EditProfilePage forData />

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
    )
};

export default ProfilePage;
