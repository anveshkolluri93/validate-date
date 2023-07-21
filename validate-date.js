function validateDate(dateValue, responseType = "string", dateFormat = null) {
  // Validate input parameters
  if (typeof dateValue !== "string") {
    throw new Error("dateValue must be a string.");
  }

  if (typeof responseType !== "string" || !["string", "boolean"].includes(responseType)) {
    throw new Error("responseType must be 'string' or 'boolean'.");
  }

  if (dateFormat !== null && typeof dateFormat !== "string") {
    throw new Error("dateFormat must be a string.");
  }

  // Throw an exception for empty dateValue
  if (dateValue.trim() === "") {
    throw new Error("dateValue cannot be empty.");
  }

  let responses = responseSetter(responseType);

  return dateValidator(dateValue, responses, dateFormat);
}

// TODO- This function returns different response types(String or boolean) which might be an anti pattern. Investigate and make necessary changes
function responseSetter(responseType) {
  switch (responseType) {
    case "string":
      return ["Invalid Format", "Invalid Date", "Valid Date"];
    case "boolean":
      return [false, false, true];

    default:
      return ["Invalid Format", "Invalid Date", "Valid Date"];
  }
}

function daysInMonth(year, month) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (month === 2 && year % 4 === 0) ? 29 : days[month - 1];
}

function getAllIndexes(arr, val) {
  var indexes = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) indexes.push(i);
  }

  return indexes;
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) && year >= 1753;
}

function dateValidator(dateValue, responses, dateFormat) {
  if (dateValue) {
    if (!dateFormat) {
      dateFormat = dateValue.includes("-") ? "yyyy-mm-dd" : "mm/dd/yyyy";
    }

    const dateSeparator = /[^dmy]/i.exec(dateFormat)[0]; // Extract the separator character

    if (!dateValue.includes(dateSeparator)) {
      return responses[0];
    }

    if (dateFormat.length > 10 || dateFormat.length < 6) return responses[0];

    const formatSplit = dateValue.includes("-") ? dateFormat.split("-") : dateFormat.split("/");
    let wrongFormat = formatSplit
      .map((formatPart) => /([dmy])\1/i.test(formatPart))
      .filter((rightFormat) => !rightFormat);

    if (wrongFormat.length > 0) return responses[0];

    // let dateSeparator = dateValue.includes("-") ? "-" : "/";

    let formatRegex = new RegExp(
      `(\\d{${formatSplit[0].length}})(${dateSeparator})(\\d{${formatSplit[1].length}})(${dateSeparator})(\\d{${formatSplit[2].length}})`
    );

    let dayPosition = getAllIndexes(
      formatSplit,
      formatSplit.filter((formatPart) => /[d]/i.test(formatPart))[0]
    );
    let monthPosition = getAllIndexes(
      formatSplit,
      formatSplit.filter((formatPart) => /[m]/i.test(formatPart))[0]
    );
    let yearPosition = getAllIndexes(
      formatSplit,
      formatSplit.filter((formatPart) => /[y]/i.test(formatPart))[0]
    );

    if (dayPosition.length !== 1 || monthPosition.length !== 1 || yearPosition.length !== 1) {
      return responses[0];
    }

    if (formatRegex.test(dateValue)) {
      const dateSplit = dateValue.split(dateSeparator);
      const day = Number(dateSplit[dayPosition]);
      const month = Number(dateSplit[monthPosition]);
      const year = Number(dateSplit[yearPosition]);

      // Check for invalid dates
      if (
        month <= 0 ||
        month > 12 ||
        day <= 0 ||
        day > daysInMonth(year, month) ||
        year < 1753 ||
        (month === 2 && day === 29 && !isLeapYear(year))
      ) {
        return responses[1];
      }
    } else {
      return responses[0];
    }
  }

  return responses[2];
}

module.exports = validateDate;
