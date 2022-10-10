const checkEquality = (arr1, arr2) => {
    return arr1.map((el,i) => el.map((e,j) => e == arr2[i][j]).every(Boolean)).every(Boolean)
}

const array1 = [ ['a','b','c'], ['d','e','f'], ['g','h','i'] ]
const array2 = [ ['a','b','c'], ['d','e','f'], ['g','h','i'] ]
const array3 = [ ['a','B','c'], ['d','E','f'], ['g','H','i'] ]
const array4 = [ ['a','b','c'], ['g','h','i'], ['d','e','f'] ]

console.log(checkEquality(array1, array2))
console.log(checkEquality(array1, array3))
console.log(checkEquality(array1, array4))