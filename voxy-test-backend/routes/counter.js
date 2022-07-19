const express = require("express")

const counterController = require('../controllers/counter');

const app = express()

app.post('/count-words', countWords)

async function countWords(req, res) {
        const text = req.body.text
        const wordCount = await counterController.countWords(text)
        
        if(isNaN(wordCount))
		    res.status(400).send({'Error': true})

		res.status(200).send({wordCount})
}

module.exports = app
