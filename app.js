const express = require("express");
const path = require("path")

const app = express();


const publicPath = path.join(__dirname, "./public")
app.use( express.static( publicPath ) );


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})
app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})



const port = process.env.PORT || 3030
app.listen(port, () => console.log("servidor corriendo en el puerto `${Port}`"));