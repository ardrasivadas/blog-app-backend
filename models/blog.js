const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name": { type: String, required: true },
        "username": { type: String, required: true },
        "password": { type: String, required: true }


    }
)

let signupmodel = mongoose.model("Signup",schema)
module.exports={signupmodel}