const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStarsWithD = people
    .filter(person => person.startsWith('D'))
    .map(dperson => dperson.toUpperCase())