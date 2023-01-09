import express from "express"

import dotenv from "dotenv"

import helmet from "helmet"

import cors from "cors"

dotenv.config()

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use(express.static("build"))

const PORT = process.env[`PORT`]

app.get("/teste", (_req, res) => {
    res.send("Teste")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})