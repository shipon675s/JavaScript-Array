// JavaScript Array
const lan = ['Html', 'Css', 'Js', 'Php', true, 50];

lan[4] = 'Tailwind CSS';
lan[5] = 'vue.js';
lan[6] = 'react.js';

// Delete / remove last item
lan.pop();

// Add last item
lan.push('Laravel');

// Add first item
lan.unshift('Basic Computing');

// Delete / remove first item
lan.shift();

console.log(lan);

console.log(lan[0]);                    // First Array Access
console.log(lan.at(5));

console.log(lan[lan.length - 1]);       // Last Array Access

console.log(lan.toString());            // Convert String

console.log(lan.join(' '));            // Join

console.log(lan.length);

// Multiple ADD
lan.splice(2, 0, 'info', 'info2');
console.log(lan);
// Multiple Delete
lan.splice(2, 2);
console.log(lan);



// const lang = new Array('Html', 'Css', 'Js', 'Php', true, 50);


const person = [];
person['firstName'] = 'Shipon';
person['lastName'] = 'Ahmed';
console.log(person);
console.log(person.length);



// const num = [20];
const num = new Array(20, 25);
console.log(num);

const num1 = Array.of(20);    // একটি item নেওয়ার জন্য Array.of(value)
console.log(num1);


// Multiple Array Add
const x = [1, 2, 3, 4, 5];
const y = [1, 2, 3, 4, 5];
const p = [2, 4, 6, 8];
const q = [2, 4, 6, 8];
const r = [2, 4, 6, 8];
const z = x.concat(y, p, q, r);
console.log(z);



const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(a);
console.log(a.flat());