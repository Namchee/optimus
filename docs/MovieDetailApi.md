# Movie Detail Api

All URIs are relative to **MOBILE_MOVIES_API_URL** configuration variable.

| Method                                | HTTP request                        | Description                                        |
| ------------------------------------- | ----------------------------------- | -------------------------------------------------- |
| [**getSingleMovie**](#getsinglemovie) | **GET** /api/movies/single/:movieId | Get a movie detail by movieId.                     |
| [**getNowPlaying**](#getnowplaying)   | **GET** /api/movies/nowplaying      | Get a list of Now Playing movies for an Exhibitor. |
| [**getComingSoon**](#getcomingsoon)   | **GET** /api/movies/comingsoon      | Get a list of Coming Soon movies for an Exhibitor. |

<a name="getSingleMovie"></a>

# **getSingleMovie**

> getSingleMovie(movieId, [reqQuery, authToken, exhibitorCode])

Get a theater detail by id. Returns Movie detail and schedule detail by Theater. Returns Full Movie and Light Theater objects. This endpoint supports geolocation. This endpoint supports date filtering.

### Example

```javascript
const wrapper = require('mobile-movies-api-wrapper')
const movieId = '121-243084'
const config = {
  MOBILE_MOVIES_API_URL,
  authToken,
  exhibitorCode
}
const client = wrapper(config)

const authToken = 'vSD45gbEgd5ggevbxjhg4655bvE='
const exhibitorCode = 'Prospector'
const reqQuery = {
  Latitude: 40.62966,
  Longitude: -74.241445,
  Radius: 96,
  Unit: 'kilometers',
  firstDate: '2018-07-16',
  lastDate: '2019-12-20'
}

// Promise model
client
  .getSingleMovie(movieId, reqQuery, authToken, exhibitorCode)
  .then((result) => console.log(result.body, result.status))
  .catch((err) => console.log(err))

// Async / await model
await client.getSingleMovie(movieId, reqQuery, authToken, exhibitorCode)
```

### Parameters

| Name              | Type                                                      | Description                              |
| ----------------- | --------------------------------------------------------- | ---------------------------------------- |
| **movieId**       | String                                                    | the movie id                             |
| **reqQuery**      | [**GeoLocationAndDateRange**](GeoLocationAndDateRange.md) | the optional get theater detail criteria |
| **authToken**     | String                                                    | the optional authorization token         |
| **exhibitorCode** | String                                                    | the optional exhibitor code              |

### Return type

[**GetSingleMovieResponse**](GetSingleMovieResponse.md)

### Authorization

**Basic**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getNowPlaying"></a>

# **getNowPlaying**

> getNowPlaying([reqQuery, authToken, exhibitorCode])

Returns a list of Now Playing movies for an Exhibitor. Returns Light Movie and Light Theater objects. This endpoint supports geolocation.

### Example

```javascript
const wrapper = require('mobile-movies-api-wrapper')
const config = {
  MOBILE_MOVIES_API_URL,
  authToken,
  exhibitorCode
}
const client = wrapper(config)

const authToken = 'vSD45gbEgd5ggevbxjhg4655bvE='
const exhibitorCode = 'Prospector'
const reqQuery = {
  Latitude: 40.62966,
  Longitude: -74.241445,
  Radius: 96,
  Unit: 'kilometers'
}

// Promise model
client
  .getNowPlaying(reqQuery, authToken, exhibitorCode)
  .then((result) => console.log(result.body, result.status))
  .catch((err) => console.log(err))

// Async / await model
await client.getNowPlaying(reqQuery, authToken, exhibitorCode)
```

### Parameters

| Name              | Type                          | Description                              |
| ----------------- | ----------------------------- | ---------------------------------------- |
| **reqQuery**      | [**GeoLocation**](GeoLocation.md) | the optional get single theater criteria |
| **authToken**     | String                        | the optional authorization token         |
| **exhibitorCode** | String                        | the optional exhibitor code              |

### Return type

[**GetNowPlayingResponse**](GetNowPlayingResponse.md)

### Authorization

**Basic**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getComingSoon"></a>

# **getComingSoon**

> getComingSoon([reqQuery, authToken, exhibitorCode])

Returns a list of Coming Soon movies for an Exhibitor. Returns Light Movie and Light Theater objects. This endpoint supports geolocation.

### Example

```javascript
const wrapper = require('mobile-movies-api-wrapper')
const config = {
  MOBILE_MOVIES_API_URL,
  authToken,
  exhibitorCode
}
const client = wrapper(config)

const authToken = 'vSD45gbEgd5ggevbxjhg4655bvE='
const exhibitorCode = 'Prospector'
const reqQuery = {
  Latitude: 40.62966,
  Longitude: -74.241445,
  Radius: 96,
  Unit: 'kilometers'
}

// Promise model
client
  .getComingSoon(reqQuery, authToken, exhibitorCode)
  .then((result) => console.log(result.body, result.status))
  .catch((err) => console.log(err))

// Async / await model
await client.getComingSoon(reqQuery, authToken, exhibitorCode)
```

### Parameters

| Name              | Type                          | Description                              |
| ----------------- | ----------------------------- | ---------------------------------------- |
| **reqQuery**      | [**GeoLocation**](GeoLocation.md) | the optional get single theater criteria |
| **authToken**     | String                        | the optional authorization token         |
| **exhibitorCode** | String                        | the optional exhibitor code              |

### Return type

[**GetComingSoonResponse**](GetComingSoonResponse.md)

### Authorization

**Basic**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
