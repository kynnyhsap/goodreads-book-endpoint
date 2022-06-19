const express = require("express")
const app = express()

const GoodReadsParser = require("goodreads-parser")

app.get("/", async (req, res) => {
    const { url } = req.params;

    const decodedUrl = Buffer.from(url, 'base64');

    const result = await GoodReadsParser.parseByUrl(decodedUrl)

    console.log({ decodedUrl, result })

    return res.json(result)
})

app.listen(process.env.PORT || 3000);