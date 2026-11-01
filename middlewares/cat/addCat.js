import Cat from "../../models/cat.js";

// adds cat. Expected format: { name: string, sex: string, furColour: string, abilityID: string }
export default async (req, res, next) => {
    const {name, sex, furColour, abilityID, profileDesc} = req.body;
    const profilePic = req.file;

    if (
        typeof name !== "string" ||
        typeof sex !== "string" ||
        typeof furColour !== "string" ||
        typeof abilityID !== "string" ||
        typeof profileDesc !== "string" ||
        typeof profilePic !== "object"
    ) {
        return next(new Error("Invalid API request: Request must follow this structure:\n" +
            "{ name: string, sex: string, furColor: string, abilityID: string, profileDesc: string, profilePic: Buffer }"))
    }

    try {
        await Cat.create({
            name: name,
            sex: sex,
            furColour: furColour,
            _abilityID: abilityID,
            profileDesc: profileDesc,
            profilePic: {
                data: profilePic.buffer,
                contentType: profilePic.mimetype,
            }
        })

        return res.status(201).redirect("/");
    } catch (err) {
        return next(err)
    }
}