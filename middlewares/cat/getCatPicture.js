"use strict";

import Cat from "../../models/cat.js";

//returns a catPic based on ID
export default async (req, res, next) => {
    try {
        const cat = await Cat.findById(req.params.id).select('profilePic');

        if (!cat?.profilePic?.data) {
            return next(new Error(`Cat picture with id ${req.params.id} not found.`));
        }

        res.contentType(cat.profilePic.contentType);
        return res.send(cat.profilePic.data);
    } catch (err) {
        return next(err);
    }
}