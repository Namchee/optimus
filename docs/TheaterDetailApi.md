# Theater Detail Api

All URIs are relative to **MOBILE_MOVIES_API_URL** configuration variable.

| Method                                    | HTTP request                            | Description                              |
| ----------------------------------------- | --------------------------------------- | ---------------------------------------- |
| [**getTheaters**](#gettheaters)           | **GET** /api/theaters                   | Get a list of Theaters for an Exhibitor. |
| [**getSingleTheater**](#getsingletheater) | **GET** /api/theaters/single/:theaterId | Get a theater detail by theaterId.       |

<a name="getTheaters"></a>

# **getTheaters**

> getTheaters([reqQuery, authToken, exhibitorCode])

Get theaters. Returns a list of Theaters for an Exhibitor. Returns Light Theater objects. This endpoint supports geolocation.

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
  .getTheaters(reqQuery, authToken, exhibitorCode)
  .then((result) => console.log(result.body, result.status))
  .catch((err) => console.log(err))

// Async / await model
await client.getTheaters(reqQuery, authToken, exhibitorCode)
```

### Parameters

| Name              | Type                                      | Description                        |
| ----------------- | ----------------------------------------- | ---------------------------------- |
| **reqQuery**      | [**GeoLocation**](GeoLocation.md) | the optional get theaters criteria |
| **authToken**     | String                                    | the optional authorization token   |
| **exhibitorCode** | String                                    | the optional exhibitor code        |

### Return type

[**GetTheatersResponse**](GetTheatersResponse.md)

### Authorization

**Basic**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getSingleTheater"></a>

# **getSingleTheater**

> getSingleTheater(theaterId[, reqQuery, authToken, exhibitorCode])

Get a theater detail. Returns Full Theater and Light Movie objects. This endpoint supports date filtering.

### Example

```javascript
const wrapper = require('mobile-movies-api-wrapper')
const config = {
  MOBILE_MOVIES_API_URL,
  authToken,
  exhibitorCode
}
const client = wrapper(config)

const theaterId = '7871'
const authToken = 'vSD45gbEgd5ggevbxjhg4655bvE='
const exhibitorCode = 'Prospector'
const reqQuery = {
  firstDate: '2018-07-16',
  lastDate: '2019-12-20'
}

// Promise model
client
  .getSingleTheater(theaterId, reqQuery, authToken, exhibitorCode)
  .then((result) => console.log(result.body, result.status))
  .catch((err) => console.log(err))

// Async / await model
await client.getSingleTheater(theaterId, reqQuery, authToken, exhibitorCode)
```

### Parameters

| Name              | Type                                         | Description                              |
| ----------------- | -------------------------------------------- | ---------------------------------------- |
| **theaterId**     | **String**                                   | the theater id                           |
| **reqQuery**      | [**DateRange**](DateRange.md) | the optional get single theater criteria |
| **authToken**     | String                                       | the optional authorization token         |
| **exhibitorCode** | String                                       | the optional exhibitor code              |

### Return type

[**GetSingleTheaterResponse**](GetSingleTheaterResponse.md)

### Authorization

**Basic**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json