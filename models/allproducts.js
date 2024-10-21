const mongoose = require('mongoose')
const schema = mongoose.schema





const allproductshema = ({
    title:String,
    image:String,
})

const allproduct = mongoose.model('allproduct',allproductshema)

module.exports = allproduct



