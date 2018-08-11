# **bamazon**

A command line application that works like an online storefront. Uses Node.js and mySql to allow a customer to choose products from a table and updates the table based on that selection.

## Installation

* In order to install and run the bamazon app please first fork/clone the repository. 

* In your terminal run `npm install` in order to install the appropriate packages listed in the package.json dependencies. 

## Demo

1. Run `node bamazon.js` 

2. This displays the table with the currenty product inventory and will display a question asking which item id you would like to purchase?

3. Then it will ask how many units of that product you would like to purchase?

4. If the amount you are requesting is more than the current inventory, it should show you a message saying there is insufficient quantity!

5. Lastly it updates the table with the new inventory after it has removed your quantity purchased. 

![bamazon Gif](https://github.com/andrewja01/bamazon/images/bamazonGIF.webm)

## Technologies 
  * *mySql*
  * *Node.js*
  * *inquirer NPM package*
  * *cli-table NPM package*
  * *mySql NPM package*
  
## Authors

Andrew Jasinski
