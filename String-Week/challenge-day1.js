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

console.log(calculatorLetterFix("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))
