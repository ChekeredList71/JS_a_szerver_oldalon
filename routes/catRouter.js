import express from "express";

import addCat from "../middlewares/cat/addCat.js";
import deleteCat from "../middlewares/cat/deleteCat.js";
import editCat from "../middlewares/cat/editCat.js";
import getAllCats from "../middlewares/cat/getAllCats.js";
import getCat from "../middlewares/cat/getCat.js";

const catRouter = express.Router()

catRouter.get("/", getAllCats)

catRouter.get("/:id", getCat)

catRouter.post("/add", addCat)

catRouter.put("/:id", editCat)

catRouter.delete("/:id", deleteCat)

export default catRouter;
