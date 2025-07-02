var RandomizedSet = function () {
  this.obj = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.obj[val] !== undefined) return false;

  this.obj[val] = val;

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.obj[val] === undefined) return false;

  delete this.obj[val];

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const keys = Object.keys(this.obj);

  const min = 0;
  const max = keys.length - 1;

  const index = Math.floor(Math.random() * (max - min + 1)) + min;

  return this.obj[keys[index]];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const val = 2;
var obj = new RandomizedSet();

obj.remove(0);
obj.remove(0);
obj.insert(0);
obj.remove(0);
obj.insert(0);

console.log();
