const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = "";
  if (Symbol.iterator in Object(members)) {
    for (let member of members) {
      if (typeof member === "string")
        teamName += member.trim().toUpperCase().slice(0, 1);
    }
  }
  return teamName.split("").sort().join("") || false;
}

module.exports = {
  createDreamTeam,
};
