const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false)

const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("error connecting to MongoDB: ", error.message);
  });

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
});

//remove __v, change _id to id
observationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Observation", observationSchema);
