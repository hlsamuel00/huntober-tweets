Array.prototype.moveThingsAround = function(){
    const aFiltered = this.filter(el => el.includes('a'))
    const threeLength = this.filter(el => el.length > 3 && !aFiltered.includes(el))
    const rest = this.filter(el => !aFiltered.includes(el) && !threeLength.includes(el))
    return aFiltered.concat(rest).concat(threeLength)
}

myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

console.log(myArr.moveThingsAround())