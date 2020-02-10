const joi = require('@hapi/joi')

module.exports = (allConfig) => {
  const schema = joi.object().keys({
    MOBILE_MOVIES_API_URL: joi
      .string()
      .uri()
      .trim()
      .required(),
    authToken: joi.string().required(),
    exhibitorCode: joi.string().required()
  })

  // Validate the arguments
  joi.attempt(allConfig, schema)

  return {
    // -- Theater Detail APIs --
    getTheaters: (reqQuery, authToken, exhibitorCode) => {
      return require('./src/TheaterDetailApi').getTheaters(allConfig, reqQuery, authToken, exhibitorCode)
    },

    getSingleTheater: (theaterId, reqQuery, authToken, exhibitorCode) => {
      return require('./src/TheaterDetailApi').getSingleTheater(
        allConfig,
        theaterId,
        reqQuery,
        authToken,
        exhibitorCode
      )
    },

    // -- Movie Detail APIs --
    getSingleMovie: (movieId, reqQuery, authToken, exhibitorCode) => {
      return require('./src/MovieDetailApi').getSingleMovie(allConfig, movieId, reqQuery, authToken, exhibitorCode)
    },

    getNowPlaying: (reqQuery, authToken, exhibitorCode) => {
      return require('./src/MovieDetailApi').getNowPlaying(allConfig, reqQuery, authToken, exhibitorCode)
    },

    getComingSoon: (reqQuery, authToken, exhibitorCode) => {
      return require('./src/MovieDetailApi').getComingSoon(allConfig, reqQuery, authToken, exhibitorCode)
    },

    // -- Emergency Messages APIs --
    getEmergencyMessages: (reqQuery, authToken, exhibitorCode) => {
      return require('./src/EmergencyMessagesApi').getEmergencyMessages(allConfig, reqQuery, authToken, exhibitorCode)
    },

    // -- Orders APIs --
    getOrderSummary: (orderId, authToken, exhibitorCode) => {
      return require('./src/OrdersApi').getOrderSummary(allConfig, orderId, authToken, exhibitorCode)
    },

    // -- Compatibility APIs --
    getCompatibility: (caller, osType, exhibitorCode) => {
      return require('./src/CompatibilityApi').getCompatibility(allConfig, caller, osType, exhibitorCode)
    },

    // -- Booking APIs --
    createSession: (memberSessionId, bookingItemId, exhibitorCode) => {
      return require('./src/BookingApi').createSession(allConfig, memberSessionId, bookingItemId, exhibitorCode)
    },

    // -- Ticketing APIs--
    getAvailableTickets: (bookingSessionId, exhibitorCode) => {
      return require('./src/TicketingApi').getAvailableTickets(allConfig, bookingSessionId, exhibitorCode)
    },
    // -- Booking APIs --
    cancelSession: (bookingSessionId, exhibitorCode) => {
      return require('./src/BookingApi').cancelSession(allConfig, bookingSessionId, exhibitorCode)
    },
    // -- Orders APIs --
    getBookingSession: (bookingSessionId, exhibitorCode) => {
      return require('./src/OrdersApi').getBookingSession(allConfig, bookingSessionId, exhibitorCode)
    }
  }
}
