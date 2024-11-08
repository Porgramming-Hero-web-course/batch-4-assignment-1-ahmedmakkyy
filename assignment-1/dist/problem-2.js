"use strict";
const removeDuplicates = (numbers) => numbers.reduce((unique, current) => {
    if (!unique.includes(current)) {
        unique.push(current);
    }
    return unique;
}, []);
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
