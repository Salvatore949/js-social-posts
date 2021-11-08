// Creo l'array di oggetti che rappresentano ciascun post
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:{
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine, non inserisco l'immagine nella terza card")
// Uso il ciclo for per analizzare le varie cards
//Creo delle variabili
// Attraverso l'innerHTML stampo in pagina le cards
// numero di likes.

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
        "main_photo":"img/nicolas-arnold--hcfzUuQ3uw-unsplash.jpg",
        "photo_alt":"glass",
        "likes":"30"
    },

    {   
        "photo": "https://unsplash.it/300/300?image=15",
        "author":"Ilary",
        "date":"11 mesi fa",
        "text": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "main_photo":"",
        "photo_alt":"",
        "likes":"15"
    },

    {   
        "photo": "https://unsplash.it/300/300?image=15",
        "author":"Ilary",
        "date":"11 mesi fa",
        "text": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "main_photo":"img/peter-thomas-j2bxM61qXQ4-unsplash.jpg",
        "photo_alt":"land",
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




