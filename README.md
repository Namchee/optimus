## Mobile Movies API Wrapper

Wrapper library for Mobile Movies API

## How to use this Wrapper

1. Download the source code of the wrapper and install the wrapper to your own project:

```bash
    npm install path/to/mobile-movies-api-wrapper
```

2. Create an instance of this wrapper as below

```javascript
const wrapper = require('mobile-movies-api-wrapper')
const config = {
  MOBILE_MOVIES_API_URL,
  authToken,
  exhibitorCode
}
const client = wrapper(config)
```

- authToken - the authorization token.
- exhibitorCode - the exhibitor code (includes Prospector, RTSDemo, CinemaWest, BandBTheaters).
- MOBILE_MOVIES_API_URL - Mobile Movies API URL. E.g. `https://wmp-mobileapi-dev.azurewebsites.net`

3. Every function in this wrapper will return a promise, Handling promises is at the caller end. Call the functions with appropriate arguments

E.g.

```node
const theaterId = '7871'
const authToken = 'vSD45gbEgd5ggevbxjhg4655bvE='
const exhibitorCode = 'Prospector'
const reqQuery = {
  firstDate: '2018-07-16',
  lastDate: '2019-12-20'
}

// promise
client
  .getSingleTheater(theaterId, reqQuery, authToken, exhibitorCode)
  .then((result) => console.log(result.body, result.status))
  .catch((err) => console.log(err))

// async/await
const result = await client.getSingleTheater(theaterId, reqQuery, authToken, exhibitorCode)
```

Refer `index.js` for the list of available wrapper functions

## Documentation for wrapper methods

All URIs are relative to **MOBILE_MOVIES_API_URL** configuration variable.

### Theater Detail wrapper methods

| Method                                                            | HTTP request                            | Description                              |
| ----------------------------------------------------------------- | --------------------------------------- | ---------------------------------------- |
| [**getTheaters**](docs/TheaterDetailApi.md#gettheaters)           | **GET** /api/theaters                   | Get a list of Theaters for an Exhibitor. |
| [**getSingleTheater**](docs/TheaterDetailApi.md#getsingletheater) | **GET** /api/theaters/single/:theaterId | Get a theater detail by theaterId.       |

### Movie Detail wrapper methods

| Method                                                      | HTTP request                        | Description                                        |
| ----------------------------------------------------------- | ----------------------------------- | -------------------------------------------------- |
| [**getSingleMovie**](docs/MovieDetailApi.md#getsinglemovie) | **GET** /api/movies/single/:movieId | Get a movie detail by movieId.                     |
| [**getNowPlaying**](docs/MovieDetailApi.md#getnowplaying)   | **GET** /api/movies/nowplaying      | Get a list of Now Playing movies for an Exhibitor. |
| [**getComingSoon**](docs/MovieDetailApi.md#getcomingsoon)   | **GET** /api/movies/comingsoon      | Get a list of Coming Soon movies for an Exhibitor. |

### Emergency Messages wrapper methods

| Method                                                                        | HTTP request           | Description                   |
| ----------------------------------------------------------------------------- | ---------------------- | ----------------------------- |
| [**getEmergencyMessages**](docs/EmergencyMessagesApi.md#getemergencymessages) | **GET** /api/emergency | Get EmergencyMessage objects. |

### Orders wrapper methods

| Method                                                   | HTTP request                         | Description                                      |
| -------------------------------------------------------- | ------------------------------------ | ------------------------------------------------ |
| [**getOrderSummary**](docs/OrdersApi.md#getordersummary) | **GET** /api/orders/summary/:orderId | Get a summary of a (completed) order by orderId. |

### Compatibility wrapper methods

| Method                                                            | HTTP request               | Description                    |
| ----------------------------------------------------------------- | -------------------------- | ------------------------------ |
| [**getCompatibility**](docs/CompatibilityApi.md#getcompatibility) | **GET** /api/compatibility | Get compatibility information. |


## Lint

- Run lint: `npm run lint`
- Run lint fix: `npm run lint:fix`

## Running tests

### Preparation

Run `npm install` to install dependencies.

To run tests alone

```bash
npm run test
```

To run unit tests with coverage report

```bash
npm run test:cov
```

## Verification

See [Verification.md](./Verification.md)