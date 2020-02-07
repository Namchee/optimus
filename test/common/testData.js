const MOBILE_MOVIES_API_URL = 'https://wmp-mobileapi-dev.azurewebsites.net'
const prospectorToken = 'vSD45gbEgd5ggevbxjhg4655bvE='
const rtsDemoToken = 'RGV2Q2xpZW50MTpwYSQkdzByZA=='
const prospectorExhibitorCode = 'Prospector'
const rtsDemoExhibitorCode = 'RTSDemo'
const cinemaWestToken = 'RGV2Q2xpZW50MTpwYSQkdzByZA=='
const cinemaWestExhibitorCode = 'CinemaWest'
const bandBToken = 'YmJ0aGVhdGVyczpjaW5lbWFzdHVmZg=='
const bandBExhibitorCode = 'BandBTheaters'

const getTheatersProspectorResponse = require('./getTheatersProspectorResponse.json')
const getTheatersRtsDemoResponse = require('./getTheatersRtsDemoResponse.json')
const getTheatersCinemaWestResponse = require('./getTheatersCinemaWestResponse.json')
const getTheatersBandBResponse = require('./getTheatersBandBResponse.json')
const getSingleTheaterProspectorResponse = require('./getSingleTheaterProspectorResponse.json')
const getSingleTheaterRtsDemoResponse = require('./getSingleTheaterRtsDemoResponse.json')
const getSingleTheaterCinemaWestResponse = require('./getSingleTheaterCinemaWestResponse.json')
const getSingleTheaterBandBResponse = require('./getSingleTheaterBandBResponse.json')

const getSingleMovieProspectorResponse = require('./getSingleMovieProspectorResponse.json')
const getSingleMovieRtsDemoResponse = require('./getSingleMovieRtsDemoResponse.json')
const getNowPlayingProspectorResponse = require('./getNowPlayingProspectorResponse.json')
const getNowPlayingRtsDemoResponse = require('./getNowPlayingRtsDemoResponse.json')
const getComingSoonProspectorResponse = require('./getComingSoonProspectorResponse.json')
const getComingSoonRtsDemoResponse = require('./getComingSoonRtsDemoResponse.json')

const getOrderSummaryResponse = require('./getOrderSummaryResponse.json')
const getEmergencyMessagesResponse = require('./getEmergencyMessagesResponse.json')
const getCompatibilityResponse = require('./getCompatibilityResponse.json')

const geolocation = {
  Latitude: 40.62966,
  Longitude: -74.241445,
  Radius: 96,
  Unit: 'kilometers'
}
const dateRange = {
  firstDate: '2018-07-16',
  lastDate: '2019-12-20'
}

module.exports = {
  MOBILE_MOVIES_API_URL,
  clientConfig: {
    prospectorClient: {
      MOBILE_MOVIES_API_URL,
      authToken: prospectorToken,
      exhibitorCode: prospectorExhibitorCode
    },
    rtsDemoClient: {
      MOBILE_MOVIES_API_URL,
      authToken: rtsDemoToken,
      exhibitorCode: rtsDemoExhibitorCode
    },
    cinemaWestClient: {
      MOBILE_MOVIES_API_URL,
      authToken: cinemaWestToken,
      exhibitorCode: cinemaWestExhibitorCode
    },
    bandBClient: {
      MOBILE_MOVIES_API_URL,
      authToken: bandBToken,
      exhibitorCode: bandBExhibitorCode
    }
  },
  prospectorToken,
  rtsDemoToken,
  prospectorExhibitorCode,
  rtsDemoExhibitorCode,
  RequestQuery: {
    getTheaters: {
      ...geolocation
    },
    getSingleTheater: {
      ...dateRange
    },
    getSingleMovie: {
      ...geolocation,
      ...dateRange
    },
    getComingSoon: {
      ...geolocation
    },
    getNowPlaying: {
      ...geolocation
    },
    getEmergencyMessages: {
      ...geolocation
    }
  },
  ResponseBody: {
    prosector: {
      theaters: getTheatersProspectorResponse,
      singleTheater: getSingleTheaterProspectorResponse,
      singleMovie: getSingleMovieProspectorResponse,
      nowPlaying: getNowPlayingProspectorResponse,
      comingSoon: getComingSoonProspectorResponse
    },
    rtsDemo: {
      theaters: getTheatersRtsDemoResponse,
      singleTheater: getSingleTheaterRtsDemoResponse,
      singleMovie: getSingleMovieRtsDemoResponse,
      nowPlaying: getNowPlayingRtsDemoResponse,
      comingSoon: getComingSoonRtsDemoResponse
    },
    cinemaWest: {
      theaters: getTheatersCinemaWestResponse,
      singleTheater: getSingleTheaterCinemaWestResponse
    },
    bandB: {
      theaters: getTheatersBandBResponse,
      singleTheater: getSingleTheaterBandBResponse
    },
    getOrderSummaryResponse,
    getEmergencyMessagesResponse,
    getCompatibilityResponse
  }
}
