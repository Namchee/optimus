# Compatibility Api

All URIs are relative to **MOBILE_MOVIES_API_URL** configuration variable.

| Method                                    | HTTP request               | Description                    |
| ----------------------------------------- | -------------------------- | ------------------------------ |
| [**getCompatibility**](#getcompatibility) | **GET** /api/compatibility | Get compatibility information. |

<a name="getCompatibility"></a>

# **getCompatibility**

> getCompatibility(caller, osType[, exhibitorCode])

Get compatibility information.

### Example

```javascript
const wrapper = require('mobile-movies-api-wrapper')
const config = {
  MOBILE_MOVIES_API_URL,
  authToken,
  exhibitorCode
}
const client = wrapper(config)
const caller = 'Optimus-Prime'
const osType = 'IOS'
const exhibitorCode = 'Prospector'

// Promise model
client
  .getCompatibility(caller, osType, exhibitorCode)
  .then((result) => console.log(result.body, result.status))
  .catch((err) => console.log(err))

// Async / await model
await client.getCompatibility(caller, osType, exhibitorCode)
```

### Parameters

| Name              | Type   | Description                 |
| ----------------- | ------ | --------------------------- |
| **caller**        | String | the caller                  |
| **osType**        | String | the os type                 |
| **exhibitorCode** | String | the optional exhibitor code |

### Return type

[**GetCompatibilityResponse**](GetCompatibilityResponse.md)

### Authorization

**None**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
