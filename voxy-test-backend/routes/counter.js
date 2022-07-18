const express = require("express")

const counterController = require('../controllers/counter');

const app = express()

app.post('/count-words', countWords)

async function countWords(req, res) {
console.log(req.body)
        const text = req.body.text
        const wordCount = await counterController.countWords(text)
        
        if(wordCount <= 0)
		    res.status(400).send({'Error': true})

		res.status(200).send({wordCount})
}

module.exports = app
