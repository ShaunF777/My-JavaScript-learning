<div align="center">

# Learning JavaScript the right way

<a name="top"></a>
<img src="./assets/rootsinwater.jfif">

<div align="left">

## Welcome to my learning repo!
Here I showcase my JavaScript learning projects, using different packages to increase productivity & documentation quality.

This project also demonstrates how to set up a JavaScript project with enhanced documentation and type checking using JSDoc, ESLint, and TypeScript.

Below you will find more instructions on getting these packages to work for you. This process was initiated after doinf some research and reading about it [here](https://www.pullrequest.com/blog/leveraging-jsdoc-for-better-code-documentation-in-javascript/#:~:text=JSDoc%20is%20a%20documentation%20syntax,into%20a%20detailed%20documentation%20website).

## ESLint with JSDoc:
- **Purpose:** Enforces consistent JSDoc comments and validates them against the code.
- **Benefits:**
- Ensures consistency in your JSDoc comments.
- Validates parameter names, types, and overall alignment with your code.
- Provides warnings or errors for missing or incorrect JSDoc comments
## TypeScript with JSDoc:
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
   cd repo-name

2. **Install eslint dependencies**:
    ```sh
    npm install eslint --save-dev
    npm install eslint-plugin-jsdoc --save-dev

3. **Create or update .eslintrc.json in your project root**:
    NOTE: This configuration should enhance your workflow by ensuring your JSDoc comments are aligned and your types are consistent.
    ```sh
    {
    "plugins": ["jsdoc"],
    "extends": ["eslint:recommended", "plugin:jsdoc/recommended"],
    "rules": {
        "jsdoc/check-alignment": "error",
        "jsdoc/check-param-names": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-types": "error",
        "jsdoc/require-jsdoc": ["error", {
        "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": true,
            "ClassDeclaration": true
        }
        }]
    }
    }

4. **Install  dependencies**:
    ```sh
    npm install --save-dev typescript

5. **Create or update tsconfig.json in your project root**:
    ```sh
    {
        "compilerOptions": {
            "checkJs": true,
            "allowJs": true
        },
        "include": ["**/*.js"]
    }

6. **Enable type checking**: Add // @ts-check at the top of your JavaScript files.

## Running your packages:
- **ESLint:**
    ```sh
    npx eslint your-file.js

- **TypeScript:**
    ```sh
    npx tsc --noEmit

## Use Nodemon automatic restart while scripting:   
1. **Install  dependencies**:
    ```sh
    npm install -g nodemon

2. **Now run your code with nodemon instead of node**:
    ```sh
    nodemon app.js

## Contributing
 Feel free to fork this repository and create a pull request with your enhancements.
 
