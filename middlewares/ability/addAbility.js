"use strict";
import Ability from "../../models/ability.js";

// adds ability. Expected format: { name: string, shortDesc: string, longDesc: string, imgPath: string }
export default async (req, res, next) => {
    const {name, shortDesc, longDesc} = req.body;
    const abilityPic = req.file;

    if (
        typeof name !== "string" ||
        typeof shortDesc !== "string" ||
        typeof longDesc !== "string" ||
        typeof abilityPic !== "object"
    ) {
        res.header("Content-Type", "text/plain");
        return next(new Error("Invalid API request: Request must follow this structure:\n" +
        "{ name: string, shortDesc: string, longDesc: string, abilityPic: object }"));
    }

    try {
        await Ability.create(
            {
                name: name,
                shortDesc: shortDesc,
                longDesc: longDesc,
                abilityPic: {
                    data: abilityPic.buffer,
                    contentType: abilityPic.mimetype,
                },
            }
        )

        return res.redirect(303, "/ability_list");
    } catch (err) {
        return next(err)
    }
}