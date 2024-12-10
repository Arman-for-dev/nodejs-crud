import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 6
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
},{
    timestamps: true
});

const Users = model("Users", userSchema);
export default Users;