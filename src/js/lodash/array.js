const _ = require('lodash');

const testArray = [
  'a', 'a', 'a', 'b', 'b', '',
  0, 1, 1000, 10.234,
  null, undefined,
  true, false,
  {
    name: 'Foo',
    age: 24,
    address: 'Hefei',
    roles: ['Intern', 'Manager', 'HR'],
  },
  ['SubA', 'SubB', 'SubC'],
];

// 1. chunk(array, size=1) =>
//      Python list slice.
// console.log(_.chunk(testArray, 2));

// 2. compact(array) =>
//      Get rid of all false value.
// console.log(_.compact(testArray));

// 3. concat(array, [values]) =>
//      Equal to [].concat([values]).
// console.log(_.concat(testArray, ['concatA', 'concatB', 'concatC']));

// 4. difference(array, [values to be excluded]) =>
//      Remove elements listed in [values] in array to create a new array.
// console.log(_.difference(testArray, ['a', 'b', 'c']));

// 5. differenceBy(array, [values to be excluded], filter) =>
//      All elements in array and [values] will be filtered an then be differentiated.
// console.log(_.differenceBy(testArray, [1.2, 10.1, 99.9], Math.round));

// 6. differenceWith(array, [values to be excluded], comparator) =>
//    Comparator returns a boolean value. The two params are arrVal and othVal.
// console.log(_.differenceWith(
//   testArray, [100, 200, 300], (arrVal, othVal) => arrVal * othVal > 1000,
// ));

// 7. drop(array, n = 1) =>
//    Get rid of n elements from the front.
// console.log(_.drop(testArray, 5));

// 8. dropRight(array, n = 1) =>
//    Get rid of n elements from the rear.
// console.log(_.dropRight(testArray, 5));

// 9. dropRightWhile(array, predicate) =>
//    Get rid of elements from where predicate(value, index, array)
// first returns false all the way to the rear.
// console.log(_.dropRightWhile(testArray, value => typeof value !== 'number'));

// 10. dropWhile(array, predicate) =>
//    Get rid of elements from where predicate(value, index, array)
// first returns false all the way to the front.
// console.log(_.dropWhile(testArray, value => typeof value !== 'number'));

// 11. fill(array, value, start = 0, end = array.length) =>
//    Fill part of the array with value.
// console.log(_.fill(testArray, '*', 0, 5));
//    Initiate a new Array.
// console.log(_.fill(new Array(3), -1));

// 12. findIndex(array, predicate, fromIndex = 0) =>
//    Returns the first element's index which predicate returns true with from fromIndex
// console.log(_.findIndex(testArray, value => value > 0));

// 13. findLastIndex(array, predicate, fromIndex = array.length - 1) =>
//    Returns the last element's index which predicate returns true with from fromIndex
// console.log(_.findLastIndex(testArray, value => value > 0));

// 14. first -> head(array) =>
//    Returns the first element in the array.
// console.log(_.head(testArray));

// 15. flatten(array) =>
//    Reduce ONE level of the depth of a nested array.
// console.log(_.flatten(testArray));

// 16. flattenDeep(array) =>
//    Completely flatten a nested array.

// 17. flattenDepth(array, depth = 1) =>
//    Specify the depth to flatten.

// 18. fromPairs(pairs) =>
//    Convert pairs array into object. The pairs array is at least a 2-dimensional array.
// console.log(_.fromPairs([['name', 'Bob'], ['Address', 'hfut'], ['age', 22]]));

// 19. initial(array) =>
//    Get rid of the last element.
// console.log(_.initial(testArray));

// 20. intersection(arrays) =>
//    Returns an array that contains elements appear in every one of the arrays given.
// console.log(_.intersection(testArray, ['a', 1, 2, 10], ['a', 'b', 3]));

// 21. intersectionBy(arrays, filter) =>
//    Returns an array that contains elements appear in every one of the arrays given after being
// through the filter.
// console.log(_.intersectionBy(testArray, ['abc', 0], ['cde', 0], value => value + 1));

// 22. intersectionWith(arrays, comparator) =>
//    Returns an array that contains elements appear in every one of the arrays given after being
// compared and the comparator returns true.
// console.log(_.intersectionWith(testArray,
//   ['a', 'z', ['SubA', 'SubB', 'SubC']],
//   [20, 22, ['SubA', 'SubB', 'SubC']],
//   _.isEqual));

// 23. pull(array, [values]) =>
//    Remove values in the array
// console.log(_.pull(testArray, 'a', 1000));

// 24. pullAll(array, values) =
//    Remove values in the array. The difference is that values should be provided in an array.
// console.log(_.pullAll(testArray, ['a', 1000]));

// 25. pullAt(array, indexes) =>
//    Remove elements at indexes in the array.

// ! Note that all pullX() method will change the origin array rather than return a new one. This is different from differentX()

// 26. sortedIndex(array, value)
//    Judge where should value be inserted in the array.
// console.log(_.sortedIndex([10, 50, 70, 100], 60));

// 27. sortedUniq(array)
//    Make sure that the elements in the array is unique.
// console.log(_.sortedUniq(testArray));

// 28. tail(array)
//    Remove the first element in the array.
// console.log(_.tail(testArray));

// 29. take(array, n = 1)
//    Get n elements from the front.
// console.log(_.take(testArray, 3));

// 30. union(arrays)
//    Returns an array that includes every element
// console.log(_.union([1, 2, 3], [2, 3, 4], [3, 4, 5]));

// 31. unzip(array)
//    The array given is 2-dimensional. The function returns a 2-dimensional array that put the first elements in each array given in the first sub array, put the second elements in the second sub array...
// console.log(_.unzip([['Jason', 20, 'Hefei'], ['Anna', 20, 'Suzhou'], ['Sunny', 20, 'Wuxi']]));

// 32. without(array, [values])
//    Remove all given values in the array.
console.log(_.without(testArray, 1000, 'a', undefined));

// 33. xor([arrays])

// 34. zip([arrays])
//    Do the reversed thing as unzip().
// console.log(_.zip(['Jason', 'Anna', 'Sunny'], [20, 20, 20], ['Hefei', 'Suzhou', 'Hangzhou']));

// 35. zipObject(keys, values)
//    Return an object whose keys and values are provided separately in two arrays.
// console.log(_.zipObject(['Jason', 'Anna', 'Sunny'], [20, 20, 20]));

// 36. zipObjectDeep(keys, values)
//    The difference is that keys support path format.
console.log(JSON.stringify(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d', 'a.c.e'], [1, 2, 3])));
