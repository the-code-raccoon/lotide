const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = (obj1, obj2) => {
  // different number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {

      // key is not in obj2
      if (!(key in obj2)) return false;

      // value for key is array
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        return eqArrays(obj1[key], obj2[key]);
      }

      // primitive data type check
      if (obj1[key] !== obj2[key]) return false;
    }
  }

  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  (eqObjects(actual, expected)) ?
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc)
