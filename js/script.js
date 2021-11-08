// Creo l'array di oggetti che rappresentano ciascun post
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:{
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine,
// numero di likes.
// stabilisco che se i=2 la mainimage non verrà mostrata
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
// prendo i riferimenti di tutti i pulsanti Mi Piace in pagina (mi ritorna un array)
// per ogni elemento nell'array => aggiungo listener sul click del pulsante 
// nel listener incremento di 1 il numero di like del post

var cards = [

    {   
        "photo": "https://unsplash.it/300/300?image=15",
        "author":"John",
        "date":"6 mesi fa",
        "text": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "main_photo":"https://unsplash.it/600/300?image=171",
        "photo_alt":"drops",
        "likes":"20"
    },

    {   
        "photo": "https://unsplash.it/300/300?image=15",
        "author":"philip",
        "date":"8 mesi fa",
        "text": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "main_photo":"https://unsplash.it/600/300?image=171",
        "photo_alt":"drops",
        "likes":"30"
    },

    {   
        "photo": "https://unsplash.it/300/300?image=15",
        "author":"Ilary",
        "date":"11 mesi fa",
        "text": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "main_photo":"https://unsplash.it/600/300?image=171",
        "photo_alt":"drops",
        "likes":"15"
    },

    {   
        "photo": "https://unsplash.it/300/300?image=15",
        "author":"Ilary",
        "date":"11 mesi fa",
        "text": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "main_photo":"https://unsplash.it/600/300?image=171",
        "photo_alt":"drops",
        "likes":"15"
    }

];

    console.log(cards)

    for(let i = 0; i < cards.length; i++) {
        let image = cards[i].photo;
        let words = cards[i].author;
        let ago = cards[i].date;
        let lorem = cards[i].text;
        let rappresentation = cards[i].main_photo;
        let want = cards[i].likes;
        let etitle = cards[i].photo_alt; 

        if ( i === 2){
            rappresentation = "";
            etitle = "";
        }

        document.querySelector('.post').innerHTML += `
        <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${image}" alt="${words}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${words}</div>
                        <div class="post-meta__time">${ago}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${lorem}</div>
            <div class="post__image">
                <img src="${rappresentation}" alt="${etitle}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${want}</b> persone
                    </div>
                </div> 
            </div>
        </div>`        
    }




