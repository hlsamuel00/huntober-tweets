Array.prototype.moveUp = function(value){
    const yIdx = this.findIndex(el => el.includes(value))
    if(yIdx <= 0){
        return this
    } else {
        const xIdx = this[yIdx].indexOf(value)
        const movingElement = this[yIdx].splice(xIdx, 1)[0]
        const replacementElement = this[yIdx - 1].splice(xIdx, 1)[0]
        this[yIdx - 1].splice(xIdx, 0, movingElement)
        this[yIdx].splice(xIdx, 0, replacementElement)
    }
}

Array.prototype.moveDown = function(value){
    const yIdx = this.findIndex(el => el.includes(value))
    if(yIdx < 0 || yIdx === (this.length - 1)){
        return this
    } else {
        const xIdx = this[yIdx].indexOf(value)
        const movingElement = this[yIdx].splice(xIdx, 1)[0]
        const replacementElement = this[yIdx + 1].splice(xIdx, 1)[0]
        this[yIdx + 1].splice(xIdx, 0, movingElement)
        this[yIdx].splice(xIdx, 0, replacementElement)
    }
}

myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
console.log(myGrid)

myGrid.moveUp('h')
console.log(myGrid)

myGrid.moveUp('h')
console.log(myGrid)

myGrid.moveDown('h')
console.log(myGrid)

myGrid.moveDown('h')
console.log(myGrid)

myGrid.moveDown('h')
console.log(myGrid)