"use strict";

import db from "../config/db.js"
import {Schema} from "mongoose";

const Cat = db.model('Cat', {
    name: String,
    sex: String,
    furColour: String,
    _abilityID: {
        type: Schema.Types.ObjectId,
        ref: 'Ability',
    },
    profileDesc: String,
    profilePic: {
        data: Buffer,
        contentType: String,
    },
})

export default Cat