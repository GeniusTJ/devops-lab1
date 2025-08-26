const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config() //To access the variables in .env

const corsOptions = { //to alllow traffic for crud operations
  origin: ["http://localhost:5173","http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};

app.use(cors(corsOptions));

dotenv.config();

app.use(express.json())
const todoroute = require('./routes/todo')
app.use("/api/todo",todoroute)
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{console.log(`Server is Running on ${PORT}`)})
