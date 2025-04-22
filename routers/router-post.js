const express = require('express');
const router = express.Router();

const posts = require(`../posts`);

const controller = require(`../controllers/controller-posts`);

// INDEX
router.get('/', controller.index);
// router.get('/', (req, res) => {
//     res.json(posts); // Restituisco i post in formato JSON
// })

// SHOW
router.get('/:id', controller.show);
// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     id >= 0 && id <= posts.length ?
//         res.json(posts[id - 1]) // Se il valore di req.params.id è compreso tra 0 e posts.length allora restituisco il singolo elemento
//         : // Altrimenti
//         res.send(`Il valore inserito non è valido`) // Restituisco un messaggio di errore
// })

// STORE
router.post('/', controller.store);
// router.post('/', (req, res) => {
//     res.send(`Nuovo post creato`);
// })

// UPDATE
router.put('/:id', controller.update);
// router.put('/:id', (req, res) => {
//     let id = req.params.id;
//     id >= 0 && id <= posts.length ? // Se il valore di req.params.id è compreso tra 0 e posts.length
//         res.send(`L'elemento ${id} è stato totalmente modificato`)
//         : // Altrimenti
//         res.send(`Il valore inserito non è valido`) // Restituisco un messaggio di errore
// })

// MODIFY
router.patch('/:id', controller.modify)
// router.patch('/:id', (req, res) => {
//     let id = req.params.id;
//     id >= 0 && id <= posts.length ? // Se il valore di req.params.id è compreso tra 0 e posts.length
//         res.send(`L'elemento ${id} è stato parzialmente modificato`)
//         : // Altrimenti
//         res.send(`Il valore inserito non è valido`) // Restituisco un messaggio di errore
// })

// DESTROY
router.delete('/:id', controller.destroy);
// router.delete('/:id', (req, res) => {
//     let id = req.params.id;
//     id >= 0 && id <= posts.length ? // Se il valore di req.params.id è compreso tra 0 e posts.length
//         res.send(`L'elemento ${id} è stato eliminato`)
//         : // Altrimenti
//         res.send(`Il valore inserito non è valido`) // Restituisco un messaggio di errore
// })

// ESPORTAZIONE ROUTER
module.exports = router;