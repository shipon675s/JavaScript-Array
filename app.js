//! JavaScript Arrays:
const language2 = new Array('HTML', 'CSS', 'JavaScript', 'PHP', true, 50);

const language1 = ['HTML', 'CSS', 'JavaScript', 'PHP', true, 50];  //! Recommended

//! Changes
language1[4] = 'Tailwind CSS';
language1[5] = 'React.js';

//! Delete or Remove last item
language1.pop();

//! Add last item
language1.push('Angular.js');

//! Add first item
language1.unshift('Basic Computing');

//! Delete first item
language1.shift();

//! Splice (Add value)
language1.splice(2,0, 'info', 'info 2');

//! Splice (Delete value)
language1.splice(0, 1);

console.log(language1);
console.log(language1[2]);
console.log(language1.toString()); //! To convert to a string
console.log(language1.length); //! Arrays Number
console.log(language1.join(' $ '));

//! first Iteam:
console.log(language1[0]);
//! Last Iteam:
console.log(language1[language1.length -1]);


//! Name with Arrays:
const person = [];
person['First Name:'] = 'Shipon';
person['Last Name:'] = 'Ahmed';
person[4] = 50;

console.log(person.length);
console.log(person);


//! new Array:
// const num = [20];
const num = new Array (20, 25);

console.log(num);


//! Concat
const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const z = [1, 2, 3, 4];
const s = x.concat(x,y,z);

console.log(s);


//! Flat
const a = [
    [1, 2, 3, [0, 2, 3]],
    [1, 2, 3],
    [1, 2, 3],
];

console.log(a.flat());

