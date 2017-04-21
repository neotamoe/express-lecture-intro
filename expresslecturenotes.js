// node allows us to write server code
// node allows us to run javascript files from terminal
// express uses routes and so listening is done easier
// framework for node.js, an easier way to write in node, cleaner syntax
// expressjs.com
//

// brew is a package manager for macOS (we used it to install node)
// node has its own package manager called npm
// we will use npm in terminal to access the package manager
// make sure folder names do not have spaces or camelCase

// 1) when you first start node project, must be in your project folder and then run $ npm init --yes
// this turns the directory into a node project and creates a json package
// 2) then in terminal run $npm install express --save (still in your folder)
// this creates dependencies which says which version of express you're using AND adds the node_modules folder
// 3) make file called .gitignore and in it write node_modules/
// 4) eventually will also need to use $npm install body-parser --save

// THEN in server.js file, do:
// var express = require ('express');
//
// var app = express();
// could call app anything, but we'll always call it app
// this is what we use to call it and use it in our code

// localhost = your computer IP, instead of using actual IP # or using 127.0 0.1 you can use localhost and localhost:3000

// HTTP-->rest or restful concept, types of request that use these different kinds of GETs:
//        GET (read or get data from server)
//          gets can only be done in browser
//        POST (creates data on our server)
