# Validate Date

## Install

```bash
npm install validate-date --save--dev 
```

## Usage

```js

var validateDate = require("validate-date");

validateDate('99/10/2020'); //returns Invalid Date
validateDate('02/29/2001'); //returns Invalid Date. Leap year check verified
validateDate('02022000'); // returns Invalid Format
validateDate(''); // returns Invalid Format
validateDate('02/02/2001'); //returns Valid Date

```

## License

[MIT][license]