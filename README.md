Ciao ragazzi,  
esercizio di oggi: express-blog-routing  
repo: express-blog-routing  
## Esercizio  
Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.  
All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)  
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.  
Ad esempio:  
Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;  
Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”  
e via dicendo…  
Registrare il router dentro app.js con il prefisso posts/.  
Nota:  
Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte. Ci servirà per i prossimi step. Per oggi vi può servire in caso vogliate provare i bonus.
## Bonus  
Provare a restituire la lista dei post dalla rotta index, in formato json  
Provare a restituire un singolo post dalla rotta show, sempre in formato json  
Buon Lavoro, buona pasqua e buona pasquetta, ci vediamo Martedì!  


Ciao ragazzi, esercizio di oggi: Express Blog - API CRUD (parte 2)  
repo: express-blog-api-crud  
Esercizio  
Milestone 1  
Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store.  
Impostiamo il verbo e l’endpoint corretti  
Selezioniamo il tab body e scegliamo il formato raw e JSON  
Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post  
Nota: se vogliamo avere delle immagini, inventiamole pure.  
Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.  
Milestone 2  
Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.  
Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un console.log  
Milestone 3  
Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.  
Testiamolo con postman.  
Milestone 4  
Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.  
Numero minimo di push: 6  
Bonus  
Quelli del giorno prima, se non già fatti  
In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.  
Buon Lavoro e buon divertimento  


Ciao ragazzi, esercizio di oggi: Express Blog - Middlewares  
repo: express-blog-api-crud (sempre la stessa)  
Esercizio  
Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.  
Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.  
Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.  
Numero minimo di push 4  