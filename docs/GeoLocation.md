# GeoLocation

## Properties

| Name               | Type        | Description                                                                                                                                                                                                                     | Notes                                 |
| ------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **latitude**       | **Number**  | The latitude and latitude parameters represent the centre of the area. If these parameters are missing or null then no geo-filtering is applied.                                                                                | default value is null                 |
| **longitude**      | **Number**  | The latitude and latitude parameters represent the centre of the area. If these parameters are missing or null then no geo-filtering is applied.                                                                                | default value is null                 |
| **radius**         | **Number**  | search radius                                                                                                                                                                                                                   | default value is 60                   |
| **unit**           | **String**  | the unit of radius                                                                                                                                                                                                              | kilometers or miles (default = miles) |
| **keepIDs**        | **String**  | The keepIDs paramter is comma-separated list of item IDs that will be returned in the results irrespective of location e.g. a list 'favourited' items.                                                                          |
| **minimumResults** | **Integer** | The minimumResults parameter is the minimum number of locations that will be matched. If not enough locations are matched by the filter, the next-closest locations will be added until the minimum results have been achieved. |
