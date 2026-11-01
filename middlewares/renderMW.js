export default (viewName) => {
    return function(req, res) {
        res.render(viewName);
    };
};