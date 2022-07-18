async function countWords(text) {
    try {
        var wordCount = text.match(/[^\s]+/g)
        return wordCount ? wordCount.length : 0;
    } catch (e) {
        console.error(`[countWords-Controller] ${e.message}`)
    }
}

module.exports ={
    countWords
}