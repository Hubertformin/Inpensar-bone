import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    email: String,
    phoneNumber: String,
    photoURL: String,
    password: String,
    settings: Object
}, {timestamps: true});

export default model('users', UserSchema);
