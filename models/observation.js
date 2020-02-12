const mongoose = require('mongoose')


const observationSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  rarity: {
    type: String,
    required: true
  },
  notes: String,
  timestamp: Date
})




//remove __v, change _id to id
// change UTC time to local time
observationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    returnedObject.timestamp = returnedObject.timestamp.toISOString().substring(0, 10)

    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Observation', observationSchema)
