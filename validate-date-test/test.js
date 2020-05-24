var test = require('tape');
const validateDate = require('../validate-date');

test('is valid date', function (t) {
    t.plan(2);

    t.equal(validateDate('02/29/2001'), 'Invalid Date');
    t.equal(validateDate('02/2/9/2001'), 'Invalid Format');
    t.equal(validateDate('02/29/2000'), 'Valid Date');
});