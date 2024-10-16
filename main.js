import express from "express";
import movieRouters from "./routes/movies.routes.js"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

// CURD funationality
// CLIENT -> MIDDLEWARE -> SERVER
app.use('/movies', movieRouters);


app.listen(port, () => {
  console.log(`The Server is running on http://localhost:${port}`);
});
