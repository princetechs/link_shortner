
import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({

    url: {
        type: String,
        required: true,
        unique: true,
    },

    gen_url: {
        type: String,
        required: true,
        unique: true,

    },

    status: {
        type: String,
        default: 'active',
        enum: ['active', 'deactive']
    },

}, {
    versionKey: false //here
});

//It check first it that model is already present then no  need to create again (mongoose.models.name_of_the_model)
const Urls_model=mongoose.models.Urls || mongoose.model('Urls', urlSchema);
export default Urls_model