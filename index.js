require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Observation = require('./models/observation')

app.use(cors())
app.use(bodyParser.json())

//middlewares created by me
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

// get all the observations
app.get('/api/observations', (request, response) => {
  Observation.find({}).then(observations => {
    response.json(observations.map(observation => observation.toJSON()))
  })
})

// get a single observsation
app.get('/api/observations/:id', (request, response, next) => {
  Observation.findById(request.params.id)
    .then(observation => {
      if (observation) {
        response.json(observation.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

// implementation of deleting single observation is not on requirement

// post a single observation
app.post('/api/observations', (request, response, next) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  }

  const observation = new Observation({
    name: body.name,
    rarity: body.rarity,
    notes: body.notes,
    timestamp: new Date()
  })

  observation
    .save()
    .then(savedObservation => savedObservation.toJSON())
    .then(savedAndFormattedObservation => {
      response.json(savedAndFormattedObservation)
    })
    .catch(error => next(error))
})

//using the middlewares created above

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})
