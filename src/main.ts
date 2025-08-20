// ========================
// 🔹 TYPE ALIAS
// ========================

// Type alias for a union type (string or number)
type stringornumber = string | number;

// Type alias for an array of string or number
type stringornumberarray = (string | number)[]

// Type alias for a structured object
type Bio = {
    name?: string;                // Optional property
    age: stringornumber            // Can be string or number
    isMarried: boolean;           // Boolean property
    album: stringornumberarray     // Array of string or number
}

// Type alias for user ID
type userID = stringornumber

// ❌ This throws error because interface cannot be assigned directly to a type alias
// interface postId = stringornumber;    

// ========================
// 🔹 LITERAL TYPES
// ========================

// Literal type: variable can only hold this exact value
let myName: 'Dave'     

// Literal type union: variable can only be one of these values
let username: 'Prateek' | 'Archi' | 'Darshi'        
username = 'Prateek'   // ✅ valid assignment

// ========================
// 🔹 FUNCTION TYPES
// ========================

// Function returning number
const sum = (a: number, b: number): number =>  {
    return a + b;
}

// Function returning void (no return)
const logMsg = (message: any): void => {
    console.log(message)
}

logMsg(sum(2,3))       // Logs 5

// Using type alias for a function type
type mathFunc = (a: number, b: number) => number

const multiply: mathFunc = function(c,d) {
    return c*d
}

// Using interface for a function type
interface mathFunc1 {
    (a:number, b: number): number
}

const divide: mathFunc1 = (x,y) => {
    return x/y
}

logMsg(multiply(2,3))  // Logs 6
logMsg(divide(6,3))    // Logs 2

// ========================
// 🔹 OPTIONAL PARAMETERS
// ========================

const addAll = (a: number, b: number, c?: number): number => {
    if(typeof(c) !== 'undefined'){
        return a + b + c;
    }
    return a + b
}

// ========================
// 🔹 DEFAULT PARAMETERS
// ========================

const sumAll = (a: number = 10, b: number, c: number):number => {
    return a + b + c
}

logMsg(addAll(2,3,4))        // 9
logMsg(addAll(2,3))          // 5
logMsg(sumAll(undefined,3,4))// 17 (a defaults to 10)
logMsg(sumAll(2,3,4))        // 9

// ========================
// 🔹 REST PARAMETERS
// ========================

const addNums = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((acc, curr) => acc + curr)
}

logMsg(addNums(10,20,30,40)) // 100

// ========================
// 🔹 NEVER TYPE
// ========================

// Function that never returns (always throws)
const errMessage = (value: string): never => {
    throw new Error(value)
}
