import express from "express";

const catProfileRouter = express.Router()

// send cat profile data over based on id
catProfileRouter.get('/:id', (req, res) => {
    console.log("TODO: implement")
})

// probably some other stuff, but ¯\_(ツ)_/¯

export default catProfileRouter;