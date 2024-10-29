<div align="center">

# Learning JavaScript the right way

<a name="top"></a>
<img src="./assets/rootsinwater.jfif">

<div align="left">

## Introduction
This project demonstrates how to set up a JavaScript project with enhanced documentation and type checking using JSDoc, ESLint, and TypeScript.

## ESLint with JSDoc:
- **Purpose:** Enforces consistent JSDoc comments and validates them against the code.
- **Benefits:**
- Ensures consistency in your JSDoc comments.
- Validates parameter names, types, and overall alignment with your code.
- Provides warnings or errors for missing or incorrect JSDoc comments
## TypeScript with JSDoc:
- **Purpose:** Leverage TypeScript to provide type checking based on JSDoc annotations in `.js` files.
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

 ## Contributing
 Feel free to fork this repository and create a pull request with your enhancements.
 
