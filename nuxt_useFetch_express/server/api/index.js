import express from "express"
import accountRoute from './routes/accountRoute'

const app = express()

app.get("/", (req, res) => {
  res.send('Express server')
})

console.log("/api/index.js")

app.use("/api/account", accountRoute)

export default {
  app:app
}