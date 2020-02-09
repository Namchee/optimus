const dotenv = require('dotenv')
const express = require('express')
const optimus = require('./../index')
const mobileMoviesLogger = require('../src/Logger')

dotenv.config()

const router = express.Router()
const wrapper = optimus({
  MOBILE_MOVIES_API_URL: process.env.URL,
  authToken: process.env.AUTH_TOKEN,
  exhibitorCode: process.env.EXHIBITOR_CODE
})

router.post('/api/booking/create_session', async (req, res, next) => {
  const memberSessionId = req.body.memberSessionId
  const bookingItemId = req.body.bookingItemId

  try {
    const response = await wrapper.createSession(memberSessionId, bookingItemId)

    return res.status(200).json({
      data: response.body.data.bookingSessionId,
      error: null
    })
  } catch (err) {
    mobileMoviesLogger.error(err.status)

    return res.status(err.status).json({
      data: null,
      error: err
    })
  }
})
router.post('/api/booking/cancel_session', (req, res, next) => res.json('hai'))
router.get('/api/ticketing/available_tickets/:id', (req, res, next) => res.json('hai'))
router.post('/api/ticketing/select_tickets', (req, res, next) => res.json('hai'))
router.get('/api/seating/get_layout/:id', (req, res, next) => res.json('hai'))
router.post('/api/seating/select_seats', (req, res, next) => res.json('hai'))
router.post('/api/booking/complete', (req, res, next) => res.json('hai'))
router.get('/api/orders/booking_session/:id', (req, res, next) => res.json('hai'))

module.exports = router
