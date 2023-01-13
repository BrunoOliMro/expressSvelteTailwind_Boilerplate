import express from "express"

import dotenv from "dotenv"

import path from "path"

dotenv.config()

const app = express()

app.use(express.json())

app.use(express.static(path.resolve("dist")))

const PORT = process.env[`PORT`]

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})