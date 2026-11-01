"use strict";

import db from "../config/db.js"

const Ability = db.model('Ability', {
    name: String,
    shortDesc: String,
    longDesc: String,
    abilityPic: {
        data: Buffer,
        contentType: String,
    },
})

export default Ability