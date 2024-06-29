import Link from "next/link";
import React, { useEffect, useState } from 'react';

// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';



const EditProfilePage = (formData) => {
    const [formEditData, setFormEditData] = useState({
        email: "",
        blockflat: "",
        name: name,
        role_type: "",
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
        setFormEditData(formData)
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        // Add your submit logic here (e.g., send data to the backend)
    };
    const handleChange = (e) => {
        //setValue(newValue);
        const { name, value, type, checked } = e.target;
        if (name.includes('.')) {
            const keys = name.split('.');
            setFormEditData(prevState => ({
                ...prevState,
                [keys[0]]: {
                    ...prevState[keys[0]],
                    [keys[1]]: type === 'checkbox' ? checked : value
                }
            }));
        } else {
            setFormEditData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    return (
        <>
            <div className="container-fluid">
                {/* {formData ? (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </label>
                            </div>
                            <div>
                                <label>Block/Flat:
                                    <input type="text" name="blockflat" value={formData.blockflat} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Name:
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </label>
                            </div>
                            <div>
                                <label>Role Type:
                                    <select name="role_type" value={formData.role_type} onChange={handleChange} required>
                                        <option value="">Select Role</option>
                                        <option value="Admin">Admin</option>
                                        <option value="User">User</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>Payment:
                                    <input type="checkbox" name="payment" checked={formData.payment} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Phone Number:
                                    <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Registration of Flat:
                                    <input type="text" name="registration_of_flat" value={formData.registration_of_flat} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Photo URL:
                                    <input type="text" name="photo" value={formData.photo} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Bio:
                                    <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
                                </label>
                            </div>
                            <div>
                                <label>Date of Birth:
                                    <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Gender:
                                    <select name="gender" value={formData.gender} onChange={handleChange}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>Interests:
                                    <input type="text" name="intertest" value={formData.intertest} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Location - Latitude:
                                    <input type="text" name="location.latitude" value={formData.location.latitude} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Location - Longitude:
                                    <input type="text" name="location.longitude" value={formData.location.longitude} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Socials - Facebook:
                                    <input type="text" name="socials.facebook" value={formData.socials.facebook} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Socials - Instagram:
                                    <input type="text" name="socials.instagram" value={formData.socials.instagram} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Socials - LinkedIn:
                                    <input type="text" name="socials.linkedin" value={formData.socials.linkedin} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Activity - Liked Post:
                                    <input type="text" name="activity.likePost" value={formData.activity.likePost} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Activity - Following:
                                    <input type="number" name="activity.following" value={formData.activity.following} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Activity - Followers:
                                    <input type="number" name="activity.followers" value={formData.activity.followers} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Profession - Occupation:
                                    <select name="profession.occupation" value={formData.profession.occupation} onChange={handleChange}>
                                        <option value="">Select Occupation</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Designer">Designer</option>
                                        <option value="Manager">Manager</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>Profession - Company:
                                    <input type="text" name="profession.company" value={formData.profession.company} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Profession - Skills:
                                    <input type="text" name="profession.skills" value={formData.profession.skills} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Miscellaneous - Details 1:
                                    <input type="text" name="miscellaneous.details1" value={formData.miscellaneous.details1} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Miscellaneous - Details 2:
                                    <input type="text" name="miscellaneous.details2" value={formData.miscellaneous.details2} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Miscellaneous - Details 3:
                                    <input type="text" name="miscellaneous.details3" value={formData.miscellaneous.details3} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Parking - Status:
                                    <select name="parking.status" value={formData.parking.status} onChange={handleChange}>
                                        <option value="">Select Status</option>
                                        <option value="Assigned">Assigned</option>
                                        <option value="Not Assigned">Not Assigned</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>Parking - Assigned Parking:
                                    <input type="text" name="parking.assigned_parking" value={formData.parking.assigned_parking} onChange={handleChange} />
                                </label>
                            </div>
                            <div>
                                <label>Membership Status:
                                    <select name="membershipStatus" value={formData.membershipStatus} onChange={handleChange}>
                                        <option value="">Select Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                </label>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </>
                ) : (
                    <p>No Data Available for user!</p>
                )} */}
            </div>
        </>
    )
};

export default EditProfilePage;
