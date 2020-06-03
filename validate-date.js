function validateDate(dateValue, responseType = "string", dateFormat = null) {
  let responses = responseSetter(responseType)
  if (dateValue == null) {
    return responses[0];
  }

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

function dateValidator(dateValue, responses, dateFormat) {
    if (dateValue) {
        
        if (!dateFormat) {
        dateFormat = dateValue.includes("-") ? "yyyy-mm-dd" : "mm/dd/yyyy";
        }

        if (dateFormat.length > 10 || dateFormat.length < 6) return responses[0];

        const formatSplit = dateValue.includes("-")
        ? dateFormat.split("-")
        : dateFormat.split("/");

        let wrongFormat = formatSplit
        .map((formatPart) => /([dmy])\1/i.test(formatPart))
        .filter((rightFormat) => !rightFormat);

        if (wrongFormat.length > 0) return responses[0];

        let dateSeparator = dateValue.includes("-") ? "-" : "/";

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

        if (dayPosition.length !== 1 ||
        monthPosition.length !== 1 ||
        yearPosition.length !== 1
        ) {
            return responses[0];
        }

        if (formatRegex.test(dateValue)) {
        const dateSplit = dateValue.split(dateSeparator);
        const day = Number(dateSplit[dayPosition]);
        const month = Number(dateSplit[monthPosition]);
        const year = Number(dateSplit[yearPosition]);
        if (
            month <= 0 ||
            month > 12 ||
            day > daysInMonth(year, month) ||
            day <= 0 ||
            year < 1753) 
            {
                return responses[1];
            }
        } else {
            return responses[0];
        }
    }

  return responses[2];
}

module.exports = validateDate;
