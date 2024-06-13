const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcryptjs = require("bcryptjs")
const { signupmodel } = require("./models/blog")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ardra:ardrac1543@cluster0.tehzzbx.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0")
const generatehashedpassword = async (password) => {
const salt = await bcryptjs.genSalt(10)
return bcryptjs.hash(password,salt)
}

app.post("/signup",async(req,res)=>{
    let input = req.body
    let hashedpassword = await generatehashedpassword(input.password)
    console.log(hashedpassword)
    input.password = hashedpassword
    let blog = new signupmodel(input)
    blog.save()
    res.send({"status":"success"})

})

app.listen(8080,()=>{
    console.log("server started")
})

