import express from "express";

import addAbility from "../middlewares/ability/addAbility.js";
import deleteAbility from "../middlewares/ability/deleteAbility.js";
import editAbility from "../middlewares/ability/editAbility.js";
import getAbility from "../middlewares/ability/getAbility.js";
import getAllAbilities from "../middlewares/ability/getAllAbilities.js";
import getAbilityPicture from "../middlewares/ability/getAbilityPicture.js";
import uploadMW from "../middlewares/imgUploadMW.js";

const abilityRouter = express.Router()

abilityRouter.get("/", getAllAbilities)
abilityRouter.get("/:id", getAbility)
abilityRouter.get("/:id/picture", getAbilityPicture)
abilityRouter.post("/add", uploadMW.single("abilityPic"), addAbility)
abilityRouter.put("/:id", editAbility)
abilityRouter.delete("/:id", deleteAbility)

export default abilityRouter;
