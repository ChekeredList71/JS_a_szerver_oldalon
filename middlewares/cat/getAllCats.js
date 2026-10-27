import {catDB as db} from "../dummyDBs.js";

// returns all cats in a dummy thicc JSON
export default (req, res) => {
    res.json(db)
}