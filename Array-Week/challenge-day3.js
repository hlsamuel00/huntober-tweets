Array.prototype.moveThingsAround = function(){
    const aFiltered = this.filter(el => el.includes('a'))
    const threeLength = this.filter(el => el.length > 3 && !aFiltered.includes(el))
    const rest = this.filter(el => !aFiltered.includes(el) && !threeLength.includes(el))
    this.splice(0, this.length, ...aFiltered.concat(rest).concat(threeLength))
}

myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

myArr.moveThingsAround()
console.log(myArr)