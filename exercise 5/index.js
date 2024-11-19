let news = [
    { id: 1, title: 'Election Results', content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success', content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning', content: "Residents should prepare..." }
];

function displayNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    
    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const newsTitle = document.createElement('div');
        newsTitle.classList.add('news-title');
        newsTitle.textContent = item.title;

        const newsContent = document.createElement('div');
        newsContent.classList.add('news-content');
        newsContent.textContent = item.content;

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsContent);
        newsContainer.appendChild(newsItem);
    });
}

displayNews();

setInterval(displayNews, 5000);
