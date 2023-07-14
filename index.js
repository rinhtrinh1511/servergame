const express = require("express")
const app = express()
const port = 8080

app.get('/', (req,res) => {
    res.send("<h2>Hello</>")
})

app.listen(port,()=>{
    console.log(`Server on port ${port}`)
})