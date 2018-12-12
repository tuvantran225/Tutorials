var turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

function feed({name, meal, diet}) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

function feed2(animal) {
    var{name, meal, diet} = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feed2(turtle));