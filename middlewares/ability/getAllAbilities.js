import Ability from "../../models/ability.js";

// returns all abilities in a dummy thicc json
export default async (req, res, next) => {
    try {
        const abilities = await Ability.find({}).select("name shortDesc longDesc")

        if (!abilities) {
            return next(new Error("Failed to query abilities from DB"));
        }

        res.locals.abilities = abilities;
        return next();
    } catch (err) {
        return next(err);
    }
}