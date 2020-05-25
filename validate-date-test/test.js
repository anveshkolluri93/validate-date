var test = require('tape');
const validateDate = require('../validate-date');

test('is valid date', function (t) {
    

    t.equal(validateDate('02/29/2001'), 'Invalid Date');
    t.equal(validateDate('02/2/9/2001', boolean=false), 'Invalid Format');
    t.equal(validateDate('02/29/2000', boolean=false), 'Valid Date');
    t.equal(validateDate('02/29/2000', boolean=true), true);
    t.equal(validateDate('02/29/2001',boolena=true), false);
    t.end()
});