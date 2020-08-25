const superheroes = require('superheroes');
const supervillanies = require('supervillains');

var heroe = superheroes.random();
var villano = supervillanies.random();
console.log(heroe + ' Vs. ' + villano);
