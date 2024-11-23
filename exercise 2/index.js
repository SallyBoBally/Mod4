const data = [
    { name: 'bob', age: 23 },
    { name: 'alice', age: 39 }
];

function addCard(name, age) {
    const card = document.createElementNS('div');
    card.classList.add('card');
}

function addCard(name, age) {
    const card = document.createElement('div');
    card.classList.add('card');

    const content = `<h2>Name: ${name}</h2><p>Age: ${age}</p>`;
    card.innerHTML = content;

    document.body.appendChild(card);
}

    data.forEach(person => addCard(person.name, person.age));.00

function addPortfolioCard(title, imageUrl) {
    const card = document.createElement('div');
    card.classList.add('portfolio-card'); 

    const content = `
        <h2>${title}</h2>
        <img src="${imageUrl}" alt="${title}" style="width:100%;height:auto;">
    `;
    card.innerHTML = content;
    
    document.body.appendChild(card);
}

const artist = {
    name: "Van Gogh",
    portfolio: [
        { title: "Portrait", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image" },
        { title: "Sky", url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg" }
    ]
};

function addPortfolio(title, url) {
    const portfolioContainer = document.getElementById('portfolioContainer');
    const portfolio = document.createElement('div');
    portfolio.classList.add('portfolio');
    portfolio.innerHTML = `
        <h2>${title}</h2>
        <img src="${url}" alt="${title}">
    `;
    portfolioContainer.appendChild(portfolio);
}

artist.portfolio.forEach(item => addPortfolio(item.title, item.url));