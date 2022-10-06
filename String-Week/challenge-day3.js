const replaceKey = (string) => {
    const regex = new RegExp([...'A_KEY!'].join('|'), 'g')
    return string.replace(regex, ' ')
}

console.log(replaceKey('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
))