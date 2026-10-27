import { abilityDB as db } from "../dummyDBs.js"

// delete ability by id
export default async (req, res) => {
    const toDelete = db.findIndex(ability => ability.id === Number(req.params.id));

    if (toDelete === -1) {
        res.status(404).send("NO such ability");
    }

    db.splice(toDelete, 1);
    res.end();
}