import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import dbcon from "./dbcon/dbcon.js";
import router from "./routes/web.js";
import cors from 'cors'
import { join } from "path";
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";



const app = express()
const PORT = process.env.port || '5000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://dipubhandari:.ComDipu@cluster0.va8aa0b.mongodb.net/test" || "mongodb://localhost:27017"

app.use(express.json())
const connection = dbcon(DATABASE_URL)

app.use(cors())

app.set("view engine", "ejs")
app.use('/', express.static(path.join(process.cwd(), './build/index.html')))
app.use('/uploads', express.static(path.join(process.cwd(), './uploads')))

app.use(express.urlencoded({ extended: false }))

// deploy code in cyclic
app.use(express.static(path.join(process.cwd(), '/build')))
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), "./build/index.html"))
})

app.get('/panicky-earmuffs-bass.cyclic.app', (req, res) => {
    res.sendFile(path.join(process.cwd(), "./build/index.html"))
})

app.use('/', router)
if (connection) {

    // listen to the port
    app.listen(PORT, () => {
    })
}