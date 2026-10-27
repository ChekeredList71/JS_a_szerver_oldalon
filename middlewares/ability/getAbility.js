import { abilityDB as db } from "../dummyDBs.js"

//returns an ability based on ID
export default (req, res) => {
    for (let element of db) {
        if (element.id === Number(req.params.id)) {
            res.json(element);
        }
    }
    res.status(404).end();
}