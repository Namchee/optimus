# Emergency Messages Api

All URIs are relative to **MOBILE_MOVIES_API_URL** configuration variable.

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmergencyMessages**](#getemergencymessages) | **GET** /api/emergency | Get EmergencyMessage objects.


<a name="getEmergencyMessages"></a>

# **getEmergencyMessages**

> getEmergencyMessages([reqQuery, authToken, exhibitorCode])

Returns EmergencyMessage objects. This endpoint supports geolocation

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
  .getEmergencyMessages(reqQuery, authToken, exhibitorCode)
  .then((result) => console.log(result.body, result.status))
  .catch((err) => console.log(err))

// Async / await model
await client.getEmergencyMessages(reqQuery, authToken, exhibitorCode)
```

### Parameters

| Name              | Type                                      | Description                        |
| ----------------- | ----------------------------------------- | ---------------------------------- |
| **reqQuery**      | [**GeoLocation**](GeoLocation.md) | the optional get theaters criteria |
| **authToken**     | String                                    | the optional authorization token   |
| **exhibitorCode** | String                                    | the optional exhibitor code        |

### Return type

[**GetEmergencyMessagesResponse**](GetEmergencyMessagesResponse.md)

### Authorization

**Basic**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json