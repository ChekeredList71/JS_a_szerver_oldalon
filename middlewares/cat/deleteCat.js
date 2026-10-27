import {catDB as db} from "../dummyDBs.js";

// delete cat by id
export default (req, res) => {
    const toDelete = db.findIndex(ability => ability.id === Number(req.params.id));

    if (toDelete === -1) {
        res.status(404).send("NO such ability");
    }

    db.splice(toDelete, 1);
    res.end();
}