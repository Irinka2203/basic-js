const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity === null || typeof (sampleActivity) !== 'string' || !parseFloat(sampleActivity) || parseFloat(sampleActivity)> MODERN_ACTIVITY || parseFloat(sampleActivity)<=0) {
    return false;
  }
  let act = Math.log2(MODERN_ACTIVITY / parseFloat(sampleActivity));
  let time = Math.ceil(HALF_LIFE_PERIOD*act)
  if (time <0 || time === NaN) {
    return false
  }else{return time}
}

module.exports = {
  dateSample
};
