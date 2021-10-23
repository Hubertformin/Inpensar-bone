import {Schema, model} from 'mongoose';

const budgetSchema = new Schema({
    name: {
        type: String,
    },
    category: Object,
    amount: {
        type: Number,
        default: 0
    },
    photoURL: String,
    userId: String
}, {timestamps: true});

export default model('budgets', budgetSchema);
