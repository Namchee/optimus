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

router.post('/api/ticketing/select_tickets', async (req, res, next) => {
  const bookingSessionId = req.body.bookingSessionId
  const id = req.body.id

  try {
    const response = await wrapper.selectSeat(bookingSessionId, id)

    return res.status(response.status).json({
      data: {
        secondToExpiry: response.body.data.secondToExpiry,
        isAllocatedSeating: response.body.data.isAllocatedSeating,
        allocatedSeatSummary: response.body.data.allocatedSeatSummary,
        order: response.body.data.order,
        bookingSessionId: response.body.bookingItemId
      },
      error: null
    })
  } catch (err) {
    return res.status(err.status).json({
      data: null,
      error: err
    })
  }
})

router.get('/api/seating/get_layout/:id', async (req, res, next) => {
  const bookingSessionId = req.params.id

  try {
    const response = await wrapper.getLayouts(bookingSessionId)

    return res.status(response.status).json({
      data: {
        areas: response.body.data.areas,
        requiredAllocation: response.body.data.requiredAllocation,
        allocatedSeatSummary: response.body.data.allocatedSeatSummary,
        layout: response.body.data.layout,
        relatedElements: response.body.data.relatedElements,
        bookingSessionId: response.body.data.bookingSessionId
      },
      error: null
    })
  } catch (err) {
    return res.status(err.status).json({
      data: null,
      error: err
    })
  }
})

router.post('/api/seating/select_seats', async (req, res, next) => {
  const bookingSessionId = req.body.bookingSessionId
  const id = req.body.id

  try {
    const response = await wrapper.selectSeat(bookingSessionId, id)

    return res.status(response.status).json({
      data: {
        allocatedSeats: response.body.data.allocatedSeats,
        order: response.body.data.order,
        bookingSessionId: response.body.bookingItemId
      },
      error: null
    })
  } catch (err) {
    return res.status(err.status).json({
      data: null,
      error: err
    })
  }
})

router.post('/api/booking/complete', async (req, res, next) => {
  const additionalProp1 = req.body.paymentProviderValues.additionalProp1
  const additionalProp2 = req.body.paymentProviderValues.additionalProp2
  const additionalProp3 = req.body.paymentProviderValues.additionalProp3
  const name = req.body.customerDetails.name
  const email = req.body.customerDetails.email
  const bookingSessionId = req.body.bookingSessionId

  try {
    const response = await wrapper.complete(additionalProp1, additionalProp2, additionalProp3, name, email, bookingSessionId)

    return res.status(response.status).json({
      data: {
        orderId: response.body.data.orderId,
        order: response.body.data.order,
        bookingSessionId: response.body.data.bookingSessionId,
        name: response.body.data.order.booking.name,
        email: response.body.data.order.booking.email
      },
      error: null
    })
  } catch (err) {
    return res.status(err.status).json({
      data: null,
      error: err
    })
  }
})

router.get('/api/orders/booking_session/:id', (req, res, next) => res.json('hai'))

module.exports = router
