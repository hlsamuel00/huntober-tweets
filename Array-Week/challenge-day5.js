Array.prototype.yatesShuffle = function() {
    const tempArr =  [...this.flat(2)]
    let idx = tempArr.length, randomIdx, tempVal
    while(--idx > 0){
        randomIdx = Math.floor(Math.random() * (idx + 1))
        tempVal = tempArr[randomIdx]
        tempArr[randomIdx] = tempArr[idx]
        tempArr[idx] = tempVal 
    }
    for(let i = 0, j = 0; i < this.length; i++){
        this[i] = tempArr.slice(j, j += this.length)
    }
}

myArray = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
myArray2 = [[1,2,3],[4,5,6],[7,8,9]]

console.log(myArray)
console.log(myArray2)

myArray.yatesShuffle()
console.log(myArray)

myArray2.yatesShuffle()
console.log(myArray2)

