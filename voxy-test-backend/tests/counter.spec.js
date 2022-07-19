const { describe } = require("mocha");
const counterController = require('../controllers/counter')
const chai = require('chai')
const expect = chai.expect

describe('Testing /counter/count-words', ( ) => {

    context('when processing three words', () => {
        it('should count and return 3', async () => {
            const result = await counterController.countWords("We are three.")
            expect(result).to.equal(3)
        })
    } )
    
    context('when processing an empty string', () => {
        it('should count and return 0', async () => {
            const result = await counterController.countWords("")
            expect(result).to.equal(0)
        })
    } )

    context('when processing a string of empty spaces', () => {
        it('should count and return 0', async () => {
            const result = await counterController.countWords("       ")
            expect(result).to.equal(0)
        })
    } )

    context('when processing a number as input', () => {
        it('should return 0', async () => {
            const result = await counterController.countWords(123)
            expect(result).to.equal(0)
        })
    } )

    context('when processing an object as input', () => {
        it('Should return 0', async () => {
            const result = await counterController.countWords({text: "Text"})
            expect(result).to.equal(0)
        })
    } )
})