// Примитивы
const rev: number = 1000;
const bonus: number = 500;
const str: string = "hello";
const bool: boolean = true;

const res: number = rev + bonus;

// Функции
function getFullName(firstName: string, basename: string): string {
  return `${firstName} ${basename}`;
}

const getFullNameArr = (firstName: string, basename: string): string => {
  return `${firstName} ${basename}`;
};

// Объекты
const car = {
  brand: "Kia",
  model: "Rio",
  year: "2019",
  wills: 2,
};

const getMyCar = (carEntity: {
  brand: string;
  model: string;
  year: string;
}): string => {
  return `My car is ${carEntity.brand} ${carEntity.model} ${carEntity.year}`;
};

// Массивы
const skills: string[] = ["HTML", "CSS", "JS"];

for (const skill of skills) {
  console.log(skill.toLocaleLowerCase());
}

const resultArr: string = skills
  .filter((s: string) => s !== "CSS")
  .map((s) => s + "! ")
  .reduce((acc: string, s: string) => acc + s);

console.log(resultArr);

// Кортежи или Tuples (Это массив ограниченной длинны где каждый элемент у нас типизирован)
const skillTuples: [number, string] = [1, "HTML"];
const [id, skillName] = skillTuples;

const skillTuples2: [number, string, ...boolean[]] = [1, "HTML", true, false];
