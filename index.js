const express = require("express")
const app = express()

const GoodReadsParser = require("goodreads-parser")

app.get("/", async (req, res) => {
    const { encodedURL } = req.query;

    const url = decodeURI(encodedURL);
    const result = await GoodReadsParser.getBook({ url })

    return res.json(result)
})

app.listen(process.env.PORT || 3000);