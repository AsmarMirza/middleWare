import express from 'express'
import mongoose from 'mongoose'
import { myRouter } from './src/routes/UseRoute.js'

const app = express()
const port = 3000

app.use("/kitten",myRouter)
 
mongoose.connect('mongodb+srv://Esmer:esmer123@cluster0.zbeu6hy.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(()=>console.log("not connected!"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})