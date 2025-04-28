const express = require(`express`);
const app = express();
const port = 3000;

const posts = require(`./data/posts.js`); // Importo l'array

const postsRouter = require(`./routers/router-post.js`); // Importazione router

const notFound = require(`./middlewares/notFound.js`); // Importo notFound
const errorsHandler = require("./middlewares/errorsHandler.js"); // Importo errorsHandler

app.use(express.static(`public`));

app.use(express.json());

app.use('/posts', postsRouter); // Utilizzo postsRouter per impostare le rotte

// Rotta base
app.get('/', (req, res) => {
    res.send(`Benvenuto`) // Messaggio di benvenuto
})

app.use(errorsHandler); // Utilizzo il middleware errorsHandler
app.use(notFound); // Utilizzo il middleware notFound

app.listen(port, () => {
    console.log(`Il server è in ascolto`)
})