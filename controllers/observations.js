const observationsRouter = require('express').Router()
const Observation = require('../models/observation')


// get all the observations
observationsRouter.get('/', (request, response) => {
  Observation.find({}).then(observations => {
    response.json(observations.map(observation => observation.toJSON()))
  })
})

// get a single observsation
observationsRouter.get('/:id', (request, response, next) => {
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
observationsRouter.post('/', (request, response, next) => {
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

module.exports = observationsRouter
