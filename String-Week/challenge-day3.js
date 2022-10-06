// This function will replace a given character key with white spaces

const replaceKey = (string) => {
    const regex = new RegExp([...'A_KEY!'].join('|'), 'g') //create regex from the key string provided
    return string.replace(regex, ' ') // return string with characters replaced
}

console.log(replaceKey('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
))