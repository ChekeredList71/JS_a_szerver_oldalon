"use strict";

import Cat from "../../models/cat.js";

//returns a cat based on ID
export default async (req, res, next) => {
    try {
        const cat = await Cat.findById(req.params.id)
            .populate('_abilityID')
            .exec()

        if (!cat) {
            return next(new Error(`Invalid API request: Cat with id ${req.params.id} not found.`));
        }

        res.locals.cat = cat
        return next()
    } catch (err) {
        return next(err)
    }
}