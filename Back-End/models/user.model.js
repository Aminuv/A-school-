import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unike: true,
    },
    email: {
        type: String,
        required: true,
        unike: true,
    },
    passoword: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
