function index(req, res) {
    res.status(404);
    res.render('404');
}

module.exports = {
    index
}