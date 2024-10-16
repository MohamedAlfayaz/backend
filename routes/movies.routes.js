import express from 'express'

const router =  express.Router();


// R - For Reading
router.get("/", (req, res) => {
    res.send("Get all movie lists")
});

// C - For Createing a Movies
router.post("/", (req, res) => {
    res.send("Create a movie")
});

// U -  For Updating a Movies
router.put("/:id", (req, res) => {
    res.send("Update all movie")
});

// D - For Deleteing movies
router.delete("/:id", (req, res) => {
    res.send("Delete a movie")
});

export default router;