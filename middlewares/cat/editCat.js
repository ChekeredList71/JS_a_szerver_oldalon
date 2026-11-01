"use strict";

import Cat from "../../models/cat.js";

// replaces all fields with the submitted data, except for the image, which is only updated, when the user selects a new one
export default async (req, res, next) => {
    const catToUpdate = {
        name: req.body.name,
        sex: req.body.sex,
        furColour: req.body.furColour,
        _abilityID: req.body.abilityID,
        profileDesc: req.body.profileDesc,
    }

    if (req.file) {
        catToUpdate.profilePic = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }

    try {
        await Cat.findByIdAndUpdate(
            req.params.id,
            catToUpdate
        )

        console.log(`Updated cat with ID ${req.params.id}.`)

        return res.status(201).redirect(`/catProfile/${req.params.id}`);
    } catch (err) {
        return next(err);
    }
}