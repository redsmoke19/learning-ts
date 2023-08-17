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

// Readonly
const skillsReadonly: ReadonlyArray<string> = ["HTML", "CSS", "JS"];
const skillsReadonly2: readonly  string[] = ["HTML", "CSS", "JS"];

// Enum
// Это что то вроде справочника, который имеет ограниченное число значений
enum StatusCode {
  SUCCESS = 1,
  PROCESSING = 2,
  ERROR = 3
}

const example1 = {
  message: "Успешно",
  status: StatusCode.SUCCESS
}

if (example1.status === StatusCode.SUCCESS) {
  console.log(example1.message);
}

// Это гетерагенный enum
enum StatusCode2 {
  SUCCESS = "o",
  PROCESSING = 2,
  ERROR = 3
}

function enumAction(status: StatusCode2) {}
enumAction(2); // Тут окей
enumAction(StatusCode2.SUCCESS); // Тут окей
// enumAction("o"); Тут ошибка, потому что хоть он гетерагенный, по умолчанию это цифровой enum

// Константные Enum не компилируются в функцию и ее можно использовать как обычный map в вычислениях или еще где 
const enum Roles {
  ADMIN = 2,
  USER = 1,
}