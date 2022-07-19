const { describe } = require("mocha");
const counterController = require('../controllers/counter')
const chai = require('chai')
const expect = chai.expect

describe('Test /counter', ( ) => {

    describe('Testing word counting on /count-words', ()=>{

        describe('Testing default case', () => {
            it('Should count and return 3', async () => {
                const result = await counterController.countWords("We are three.")
                expect(result).to.equal(3)
            })
        } )
        describe('Testing empty string', () => {
            it('Should count and return 0', async () => {
                const result = await counterController.countWords("")
                expect(result).to.equal(0)
            })
        } )
        describe('Testing string of empty spaces', () => {
            it('Should count and return 0', async () => {
                const result = await counterController.countWords("       ")
                expect(result).to.equal(0)
            })
        } )
        describe('Testing wrong input type case - Number', () => {
            it('Should return 0', async () => {
                const result = await counterController.countWords(123)
                expect(result).to.equal(0)
            })
        } )
        describe('Testing wrong input type case - Object', () => {
            it('Should return 0', async () => {
                const result = await counterController.countWords({"text": "Text"})
                expect(result).to.equal(0)
            })
        } )
    })
})