import mongoose from 'mongoose';
const { Schema } = mongoose;

const Productschema = new Schema({
    name: String,
    seller: String,
    price: Number,
    categories: String,
    district: String,
    ward: String,
    images: Array,
    description: String,
    // images: [
    //     { first_img: String },
    //     { second_img: String },
    //     { third_imag: String },
    //     { forth_img: String },
    //     { fifth_img: String },
    //     { sixth_img: String },
    //     { seventh_img: String },
    //     { eigth_img: String },
    //     { ninth_img: String }
    // ],
    date: { type: Date, default: Date.now('yyyy') },
    email: String,
    createdAt: { type: Date, default: Date.now() }

});

const Product__Model = mongoose.model('products', Productschema)

export default Product__Model