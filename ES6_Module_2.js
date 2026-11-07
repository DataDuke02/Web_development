import {PI, getCircumferences, getArea, getVolume} from './ES6_Module.js';

console.log(PI);

const circumferences = getCircumferences(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumferences.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);
