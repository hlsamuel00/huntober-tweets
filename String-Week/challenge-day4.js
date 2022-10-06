// This function will reverse a given string. 

const reverseString = (string) => {
    // separate the string into an array, reverse the array, and rejoin the string
    return [...string].reverse().join('')
}

console.log(reverseString("   The white space at the beginning of this string doesn't match the whitespace at the end. "))