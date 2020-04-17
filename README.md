#  **Burger Devour** #

[GitHub](https://github.com/charrmountain/burger)


## Table of Contents

- [Description](#description) 

- [Visual](#visual) 

- [Usage](#usage) 

- [Contributing](#contributing) 

- [Tests](#tests) 

- [Support](#support) 


## **Description**

-  Burger Devour! is a full-stack restaurant app that lets users input the names of burgers they'd like to eat, and devour them!

- ### **JavaScript pages:**
    - Config Files
       1. [connection.js](connnection.js) sets up the connection with the database
       2. [orm.js](orm.js) sets up all the files to send queries to the database
    - Controller Files
       1. [burger_controller.js](burger_controller.js) sets up all the router connections for the application
    - Models Files
       1. [burger.js](burger.js) renders all the queries from the orm page
    - Public Files
       1. [style.css](tyle.css) sets up the connection with the database

- ### **MySQL pages:**
     1. [schema.sql](schema.sql) the main schema for the database
     2. [seeds.sql](schema.sql) some seeds, if needed, for the database

- ### **CSS/Image pages:**
     - Public Files
       1. [style.css](style.css) sets up the connection with the database
       s2. [burger.jpg](burger.jpg) background image

- ### **Handlebar pages:**
     1. [main.handlebars](main.handlebars) sets up the the main html to run the application
     2. [index.handlebars](index.handlebars) body for the main html 
     3. [burger-block.handlebars](burger-block.handlebars) the main list display function for the burgers


## **Visuals**

 ![Gif](../burger/public/img/Burger.gif)

  - Example of the app 

 
## **Usage**

- Please run the following tests before beginning:
```
npm i --save mysql express express-handlebars
```

## **Support**
    
[<img src="https://avatars3.githubusercontent.com/u/60668617?v=4" alt="avatar" style="border-radius: 75px" width="75"/>](https://github.com/charrmountain)
- e-mail: charr.mt@gmail.com