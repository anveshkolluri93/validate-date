var validateDate = require("validate-date");

describe('validateDate function', () => {
    // Test valid dates
    it('should validate valid dates with string response type', () => {
        expect(validateDate('2023-07-20')).toBe('Valid Date');
        expect(validateDate('12/31/2023')).toBe('Valid Date');
    });

    it('should validate valid dates with boolean response type', () => {
        expect(validateDate('2023-07-20', 'boolean')).toBe(true);
        expect(validateDate('12/31/2023', 'boolean')).toBe(true);
    });

    // Test invalid dates
    it('should handle invalid dates with string response type', () => {
        expect(validateDate('2023-07-32')).toBe('Invalid Date');
        expect(validateDate('2023-13-01')).toBe('Invalid Date');
        expect(validateDate('02/29/2001')).toBe('Invalid Date');
        expect(validateDate('1752-09-02')).toBe('Invalid Date');

        // Non leap year, 29 february
        expect(validateDate('2023-02-29', 'string', 'yyyy-mm-dd')).toBe('Invalid Date');
        expect(validateDate('2099-02-29', 'string', 'yyyy-mm-dd')).toBe('Invalid Date');
    });

    // Test invalid date values that should throw exceptions
    it('should throw an error for invalid dateValue', () => {
        // Testing with null dateValue
        expect(() => validateDate(null, 'string')).toThrow('dateValue must be a string.');

        // Testing with a number as dateValue
        expect(() => validateDate(123, 'string')).toThrow('dateValue must be a string.');

        // Testing with an object as dateValue
        expect(() => validateDate({ key: 'value' }, 'string')).toThrow('dateValue must be a string.');

        expect(() => validateDate('2099-02-29', 'string', 'yyyy/mm/dd').toThrow('Use a valid separator. - or /.'));
    });

    it('should handle invalid dates with boolean response type', () => {
        expect(validateDate('2023-07-32', 'boolean')).toBe(false);
        expect(validateDate('2023-13-01', 'boolean')).toBe(false);
        expect(validateDate('2023/02/29', 'boolean')).toBe(false);
        expect(validateDate('1752-09-02', 'boolean')).toBe(false);
    });

    // Test invalid response types
    it('should throw an error for an invalid response type', () => {
        expect(() => validateDate('2023-07-20', 'number')).toThrow("responseType must be 'string' or 'boolean'.");
        expect(() => validateDate(null, 'number')).toThrow("dateValue must be a string.");
    });

    // testing with different date formats
    it('should validate dates with different date formats', () => {
        expect(validateDate('2023-07-20', 'string', 'yyyy-mm-dd')).toBe('Valid Date');
        expect(validateDate('07/20/2023', 'string', 'mm/dd/yyyy')).toBe('Valid Date');
        expect(validateDate('20-07-2023', 'string', 'dd-mm-yyyy')).toBe('Valid Date');
        expect(validateDate('2023/20/07', 'string', 'yyyy/dd/mm')).toBe('Valid Date');
    });

    // testing with invalid date formats
    it('should handle invalid date formats', () => {
        expect(validateDate('2023-07-20', 'string', 'dd-MM-yyyy')).toBe('Invalid Format');
        expect(validateDate('2023-20-07', 'string', 'yyyy/dd/mm')).toBe('Invalid Format');
        expect(validateDate('2023/20/07', 'string', 'yyyy-mm-dd')).toBe('Invalid Format');
        expect(validateDate('20-07-2023', 'string', 'dd/mm/yy')).toBe('Invalid Format');

        // Format mismatch leading to invalid date.
        expect(validateDate('07/20/2023', 'string', 'yy/mm/dd')).toBe('Invalid Date');
    });
});