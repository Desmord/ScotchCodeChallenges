// ARRAY 1
const a1 = [{
        name: 'Mike',
        age: 23,
        gender: 'm',
        us: false,
    },
    {
        name: 'Liz',
        age: 20,
        gender: 'f',
        us: true,
    },
    {
        name: 'Chris',
        age: 102,
        gender: 'm',
        us: true,
    },
    {
        name: 'Chuloo',
        age: 27,
        gender: 'm',
        us: false,
    },
    {
        name: 'Annie',
        age: 30,
        gender: 'f',
        us: true,
    },
]

// Part 1 - Find all users older than 24
// Part 2 - Find the total age of all users
// Part 3 - List all female coders


// ARRAY 2
const a2 = [{
        name: 'Michelle',
        age: 19,
        coder: true,
        gender: 'f',
        us: true,
    },
    {
        name: 'Sam',
        age: 25,
        coder: false,
        gender: 'm',
        us: false,
    },
    {
        name: 'Ivy',
        age: 26,
        coder: true,
        gender: 'f',
        us: false,
    },
    {
        name: 'Nick',
        age: 32,
        coder: true,
        gender: 'm',
        us: true,
    },
    {
        name: 'Jim Beglin',
        age: 65,
        coder: false,
        gender: 'm',
        us: true,
    },
]

// Part 1 - List all users in US in ascending order
// Part 2 - Sort all users by age
// Part 3 -  List all female coders


// ARRAY 3
const a3 = [{
        name: 'Charly',
        age: 32,
        coder: true,
        gender: 'm',
    },
    {
        name: 'Law',
        age: 21,
        coder: true,
        gender: 'm',
    },
    {
        name: 'Rosey',
        age: 42,
        coder: false,
        gender: 'f',
    },
    {
        name: 'Steph',
        age: 18,
        coder: true,
        gender: 'f'
    },
    {
        name: 'Jon',
        age: 47,
        coder: false,
        gender: 'm',
    },
]

// .map()
// .filter()
// .reduce()
// .find()
// .replace()
// forEach()



// Part 1 - Find all users older than 24

a1.filter((element) => {

    return element.age > 24;

}).forEach(element => {

    console.log(`Imie: ` + element.name + ` Wiek: ` + element.age);

});


// Part 2 - Find the total age of all users
console.log(`Suma lat: ` +
    a1.reduce((total, element) => {

        return total + element.age;

    }, 0));

// Part 3 - List all female coders
a1.filter(element => {

    return element.gender === `f`;

}).forEach(element => {

    console.log(`Imie: ` + element.name + ` Wiek: ` + element.age);

});

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

// Part 1 - List all users in US in descending order
console.log(`------------------List all users in US in descending order--------------------`);
a2.filter(element => {

    return element.us;

}).sort((element1, element2) => {

    return element1.name > element2.name;

}).forEach(element => {

    console.log(`Imie: ` + element.name + ` Wiek: ` + element.age);

});


// Part 2 - Sort all users by age
console.log(`-----------------------------Sort all users by age----------------------------`);
a2.sort((element1, element2) => {

    return element1.age > element2.age;

}).forEach(element => {

    console.log(`Imie: ` + element.name + ` Wiek: ` + element.age);

});


// Part 3 -  List all female coders
console.log(`----------------------------List all female coders--------------------------`);
a2.filter(element => {

    return element.gender === `f` && element.coder;

}).forEach(element => {

    console.log(`Imie: ` + element.name + ` Wiek: ` + element.age + ` Płeć: ` + element.gender + ` Koder: ` + element.coder);

});

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

// Part 1 - Find the total age of male coders under 25
console.log(`----------------------------Total age of male coders under 25--------------------------`);

console.log(a3.filter(element => {

    return element.gender === `m` && element.coder && element.age < 25;

}).reduce((total, element) => {

    return total + element.age;

}, 0));


// Part 2 - List all male coders over 30
console.log(`----------------------------List all male coders over 30--------------------------`);
a3.filter(element => {

    return element.gender === `m` && element.age > 30;

}).forEach(element => {

    console.log(`Imie: ` + element.name + ` Wiek: ` + element.age);

});


// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
console.log(`Suma lat wszystkich ludzi: ` + (
    [...a1, ...a2, ...a3].reduce((total, element) => {

        return total + element.age;

    }, 0)));