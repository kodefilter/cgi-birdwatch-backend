const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(bodyParser.json())

//middlewares created by me
const requestLogger = (request, response, next) => {
    console.log("Method:", request.method);
    console.log("Path:  ", request.path);
    console.log("Body:  ", request.body);
    console.log("---");
    next();
  };
  
app.use(requestLogger);

const url = "mongodb+srv://fullstack_pradeep:fullstackpradeep@cluster0-uo4sj.mongodb.net/birdwatch-app?retryWrites=true&w=majority"

mongoose.connect(url, {useNewUrlParser: true})

const observationSchema = new mongoose.Schema({
  name: String,
  rarity: String,
  notes: String,
  timestamp: Date
})

const observation = mongoose.model('Observation', observationSchema)

const observation = new Observation({
  name: 'Sparrow',
  rarity: 'Common',
  notes: 'active during day',
  timestamp: new Date(),
})

observation.save().then(response => {
  console.log('observation saved!')
  mongoose.connection.close()
})


let observations = [
  {
    id: 1,
    name: "Peakcock",
    rarity: "common",
    notes: "visibale only on day",
    timestamp: "2019-05-30T17:30:31.098Z"
  },
  {
    id: 2,
    name: "Sparrow",
    rarity: "rare",
    notes: "visibale only on day",
    timestamp: "2019-05-30T17:30:31.098Z"
  },
  {
    id: 3,
    name: "Crow",
    rarity: "rare",
    notes: "visibale only on day",
    timestamp: "2019-05-30T17:30:31.098Z"
  },
  {
    id: 4,
    name: "Kandre",
    rarity: "common",
    notes: "visibale only on day",
    timestamp: "2019-05-30T17:30:31.098Z"
  },
  {
    id: 5,
    name: "Blabla",
    rarity: "extremely rare",
    notes: "visibale only on day",
    timestamp: "2019-05-30T17:30:31.098Z"
  }
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// get all the observations
app.get("/api/observations", (req, res) => {
  res.json(observations);
});

// get a single observsation
app.get("/api/observations/:id", (request, response) => {
  const id = Number(request.params.id);
  //console.log(id)
  const observation = observations.find(observation => observation.id === id);
  //console.log(observation)
  if (observation) {
    response.json(observation);
  } else {
    response.status(404).end();
  }
});
// implementation of deleting single observation is not on requirement

//function for generating an id to new observation
const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
  return maxId + 1;
};

// post a single observation
app.post("/api/observations", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "name missing"
    });
  }

  const observation = {
    name: body.name,
    rarity: body.rarity,
    // if notes is missing default value will read empty
    notes: body.notes || "empty",
    timestamp: new Date(),
    id: generateId()
  };

  observations = observations.concat(observation);

  response.json(observation);
});



//using the middlewares created above


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};


app.use(unknownEndpoint);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
