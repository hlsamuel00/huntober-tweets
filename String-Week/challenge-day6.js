const removeSubstring = (string, number) => {
    return [...string].filter((_,i) => ((i + 1) % number)).join('')
}

console.log(removeSubstring("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4))
console.log(removeSubstring("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5))
