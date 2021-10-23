import {Schema, model} from 'mongoose';

const walletSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },
    photoURL: String,
    userId: String
}, {timestamps: true});

export default model('wallet', walletSchema);
