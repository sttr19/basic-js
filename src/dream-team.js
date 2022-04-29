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
  while (Array.isArray(members))
  {
  let array_string= members.filter(value=>typeof value==='string').map(item=>item.trim().charAt(0).toUpperCase()).sort().join('');
  return array_string;
  }
  return false;
}

module.exports = {
  createDreamTeam,
};
