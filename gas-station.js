/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let res = -1;

  for (let i = 0; i < gas.length; i++) {
    res = canCompleteFrom(i, gas, cost);

    if (res !== -1) return res;
  }

  return res;
};

function canCompleteFrom(station, gas, cost) {
  let curGas = gas[station];

  for (let i = 0; i < gas.length; i++) {
    const idx = (station + i) % gas.length;

    curGas -= cost[idx];

    if (curGas < 0) return -1;

    curGas += gas[(idx + 1) % gas.length];
  }

  return station;
}

const gas = [2, 3, 4];
const cost = [3, 4, 3];

const output = canCompleteFrom(gas.length - 1, gas, cost);

console.log(output);
