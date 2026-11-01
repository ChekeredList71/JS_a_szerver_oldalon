import Ability from "../../models/ability.js";

//returns a catPic based on ID
export default async (req, res, next) => {
    try {
        const ability = await Ability.findById(req.params.id).select('abilityPic');

        if (!ability?.abilityPic?.data) {
            return next(new Error(`Invalid API request: Ability picture with id ${req.params.id} not found.`));
        }

        res.contentType(ability.abilityPic.contentType);
        return res.send(ability.abilityPic.data);
    } catch (err) {
        return next(err);
    }
}