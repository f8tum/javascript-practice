// ES6 module = an external file that contains reusable code
//              that can be imported into other javascript files
//              can contain variables, classes, functions ...
//              introduced in 2015 ES6 update

import {PI, getCircumference, getArea, getVolume} from './42mathutility.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`Circumference: ${circumference.toFixed(2)}cm`);
console.log(`Area: ${area.toFixed(2)}cm squared`);
console.log(`Volume: ${volume.toFixed(2)}cm cubed`);