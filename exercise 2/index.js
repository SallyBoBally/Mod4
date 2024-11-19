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

    data.forEach(person => addCard(person.name, person.age));