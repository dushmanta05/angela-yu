//CJS

// var generateName = require('sillyname');

// With ESM
import generateName from "sillyname"

var sillyName = generateName();

console.log(`My name is ${sillyName}`)


// using superheroes module

import superheroes from "superheroes"
let superName = superheroes.random()

console.log(`I am ${superName}`)