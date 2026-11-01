export default (err, req, res, next) => {
    console.log("oopsie:");
    console.log(err);

    if (err.message.includes("Invalid API")) {
        res.status(400).send(err.message);
    } else {
        res.status(500).send(err.message);
    }
}