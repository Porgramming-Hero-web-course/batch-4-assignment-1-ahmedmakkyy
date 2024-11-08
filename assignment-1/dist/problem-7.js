"use strict";
function createCar(make, model, year) {
    return {
        make,
        model,
        year,
        getCarAge: () => {
            const currentYear = new Date().getFullYear();
            return currentYear - year;
        }
    };
}
// Output
const car = createCar("Honda", "Civic", 2018);
console.log(car.getCarAge());
