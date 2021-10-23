import {Schema, model} from 'mongoose';

const TransactionSchema = new Schema({
    category: {
        type: Object,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    notes: String,
    type: String,
    attachment: Object,
    recurrent: Boolean,
    nextRecurrentDate: String,
    reccurentInterval: String,
    recurrentEndDate: String,
    wallet: Object,
    userId: String

}, {timestamps: true});

export default model('transactions', TransactionSchema);
