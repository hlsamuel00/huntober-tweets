String.prototype.isLowerCase = function() {
    return this.toLowerCase() == this
}

const letterSwap = (string) => {
    const letterMap = [...'abcdefghijklmnopqrstuvwxyz']
    const reversed = [...'abcdefghijklmnopqrstuvwxyz'].reverse()
    return Array.from(string, letter => {
        const newLetter = reversed[letterMap.indexOf(letter.toLowerCase())] || letter
        return letter.isLowerCase() ? newLetter.toUpperCase() : newLetter.toLowerCase()
    }).join('')
}


console.log(letterSwap('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'))
