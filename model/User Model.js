import mongoose from 'mongoose';
const { Schema } = mongoose;

const usershema = new Schema({
    name: String,
    email: String,
    password: String,
    isverified: false
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //     votes: Number,
    //     favs: Number
    // }
});

const User__Model = mongoose.model('users', usershema)

export default User__Model