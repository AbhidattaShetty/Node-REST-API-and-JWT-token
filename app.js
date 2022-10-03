require("dotenv").config()
const express = require("express")
const app = express()
const userRoutes = require('./routes/userRoutes')
const postsRoute = require('./routes/postsRoute')
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
const port = process.env.PORT || 3000



// connecting DB
require('./db/conn')

// router middleware
app.use("/",userRoutes)
app.use("/post", postsRoute)



app.listen(port, ()=>{
  console.log(`Server is running on ${port}`)
})
