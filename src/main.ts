// ========================
// 🔹 BASIC TYPES
// ========================

// Explicit type annotation (string)
let myName: string = "Prateek";  

// Explicit type annotation (number)
let age: number = 27;           

// Explicit type annotation (boolean)
let isMarried: boolean = false; 

// "any" can hold any type (not recommended, defeats type-safety)
let plans: any;                 

// Union type: variable can hold either string OR number
let album: string | number;     

// Regular Expression type (RegExp)
let re: RegExp = /\w+/g;        


// ========================
// 🔹 FUNCTION WITH TYPES
// ========================

// Parameters and return type are annotated
const sum = (a: number, b: number): number => {
    return a + b;
};

// sum(2, 3) ✅ valid
// sum("2", 3) ❌ invalid (because "2" is not a number)


// ========================
// 🔹 ARRAYS
// ========================

// Array of strings
let names: string[] = ["Prateek", "Archi"];

// Array of numbers
let individualAge: number[] = [27, 28];

// Array with union → can contain strings and numbers
let myNameAndAge: (string | number)[] = ["Prateek", 27, 28];


// ========================
// 🔹 TUPLE
// ========================

// Fixed-length array where types at each position are known
let bioDate: [string, number, boolean] = ["Prateek", 27, false];

// bioDate[0] must be string
// bioDate[1] must be number
// bioDate[2] must be boolean


// ========================
// 🔹 OBJECTS
// ========================

// Object without explicit typing (inferred automatically by TS)
let myObj = {
    name: "Prateek",
    age: 27,
    isMarried: false
};

// If you try: myObj.name = 123 ❌ Error (must stay string)


// ========================
// 🔹 TYPE ALIAS
// ========================

// "type" allows us to define a reusable object structure
type myBio = {
    name: string;
    age: number;
    isMarried: boolean;
};

// Using the custom type
let person1: myBio = {
    name: "Archi",
    age: 28,
    isMarried: true
};


// ========================
// 🔹 INTERFACE
// ========================

// Interfaces are similar to type aliases but are more extensible
interface Bio {
    name: string;
    age: number;
    isMarried?: boolean;  // optional property (can be missing)
}

// Using the interface
let myBio: Bio = {
    name: "Prateek",
    age: 27,
    isMarried: false
};

 let archiBio: Bio = { name: "Archi", age: 28 };  // isMarried not required

  myBio == archiBio

  let otherBio = {
    name: "Darshi",
    isMarried: false
  }

  myBio == otherBio

// ========================
// 🔑 QUICK RECAP
// ========================
// - string, number, boolean → primitive types
// - any → disables type safety (use sparingly)
// - union (|) → variable can be one of multiple types
// - function types → define parameter + return types
// - arrays → homogeneous (string[]), heterogeneous via union ((string|number)[])
// - tuples → fixed structure with specific types at each index
// - objects → can be explicitly typed with type or interface
// - type alias → reusable object/structure definition
// - interface → like type but better for extension & contracts

const greet = (bio: Bio) => {
    console.log(`Namaste ${bio.name}`)
}

interface Bio1 {
    name?: string;
    age: number;
    isMarried: boolean;  // optional property (can be missing)
}

let myBio1: Bio1 = {
    age: 27,
    isMarried: false
};
const optionalGreet = (bio: Bio1) => {
    return `Namaste ${bio.name}`
}
greet(myBio)
optionalGreet(myBio1)

// ENUMS or Enumeration -An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.



enum Status {
    success = 200,
    notfound = 404,
    badrequest = 400
}

console.log(Status.success)

enum Direction {
    north,
    south,
    west,
    east
}
console.log(Direction.east)

enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};

console.log(CardinalDirections.North)