const cors = require('cors')
const express = require(`express`)
const mongoose = require(`mongoose`)
require(`dotenv`).config()

const app = express()
const port = 3000

app.use(express.json())

app.use(cors({
  origin:"*",
  methods:"GET,HEAD,POST,PATCH,PUT,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}))


const heroRoutes = require ('./routers/hero')
app.use("/hero", heroRoutes)

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB_URI)
  .then(()=>
  console.log("Conexion to DB"))
  .catch((err)=>
    console.error(err));

    app.get('/',(req,res) => {
      res.send('Welcome to SuperHero-Api :D')
  })



app.listen(port, ()=>{
  console.log("-------------------------------------------")
  console.log(`Server on port ${port}:`, `http://localhost:${port}/`)
  console.log("-------------------------------------------")
})

