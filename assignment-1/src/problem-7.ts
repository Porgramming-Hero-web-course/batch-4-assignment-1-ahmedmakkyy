type CarType = {
    make: string;
    model: string;
    year: number;
    getCarAge: () => number;
};

function createCar(make: string, model: string, year: number): CarType {
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
