"use strict";
import Ability from "../../models/ability.js";

// accepts a mostly optional parameter (expected parameters may appear or not) request
// e.g. whatever parameters appear (from the set of existing parameters), gets overwritten by the new incoming requests parameter
// To future me: good luck understanding
export default async (req, res, next) => {
    const abilityToUpdate = {
        name: req.body.name,
        shortDesc: req.body.shortDesc,
        longDesc: req.body.longDesc
    }

    if (req.file) {
        abilityToUpdate.abilityPic = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }

    try {
        await Ability.findByIdAndUpdate(
            req.params.id,
            abilityToUpdate
        )

        console.log(`Updated ability with ID ${req.params.id}.`)

        return res.status(201).redirect(`/ability/${req.params.id}`);
    } catch (err) {
        return next(err);
    }
}