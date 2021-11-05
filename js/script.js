// Creo l'arrey 
//Inserisco le informazioni necessarie:(nome autore,foto profilo,data,testo del post,immagine,numero di likes)
//Stampo attraverso InnnerHtml tutti i feed
// Creiamo il nostro array di oggetti che rappresentano ciascun post.array
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: }
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.



// prendo i riferimenti di tutti i pulsanti Mi Piace in pagina (mi ritorna un array)
// per ogni elemento nell'array => aggiungo listener sul click del pulsante 
// nel listener incremento di 1 il numero di like del post

const post = [
      {
          "autore" : "autore",
          "foto": "https://media.istockphoto.com/photos/happy-multiethnic-peoples-headshot-picture-id493763323?b=1&k=20&m=493763323&s=170667a&w=0&h=TT77zxSkv5Vt8rVKzzbwQci3dnibRNIV_eGVIG-dbBw=",
          "data":"3/10",
          "testo":"lorem ipsum dolor sit amet",
          "likes":""
    },

    {
        "autore" : "autore",
        "foto": "https://media.istockphoto.com/photos/happy-multiethnic-peoples-headshot-picture-id493763323?b=1&k=20&m=493763323&s=170667a&w=0&h=TT77zxSkv5Vt8rVKzzbwQci3dnibRNIV_eGVIG-dbBw=",
        "data":"3/10",
        "testo":"lorem ipsum dolor sit amet",
        "likes":""
    },

    {
        "autore" : "autore",
        "foto": "https://media.istockphoto.com/photos/happy-multiethnic-peoples-headshot-picture-id493763323?b=1&k=20&m=493763323&s=170667a&w=0&h=TT77zxSkv5Vt8rVKzzbwQci3dnibRNIV_eGVIG-dbBw=",
        "data":"3/10",
        "testo":"lorem ipsum dolor sit amet",
        "likes":""
    },

    {
        "autore" : "autore",
        "foto": "https://media.istockphoto.com/photos/happy-multiethnic-peoples-headshot-picture-id493763323?b=1&k=20&m=493763323&s=170667a&w=0&h=TT77zxSkv5Vt8rVKzzbwQci3dnibRNIV_eGVIG-dbBw=",
        "data":"3/10",
        "testo":"lorem ipsum dolor sit amet",
        "likes":""
    }

]

