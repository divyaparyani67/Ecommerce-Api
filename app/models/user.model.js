const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name:String,
        username: String,
        email:String,
        mobileno: Number,
        password: String,
        // roles:[
        //     {
        //         type:mongoose.Schema.Types.ObjecId,
        //         ref:"Role"
        //     }
        // ]
    })
);
module.exports = User;
