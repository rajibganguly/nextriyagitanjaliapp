import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
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
    blockflat: String,
    timestamp: { type: String, default: () => new Date().toISOString() }
})

const Users = mongoose.models.Users || mongoose.model('Users', UserSchema);

export default Users;







