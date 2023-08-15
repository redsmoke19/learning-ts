function getFullName(firstName: string, basename: string): string {
  return `${firstName} ${basename}`;
}

const getFullNameArr = (firstName: string, basename: string): string => {
  return `${firstName} ${basename}`;
}

const rev: number = 1000;
const bonus: number = 500;
const str: string = "hello";
const bool: boolean = true;

const res: number = rev + bonus;

const getMyCar = (carEntity: { brand: string, model: string, year: string }): string => {
  return `My car is ${carEntity.brand} ${carEntity.model} ${carEntity.year}`;
}

const car = {
  brand: "Kia",
  model: "Rio",
  year: "2019",
  wills: 2
}

console.log(getMyCar(car));