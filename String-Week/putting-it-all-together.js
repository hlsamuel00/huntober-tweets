const decoder = (message) => {
    message = calculatorLetterFix(message)
    message = replaceKey(message)
    message = reverseString(message)
    message = removeSubstring(message, 3)
    message = letterSwap(message)
    return message
}


const calculatorLetterFix = (string) => {
    // create object for character replacement on mass scale
    const mapObj = {
        0: 'O',
        1: 'I',
        2: 'Z',
        3: 'E',
        4: 'h',
        5: 'S',
        6: 'G',
        7: 'L',
        8: 'B',
        9: 'q',
        'O': 0,
        'I': 1,
        'Z': 2,
        'E': 3,
        'h': 4,
        'S': 5,
        'G': 6, 
        'L': 7,
        'B': 8,
        'q': 9
    }
    const regex = new RegExp(Object.keys(mapObj).join('|'), 'g') // create regex from the keys of the object we created
    return string.replace(regex, (matched) => mapObj[matched]) // replace the character with the value from the object
}

const replaceKey = (string) => {
    const regex = new RegExp([...'Space'].join('|'), 'g') //create regex from the key string provided
    return string.replace(regex, ' ') // return string with characters replaced
}

const reverseString = (string) => {
    // separate the string into an array, reverse the array, and rejoin the string
    return [...string].reverse().join('')
}

const removeSubstring = (string, number) => {
    return [...string].filter((_,i) => ((i + 1) % number)).join('')
}

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


const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
console.log(decoder(encryptedMsg))