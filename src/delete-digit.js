const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
			let arr = [];
			let arrFromN = n.toString().split('');
			ind = 0
			max = arrFromN[0];
			for (let i = 0; i < arrFromN.length; i++) {
				if (arrFromN[i] > max) {
					max = arrFromN[i]
					ind = i
				}
			}
			if (ind !== 0) {
				return +arrFromN.join('').replace(arrFromN[ind - 1], "")
			}
			else {
				return +arrFromN.join('').replace(arrFromN[ind + 1], "")
			}
		}

module.exports = {
  deleteDigit
};
