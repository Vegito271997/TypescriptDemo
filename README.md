┌───────────────────────────┐
│        TYPE ALIAS         │
├───────────────────────────┤
│ - Create a new name for a │
│   type (primitive, union, │
│   array, object, function)│
│ - Can use unions & tuples │
│ - Can represent almost    │
│   anything                │
├───────────────────────────┤
│ Example:                  │
│ type ID = string | number │
│ type Point = [number,     │
│               number]     │
└───────────────────────────┘


┌───────────────────────────┐
│        INTERFACE          │
├───────────────────────────┤
│ - Defines the shape of an │
│   object or function      │
│ - Can be extended/merged  │
│ - Only for objects &      │
│   callable signatures     │
├───────────────────────────┤
│ Example:                  │
│ interface Person {        │
│   name: string;           │
│   age: number;            │
│ }                         │
└───────────────────────────┘


┌───────────────────────────┐
│       LITERAL TYPES       │
├───────────────────────────┤
│ - Variable can only hold  │
│   specific value(s)       │
│ - Often used for enums or │
│   restricted options      │
├───────────────────────────┤
│ Example:                  │
│ let user: 'Alice' | 'Bob' │
│ user = 'Alice';           │
└───────────────────────────┘
