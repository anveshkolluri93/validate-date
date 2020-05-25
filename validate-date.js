function validateDate(dateValue, boolean = false) {
  let responses = boolean
    ? [false, false, false, true]
    : ["Invalid Format", "Invalid Date", "Invalid Format", "Valid Date"];
  if (dateValue == null) {
    return responses[0];
  }
  return dateValidator(dateValue, responses);
}

function daysInMonth(year, month) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return month === 2 && year % 4 === 0 ? 29 : days[month - 1];
}

function dateValidator(dateValue, responses) {
  if (dateValue) {
    const dateFormat = dateValue.includes("-")
      ? /(\d{4})(-)(\d{2})(-)\d{2}.*/
      : /(\d{2})(\/)(\d{2})(\/)\d{4}$/;
    if (dateFormat.test(dateValue)) {
      const dateSplit = dateValue.includes("-")
        ? dateValue.split("-")
        : dateValue.split("/");
      const day = dateValue.includes("-")
        ? parseInt(dateSplit[2].substring(0, 2), 10)
        : parseInt(dateSplit[1], 10);
      const month = dateValue.includes("-")
        ? parseInt(dateSplit[1], 10)
        : parseInt(dateSplit[0], 10);
      const year = dateValue.includes("-")
        ? parseInt(dateSplit[0], 10)
        : parseInt(dateSplit[2], 10);
      if (
        month <= 0 ||
        month > 12 ||
        day > daysInMonth(year, month) ||
        day <= 0 ||
        year < 1753
      ) {
        return responses[1];
      }
    } else {
      return responses[2];
    }
  }
  return responses[3];
}

module.exports = validateDate;
