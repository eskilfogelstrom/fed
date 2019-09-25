# Webpack - Tools to automate your development
This folder contains a boilerplate to a project containing tools for helping you automating:
* **Formatting** - Make your code look nice and easy to read
* **Minification/Uglifying** - Compress your code and make it ready for production
* **Autoprefixing** - Adding browser prefixes to support older browsers

## Requirements
* **Node.js** and **NPM** installed

## Setup
Node & NPM are programs that doesn't have a GUI meaning that they can only be run through the terminal.

### Using the terminal
The terminal is a text-based interface to your computer. Basically you can do anything you usually do within the terminal (+ a lot more).

The terminal is centered around running small commands from a specific location. Like running commands in a folder in your file browser. To navigate around in the terminal we have 3 common commands:
* `pwd` - Outputs where you currently are `/Users/eskilfogelstrom`
* `ls` - Lists all files and folders in the directory your currently in
* `cd <path to folder>` - Navigates to a folder
 
 `cd` takes an argument specifiying where you want to go `cd Desktop`. You can also chain folders together `cd Desktop/Projects`. In case you want to move up one level you use `cd ../` (which can also be chained `cd ../../../` to move up multiple levels.
 
### Installing dependencies
This project requires some additional dependencies to work. These are installed via NPM. To install them make sure you're in the right folder in the terminal (using above commands) and then run: `npm install`. This will create a new folder called `node_modules` with all the dependencies.

## Running
The project contains a `src` folder which is where you would add all of your code. The rest of the files you can ignore unless you want to fiddle around with the configuration of things.

Basically the project consists of three commands:
* `npm run format` - Formats all the files in the `src` folder to look nice
* `npm run build` - Minifies your CSS and JS and adds browser prefixes. This will then be put in the `dist/` folder.
* `npm run start` - Starts a local server for your website, with autoreload.
