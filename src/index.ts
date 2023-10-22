let number: number = 5;
console.log("console log for id: ", number);

//Basic types

const company: string = "Global System Solutions";
const activeCompany: boolean = false;
// type any
let anything: any = "66";
anything = true;
//Initialization
let age: number;
age = 27;
// Array
const arrayIds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const names: string[] = ["Dani", "Alex", "Tarra", "Saki"];
// Tuple
const array: [number, string, Boolean] = [27, "Saki", true];
// const array: [number, string, Boolean] = [27, 'Saki', 21]
// will return error, last element need to be of type boolean
// also need to be in exact order of defined types

//Tuple array
const employees: [string, number][] = [
  ["Saki", 27],
  ["Dani", 21],
  ["Alex", 28],
];
// Union
let id: string | number = 22;
id = "22";
//Enum
enum person {
  firstName = "Alex",
  lastName = "Kostakis",
  age = 12,
  jobDesc = "hamal",
  certifications = "mnoo umen",
}

enum storePrices {
  price1 = 22,
  price2 = 33,
  price3 = 44,
  price4 = 66,
}

enum prices {
  priceOne,
  priceTwo,
  priceThree,
  priceFour,
}
//Default values start with 0 and increase with 1
//priceFour will have value of 3
//also different values can be assigned

enum elements {
  one = 1,
  two,
  three,
  four,
}
// if enum element is no defined it increases with 1

enum list {
  zero,
  un,
  deux = 1,
  trois,
  quatre,
}

//Objects basic declaration
const customerOne: {
  id: number;
  firstName: string;
} = {
  id: 5,
  firstName: "Saki",
};

//Alternative object declaration

type Customer = {
  id: number;
  firstName: string;
};

const customerTwo: Customer = {
  id: 22,
  firstName: "Alex",
};

// Type assertion
let cid: any = "Hello";
let customerId = cid as number;

//Functions
function addNum(a: number, b: number): number {
  return a + b;
}
// Void type for return value of functions
function errorLog(message: string | number): void {
  console.log("Expected type of message should be string or number ->", message);
}

//interfaces
interface UserInterface {
  interfaceId: number;
  interfaceName: string;
  //how to  define optional props
  interfaceAge?: number;
  //how to define read only props
  readonly interfaceColor: string;
}

const interfaceUser: UserInterface = {
  interfaceId: 34252,
  interfaceName: "interfaceName",
  //if we don't add interfaceAge, tsc won't give us error bc interfaceAge is defined as ?: number
  interfaceColor: "blue",
};

//How to use interfaces with functions
interface MathFunction {
  (a: number, b: number): number;
}

const calc: MathFunction = (x: number, y: number): number => x * y;
const divide: MathFunction = (x: number, y: number): number => x / y;
//Example of how to use same interface for functions

//Classes
class Person {
  public id: number;
  name: string;
  //some properties can be private

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}

const newPerson = new Person(1, "Saki");

console.log("Employees tuple array Zero index element is: ", employees[0]);
console.log("Person Enum fistName", person.firstName);
console.log("Expected value for storePrices Enum second element is 33 ->", storePrices.price2);
console.log("Prices Enum last element value is expected to be 3 ->", prices.priceFour);
console.log("Expected value for last element of enum elements is expected to be 4 ->", elements.four);
console.log("Expected value for last element of enum list is expected to be 3 - >", list.quatre);
console.log("Checking value of first two elements of list  enum has: ", list.zero, list.un);
console.log("Expected value for customerOne firstName Saki -> ", customerOne.firstName);
console.log("Expected value for customerTwo id 22 -> ", customerTwo.id);
console.log("Expected type of customerId is number ->", typeof customerId, customerId, cid); // No idea why this is not working as expected
console.log("Expected value of function addNum with params 2 and 3 is 5 -> ", addNum(2, 3));
errorLog(typeof "New Error!");
errorLog(typeof 22);
console.log("Expected value of interfaceId is 34252 -> ", interfaceUser.interfaceId);
console.log("Expected value of interfaceName is interfaceName -> ", interfaceUser.interfaceName);
console.log("Expected value of function calc with params 3 and 3 is 9 ->", calc(3, 3));
console.log("Expected value of function divide with params 3 and 3 is 1 ->", divide(3, 3));
console.log("Expected value for newPerson id is 1 ->", newPerson.id);
console.log("Expected value for newPerson name is Saki ->", newPerson.name);
console.log("calling register method on newPerson, expected return 'Saki is now registered' ->", newPerson.register());
