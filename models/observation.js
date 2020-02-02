const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)


const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true} )
.then(result => {
    console.log('connected to MongoDB')
}).catch((error)=>{
    console.log('error connecting to MongoDB: ',error.message)
})

const observationSchema = new mongoose.Schema({
    name: String,
    rarity: String,
    notes: String,
    timestamp: Date
})

observationSchema.set('toJSON', {
    transfrom: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__V
    }
})

module.exports = mongoose.model('Observation', observationSchema)