"use strict";

import multer from "multer";

const storage = multer.memoryStorage();

const uploadMW = multer({
    storage,
    limits: {
        fileSize: 5 * (1024 ** 2) // 5 MB
    }
});

export default uploadMW;