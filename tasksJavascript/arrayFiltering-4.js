const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => num % 2 === 0;

function filterArray(array, checkFunction) {
    return array.filter(checkFunction);
}

console.log(filterArray(mixedArray, isEven));