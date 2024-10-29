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
Here are a few essential tags to incorporate:
    ```sh
    @param {number}: Type to be passed into function.
    @returns {string}: Type to be returned by function.
    @constructor: Marks a function as a constructor.
    @deprecated: Indicates that a method is deprecated.
    @throws or @exception: Documents an exception thrown by a function.
    @see: Provides a reference to another symbol in the documentation.
    @todo: Highlights tasks to be completed in the code.

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
   cd repo-name

2.  **Install JSDoc**:
    ```sh
    npm install --save-dev jsdoc

3. **Update package.json in your project root with this script**:
    NOTE: Ive only added from where it sais "script", yours may look different. 
    "scripts": This section allows you to define custom commands that you can run using npm run <script-name>.
    "docs": This script runs jsdoc -r . to generate documentation recursively for all files in the project directory.
    ```sh
    {
        "devDependencies": {
            "eslint": "^9.13.0",
            "eslint-plugin-jsdoc": "^50.4.3",
            "jsdoc": "^4.0.4",
            "typescript": "^5.6.3"
        },
        "scripts": {
            "docs": "jsdoc -r ."
        }
    }

4. **Install ESLint dependencies**:
    ```sh
    npm install eslint --save-dev
    npm install eslint-plugin-jsdoc --save-dev

5. **Create or update .eslintrc.json in your project root**:
    NOTE: This configuration should enhance your workflow by ensuring your JSDoc comments are aligned, and your types are consistent.
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

6. **Install  dependencies**:
    ```sh
    npm install --save-dev typescript

7. **Create or update tsconfig.json in your project root**:
    ```sh
    {
        "compilerOptions": {
            "checkJs": true,
            "allowJs": true
        },
        "include": ["**/*.js"]
    }

8. **Enable type checking**: Add // @ts-check at the top of your JavaScript files.

## Running your packages: 
Note: This will generate a out/ directory by default, containing your project’s documentation in HTML format. 
You can view this by opening the index.html file in a web browser.
- **JSDoc:** 
    ```sh
    npm run docs

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
 
