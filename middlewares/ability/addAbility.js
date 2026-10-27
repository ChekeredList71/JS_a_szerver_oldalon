import { abilityDB as db } from "../dummyDBs.js"

// adds ability. Expected format: { name: string, shortDesc: string, longDesc: string, imgPath: string }
export default async (req, res) => {
    const {name, shortDesc, longDesc, imgPath} = req.body;

    if (
        typeof name !== "string" ||
        typeof shortDesc !== "string" ||
        typeof longDesc !== "string" ||
        typeof imgPath !== "string"
    ) {
        res.header("Content-Type", "text/plain");
        res.status(400).send(`Request must follow this structure:
        { name: string, shortDesc: string, longDesc: string, imgPath: string }`)
        return;
    }

    // find how many cats have this ability, if undefined, zero
    // for now, assume 1
    db.push({
        id: db.length ? Math.max(...db.map(ability => ability.id)) + 1 : 1,
        name: name,
        shortDesc: shortDesc,
        catCount: 1,
        longDesc: longDesc,
        imgPath: imgPath,
    })

    res.status(201).send()
}