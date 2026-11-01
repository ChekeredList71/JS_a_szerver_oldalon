"use strict";

import Cat from "../../models/cat.js";

// gets the ammount of cats having an ability (using abilityID)
export default async (req, res, next) => {
    try {
        const count = await Cat.countDocuments({_abilityID: req.params.id}).exec()

        if (!count) {
            return next(new Error("Some error occurred in getCatCountForAbility"));
        }

        res.locals.catCount = count
        return next()
    } catch (err) {
        return next(err);
    }
}