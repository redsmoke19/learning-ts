//-- Union тип (либо одно, либо другое) --//
function logId(id: string | number | boolean) {
  console.log(id.toLowerCase()); // Теперь тут ошибка потому что id может быть не только строкой
  if (typeof id === "string") {
    // Это называется сужением типов
    console.log(id.toLowerCase());
  } else {
    console.log(id);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

//-- Literal Types (литеральные типы) --//
function fetchWithAuth(url: string, method: "GET" | "POST") {
  // ...
}

fetchWithAuth("dsadads", "GET"); // не обязательно всегда создавать enum, в таких случаях можно использовать литеральные типы (либо одна строка либо другая)

//-- Types Alliases (типы алиасы) --//

type httpMethod = "GET" | "POST";

function fetchWithAuth2(url: string, method: httpMethod) {
  // ...
}

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  id: number;
};

type UserWithRole = User & Role; // это intersection, когда мы два тайпа соединяем в один

const user: UserWithRole = {
  name: "sadsa",
  age: 23,
  skills: ["HTML", "CSS"],
  id: 21,
};

//-- Interface - альтернативная запись типов --//

interface UserInterface {
  name: string;
  age: number;
  skill: string[];

  log: (id: number) => string;
}

interface UserWithRoleInterface extends UserInterface {
  id: number;
}

const user2: UserWithRoleInterface = {
  name: "dasda",
  age: 23,
  skill: ["HTML", "CSS"],
  id: 21,
  log: (id) => {
    return id.toString();
  },
};

interface UserDic {
  [index: number]: UserInterface;
}

// В чем отличия:
interface IUser {
  name: string;
}

interface IUser {
  age: number;
}

const iuser: IUser = { name: "sadasd", age: 23 }; // тут происходит merge двух интерфейсов с одинаковым именем это только с interface
type ID = string | number; // Так с простыми типа может работать только type
interface IID {
  // с интерфейсами только так
  ID: string | number;
}

// type - для приметивных типов
// interface - это если объекты

//-- Optionals --//
// Если после опционально (может быть, а может нет, ставим ?)

interface IOptionals {
  name: string;
  age?: number;
}

function multiply22(first: number, second?: number): number {
  if (!second) {
    return first;
  }
  return first * second;
}

interface IUserPro {
  login: string;
  password?: {
    type: "primary" | "secondary";
  };
}

function testPass(user: IUserPro) {
  const t = user.password?.type;
}

//-- Void --//
// Это означает что функция ни чего не возвращает
function logIdVoid(id: string | number): void {
  console.log(id);
}

// Или мы можем вернуть что угодно, но этот возврат будет игнорироваться
// Когда мы объявляем функцию и хотим игнорировать ее возврат, то вызываем void
type voidFunc = () => void;

const f1: voidFunc = () => {}; // Тут все ок
const f2: voidFunc = () => {
  return true;
}; // И тут все ок
interface voidInter {
  s: string[];
}
const voidSkills = ["Dev", "DevOps", "QA"];
const voidUser: voidInter = {
  s: [],
};
voidSkills.forEach((skill) => {
  voidUser.s.push(skill);
});

//-- Unknown --/
// Тип переменной которой заранее мы не знаем
let userInput: unknown;
userInput = 5;
userInput: string = "3213"; // Вот так ошибка
async function getData() {
  try {
    await fetch("");
  } catch (err) {
    console.log(err.message); // так ошибка, потому что мы не знаем что придет
    if (err instanceof Error) {
      console.log(err.message); // Так норм и так лучше
    }
    const error = err as Error; // Также можно так
  }
}

//-- Never --//
// Никогда такое не произойдет, ни когда не будет присвоено значение
// Ни когда не должна быть присвоена и никогда не должна вернуться
// Тут если не типизировать то по умолчанию будет void, но на самом деле это never
function generateError(message: string): never {
  throw new Error(message);
}

const aaa: never = 1;

function isString(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  generateError("dasdas"); // Помогает ограничить ветки и какие то случаи. Он блокирует вертки, в которые мы не должны попасть
}

//-- Null --//
// Разница null & undefined - если этого объекта нет, то null
// если мы его не задали - это undefined
const n: null = null;
const n1: any = null;
const n2: number = null;
const n3: string = null;
const n4: boolean = null;
const n5: undefined = null;

interface UserNull {
  name: string;
}

function getUserNull() {
  if (Math.random() > 0.5) {
    return null; // Осознанное отсутствие пользователя
  } else {
    return {
      name: "Oleg",
    } as UserNull;
  }
}

const userNull = getUserNull();
const userNameNull = userNull.name;

//-- Приведение типов --//
let a = 5;
let b: string = a.toString();
let e: string = new String(a).valueOf();
let c: string = new String(a); // Так ошибка, потому что это объект

// Явное преобразование и объединение двух объектов
interface IUserType {
  name: string;
  email: string;
  login: string;
}

const userType: IUserType = {
  name: "Oleg",
  email: "XXXXXXXXXXXX",
  login: "oleg",
};

interface IAdmin {
  name: string;
  role: number;
}

function userToAdmin(user: IUserType): IAdmin {
  return {
    name: user.name,
    role: 1,
  };
}

//-- TypeGuard --//
function isStringGuard(x: string | number): x is string {
  return typeof x === "string";
}

function logIdGuard(id: string | number) {
  if (isStringGuard(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

function isAdmin(user: IUserType | IAdmin): user is IAdmin {
  return "role" in user;
}

function isAdminAlternative(user: IUserType | IAdmin): user is IAdmin {
  return (user as IAdmin).role !== undefined;
}

function setRoleZero(user: IUserType | IAdmin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("User is not admin");
  }
}

//- Asserts -//
// Это функция, в случае если условие не выполняется, то кидается ошибка
interface UserAsserts {
  name: string;
}

// Это способ сказать ts что в рамках функции мы производим проверку что объект является пользователем
function assertsUser(obj: unknown): asserts obj is UserAsserts {
  if (typeof obj === "object" && !!obj && "name" in obj) {
    return;
  }
  throw new Error("Не пользователь");
}

const aAsserts = {};
const bAsserts = null;
// Если aAsserts не объект то кидаем ошибку, если объект то продолжаем с ним работать
assertsUser(aAsserts);
assertsUser(bAsserts);
aAsserts.name = "Oleg";
bAsserts.name = "sadad"; // Тут ошибка, потому что bAsserts это строка

