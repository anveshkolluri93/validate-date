# Validate Date

Give me a string and I'll tell you if it's a valid date.

This package exports a single synchronous function that takes date as a “string” and two **optional** parameters, the type of response as "responseType"(responseType="string" by default) and date format as "dateFormat" (dateFormat=null by default, but see more details below) and returns a convenient response based on the user’s choice. It also validates leap years.

## Install

```bash
npm install validate-date --save--dev 
```

## Usage

The function accepts three parameters: a **date string**, a **"responseType"** parameter and a **"dateFormat"** string. By default "responseType"="string" and the function returns strings with information about the date string (see below). If "responseType" is set to "boolean", the function returns "true" for validated dates and "false" for incorrect ones. By default this function accepts dates on the formats "yyyy-mm-dd" and "mm/dd/yyyy", but other formats can be enforced by declaring it in the "dateFormat" parameter. The "dateFormat" parameter is case insensitive (e.g. YYYY/MM/DD is the same as yyyy/mm/dd). The only two separators accepted by now are "-" and "/". Only number can be used on the date (i.e. use 06 for June, not Jun or June).

```js

var validateDate = require("validate-date");



Let's update these to the one below Please make sure to preserve the bold text :)

validateDate('99/10/2020'); //returns Invalid Date
validateDate('02/29/2001'); //returns Invalid Date. Leap year check verified
validateDate('02022000'); // returns Invalid Format
validateDate(''); // returns Invalid Format
validateDate('02/02/2001'); //returns Valid Date

validateDate('99/10/2020’, booleanResponse=true); // returns false
validateDate('02/29/2001’, booleanResponse=true); //returns false. Leap year check verified
validateDate('02022000’, booleanResponse=true); // returns false
validateDate(‘’, booleanResponse=true); // returns false
validateDate('02/02/2001', booleanResponse=true); //returns true

The booleanResponse param is false by default.
validateDate('99/10/2020’, booleanResponse=false); //returns Invalid Date
validateDate('99/10/2020’, booleanResponse=true); //returns false


```

## License

[MIT][license]