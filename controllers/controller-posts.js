const index = (req, res) => {
    res.send(`Elenco completo`)
}

const show = (req, res) => {
    res.send(`Elemento singolo`)
}

const store = (req, res) => {
    res.send(`Nuovo elemento creato`);
}

const update = (req, res) => {
    res.send(`Elemento completamente modificato`);
}

const modify = (req, res) => {
    res.send(`Elemento parzialmente modificato`);
}

const destroy = (req, res) => {
    res.send(`Elemento eliminato`);
}

module.exports = { index, show, store, update, modify, destroy };