# Validate Date

Give me a string and I'll tell you if it's a valid date.

This package exports a single synchronous function that takes date as a “string” and two **optional parameters**, the type of response as "responseType"(responseType="string" by default) and date format as "dateFormat" (dateFormat=null by default, see more details below) and returns a convenient response based on the user’s choice. It also validates leap years.

## Install

```bash
npm install validate-date --save--dev 
```

## Usage

The function accepts 3 parameters: **date**, **responseType** and **dateFormat** strings. 
1) **date** => string representation of date

2) **responseType** => "string" or "boolean"
    responseType="string" by default. The function returns "true" for validated dates and "false" for incorrect ones.

    | date          | string            | boolean   |
    | ------------- |:-----------------:|:----------|
    |  02/02/2001   | Valid Date        |  true     |
    |  99/10/2020   | Invalid Date      |  false    |
    |  02022000     | Invalid Format    |  false    |

3) **dateFormat** => format of the date supplied
    By default this function accepts dates in the formats **"yyyy-mm-dd" and "mm/dd/yyyy"**, but other formats can be enforced by passing it as "dateFormat" parameter. The "dateFormat" parameter is **case insensitive** (e.g. YYYY/MM/DD is the same as yyyy/mm/dd). The only two separators accepted by now are "-" and "/". Only numbers are supposed on the date (i.e. use 06 for June, not Jun or June).

```js

var validateDate = require("validate-date");


validateDate('02/02/2001'); // returns "Valid Date"
validateDate('99/10/2020'); // returns "Invalid Date"
validateDate('02/29/2001'); // returns "Invalid Date", as Leap year check is verified
validateDate('02022000'); // returns "Invalid Format"
validateDate(''); // returns "Invalid Format"

validateDate('99/10/2020', responseType="boolean"); // returns false
validateDate('02/29/2001', responseType="boolean"); //returns false. Leap year check verified
validateDate('02022000', responseType="boolean"); // returns false
validateDate('', responseType="boolean"); // returns false
validateDate('02/02/2001', responseType="boolean"); // returns true

// The "responseType" param is "string" by default.
validateDate('99/10/2020'); // returns "Invalid Date"
validateDate('99/10/2020', responseType="string"); // returns "Invalid Date"
validateDate('99/10/2020', responseType="boolean"); // returns false

// The "dateFormat" param is "mm/dd/yyyy" by default.
validateDate('02/27/2001', responseType="boolean"); // returns true
validateDate('02/27/2001', responseType="boolean", dateFormat="mm/dd/yyyy"); // returns true
validateDate('27/02/2001', responseType="boolean", dateFormat="dd/mm/yyyy"); // returns true

validateDate('02/27/2001', responseType="string", dateFormat="mm/dd/yyyy"); // returns "Valid Date"
validateDate('27/02/2001', responseType="string", dateFormat="dd/mm/yyyy"); // returns "Valid Date"


```
## License

[MIT][license]