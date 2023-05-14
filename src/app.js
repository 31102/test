const express = require("express");
const port = process.env.PORT || 8000 ;

const app = express();
require("./db/conn");
const path = require("path");
const hbs = require("hbs");

const static_path = path.join(__dirname , "../public");
const templete_path = path.join(__dirname , "../src/templetes/views");
const partials_path = path.join(__dirname , "../src/templetes/partials");

app.use(express.static(static_path));
app.set("view engine" , "hbs");
app.set("views" , templete_path)
hbs.registerPartials(partials_path)

app.get("/" ,(req,res)=>{
    res.render("index")
})

app.listen(port , ()=>{
    console.log(`server is running at port # ${port}`)
})