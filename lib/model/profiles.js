import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    blockflat: String,
    name: {
        type: String,
        required: true
    },
    role_type: {
        type: String,
        required: true
    },
    payment: {
        type: Boolean
    },
    phone_number: String,
    registration_of_flat: String,
    photo: String,
    bio: String,
    date_of_birth: String,
    gender: String,
    intertest: [String],
    location: { latitude: String, longitude: String},
    socials: {facebook: String, instagram: String, linkedin: String},
    activity: {likePost: String, following: Number, followers: Number},
    profession: {occupation: String, company: String, skills: String},
    miscellaneous: {details1: String, details2: String, details3: String},
    parking: {status: String, assigned_parking: String},
    membershipStatus: String,
    timestamp: { type: String, default: () => new Date().toISOString() }
})

const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);

export default Profile;







