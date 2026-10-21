import express from "express";

const db = [
    {
        id: 1,
        name: "VIOLENCE",
        shortDesc: "Összetett erőszak képessége",
        catCount: 1,  // TODO: mi lenne, ha ez mégse lenne? Tudom, bele van írva a spec-be, de na, néha lehetünk demenciásak :)
        longDesc: `Ezen képességgel rendelkező macska képes felrobbanni.
            Buff:
            - erőszak széles módszereit tudja alkalmazni a cica
            - kiemelkedő verekedési képesség - Miskolc és Nyíregyháza tagjai ellen is magabiztos a győzelem
            Nerf:
            - nem véd tapasztalatlan fegyverhasználat ellen
            `,
        imgPath: "/public/img/cat-shotgun-ai-cat.gif",
    }
]

const abilityRouter = express.Router()

// returns all abilities in a dummy thicc json
// I could do this in a less retarded way, but let a man be a bit ✨ silly ✨ :D
abilityRouter.get("/", (req, res) => {
    res.json(db);
})

//returns an ability based on ID
abilityRouter.get("/:id", (req, res) => {
    for (let element of db) {
        if (element.id === Number(req.params.id)) {
            res.json(element);
        }
    }
    res.status(404).end();
})

// adds ability. Expected format: { name: string, shortDesc: string, longDesc: string, imgPath: string }
abilityRouter.post("/add", async (req, res) => {
    const {name, shortDesc, longDesc, imgPath} = req.body;

    if (
        typeof name !== "string" ||
        typeof shortDesc !== "string" ||
        typeof longDesc !== "string" ||
        typeof imgPath !== "string"
    ) {
        res.status(400).send(`Request must follow this structure:
        { name: string, shortDesc: string, longDesc: string, imgPath: string }`)
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

    res.end();
})

// accepts a mostly optional parameter (expected parameters may appear or not) request
// e.g. whatever parameters appear (from the set of existing parameters), gets overwritten by the new incoming requests parameter
// To future me: good luck understanding
abilityRouter.put("/:id", async (req, res) => {
    console.log("TODO: implement updating abilities");
})

// delete ability by id
abilityRouter.delete("/:id", async (req, res) => {
    const toDelete = db.findIndex(ability => ability.id === Number(req.params.id));

    if (toDelete === -1) {
        res.status(404).send("NO such ability");
    }

    db.splice(toDelete, 1);
    res.end();
})

export default abilityRouter;
