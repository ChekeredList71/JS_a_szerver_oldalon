"use strict";

import Cat from '../../models/cat.js';

// delete cat by id
export default async (req, res, next) => {
    try {
        const deleted = await Cat.findByIdAndDelete(req.params.id)

        if (!deleted) {
            return next(new Error(`Failed to delete ${req.params.id} cat.`));
        }

        console.log(`Deleted Cat ${req.params.id} successfully`);
        return  res.redirect("/")
    } catch (err) {
        return next(err)
    }

}