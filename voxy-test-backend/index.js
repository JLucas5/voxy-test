const express = require("express")
const cors = require('cors')({ origin: true })


const app = express()

app.use(cors)
app.use(express.json());

const port = 8080

app.listen(port, ()=> console.log(`Server running on port ${port}`));

app.use('/counter', require("./routes/counter"))