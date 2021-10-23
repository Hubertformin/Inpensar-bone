import {Schema, model} from 'mongoose';

const categoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: String
}, {timestamps: true});

export default model('categories', categoriesSchema);
