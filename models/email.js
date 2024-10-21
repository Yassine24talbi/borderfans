const mongoose = require('mongoose')
const schema = mongoose.schema


const emailsub = ({
    emailsub:String,
})

const schemaEmailSub = mongoose.model('emailsub',emailsub)

module.exports = schemaEmailSub