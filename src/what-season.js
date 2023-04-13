const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (date.toString() == Date.prototype.toString.call(new Date())) {
    throw new Error("Invalid date!");
  }
  if (date instanceof Date && !isNaN(date)) {
    let month = date.getMonth();
    if (month === 11 || month < 2) {
      return "winter";
    } else if (month >= 8) {
      return "autumn";
    } else if (month >= 5) {
      return "summer";
    } else {
      return "spring";
    }
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
