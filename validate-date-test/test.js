var test = require('tape');
const validateDate = require('../validate-date');

test('is valid date', function (t) {

    t.equal(validateDate('02/29/2001'), 'Invalid Date');
    
    t.equal(validateDate('02/2/9/2001', responseType="string"), 'Invalid Format');
    t.equal(validateDate('02/29/2000', responseType="string"), 'Valid Date');

    t.equal(validateDate('02/29/2000', responseType="boolean"), true);
    t.equal(validateDate('02/29/2001',responseType="boolean"), false);
    
    t.equal(validateDate('02/27/2001',responseType="boolean",format="mm/dd/yyyy"),true);
    t.equal(validateDate('27/02/2001',responseType="boolean",format="dd/mm/yyyy"),true);
    t.equal(validateDate('27/02/2001',responseType="boolean",format="mm/dd/yyyy"),false);
    t.equal(validateDate('27/2001/02',responseType="boolean",format="dd/yyyy/mm"),true);
    t.equal(validateDate('27/02/2001',responseType="boolean",format="mm/mm/yyyy"),false);

    t.end()
});