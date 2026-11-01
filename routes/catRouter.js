"use strict";

import express from "express";

import addCat from "../middlewares/cat/addCat.js";
import deleteCat from "../middlewares/cat/deleteCat.js";
import editCat from "../middlewares/cat/editCat.js";
import getAllCats from "../middlewares/cat/getAllCats.js";
import getCat from "../middlewares/cat/getCat.js";
import getCatPicture from "../middlewares/cat/getCatPicture.js";
import uploadMW from "../middlewares/imgUploadMW.js";

const catRouter = express.Router()

catRouter.get("/", getAllCats)
catRouter.get("/:id", getCat)
catRouter.get("/:id/picture", getCatPicture)
catRouter.post("/add", uploadMW.single("profilePic"), addCat)
catRouter.post("/:id/edit", uploadMW.single("profilePic"), editCat)
catRouter.delete("/:id", deleteCat)


export default catRouter;
