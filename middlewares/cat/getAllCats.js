"use strict";

import Cat from "../../models/cat.js";

// returns all cats in a dummy thicc JSON
export default async (req, res, next) => {
    try {
        const cats = await Cat.find()
            .populate('_abilityID')
            .select("name sex furColour profileDesc _abilityID")
            .exec()

        if (!cats) {
            return next(new Error("Failed to query cats from DB"));
        }

        res.locals.cats = cats
        return next()
    } catch (err) {
        return next(err)
    }
}