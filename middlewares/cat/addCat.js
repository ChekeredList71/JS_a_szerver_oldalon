import {catDB as db} from "../dummyDBs.js";

// adds cat. Expected format: { name: string, sex: string, furColour: string, abilityID: string }
export default (req, res) => {
    const {name, sex, furColour, abilityID} = req.body;

    if (
        typeof name !== "string" ||
        typeof sex !== "string" ||
        typeof furColour !== "string" ||
        typeof abilityID !== "number"
    ) {
        res.header("Content-Type", "text/plain");
        res.status(400).send(`Request must follow this structure:
        { name: string, sex: string, furColor: string, abilityID: string }`)
        return
    }

    // find how many cats have this ability, if undefined, zero
    // for now, assume 1
    db.push({
        id: db.length ? Math.max(...db.map(ability => ability.id)) + 1 : 1,
        name: name,
        sex: sex,
        furColour: furColour,
        abilityID: abilityID
    })

    res.status(201).send();
}