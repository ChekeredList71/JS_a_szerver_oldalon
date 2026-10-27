export const abilityDB = [
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

export const catDB = [
    {
        id: 1,
        name: "Sanyi a macska",
        sex: "hím",
        furColour: "szürke",
        abilityID: 12313
    }
]