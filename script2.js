let questions = [
    {
        question: "What is the acronym JS?",
        answ: "Java Script",
        options: [
            "Joint script",
            "Java Script",
            "Java Source",
            "None of the Above",
        ]
    },
    {
        question: "What is JavaScript?",
        answ: "A programming language for creating interactive web pages",
        options: [
            "A programming language for creating interactive web pages",
            "A markup language for structuring HTML documents",
            "A style sheet language for designing web page layouts",
            "A server-side scripting language",
        ]
    },
    {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        answ: "All of the above",
        options: [
            "var x = 10;",
            "let x = 10;",
            "const x = 10;",
            "All of the above",
        ]
    },
    {
        question: "What is the data type of the following value in JavaScript? 10.5",
        answ: "Number",
        options: [
            "Number",
            "String",
            "Boolean",
            "Undefined",
        ]
    },
    {
        question: "How do you comment a single line of code in JavaScript?",
        answ: "// This is a comment",
        options: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment",
            "// This is a comment //",
        ]
    },
    {
        question: "Which operator is used to check if two values are equal in JavaScript?",
        answ: "===",
        options: [
            "==",
            "===",
            "=",
            "!=",
        ]
    },
    {
        question: "What is the purpose of the if statement in JavaScript?",
        answ: "To execute code conditionally",
        options: [
            "To declare variables",
            "To define functions",
            "To create loops",
            "To execute code conditionally",
        ]
    },
    {
        question: "What is the purpose of the for loop in JavaScript?",
        answ: "To iterate over elements in an array",
        options: [
            "To iterate over elements in an array",
            "To define functions",
            "To create conditional statements",
            "To declare variables",
        ]
    },
    {
        question: "How do you define a function in JavaScript?",
        answ: "function myFunction() {}",
        options: [
            "function myFunction() {}",
            "define myFunction() {}",
            "create myFunction() {}",
            "new myFunction() {}",
        ]
    },
    {
        question: "What is the purpose of the return statement in a JavaScript function?",
        answ: "To return a value from the function",
        options: [
            "To exit the function",
            "To declare variables",
            "To call the function",
            "To return a value from the function",
        ]
    },
    {
        question: "What is the difference between a function declaration and a function expression?",
        answ: "Function declarations can be hoisted, while function expressions cannot.",
        options: [
            "Function declarations can be hoisted, while function expressions cannot.",
            "Function expressions can be hoisted, while function declarations cannot.",
            "There is no difference between function declarations and function expressions.",
            "Function declarations are always anonymous, while function expressions can be named.",
        ]
    },
    {
        question: "What is an object in JavaScript?",
        answ: "A collection of key-value pairs",
        options: [
            "A collection of key-value pairs",
            "A data type for numbers",
            "A function",
            "A loop",
        ]
    },
    {
        question: "How do you access a property of an object in JavaScript?",
        answ: "Both object.property and object[property]",
        options: [
            "object.property",
            "object[property]",
            "Both object.property and object[property]",
            "property.object",
        ]
    },
    {
        question: "What is the purpose of the this keyword in JavaScript?",
        answ: "To refer to the current object",
        options: [
            "To refer to the current object",
            "To declare variables",
            "To define functions",
            "To create loopsh",
        ]
    },
    {
        question: "How do you add an element to the end of an array in JavaScript?",
        answ: "array.push(element)",
        options: [
            "array.push(element)",
            "array.add(element)",
            "array[array.length] = element;",
            "array.insert(element)",
        ]
    },
    {
        question: "What does DOM stand for?",
        answ: "Document Object Model",
        options: [
            "Document Object Model",
            "Data Object Manipulation",
            "Document Object Manipulation",
            "Dynamic Object Model",
        ]
    },
    {
        question: "How do you access an element by its ID in JavaScript?",
        answ: "Both document.getElementById(\"myElement\") and document.querySelector(\"#myElement\")",
        options: [
            "document.getElementById(\"myElement\")",
            "document.querySelector(\"#myElement\")",
            "Both document.getElementById(\"myElement\") and document.querySelector(\"#myElement\")",
            "document.getElementByID(\"myElement\")",
        ]
    },
    {
        question: "How do you change the inner HTML of an element in JavaScript?",
        answ: "element.innerHTML = \"new content\"",
        options: [
            "element.innerHTML = \"new content\"",
            "element.innerText = \"new content\"",
            "element.content = \"new content\"",
            "element.text = \"new content\"",
        ]
    },
    {
        question: "How do you add an event listener to an element in JavaScript?",
        answ: "element.addEventListener(\"click\", function() { /* code */ });",
        options: [
            "element.addEventListener(\"click\", function() { /* code */ });",
            "element.on(\"click\", function() { /* code */ });",
            "element.onclick = function() { /* code */ };",
            "All of the above",
        ]
    },
    {
        question: "What is asynchronous programming in JavaScript?",
        answ: "Programming that allows multiple tasks to be executed simultaneously",
        options: [
            "Programming that allows multiple tasks to be executed simultaneously",
            "Programming that executes code in a linear fashion",
            "Programming that is synchronous by default",
            "Programming that is only used for complex applications",
        ]
    },
    {
        question: "What is a callback function in JavaScript?",
        answ: "A function that is passed as an argument to another function",
        options: [
            "A function that is passed as an argument to another function",
            "A function that is executed before another function",
            "A function that is executed after another function",
            "A function that is executed synchronously",
        ]
    },
    {
        question: "What is the purpose of the async keyword in JavaScript?",
        answ: "To declare asynchronous functions",
        options: [
            "To declare asynchronous functions",
            "To define synchronous functions",
            "To create promises",
            "To handle errors",
        ]
    },
    {
        question: "What is a promise in JavaScript?",
        answ: "An object that represents the eventual completion (or failure) of an asynchronous operation",
        options: [
            "An object that represents the eventual completion (or failure) of an asynchronous operation",
            "A function that is executed asynchronously ",
            "A data type for storing strings",
            "A keyword used to declare asynchronous functions",
        ]
    },
    {
        question: "What is a JavaScript framework?",
        answ: "A pre-written codebase that provides a structure for building web applications",
        options: [
            "A collection of JavaScript libraries",
            "A pre-written codebase that provides a structure for building web applications",
            "A programming language",
            "A tool for debugging JavaScript code",
        ]
    },
    {
        question: "What is React?",
        answ: "A JavaScript library for building user interfaces",
        options: [
            "A JavaScript library for building user interfaces",
            "A JavaScript framework for building web applications",
            "A CSS preprocessor",
            "A JavaScript build tool",
        ]
    },
    {
        question: "What is Angular?",
        answ: "A JavaScript framework for building web applications",
        options: [
            "A JavaScript library for building user interfaces",
            "A JavaScript framework for building web applications",
            "A CSS preprocessor",
            "A JavaScript build tool",
        ]
    },
    {
        question: "What is Vue.js?",
        answ: "A JavaScript library for building user interfaces",
        options: [
            "A JavaScript library for building user interfaces",
            "A JavaScript framework for building web applications",
            "A CSS preprocessor",
            "A JavaScript build tool",
        ]
    },
    {
        question: "What is jQuery?",
        answ: "A JavaScript library for DOM manipulation and event handling",
        options: [
            "A JavaScript library for DOM manipulation and event handling",
            "A JavaScript framework for building web applications",
            "A CSS preprocessor",
            "A JavaScript build tool",
        ]
    },
    {
        question: "What is the difference between let and var in JavaScript?",
        answ: "let has block scope, while var has function scope",
        options: [
            "let has block scope, while var has function scope",
            "var has block scope, while let has function scope",
            "There is no difference between let and var",
            "let is newer than var",
        ]
    },
    {
        question: "What is the purpose of the const keyword in JavaScript?",
        answ: "To declare variables that cannot be reassigned",
        options: [
            "To declare variables that cannot be reassigned",
            "To declare variables that can be reassigned",
            "To define functions",
            "To create loops",
        ]
    },
    {
        question: "What is a closure in JavaScript?",
        answ: "A function that has access to variables from its outer lexical environment, even after the outer function has finished executing",
        options: [
            "A function that has access to variables from its outer lexical environment, even after the outer function has finished executing",
            "A function that is executed asynchronously",
            "A data type for storing objects",
            "A keyword used to declare asynchronous functions",
        ]
    },
    {
        question: " What is the purpose of the try...catch block in JavaScript?",
        answ: "To handle errors in your code",
        options: [
            "To handle errors in your code",
            "To define functions",
            "To create loops",
            "To declare variables",
        ]
    },
    {
        question: "What is the purpose of the finally block in JavaScript?",
        answ: "To execute code regardless of whether an exception is thrown or not",
        options: [
            "To execute code regardless of whether an exception is thrown or not",
            "To handle errors in your code",
            "To define functions",
            "To create loops",
        ]
    },
    {
        question: "What is the difference between Promise.resolve() and Promise.reject()?",
        answ: "Promise.resolve() creates a resolved promise, while Promise.reject() creates a rejected promise",
        options: [
            "Promise.resolve() creates a resolved promise, while Promise.reject() creates a rejected promise",
            "Promise.resolve() creates a rejected promise, while Promise.reject() creates a resolved promise",
            "There is no difference between Promise.resolve() and Promise.reject()",
            "Promise.resolve() is used for synchronous operations, while Promise.reject() is used for asynchronous operations",
        ]
    },
    {
        question: "What is the importance of code readability in JavaScript?",
        answ: "All of the above",
        options: [
            "Makes code easier to understand and maintain",
            "Improves performance",
            "Reduces the risk of errors",
            "All of the above",
        ]
    },
    {
        question: "What is the purpose of linting tools in JavaScript?",
        answ: "All of the above",
        options: [
            "To detect and fix errors in your code",
            "To format your code automatically",
            "To optimize your code for performance",
            "All of the above",
        ]
    },
    {
        question: "What is the importance of using meaningful variable and function names in JavaScript?",
        answ: "All of the above",
        options: [
            "Improves code readability",
            "Reduces the risk of errors",
            "Makes code more maintainable",
            "All of the above",
        ]
    },
    {
        question: "What is the purpose of code comments in JavaScript?",
        answ: "All of the above",
        options: [
            "To explain the purpose of code",
            "To make code more readable",
            "To debug code",
            "All of the above",
        ]
    },
    {
        question: "What is the importance of testing your JavaScript code?",
        answ: "All of the above",
        options: [
            "To ensure code quality",
            "To find and fix bugs",
            "To improve code maintainability",
            "All of the above",
        ]
    },
    {
        question: "What is a component in React?",
        answ: "All of the above",
        options: [
            "A reusable piece of UI that can be rendered independently",
            "A function that takes props as input",
            "A JavaScript object",
            "All of the above",
        ]
    },
    {
        question: "How do you create a React component?",
        answ: "Both class and function keywords",
        options: [
            "By using the class keyword",
            "By using the function keyword",
            "Both class and function keywords",
            "Neither class nor function keywords",
        ]
    },
    {
        question: "What is JSX?",
        answ: "A JavaScript syntax extension for writing HTML-like code",
        options: [
            "A JavaScript syntax extension for writing HTML-like code",
            "A CSS preprocessor",
            "A JavaScript build tool",
            "A JavaScript library",
        ]
    },
    {
        question: "How do you render a React component in the DOM?",
        answ: "By using the ReactDOM.render() method",
        options: [
            "By using the ReactDOM.render() method",
            "By using the document.createElement() method",
            "By using the innerHTML property",
            "By using the appendChild() method",
        ]
    },
    {
        question: "What are props in React?",
        answ: "Data passed down from a parent component to a child component",
        options: [
            "Data passed down from a parent component to a child component",
            "Properties of a React component",
            "Functions that can be called within a React component",
            "State variables in a React component",
        ]
    },
    {
        question: "What is state in React?",
        answ: "Data that is specific to a component and can change over time",
        options: [
            "Data that is specific to a component and can change over time",
            "Data that is shared between all components",
            "Data that is passed down from a parent component to a child component",
            "Functions that can be called within a React component",
        ]
    },
    {
        question: "How do you update state in React?",
        answ: "By using the setState() method",
        options: [
            "By directly modifying the state object",
            "By using the setState() method",
            "By using the updateState() method",
            "By using the setProps() method",
        ]
    },
    {
        question: "What is the purpose of the useEffect hook in React?",
        answ: "To perform side effects in React components",
        options: [
            "To perform side effects in React components",
            "To define functions in React components",
            "To create state variables in React components",
            "To render components in React",
        ]
    },
    {
        question: "What is the difference between controlled and uncontrolled components in React?",
        answ: "Controlled components have their values managed by the parent component, while uncontrolled components manage their own values.",
        options: [
            "Controlled components have their values managed by the parent component, while uncontrolled components manage their own values.",
            "Controlled components manage their own values, while uncontrolled components have their values managed by the parent component.",
            "There is no difference between controlled and uncontrolled components.",
            "Controlled components are always better than uncontrolled components.",
        ]
    },
    {
        question: "What is the purpose of the useContext hook in React",
        answ: "To share state between components without passing props",
        options: [
            "To share state between components without passing props",
            "To create custom hooks",
            "To perform side effects",
            "To render components",
        ]
    },
    {
        question: "What is the purpose of the useReducer hook in React?",
        answ: "To manage complex state in React components",
        options: [
            "To manage complex state in React components",
            "To create custom hooks",
            "To perform side effects",
            "To render components",
        ]
    },
];