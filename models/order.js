const mongoose = require('mongoose')
const schema = mongoose.schema




const order = ({
    fullname:String,
    phone:Number,
    city:String,
    address:String,
    email:String,
    products:String
})

const shemaorder = mongoose.model('order',order)

module.exports = shemaorder