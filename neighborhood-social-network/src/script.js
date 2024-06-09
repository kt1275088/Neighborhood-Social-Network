document.getElementById('connectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const neighborName = document.getElementById('neighborName').value;
    if (neighborName) {
        addNeighbor(neighborName);
        document.getElementById('neighborName').value = '';
    }
});

document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    if (eventName && eventDate) {
        addEvent(eventName, eventDate);
        document.getElementById('eventName').value = '';
        document.getElementById('eventDate').value = '';
    }
});

document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newsTitle = document.getElementById('newsTitle').value;
    const newsContent = document.getElementById('newsContent').value;
    if (newsTitle && newsContent) {
        addNews(newsTitle, newsContent);
        document.getElementById('newsTitle').value = '';
        document.getElementById('newsContent').value = '';
    }
});

function addNeighbor(name) {
    const neighborList = document.getElementById('neighborList');
    const listItem = document.createElement('li');
    listItem.textContent = name;
    neighborList.appendChild(listItem);
}

function addEvent(name, date) {
    const eventList = document.getElementById('eventList');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${date}`;
    eventList.appendChild(listItem);
}

function addNews(title, content) {
    const newsList = document.getElementById('newsList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${title}</strong><br>${content}`;
    newsList.appendChild(listItem);
}
