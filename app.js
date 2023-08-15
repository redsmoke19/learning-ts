"use strict";
// Примитивы
const rev = 1000;
const bonus = 500;
const str = "hello";
const bool = true;
const res = rev + bonus;
// Функции
function getFullName(firstName, basename) {
    return `${firstName} ${basename}`;
}
const getFullNameArr = (firstName, basename) => {
    return `${firstName} ${basename}`;
};
// Объекты
const car = {
    brand: "Kia",
    model: "Rio",
    year: "2019",
    wills: 2,
};
const getMyCar = (carEntity) => {
    return `My car is ${carEntity.brand} ${carEntity.model} ${carEntity.year}`;
};
// Массивы
const skills = ["HTML", "CSS", "JS"];
for (const skill of skills) {
    console.log(skill.toLocaleLowerCase());
}
const resultArr = skills
    .filter((s) => s !== "CSS")
    .map((s) => s + "! ")
    .reduce((acc, s) => acc + s);
console.log(resultArr);
