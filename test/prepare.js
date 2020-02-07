const prepare = require('mocha-prepare')
const nock = require('nock')

const testData = require('./common/testData')

prepare(
  function (done) {
    nock(/\.net/)
      .persist()
      .filteringPath(function (path) {
        if (path.startsWith(testData.MOBILE_MOVIE_API_URL)) {
          return path.substring(testData.MOBILE_MOVIE_API_URL.length)
        }
        return path
      })
      .get(/\/api\/theaters\/single*/)
      .reply(function (_uri, _requestBody) {
        if (this.req.headers.authorization === 'Basic invalid_token') {
          return [500, { message: 'Unknown Error' }]
        }

        switch (this.req.headers['exhibitor-code']) {
          case 'Prospector':
            return [200, testData.ResponseBody.prosector.singleTheater]
          case 'RTSDemo':
            return [200, testData.ResponseBody.rtsDemo.singleTheater]
          case 'CinemaWest':
            return [200, testData.ResponseBody.cinemaWest.singleTheater]
          case 'BandBTheaters':
            return [200, testData.ResponseBody.bandB.singleTheater]
        }
      })
      .get(/\/api\/theaters*/)
      .reply(function (_uri, _requestBody) {
        if (this.req.headers.authorization === 'Basic invalid_token') {
          return [500, { message: 'Unknown Error' }]
        }

        switch (this.req.headers['exhibitor-code']) {
          case 'Prospector':
            return [200, testData.ResponseBody.prosector.theaters]
          case 'RTSDemo':
            return [200, testData.ResponseBody.rtsDemo.theaters]
          case 'CinemaWest':
            return [200, testData.ResponseBody.cinemaWest.theaters]
          case 'BandBTheaters':
            return [200, testData.ResponseBody.bandB.theaters]
        }
      })
      .get(/\/api\/movies\/single*/)
      .reply(function (_uri, _requestBody) {
        if (this.req.headers.authorization === 'Basic invalid_token') {
          return [500, { message: 'Unknown Error' }]
        }

        switch (this.req.headers['exhibitor-code']) {
          case 'Prospector':
            return [200, testData.ResponseBody.prosector.singleMovie]
          case 'RTSDemo':
            return [200, testData.ResponseBody.rtsDemo.singleMovie]
          // case 'CinemaWest':
          //   return [200, testData.ResponseBody.theaters.getTheatersCinemaWestResponse]
          // case 'BandBTheaters':
          //   return [200, testData.ResponseBody.theaters.getTheatersBandBResponse]
        }
      })
      .get(/\/api\/movies\/nowplaying*/)
      .reply(function (_uri, _requestBody) {
        if (this.req.headers.authorization === 'Basic invalid_token') {
          return [500, { message: 'Unknown Error' }]
        }

        switch (this.req.headers['exhibitor-code']) {
          case 'Prospector':
            return [200, testData.ResponseBody.prosector.nowPlaying]
          case 'RTSDemo':
            return [200, testData.ResponseBody.rtsDemo.nowPlaying]
          case 'CinemaWest':
            return [200, testData.ResponseBody.theaters.getTheatersCinemaWestResponse]
          case 'BandBTheaters':
            return [200, testData.ResponseBody.theaters.getTheatersBandBResponse]
        }
      })
      .get(/\/api\/movies\/comingsoon*/)
      .reply(function (_uri, _requestBody) {
        if (this.req.headers.authorization === 'Basic invalid_token') {
          return [500, { message: 'Unknown Error' }]
        }

        switch (this.req.headers['exhibitor-code']) {
          case 'Prospector':
            return [200, testData.ResponseBody.prosector.comingSoon]
          case 'RTSDemo':
            return [200, testData.ResponseBody.rtsDemo.comingSoon]
          case 'CinemaWest':
            return [200, testData.ResponseBody.theaters.getTheatersCinemaWestResponse]
          case 'BandBTheaters':
            return [200, testData.ResponseBody.theaters.getTheatersBandBResponse]
        }
      })
      .get(/\/api\/orders\/summary*/)
      .reply(function (_uri, _requestBody) {
        if (this.req.headers.authorization === 'Basic invalid_token') {
          return [500, { message: 'Unknown Error' }]
        }

        switch (this.req.headers['exhibitor-code']) {
          case 'Prospector':
            return [200, testData.ResponseBody.getOrderSummaryResponse]
          case 'RTSDemo':
            return [200, testData.ResponseBody.getOrderSummaryResponse]
          case 'CinemaWest':
            return [200, testData.ResponseBody.getOrderSummaryResponse]
          case 'BandBTheaters':
            return [200, testData.ResponseBody.getOrderSummaryResponse]
        }
      })
      .get(/\/api\/emergency*/)
      .reply(function (_uri, _requestBody) {
        if (this.req.headers.authorization === 'Basic invalid_token') {
          return [500, { message: 'Unknown Error' }]
        }
        return [200, testData.ResponseBody.getEmergencyMessagesResponse]
      })
      .get('/api/compatibility')
      .reply(function (_uri, _requestBody) {
        return [200, testData.ResponseBody.getCompatibilityResponse]
      })
    done()
  },
  function (done) {
    done()
  }
)
