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
  const t = user.password?.type
}
