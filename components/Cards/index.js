// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


//Create HTML framework for cards 

let createCard = (cardData) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImage = document.createElement('img');
    const authorName = document.createElement('span');

//Add classes 

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    authorImage.classList.add('img');
    authorName.classList.add('img');

//Add text to cards 

    headline.textContent = cardData.headline;
    authorImage.src = cardData.authorPhoto;
    authorName.textContent = `By ${cardData.authorName}`;

//Append to HTML framework
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImage);
    author.appendChild(authorName);

    return card;
}

// Get Data from API 
let info = axios.get('https://lambda-times-backend.herokuapp.com/articles');

//console.log(info)

// Capture data for cards 
let cardNet = document.querySelector('.cards-container');

// Grab data from API 
info.then((response) => {
    let articles = Object.values(response.data.articles);

    // Apply data to cards 
    articles.forEach((item) => {
        let anItem = item;

        // Add cards to HTML 
        anItem.forEach((el) => {
            let exitCard = createCard(el)
            cardNet.appendChild(exitCard)
        })
    })
})

