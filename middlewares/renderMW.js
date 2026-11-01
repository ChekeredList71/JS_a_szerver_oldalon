"use strict";

export default (viewName) => {
    return function(req, res) {
        console.log("URL:", req.originalUrl);
        console.log("Ability in locals:", res.locals.ability);
        console.log("Locals:", Object.keys(res.locals));

        res.render(viewName);
    };
};