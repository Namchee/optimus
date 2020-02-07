# Orders Api

All URIs are relative to **MOBILE_MOVIES_API_URL** configuration variable.

| Method                                  | HTTP request                         | Description                                      |
| --------------------------------------- | ------------------------------------ | ------------------------------------------------ |
| [**getOrderSummary**](#getordersummary) | **GET** /api/orders/summary/:orderId | Get a summary of a (completed) order by orderId. |

<a name="getOrderSummary"></a>

# **getOrderSummary**

> getOrderSummary(orderId[, authToken, exhibitorCode])

Returns a summary of a (completed) order by Id.

### Example

```javascript
const wrapper = require('mobile-movies-api-wrapper')
const config = {
  MOBILE_MOVIES_API_URL,
  authToken,
  exhibitorCode
}
const client = wrapper(config)

const orderId = '13A6C5F62FC5D99453E4'
const authToken = 'vSD45gbEgd5ggevbxjhg4655bvE='
const exhibitorCode = 'Prospector'

// Promise model
client
  .getOrderSummary(orderId, authToken, exhibitorCode)
  .then((result) => console.log(result.body, result.status))
  .catch((err) => console.log(err))

// Async / await model
await client.getOrderSummary(orderId, authToken, exhibitorCode)
```

### Parameters

| Name              | Type   | Description                      |
| ----------------- | ------ | -------------------------------- |
| **orderid**       | String | the order id                     |
| **authToken**     | String | the optional authorization token |
| **exhibitorCode** | String | the optional exhibitor code      |

### Return type

[**GetOrderSummaryResponse**](GetOrderSummaryResponse.md)

### Authorization

**Basic**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
