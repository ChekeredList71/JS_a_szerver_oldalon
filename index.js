import express from "express";
import abilityRouter from "./middlewares/abilityRouter.js";
import catRouter from "./middlewares/catRouter.js";
import catProfileRouter from "./middlewares/catProfileRouter.js";

const app = express()

app.use(express.static("public"))
app.use(express.json());
app.use("/api/abilities", abilityRouter);
app.use("/api/cats", catRouter);
app.use("/api/profiles", catProfileRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000...")
})
