# JavaScript Notes

## Return Statement
In JavaScript, the `return` statement is used to end the execution of a function and specify a value to be sent back to the caller.

### Stops Execution
When a `return` statement is reached, the function immediately stops.

Any code **following it within that function block will not run**, i.e., it becomes an **unreachable statement**.

### Default Value
If a function does not have a `return` statement, or if the `return` keyword is used without an expression, the function returns `undefined` by default.

### Arrow Function (Implicit Return)
If an arrow function consists of only a single expression, you can omit the `return` keyword and the curly braces.

```javascript
const multiply = (a, b) => a * b; // implicitly returns the result
```

---

## Formal Parameters vs Actual Parameters (Arguments)

### Formal Parameters
Formal parameters are the placeholder variables defined in the function signature.

```javascript
function greet(name) { // 'name' is the formal parameter
    console.log("hello " + name);
}
```

### Actual Parameters (Arguments)
Actual parameters (arguments) are the specific values or variables passed to a function when it is called.

```javascript
greet("Alice");
```

### Mismatched Counts
You can call a function with more or fewer arguments than defined.

- **Missing arguments** → assigned the value `undefined`
- **Extra arguments** → ignored by the formal parameters

---

## Higher-Order Function (HOF)
A **Higher-Order Function (HOF)** is a function that does at least one of the following:

- Takes one or more functions as arguments
- Returns a function as its result

---

## Callback Function
A **callback function** is a function that is passed into a Higher-Order Function as an argument.

---

# First-Class Citizens
Functions are considered **first-class citizens** in JavaScript because they are treated like any other value or variable.

## Properties

### 1. Assign to Variables
```javascript
const greetUser = function () {
    console.log("Hello!");
};
```

### 2. Pass as Arguments
```javascript
function execute(fn) {
    fn();
}

execute(greetUser);
```

### 3. Return from Functions
```javascript
function outer() {
    return function () {
        console.log("Returned function");
    };
}
```

### 4. Store in Data Structures
```javascript
const arr = [
    function () {
        console.log("Stored in array");
    }
];

arr[0]();
```