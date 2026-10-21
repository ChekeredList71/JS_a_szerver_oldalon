import express from "express";

const catRouter = express.Router()

// returns all cats in a dummy thicc json
catRouter.get("/", (req, res) => {
    console.log("TODO: implement");
})

//returns a cat based on ID
catRouter.get("/:id", (req, res) => {
    console.log("TODO: implement");
})

// adds ability. Expected format: { name: string, shortDesc: string, longDesc: string, imgPath: string }
catRouter.post("/add", async (req, res) => {
    console.log("TODO: implement");
})

// accepts a mostly optional parameter (expected parameters may appear or not) request
// e.g. whatever parameters appear (from the set of existing parameters), gets overwritten by the new incoming requests parameter
// To future me: good luck understanding
catRouter.put("/:id", async (req, res) => {
    console.log("TODO: implement updating cats");
})

// delete cat by id
catRouter.delete("/:id", async (req, res) => {

})

export default catRouter;
