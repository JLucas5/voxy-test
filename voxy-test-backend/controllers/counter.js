/**
 * Function that counts the number of words in a String
 * @param {String} text - Text that should have its words counted
 * @returns Returns the number of words in the text
 */
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