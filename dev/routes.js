const dotenv = require('dotenv')
const express = require('express')
const optimus = require('./../index')

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

    return res.status(response.status).json({
      data: response.body.data.bookingSessionId,
      error: null
    })
  } catch (err) {
    return res.status(err.status).json({
      data: null,
      error: err
    })
  }
})

router.post('/api/booking/cancel_session', async (req, res, next) => {
  const bookingSessionId = req.body.bookingSessionId

  try {
    const response = await wrapper.cancelSession(bookingSessionId)

    return res.status(response.status).json({
      data: null, // empty response body
      error: null
    })
  } catch (err) {
    return {
      data: null,
      error: err
    }
  }
})

router.get('/api/ticketing/available_tickets/:id', async (req, res, next) => {
  const bookingSessionId = req.params.id

  try {
    const response = await wrapper.getAvailableTickets(bookingSessionId)

    return res.status(response.status).json({
      data: response.body.data.tickets,
      error: null
    })
  } catch (err) {
    return res.status(err.status).json({
      data: null,
      error: err
    })
  }
})

router.post('/api/ticketing/select_tickets', (req, res, next) => res.json('hai'))
router.get('/api/seating/get_layout/:id', (req, res, next) => res.json('hai'))
router.post('/api/seating/select_seats', (req, res, next) => res.json('hai'))
router.post('/api/booking/complete', (req, res, next) => res.json('hai'))
router.get('/api/orders/booking_session/:id', (req, res, next) => res.json('hai'))

module.exports = router
