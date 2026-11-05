"use strict";

import express from "express";

import addAbility from "../middlewares/ability/addAbility.js";
import deleteAbility from "../middlewares/ability/deleteAbility.js";
import editAbility from "../middlewares/ability/editAbility.js";
import getAbility from "../middlewares/ability/getAbility.js";
import getAllAbilities from "../middlewares/ability/getAllAbilities.js";
import getAbilityPicture from "../middlewares/ability/getAbilityPicture.js";
import uploadMW from "../middlewares/imgUploadMW.js";
import getCatCountForAbility from "../middlewares/ability/getCatCountForAbility.js";

const abilityRouter = express.Router()

abilityRouter.get("/", getAllAbilities)
abilityRouter.get("/:id", getAbility)
abilityRouter.get("/:id/picture", getAbilityPicture)
abilityRouter.get("/:id/catCount", getCatCountForAbility)
abilityRouter.post("/add", uploadMW.single("abilityPic"), addAbility)
abilityRouter.post("/:id/edit", uploadMW.single("abilityPic"), editAbility)
abilityRouter.post("/:id/delete", deleteAbility)

export default abilityRouter;
