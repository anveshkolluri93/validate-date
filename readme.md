# Validate Date

Simple date validation function. It takes a string in the shape of "mm/dd/yyyy" or "yyyy-mm-dd" and returns either a string with detailed information or a boolean value. Includes checking for leap years.


## Install

```bash
npm install validate-date --save--dev 
```

## Usage

The function accepts two parameters: a date string and a "boolean" parameter. By default "boolean"=false and the function returns strings (see below). If "boolean" is set to true, the function returns "true" for validated dates and "false" for incorrect ones.

```js

var validateDate = require("validate-date");

validateDate('99/10/2020'); //returns Invalid Date
validateDate('02/29/2001'); //returns Invalid Date. Leap year check verified
validateDate('02022000'); // returns Invalid Format
validateDate('02022000', boolean=false); // returns Invalid Format
validateDate(''); // returns Invalid Format
validateDate('02/02/2001'); //returns Valid Date
validateDate('11/01/1991', boolean=true); //returns true
validateDate('02022000', boolean=true); // returns false


```

## License

[MIT][license]