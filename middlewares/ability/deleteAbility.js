import Ability from "../../models/ability.js";

// delete ability by id
export default async (req, res, next) => {
    try {
        const deleted = await Ability.findByIdAndDelete(req.params.id)

        if (!deleted) {
            return next(new Error(`Failed to delete ${req.params.id} ability.`));
        }

        console.log(`Deleted Ability ${req.params.id} successfully`);
        return res.sendStatus(200);
    } catch (err) {
        return next(err);
    }
}