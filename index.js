"use strict";

import express from "express";

import attachRoutes from "./routes/index.js";

const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json());

attachRoutes(app);

app.listen(3000, () => {
    console.log("Server running on port 3000...")
})
