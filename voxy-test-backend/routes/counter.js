const express = require("express")

const counterController = require('../controllers/counter');

const app = express()

app.post('/count-words', countWords)

async function countWords(req, res) {
	try {
        const text = req.body.text
        const wordNumber = await counterController.countWords(text)
		res.status(200).send({'wordNumber': wordNumber})

	} catch (err) {
		console.error(`[countWords-Router] ${err.message}`)
		res.status(400).send({'Error': true})
	}
}

module.exports = app
