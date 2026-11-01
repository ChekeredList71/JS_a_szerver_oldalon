"use strict";

import abilityRouter from "./abilityRouter.js";
import catRouter from "./catRouter.js";
import renderMW from "../middlewares/renderMW.js"
import getCat from "../middlewares/cat/getCat.js";
import getAllCats from "../middlewares/cat/getAllCats.js";
import getAllAbilities from "../middlewares/ability/getAllAbilities.js";
import getAbility from "../middlewares/ability/getAbility.js";
import errorMW from "../middlewares/errorMW.js";

export default (app) => {
    // API routers
    app.use("/api/abilities", abilityRouter);
    app.use("/api/cats", catRouter);

    // view routes
    app.get("/", getAllCats, renderMW('index'));
    app.get("/addCat", getAllAbilities, renderMW('forms/addEditCat'));
    app.get("/editCat/:id", getAllAbilities, getCat, renderMW('forms/addEditCat'));
    app.get("/addAbility", renderMW('forms/addEditAbility'));
    app.get("/editAbility/:id", getAbility, renderMW('forms/addEditAbility'));
    app.get("/ability_list", getAllAbilities, renderMW('ability_list'));
    app.get("/ability/:id", getAbility, renderMW('ability'));
    app.get("/catProfile/:id", getCat, renderMW('catProfile'));

    // error logging
    app.use(errorMW);
}