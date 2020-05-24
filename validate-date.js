function validateDate(dateValue) {
    if (dateValue == null) {
        return 'Invalid Format';
    }
    return dateValidator(dateValue);
}

function daysInMonth(year, month) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return (month === 2 && year % 4 === 0) ? 29 : days[month - 1];
}

function dateValidator(dateValue) {
    if (dateValue) {
        const dateFormat = dateValue.includes('-') ? /(\d{4})(-)(\d{2})(-)\d{2}.*/ : /(\d{2})(\/)(\d{2})(\/)\d{4}$/;
        if (dateFormat.test(dateValue)) {
            const dateSplit = dateValue.includes('-') ? dateValue.split('-') : dateValue.split('/');
            const day = dateValue.includes('-') ? parseInt(dateSplit[2].substring(0, 2), 10) : parseInt(dateSplit[1], 10);
            const month = dateValue.includes('-') ? parseInt(dateSplit[1], 10) : parseInt(dateSplit[0], 10);
            const year = dateValue.includes('-') ? parseInt(dateSplit[0], 10) : parseInt(dateSplit[2], 10);
            if (month <= 0 || month > 12 || day > daysInMonth(year, month) || day <= 0 || year < 1753) {
                return 'Invalid Date';
            }
        } else {
            return 'Invalid Format';
        }
    }
    return 'Valid Date';
}

module.exports = validateDate;