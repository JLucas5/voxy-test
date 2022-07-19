async function countWords(text) {
    try {
        const wordCount = text.match(/[^\s]+/g)
        return wordCount ? wordCount.length : 0;
    } catch (e) {
        return 0
    }
}

module.exports ={
    countWords
}