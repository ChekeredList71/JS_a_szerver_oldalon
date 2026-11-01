"use strict";

import Ability from "../../models/ability.js";

//returns an ability based on ID
export default async (req, res, next) => {
    try {
        const ability = await Ability.findById(req.params.id);

        if (!ability) {
            return next(new Error(`Invalid API request: Ability with id ${req.params.id} not found.`));
        }

        res.locals.ability = ability;
        return next()
    } catch (err) {
        return next(err)
    }
}