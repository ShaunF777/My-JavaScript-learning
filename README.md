<div align="center">

# Learning JavaScript the right way

<a name="top"></a>
<img src="./assets/rootsinwater.jfif">

<div align="left">

## Welcome to my learning repo!
Here I showcase my JavaScript learning projects, using different packages to increase productivity & documentation quality.

This project also demonstrates how to set up a JavaScript project with enhanced documentation and type checking using JSDoc, ESLint, and TypeScript.

Below you will find more instructions on getting these packages to work for you. This process was initiated after doing some research and reading about it [here](https://www.pullrequest.com/blog/leveraging-jsdoc-for-better-code-documentation-in-javascript/#:~:text=JSDoc%20is%20a%20documentation%20syntax,into%20a%20detailed%20documentation%20website).

## Why JSDoc:
JSDoc is highly versatile, supporting a wide array of tags to enrich your documentation. 
Utilizing these tags not only makes your documentation more informative but also assists in 
code quality tools and IDEs to better understand your code, offering improved autocomplete 
suggestions and warnings about deprecated usage or potential errors.

- **Here are a few essential tags to incorporate**:
    ```js
    @param {number}: Type to be passed into function.
    @returns {string}: Type to be returned by function.
    @constructor: Marks a function as a constructor.
    @deprecated: Indicates that a method is deprecated.
    @throws or @exception: Documents an exception thrown by a function.
    @see: Provides a reference to another symbol in the documentation.
    @todo: Highlights tasks to be completed in the code.
    ```
- > 💡 Use these JSDoc tags directly in your .js code as comments above your variables, functions, classes, or methods and even files.
They help document your code and enable better IntelliSense, type checking, and documentation generation. See example below:
    ```js
    /**
    * Represents a simple bank account.
    * @constructor
    * @param {string} owner - The name of the account owner.
    * @param {number} balance - The initial balance of the account.
    */
    function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    /**
    * Deposits money into the account.
    * @param {number} amount - The amount to deposit.
    * @returns {number} The new balance.
    */
    this.deposit = function(amount) {
        this.balance += amount;
        return this.balance;
    };

    /**
    * Withdraws money from the account.
    * @param {number} amount - The amount to withdraw.
    * @returns {number} The new balance.
    * @throws {Error} If the withdrawal amount exceeds the balance.
    */
    this.withdraw = function(amount) {
        if (amount > this.balance) {
        throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        return this.balance;
    };
    }

    // Example usage:
    const myAccount = new BankAccount("Shaun", 100);
    myAccount.deposit(50);   // 150
    myAccount.withdraw(30);  // 120
    ```
## Why ESLint with JSDoc:
- **Purpose:** Enforces consistent JSDoc comments and validates them against the code.
- **Benefits:**
- Ensures consistency in your JSDoc comments.
- Validates parameter names, types, and overall alignment with your code.
- Provides warnings or errors for missing or incorrect JSDoc comments
## Why TypeScript with JSDoc:
- **Purpose:** Use TypeScript to provide type checking based on JSDoc annotations in `.js` files.
- **Benefits:**
- Provides powerful type-checking based on JSDoc annotations.
- Catches type-related errors early during development.
- Improves overall code quality without needing to fully migrate to TypeScript.

## Setup

### Prerequisites
- Node.js installed
- npm (Node Package Manager) installed

### Installation
1. **Clone the repository**:
   ```sh
   git clone git@github.com:ShaunF777/My-JavaScript_learning.git
   cd My-JavaScript_learning
   ```

2.  **Install all dependencies including JsDoc, ESlint & TypeScript**:
    ```sh
    npm install --save-dev jsdoc
    ```

3. **Update package.json in your project root with this script**:
    > 💥 Ive only added from where it sais "scripts", yours may look different. 
    "scripts": This section allows you to define custom commands that you can run using npm run <script-name>.
    "docs": This script runs jsdoc -r . to generate documentation recursively for all files in the project directory.
    ```json
    {
        "devDependencies": {
            "eslint": "^9.13.0",
            "eslint-plugin-jsdoc": "^50.4.3",
            "jsdoc": "^4.0.4",
            "typescript": "^5.6.3"
        },
        "scripts": {
            "docs": "jsdoc -r 01stPracticeFiles"
        }
    }
    ```

4. **Install ESLint and its jsdoc plugin**:
    ```sh
    npm install eslint --save-dev
    npm install eslint-plugin-jsdoc --save-dev
    ```

5. **Create or update .eslintrc.json in your project root**:
    > 🚀This configuration should enhance your workflow by ensuring your JSDoc comments are aligned, and your types are consistent. Remove the comments if copying this code.
    ```json
    {
    "plugins": ["jsdoc"],
    "extends": ["eslint:recommended", "plugin:jsdoc/recommended"],
    "rules": {
        "jsdoc/check-alignment": "error", // Enforce JSDoc comments alignment
        "jsdoc/check-param-names": "error", // Check that parameter names match those in the function declaration
        "jsdoc/check-tag-names": "error", // Ensure that JSDoc tags exist
        "jsdoc/check-types": "error", // Enforce using consistent types
        "jsdoc/require-jsdoc": ["error", { // Require JSDoc comments for certain nodes
        "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": true,
            "ClassDeclaration": true
        }
        }]
    }
    }
    ```

6. **Install  dependencies**:
    ```sh
    npm install --save-dev typescript
    npm install @types/node --save-dev
    ```

7. **Create or update tsconfig.json in your project root**:
    ```json
    {
        "compilerOptions": {
            "checkJs": true,
            "allowJs": true
        },
        "include": ["**/*.js"]
    }
    ```

8. **This is what my tsconfig.json looks like after im done**:
    > Remove the comments if copying this code.
    ```json
    {
      "compilerOptions": {
        // Enable type checking for JavaScript files
        "checkJs": true,
        // Allow JavaScript files to be compiled
        "allowJs": true,
        // Include type definitions from DefinitelyTyped (for better IntelliSense)
        "types": ["node"],
        // Set the target ECMAScript version
        "target": "es6",
        // Specify the module system
        "module": "commonjs",
        // Ensure that default and named imports work correctly
        "esModuleInterop": true,
        // Allow usage of async/await and other ESNext features
        // DOM library provides the "console" object and other browser APIs
        "lib": ["dom", "es2015", "esnext"]
      },
      // Include all JavaScript files in the project
      "include": ["**/*.js"]
    }
    ```

9. **Enable type checking in your JS files**:  
   Add `// @ts-check` at the top of each `.js` file you want TypeScript to check.

## Running your packages: 
> 👀 This will generate an out/ directory by default, containing your project’s documentation in HTML format. 
You can view this by opening the index.html file in a web browser.
- **JSDoc:** 
    ```sh
    npm run docs
    ```

- **ESLint:**
    ```sh
    npx eslint your-file.js
    ```

- **TypeScript:**
    ```sh
    npx tsc --noEmit
    ```

## Use Nodemon for automatic restart while scripting:   
1. **Install  dependencies**:
    ```sh
    npm install -g nodemon
    ```

2. **Now run your code with nodemon instead of node**:
    ```sh
    nodemon app.js
    ```

 
