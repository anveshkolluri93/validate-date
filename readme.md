# Validate Date

Simple date validation function. It takes a string in any date format and returns either a string with detailed information or a boolean value. Includes checking for leap years.


## Install

```bash
npm install validate-date --save--dev 
```

## Usage

The function accepts three parameters: a date string, a "boolean" parameter and a "format" string. By default "boolean"=false and the function returns strings (see below). If "boolean" is set to true, the function returns "true" for validated dates and "false" for incorrect ones. The default formats are either "yyyy-mm-dd" and "mm/dd/yyyy", but other formats can be passed in the "format" parameter. It accepts both capital and lower-case (e.g. YYYY/MM/DD is the same as yyyy/mm/dd). The only two separators accepted by now are "-" and "/". Only number can be used on the date (i.e. use 06 for June, not Jun or June).

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
validateDate('27/02/2001',boolean=true,format="dd/mm/yyyy")// returns true
validateDate('27/02/2001',boolean=true,format="mm/dd/yyyy")// returns false
validateDate('27/2001/02',boolean=true,format="dd/yyyy/mm")// returns true
validateDate('27/02/2001',boolean=true,format="mm/mm/yyyy")// returns false

```

## License

[MIT][license]