const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
    username: {
        type: String,
        unique : true,
        required: true
    },
    password: {
        type: String
    }
});

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

module.exports = UserDetails;
