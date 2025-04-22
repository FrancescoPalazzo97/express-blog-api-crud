const posts = require(`../data/posts`);

const index = (req, res) => {
    res.json(posts); // Restituisco i post in formato JSON
}

const show = (req, res) => {
    let id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    res.json(post);
}

const store = (req, res) => {
    res.send(`Nuovo post creato`);
}

const update = (req, res) => {
    let id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    res.send(`L'elemento è stato totalmente modificato`);
}

const modify = (req, res) => {
    let id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    res.send(`L'elemento è stato parzialmente modificato`);
}

const destroy = (req, res) => {
    let id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    posts.splice(posts.indexOf(post), 1);

    console.log(posts);
    res.status(204);
}

module.exports = { index, show, store, update, modify, destroy };