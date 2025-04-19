import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const guestbook = [];
let i = 1;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.render("index.ejs", { guestbook });
});

app.get("/contact", (req, res) => {
   res.render("contact.ejs");
});

app.post("/submit", (req, res) => {
   const { name, email, text } = req.body;
   let entry = {
      number: i++,
      name,
      email,
      text,
      time: new Date().toISOString(),
   };
   guestbook.push(entry);
   res.render("index.ejs", { guestbook });
});

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});
