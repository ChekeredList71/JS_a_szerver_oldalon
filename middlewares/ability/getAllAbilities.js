import { abilityDB as db } from "../dummyDBs.js"

// returns all abilities in a dummy thicc json
// I could do this in a less retarded way, but let a man be a bit ✨ silly ✨ :D
export default (req, res) => {
    res.json(db);
}