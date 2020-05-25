var test = require('tape');
const validateDate = require('../validate-date');

test('is valid date', function (t) {
    

    t.equal(validateDate('02/29/2001'), 'Invalid Date');
    t.equal(validateDate('02/2/9/2001', boolean=false), 'Invalid Format');
    t.equal(validateDate('02/29/2000', boolean=false), 'Valid Date');
    t.equal(validateDate('02/29/2000', boolean=true), true);
    t.equal(validateDate('02/29/2001',boolena=true), false);
    t.equal(validateDate('02/27/2001',boolean=true,format="mm/dd/yyyy"),true);
    t.equal(validateDate('27/02/2001',boolean=true,format="dd/mm/yyyy"),true);
    t.equal(validateDate('27/02/2001',boolean=true,format="mm/dd/yyyy"),false);
    t.equal(validateDate('27/2001/02',boolean=true,format="dd/yyyy/mm"),true);
    t.equal(validateDate('27/02/2001',boolean=true,format="mm/mm/yyyy"),false);

    t.end()
});