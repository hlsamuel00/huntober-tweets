Array.prototype.moveLeft = function(value){
    let oldIdx = this.indexOf(value)
    let newIdx = (oldIdx - 1) % this.length

    if(oldIdx === 0 || !this.includes(value)){
        return this
    } else {
        const element = this.splice(oldIdx, 1)[0]
        this.splice(newIdx, 0, element)
    }
}

Array.prototype.moveRight = function(value){
    let oldIdx = this.indexOf(value)
    let newIdx = (oldIdx + 1) % this.length
    
    if(oldIdx === (this.length - 1) || !this.includes(value)){
        return this
    } else {
        const element = this.splice(oldIdx, 1)[0]
        this.splice(newIdx, 0, element)
    }
}

myArray = ['abc', 'xyz', 1, 2, 'Hey!']
console.log(myArray)

myArray.moveLeft('xyz')
console.log(myArray)

myArray.moveLeft('xyz')
console.log(myArray)

myArray.moveRight(2)
console.log(myArray)

myArray.moveRight(2)
console.log(myArray)

myArray.moveLeft('jkl')
console.log(myArray)