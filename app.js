"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personName = '';
personName = prompt('what is your name?') || '';
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, would you like to learn some python today?`);
}
else {
    alert('you have to fill your name !');
}
