"use strict";
function getFullName(firstName, basename) {
    return `${firstName} ${basename}`;
}
const getFullNameArr = (firstName, basename) => {
    return `${firstName} ${basename}`;
};
const rev = 1000;
const bonus = 500;
const str = "hello";
const bool = true;
const res = rev + bonus;
const getMyCar = (carEntity) => {
    return `My car is ${carEntity.brand} ${carEntity.model} ${carEntity.year}`;
};
const car = {
    brand: "Kia",
    model: "Rio",
    year: "2019",
    wills: 2
};
console.log(getMyCar(car));
