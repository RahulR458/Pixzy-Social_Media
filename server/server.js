const express = require("express")
const app = express()
const cors = require("cors")
const connectDB = require("./config/connectDB")
const userController = require("./controllers/userController")


require('dotenv').config()


app.use(cors())
app.use(express.json())

connectDB();

app.use("/api",userController);

const port = process.env.PORT || 3000

// Start the server on port 3000
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`))