const posts = require(`../data/posts`);

const index = (req, res) => {
    res.json(posts); // Restituisco i post in formato JSON
}

const show = (req, res) => {
    let id = req.params.id;
    id >= 0 && id <= posts.length ?
        res.json(posts[id - 1]) // Se il valore di req.params.id è compreso tra 0 e posts.length allora restituisco il singolo elemento
        : // Altrimenti
        res.send(`Il valore inserito non è valido`) // Restituisco un messaggio di errore
}

const store = (req, res) => {
    res.send(`Nuovo post creato`);
}

const update = (req, res) => {
    let id = req.params.id;
    id >= 0 && id <= posts.length ? // Se il valore di req.params.id è compreso tra 0 e posts.length
        res.send(`L'elemento ${id} è stato totalmente modificato`)
        : // Altrimenti
        res.send(`Il valore inserito non è valido`) // Restituisco un messaggio di errore
}

const modify = (req, res) => {
    let id = req.params.id;
    id >= 0 && id <= posts.length ? // Se il valore di req.params.id è compreso tra 0 e posts.length
        res.send(`L'elemento ${id} è stato parzialmente modificato`)
        : // Altrimenti
        res.send(`Il valore inserito non è valido`) // Restituisco un messaggio di errore
}

const destroy = (req, res) => {
    let id = req.params.id;
    id >= 0 && id <= posts.length ? // Se il valore di req.params.id è compreso tra 0 e posts.length
        res.send(`L'elemento ${id} è stato eliminato`)
        : // Altrimenti
        res.send(`Il valore inserito non è valido`) // Restituisco un messaggio di errore
}

module.exports = { index, show, store, update, modify, destroy };