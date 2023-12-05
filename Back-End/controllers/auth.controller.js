import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

// after getting the user from the database, we compare the password from the request with the password from the database
// using bcrypt.compare() method. If the passwords match, we return a response with the user data and a message
export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json("User created successfully!");
    } catch (error) {
        res.status(500).json(error.message);
    }
};