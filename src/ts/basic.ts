// Numbers
let binaryLiteral: number = 0b10;
let octalLiteral: number = 0o70;
let decLiteral: number = 9;
let hexLiteral: number = 0xf0;
console.log(
  binaryLiteral, octalLiteral, decLiteral, hexLiteral, Number.MAX_VALUE, Number.POSITIVE_INFINITY,
);

// String
let year: number = 2019;
let animal: string = 'Pig';
console.log(`This is year ${year}, the year of ${animal}.`);

// Array
let array: number[] = [1, 2, 3];
console.log(array);

// Tuple
let tuple: [string, number] = ['Pig', 2019];
console.log(tuple);

// Enum
enum Animal {Dog, Cat, Horse}
let enumAnimal: Animal = Animal.Dog;
console.log(enumAnimal);

// Any
let anyValue1: any = 4;
let anyValue2 = 1000;
let anyArray: any[] = [anyValue1, anyValue2, false, 'fine'];
console.log(anyArray);

// Union Types
let unionType: string | number = 'Hello';
unionType = 123; // Safe

// Type Assertion
let originValue: any = '1';
let convertValue: number = <number> <any> originValue; // Convert number into any
console.log(convertValue, typeof convertValue);

// Loop
// for in / for of / forEach / every
let numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
numberList.every((value, index, array) => {
  console.log(value, index, array);
  return value <= 5; // If false, the loop will quit.
});

// Function
console.log(((name: string): string => {
  return `Hello, ${name}`;
})('Mark'));

console.log(((firstName: string, lastName?: string): string => {
  if (lastName) {
    return `Hello, Mr.${lastName}`;
  }
  return `Hello, ${firstName}`;
})('Mercedes', 'Benz'));

console.log(((name: string, age: number = 21): string => {
  return `Hello ${name}, you are ${age} years old.`;
})('Rylan'));

console.log(((...words: string[]): string => {
  return `${words.join(' ')}.`;
})('I', 'ate', 'hamburger', 'this', 'morning'));

// Constructor Function
let constructorFunction = new Function('a', 'b', 'return a * b');
console.log(constructorFunction(4, 5));

// Interface
interface Info {
  age: number;
  address: string;
  luckyNumber: () => number;
}

// Class
class Person implements Info {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number = 21, address: string = 'Hefei') {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  greet(): void {
    console.log(`Hi, ${this.name}. You are ${this.age} years old. You live in ${this.address}.`);
  }

  luckyNumber(): number {
    return Math.round(Math.random() * 100 + 1);
  }
}

let person: Person = new Person('Thor');
person.greet();

class Boy extends Person {
  greet(): void {
    console.log(`Hi, ${this.name}, you are a boy. Your lucky number is ${this.luckyNumber()}`);
  }
}

let boy: Person = new Boy('Odin');
boy.greet();
