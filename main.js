import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

//CURD funationality
// R - For Reading
app.get("/movies", () => {});

// C - For Createing a Movies
app.post("/movies", () => {});

// U -  For Updating a Movies
app.put("/movies/:id", () => {});

// D - For Deleteing movies
app.delete("/movies/:id", () => {});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
