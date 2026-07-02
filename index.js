import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.get("/", (req,res)  => {
  res.render("index.ejs")
});

app.get("/options" , (req,res) => {
    res.render("options.ejs")
});

app.get("/flowers" , (req,res) => {
    res.render("flowers.ejs")
});

app.get("/letter" , (req,res) => {
    res.render("letter.ejs")
});

app.get("/gifts" , (req,res) => {
    res.render("gifts.ejs")
});

app.get("/photos" , (req,res) => {
    res.render("photos.ejs")
})

app.get("/greeting" , (req,res) => {
    res.render("greeting.ejs")
});

